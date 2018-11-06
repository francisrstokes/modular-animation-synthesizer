import { isNumber, isNumberArray, isNumberArrayArray } from '../../util/types';

const fns = ['round', 'floor', 'ceil'];

export const Round = {
  name: 'Round',
  tag: 'Math',
  inputs: {
		a: 'Number'
	},
	outputs: {
    round: 'Number',
    floor: 'Number',
    ceil: 'Number'
  },
  fn: ({ a }) => {
    const out = fns.reduce((a, c) => ({...a, [c]: 0}), {});

    if (isNumber(a)) {
      fns.forEach(fn => out[fn] = Math[fn](a));
    } else if (isNumberArray(a)) {
      fns.forEach(fn => out[fn] = a.map(a => Math[fn](a)));
    } else if (isNumberArrayArray(a)) {
      fns.forEach(fn => out[fn] = a.map(a => a.map(a => Math[fn](a))));
    }

    return out;
  }
};
