
import {mousedown as deleteMousedown} from './delete';
import {mousedown as rawValueMousedown} from './raw-value';
import {mousedown as dragMousedown, mousemove as dragMousemove} from './drag';
import {start as connectStart, end as connectEnd} from './connect';
import {start as panStart, move as panMove} from './pan';
import {start as selectionStart, move as selectionMove, end as selectionEnd} from './selection';

export const onMouseDown = (props) => (e) => {
  const clickPosition = [e.clientX, e.clientY];

  if (selectionStart(props, clickPosition)) return;

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

  selectionMove(props, clickPosition);
  dragMousemove(props, clickPosition);
  panMove(props, clickPosition);
};

export const onMouseUp = (props) => () => {
  const {isInEditMode, currentSubstate, gotoEditMode} = props;
  if (isInEditMode) {
    if (['dragging', 'pan'].includes(currentSubstate)) {
      gotoEditMode();
    }
    selectionEnd(props);
  }
};
