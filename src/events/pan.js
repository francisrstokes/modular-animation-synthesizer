import { state } from '../shared/state';
import { vSub, vAdd } from 'vec-la-fp';

export const start = clickPosition => {
  state.substate = 'panning';
  state.data.lastPos = clickPosition;
};

export const move = clickPosition => {
  if (state.mode === 'edit' && state.substate === 'panning') {
    const diff = vSub(clickPosition, state.data.lastPos);
    state.translate = vAdd(state.translate, diff);
    state.data.lastPos = clickPosition;
  }
}