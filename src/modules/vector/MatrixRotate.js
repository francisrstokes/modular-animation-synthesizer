import {mRotate} from 'vec-la-fp';
import { isNumber, isFunction, isFunctionArray, isNumberArray } from '../../util/types';
import {compose} from 'ramda';

export const MatrixRotate = {
  name: 'MatrixRotate',
  tag: 'Vector',
  inputs: {
    m: {type: 'Matrix', required: false},
    a: 'Number',
	},
	outputs: {
		output: 'Matrix'
  },
  fn: ({ m, a }) => {
    let out;

    if (!m) {
      if (isNumber(a)) {
        out = mRotate(a);
      } else if (isNumberArray(a)) {
        out = a.map(a => mRotate(a));
      }
    } else if (isFunction(m)) {
      if (isNumber(a)) {
        out = compose(mRotate(a), m);
      } else if (isNumberArray(a)) {
        out = a.map(a => compose(mRotate(a), m));
      }
    } else if (isFunctionArray(m)) {
      if (isNumber(a)) {
        out = m.map(m => compose(mRotate(a), m));
      } else if (isNumberArray(a)) {
        out = a.map(a => m.map(m => compose(mRotate(a), m)));
      }
    }

    return {
      output: out
    };
  }
};
