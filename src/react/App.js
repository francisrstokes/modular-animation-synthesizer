import React, {useState} from 'react';
import styled from 'styled-components';

import {w, h} from '../shared/constants';
import {state, setAnimationFn} from '../shared/state';

import {Title} from './common';
import { EditMode } from './EditMode';
import { DeleteMode } from './DeleteMode';
import { RawMode } from './RawMode';

const animationState = state;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  padding: 20px;

`;

const PanelToggle = styled.div`
  display: flex;
  min-width: 20px;
  background-color: #ccc;
  cursor: pointer;
`;

const SidePanel = styled.div`
  display:flex;
  flex-direction: row;
  position: absolute;
  height: 100%;
  background-color: #efefef;

  transition: 1s ease;
  overflow: hidden;

  &.closed {
    ${MainPanel} {
      display:none;
    }
  }
`;



const toggleOpen = (appState, setAppState, ctx, mc) => {
  const nextState = (appState === 'open') ? 'closed' : 'open';
  setAppState(nextState);
  animationState.mode = (nextState === 'open') ? 'edit' : 'animate';
  if (animationState.mode === 'animate') {
    setAnimationFn(generateAnimationFn(mc));
    ctx.clearRect(0,0,w,h);
  }
};

const applyMode = (nextMode, setterFn, subState) => {
  setterFn(nextMode);
  animationState.substate = subState;
}

export const App = ({ctx, mc}) => {
  const [mode, setMode] = useState('edit');
  const [appState, setAppState] = useState('closed');

  return <SidePanel className={appState}>
    <MainPanel>
      <Title>Edit Animation Graph</Title>
      {mode === 'edit'
        ? <EditMode
          enterDeleteMode={() => applyMode('delete', setMode, 'delete')}
          enterRawMode={() => applyMode('raw', setMode, 'raw')}
          ctx={ctx}
        />

        : mode === 'delete'
            ? <DeleteMode exitDeleteMode={() => applyMode('edit', setMode, '')} />
            : <RawMode exitRawMode={() => applyMode('edit', setMode, '')} />
      }
    </MainPanel>
    <PanelToggle
      onClick={() => toggleOpen(appState, setAppState, ctx, mc)}
    />
  </SidePanel>;
}
