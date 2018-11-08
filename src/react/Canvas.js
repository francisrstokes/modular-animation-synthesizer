import React from 'react';
import { w, h, textSize } from '../shared/constants';
import microcan from 'microcan-fp';
import { connectSelectorsAndActions } from './util';

import {selectors as editorModeSelectors} from './reducers/editor-mode';
import {selectors as rackSelectors} from './reducers/rack';
import {selectors as globalOffsetSelectors} from './reducers/global-offset';
import {selectors as rawValueSelectors} from './reducers/raw-value';
import {selectors as dragSelectors} from './reducers/drag-data';
import {selectors as connectingSelectors} from './reducers/connecting-data';
import {selectors as panSelectors} from './reducers/pan-data';
import * as rackActions from './actions/rack';
import * as dragActions from './actions/drag-data';
import * as connectingActions from './actions/connecting-data';
import * as editorModeActions from './actions/editor-mode';
import * as panActions from './actions/pan-data';
import * as globalOffsetActions from './actions/global-offset';

import { incTime } from '../shared/global';
import { drawRack } from '../rack/draw-rack';

import {onMouseDown, onMouseUp, onMouseMove} from '../events';

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

  componentDidMount() {
    this.ctx = this.ref.current.getContext('2d');
    this.mc = microcan(this.ctx, [w, h]);

    this.props.setCtx(this.ctx);
    this.props.setMc(this.mc);

    this.ctx.font = `${textSize}px Arial`;

    const drawCycle = () => {
      if (this.props.currentMode === 'animate') {
        try {
          this.props.animationFn();
        } catch (ex) {
          // Do something
        }
        incTime();
      } else {
        this.mc.background([0,0,0,1]);
        this.mc.strokeWeight(1);
        drawRack(this.props.rack, this.mc, this.ctx, this.props.globalTranslate);
      }
      requestAnimationFrame(drawCycle);
    }
    drawCycle();
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