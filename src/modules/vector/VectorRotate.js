import {zip} from 'ramda';
import {vRotatePointAround} from 'vec-la-fp';
import {isPolygon, isNumberArray, isVector, isNumber} from '../../util/types';

export const VectorRotate = {
  name: 'VectorRotate',
  tag: 'Vector',
  inputs: {
    v: 'Vector',
    cp: 'Vector',
    a: 'Number',
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, cp, a }) => {
    const cv = cp ? cp : [0 ,0];
    let out;

    if (isVector(v)) {
      if (isNumberArray(a)) {
        out = a.map(a => vRotatePointAround(a, cv, v));
      } else if (isNumber(a)) {
        out = vRotatePointAround(a, cv, v);
      }
    } else if (isPolygon(v)) {
      if (isNumberArray(a)) {
        out = zip(v, a).map(([v, a]) => vRotatePointAround(a, cv, v));
      } else if (isNumber(a)) {
        out = v.map(v => vRotatePointAround(a, cv, v));
      }
    }

    return {
      output: out
    };
  }
};
