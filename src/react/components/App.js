import React, {useState} from 'react';
import {useStateFunction} from '../hooks/useStateFunction';
import {generateAnimationFn} from '../../generate-animation-function';
import {connectSelectorsAndActions} from '../util';
import {MainPanel, SidePanel, PanelToggle} from './SidePanel';

import * as editorModeActions from '../actions/editor-mode';
import * as rackActions from '../actions/rack';
import {selectors as editorModeSelectors} from '../reducers/editor-mode';
import {selectors as rackSelectors} from '../reducers/rack';

import {w, h} from '../../constants';

import {Title} from './common';
import { EditMode } from './EditMode';
import { DeleteMode } from './DeleteMode';
import { RawMode } from './RawMode';
import { Canvas } from './Canvas';


const toggleOpen = (currentMode, setEditorMode, setAnimationFn, rack, ctx, mc) => {
  const nextMode = currentMode === 'animate' ? 'edit' : 'animate';
  setEditorMode(nextMode);
  if (nextMode === 'animate') {
    setAnimationFn(generateAnimationFn(rack, mc));
    ctx.clearRect(0,0,w,h);
  }
};

const connecter = connectSelectorsAndActions(
  {...editorModeSelectors, ...rackSelectors},
  {...editorModeActions, ...rackActions}
);

export const App = connecter(props => {
  const [animationFn, setAnimationFn] = useStateFunction(() => {});
  const [ctx, setCtx] = useState(null);
  const [mc, setMc] = useState(null);

  const {
    isInEditMode,
    isInDeleteMode,
    isInRawMode,
    isInAnimateMode,
    currentMode,
    gotoDeleteMode,
    gotoRawMode,
    gotoEditMode,
    addModule,
    setEditorMode,
    rack
  } = props;

  return <React.Fragment>
    <Canvas
      animationFn={animationFn}
      setCtx={setCtx}
      setMc={setMc}
    />

    <SidePanel className={isInAnimateMode ? 'closed' : ''}>
      <MainPanel>
        <Title>Edit Animation Graph</Title>
        {isInDeleteMode
          ? <DeleteMode exitDeleteMode={gotoEditMode} />
          : isInRawMode
            ? <RawMode exitRawMode={gotoEditMode} />
            : isInEditMode
              ? <EditMode
                  ctx={ctx}
                  enterDeleteMode={gotoDeleteMode}
                  enterRawMode={gotoRawMode}
                  addModule={addModule}
                />
              : null
        }
      </MainPanel>
      <PanelToggle
        onClick={() => toggleOpen(currentMode, setEditorMode, setAnimationFn, rack, ctx, mc)}
      >{isInAnimateMode ? '>' : '<'}</PanelToggle>
    </SidePanel>
  </React.Fragment>
});
