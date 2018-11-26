import React, {useState} from 'react';
import {useStateFunction} from '../../hooks/useStateFunction';
import {compile} from '../../../compile-animation';
import {componentSwitch} from '../../util';
import {MainPanel, SidePanel, PanelToggle} from '../SidePanel';
import {w, h, C} from '../../../constants';
import {Title} from '../common';
import { EditMode } from '../EditMode';
import { DeleteMode } from '../DeleteMode';
import { RawMode } from '../RawMode';
import {ConnectionMode} from '../ConnectionMode';
import { Canvas } from '../Canvas';
import { resetTime } from '../../../time';
import {toggleOpen} from './toggle-open';
import { vSub } from 'vec-la-fp';

export default props => {
  const [animationFn, setAnimationFn] = useStateFunction(() => {});
  const [ctx, setCtx] = useState(null);
  const [mc, setMc] = useState(null);

  const {
    gotoEditMode,
    setEditorMode,
    rack,
    resetTime: shouldResetTime,
    setGlobalOffset
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

        {componentSwitch([
          [props.isInDeleteMode, () => <DeleteMode exitDeleteMode={gotoEditMode} />],
          [props.isInRawMode, () => <RawMode exitRawMode={gotoEditMode} />],
          [props.isInConnectingInputMode || props.isInConnectingOutputMode, () => <ConnectionMode cancel={gotoEditMode} connectingFromInput={props.isInConnectingInputMode} />],
          [props.isInEditMode, () => <EditMode ctx={ctx} />]
        ])}

      </MainPanel>
      <PanelToggle
        onClick={() => {
          const nextMode = toggleOpen(props.currentMode, setEditorMode);

          if (nextMode === 'animate') {
            compile(rack, mc).map(fn => {
              if (shouldResetTime) resetTime();
              setAnimationFn(fn);
              ctx.clearRect(0,0,w,h);
            }).orElse(([msg, md]) => {
              alert(msg);
              toggleOpen(props.currentMode, setEditorMode);
              gotoEditMode();
              const centerModuleOffset = vSub(C, md.dv.p);
              setGlobalOffset(centerModuleOffset);
            });
          }
        }}
      >{props.isInAnimateMode ? '>' : '<'}</PanelToggle>
    </SidePanel>
  </React.Fragment>
};
