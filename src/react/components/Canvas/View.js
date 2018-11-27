import React from 'react';
import { w, h, textSize } from '../../../constants';
import microcan from 'microcan-fp';
import { updateTime } from '../../../time';
import { drawRack } from '../../../rack/draw-rack';
import {onMouseDown, onMouseUp, onMouseMove} from '../../../events';
import { computeModuleDefDrawingValues } from '../../../rack/compute-moduledef-drawing-values';

const getSelectionStruct = (props) => ({
  isInSelectionMode: props.isInSelectionMode,

  selectedModules: props.selectedModules,
  numSelectedModules: props.numSelectedModules,
  isInSelectionDrag: props.isInSelectionDrag,
  isSelecting: props.isSelecting,
  selectionDragOffset: props.selectionDragOffset,
  selectionAreaStart: props.selectionAreaStart,
  selectionAreaEnd: props.selectionAreaEnd,
});

class Canvas extends React.Component {
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
      const {rack, globalTranslate} = this.props;
      if (this.props.currentMode === 'animate') {
        try {
          this.props.animationFn();
        } catch (ex) {
          debugger;
          // Do something
        }
        updateTime();
      } else {
        const selectionData = getSelectionStruct(this.props);
        drawRack(rack, this.mc, this.ctx, globalTranslate, selectionData);
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
};

export default Canvas;