import React, {useState} from 'react';
import styled from 'styled-components';

import {w, h} from '../shared/constants';
import {state, setAnimationFn} from '../shared/state';

import {Title} from './common';
import { EditMode } from './EditMode';
import { DeleteMode } from './DeleteMode';
import { RawMode } from './RawMode';

const animationState = state;

const SidePanel = styled.div`
  display:flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  min-width: 250px;
  background-color: #efefef;
  padding: 0 20px;

  transition: 1s ease;
  overflow: hidden;

  &.closed {
    height: 30px;
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
  const [selectedModule, setSelectedModule] = useState('Time');

  return <SidePanel className={appState}>
      <Title onClick={() => toggleOpen(appState, setAppState, ctx, mc)}>Settings</Title>

      {mode === 'edit'
        ? <EditMode
          selectedModule={selectedModule}
          setSelectedModule={setSelectedModule}
          enterDeleteMode={() => applyMode('delete', setMode, 'delete')}
          enterRawMode={() => applyMode('raw', setMode, 'raw')}
          ctx={ctx}
        />

        : mode === 'delete'
            ? <DeleteMode exitDeleteMode={() => applyMode('edit', setMode, '')} />
            : <RawMode exitRawMode={() => applyMode('edit', setMode, '')} />
      }
    </SidePanel>;
}
