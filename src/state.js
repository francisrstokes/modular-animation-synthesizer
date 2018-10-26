import {vAddAll} from 'vec-la-fp';

export const state = {
  mode: 'animate',
  substate: '',
  data: {},
  translate: [0, 0]
};

export const globalTranslate = (...vs) => vAddAll([...vs, state.translate]);

let aniFn = () => {};

export const getAnimationFn = () => aniFn;
export const setAnimationFn = fn => aniFn = fn;