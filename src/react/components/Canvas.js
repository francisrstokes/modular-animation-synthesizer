import React from 'react';
import { w, h, textSize } from '../../constants';
import microcan from 'microcan-fp';
import { connectSelectorsAndActions } from '../util';

import {selectors as editorModeSelectors} from '../reducers/editor-mode';
import {selectors as rackSelectors} from '../reducers/rack';
import {selectors as globalOffsetSelectors} from '../reducers/global-offset';
import {selectors as rawValueSelectors} from '../reducers/raw-value';
import {selectors as dragSelectors} from '../reducers/drag-data';
import {selectors as connectingSelectors} from '../reducers/connecting-data';
import {selectors as panSelectors} from '../reducers/pan-data';
import * as rackActions from '../actions/rack';
import * as dragActions from '../actions/drag-data';
import * as connectingActions from '../actions/connecting-data';
import * as editorModeActions from '../actions/editor-mode';
import * as panActions from '../actions/pan-data';
import * as globalOffsetActions from '../actions/global-offset';

import { updateTime } from '../../time';
import { drawRack } from '../../rack/draw-rack';

import {onMouseDown, onMouseUp, onMouseMove} from '../../events';
import { computeModuleDefDrawingValues } from '../../rack/compute-moduledef-drawing-values';

const connecter = connectSelectorsAndActions(
  {
    ...editorModeSelectors,
    ...rackSelectors,
    ...globalOffsetSelectors,
    ...rawValueSelectors,
    ...dragSelectors,
    ...connectingSelectors,
    ...panSelectors
  },
  {
    ...rackActions,
    ...dragActions,
    ...editorModeActions,
    ...connectingActions,
    ...panActions,
    ...globalOffsetActions
  }
);

class UnconnectedCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  shouldCompomentUpdate() {
    return false;
  }

  setInitialDrawingValuesForModules() {
    this.ctx.font = `${textSize}px Arial`;
    this.props.rack.forEach(md => {
      const dv = {
        ...computeModuleDefDrawingValues(md, this.ctx),
        p: md.dv.p
      }
      this.props.updateDrawingValues(md.name, dv);
    });
  }

  componentDidMount() {
    this.ctx = this.ref.current.getContext('2d');
    this.mc = microcan(this.ctx, [w, h]);

    this.props.setCtx(this.ctx);
    this.props.setMc(this.mc);

    this.setInitialDrawingValuesForModules();

    const drawCycle = () => {
      if (this.props.currentMode === 'animate') {
        try {
          this.props.animationFn();
        } catch (ex) {
          debugger;
          // Do something
        }
        updateTime();
      } else {
        this.mc.background([0,0,0,1]);
        this.mc.strokeWeight(1);
        drawRack(this.props.rack, this.mc, this.ctx, this.props.globalTranslate);
      }
      requestAnimationFrame(drawCycle);
    }

    // Wait until the drawing values have been set in redux store
    setTimeout(drawCycle, 0);
  }

  render() {
    return <canvas
      ref={this.ref}
      id="main-canvas"
      style={{position: 'absolute'}}
      onMouseDown={e => onMouseDown(this.props)(e)}
      onMouseMove={e => onMouseMove(this.props)(e)}
      onMouseUp={e => onMouseUp(this.props)(e)}
    />
  }
}

export const Canvas = connecter(UnconnectedCanvas);