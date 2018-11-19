
import {mousedown as deleteMousedown} from './delete';
import {mousedown as rawValueMousedown} from './raw-value';
import {mousedown as dragMousedown, mousemove as dragMousemove} from './drag';
import {start as connectStart, end as connectEnd} from './connect';
import {start as panStart, move as panMove} from './pan';

export const onMouseDown = (props) => (e) => {
  const clickPosition = [e.clientX, e.clientY];

  if (deleteMousedown(props, clickPosition)) return;
  if (rawValueMousedown(props, clickPosition)) return;

  if (props.isInPureEditMode) {
    if (dragMousedown(props, clickPosition)) return;
    if (connectStart(props, clickPosition)) {
      return;
    }

    panStart(props, clickPosition);
    return;
  }

  if (connectEnd(props, clickPosition)) return;
};

export const onMouseMove = (props) => (e) => {
  const clickPosition = [e.clientX, e.clientY];
  dragMousemove(props, clickPosition);
  panMove(props, clickPosition);
};

export const onMouseUp = ({isInEditMode, currentSubstate, gotoEditMode}) => () => {
  if (isInEditMode) {
    if (['dragging', 'pan'].includes(currentSubstate)) {
      gotoEditMode();
    }
  }
};
