import { isNumber, isNumberArray, isNumberArrayArray } from '../../util/types';

export const Sqrt = {
  name: 'Sqrt',
  tag: 'Math',
  inputs: {
		a: 'Number'
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ a }) => {
    let out;

    if (isNumber(a)) {
      out = Math.sqrt(a);
    } else if (isNumberArray) {
      out = a.map(a => Math.sqrt(a));
    } else if (isNumberArrayArray) {
      out = a.map(a => a.map(a => Math.sqrt(a)));
    }

    return {m: out};
  }
};
