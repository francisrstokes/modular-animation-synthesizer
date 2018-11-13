import React, {useState} from 'react';
import {useStateFunction} from '../hooks/useStateFunction';
import {generateAnimationFn} from '../../generate-animation-function';
import {connectSelectorsAndActions} from '../util';
import {MainPanel, SidePanel, PanelToggle} from './SidePanel';

import * as editorModeActions from '../actions/editor-mode';
import * as rackActions from '../actions/rack';
import {selectors as editorModeSelectors} from '../reducers/editor-mode';
import {selectors as rackSelectors} from '../reducers/rack';
import {selectors as resetTimeSelectors} from '../reducers/reset-time';

import {w, h} from '../../constants';

import {Title} from './common';
import { EditMode } from './EditMode';
import { DeleteMode } from './DeleteMode';
import { RawMode } from './RawMode';
import { Canvas } from './Canvas';
import { resetTime } from '../../time';


const toggleOpen = (currentMode, setEditorMode) => {
  const nextMode = currentMode === 'animate' ? 'edit' : 'animate';
  setEditorMode(nextMode);
  return nextMode;
};

const connecter = connectSelectorsAndActions(
  {...editorModeSelectors, ...rackSelectors, ...resetTimeSelectors},
  {...editorModeActions, ...rackActions}
);

export const App = connecter(props => {
  const [animationFn, setAnimationFn] = useStateFunction(() => {});
  const [ctx, setCtx] = useState(null);
  const [mc, setMc] = useState(null);

  const {
    gotoEditMode,
    setEditorMode,
    rack,
    resetTime: shouldResetTime
  } = props;

  return <React.Fragment>
    <Canvas
      animationFn={animationFn}
      setCtx={setCtx}
      setMc={setMc}
    />

    <SidePanel className={props.isInAnimateMode ? 'closed' : ''}>
      <MainPanel>
        <Title>Edit Animation Graph</Title>
        {props.isInDeleteMode
          ? <DeleteMode exitDeleteMode={gotoEditMode} />
          : props.isInRawMode
            ? <RawMode exitRawMode={gotoEditMode} />
            : props.isInEditMode
              ? <EditMode ctx={ctx} />
              : null
        }
      </MainPanel>
      <PanelToggle
        onClick={() => {
          const nextMode = toggleOpen(props.currentMode, setEditorMode);

          if (nextMode === 'animate') {
            if (shouldResetTime) resetTime();
            setAnimationFn(generateAnimationFn(rack, mc));
            ctx.clearRect(0,0,w,h);
          }
        }}
      >{props.isInAnimateMode ? '>' : '<'}</PanelToggle>
    </SidePanel>
  </React.Fragment>
});
