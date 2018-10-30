import {zip} from 'ramda';
import { isNumber, isNumberArray } from '../../util/types';

export const Vectorize = {
  name: 'Vectorize',
  inputs: {
		x: 'Number',
    y: 'Number'
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ x, y }) => {
    let out;

    if (isNumber(x)) {
      if (isNumber(y)) {
        out = [x, y];
      } else if (isNumberArray(y)) {
        out = y.map(yv => [x, yv]);
      }
    } else if (isNumberArray(x)) {
      if (isNumber(y)) {
        out = x.map(xv => [xv, y]);
      } else if (isNumberArray(y)) {
        out = zip(x, y).map(([xv, yv]) => [xv, yv]);
      }
    }

    return {
      output: out
    };
  }
};
