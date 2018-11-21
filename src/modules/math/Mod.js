import {zip} from 'ramda';
import { isNumber, isNumberArray } from '../../util/types';

export const Mod = {
  name: 'Mod',
  tag: 'Math',
  inputs: {
		a: {type: 'Number', required: true},
    b: {type: 'Number', required: true}
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ a, b }) => {
    let out;

    if (isNumber(a)) {
      if (isNumber(b)) {
        out = a % b;
      } else if (isNumberArray(b)) {
        out = b.map(bv => a % bv);
      }
    } else if (isNumberArray(a)) {
      if (isNumber(b)) {
        out = a.map(av => av % b);
      } else if (isNumberArray(b)) {
        out = zip(a, b).map(([av, bv]) => av % bv);
      }
    }

    return {m: out};
  }
};
