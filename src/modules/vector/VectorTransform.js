import {vTransform, mId} from 'vec-la-fp';
import {isVector, isPolygon, isPolygonArray, isFunction, isFunctionArray} from '../../util/types';
import {zip} from 'ramda';

export const VectorTransform = {
  name: 'VectorTransform',
  tag: 'Vector',
  inputs: {
    v: {type: 'Vector', required: true},
    m: {type: 'Matrix', required: false}
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, m }) => {
    let out;

    if (isFunction(m)) {
      const matrix = m(mId);

      if (isVector(v)) {
        out = vTransform(matrix, v);
      } else if (isPolygon) {
        out = v.map(vTransform(matrix));
      } else if (isPolygonArray(v)) {
        out = v.map(poly => poly.map(vTransform(matrix)));
      }
    } else if (isFunctionArray(m)) {
      const matrix = m.map(m => m(mId));

      if (isVector(v)) {
        out = matrix.map(m => vTransform(m, v));
      } else if (isPolygon(v)) {
        out = zip(matrix, v).map(([m, v]) => vTransform(m, v));
      } else if (isPolygonArray(v)) {
        out = zip(matrix, v).map(([m, poly]) => poly.map(vTransform(m)));
      }
    }

    return {
      output: out
    };
  }
};
