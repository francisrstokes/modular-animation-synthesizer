import {mScale} from 'vec-la-fp';
import { isFunction, isFunctionArray, isVector, isPolygon, isPolygonArray } from '../../util/types';
import {compose, zip} from 'ramda';

export const MatrixScale = {
  name: 'MatrixScale',
  tag: 'Vector',
  inputs: {
    m: {type: 'Matrix', required: false},
    v: {type: 'Vector', required: true},
	},
	outputs: {
		output: 'Matrix'
  },
  fn: ({ m, v }) => {
    let out;

    if (!m) {
      if (isVector(v)) {
        out = mScale(v);
      } else if (isPolygon(v)) {
        out = v.map(v => mScale(v));
      } else if (isPolygonArray(v)) {
        out = v.map(poly => poly.map(v => mScale(v)));
      }
    } else if (isFunction(m)) {
      if (isVector(v)) {
        out = compose(mScale(v), m);
      } else if (isPolygon(v)) {
        out = v.map(v => compose(mScale(v), m));
      } else if (isPolygonArray(v)) {
        out = v.map(poly => poly.map(v => compose(mScale(v), m)));
      }
    } else if (isFunctionArray(m)) {
      if (isVector(v)) {
        out = m.map(m => compose(mScale(v), m));
      } else if (isPolygon(v)) {
        out = zip(m, v).map(([m, v]) => compose(mScale(v), m));
      } else if (isPolygonArray(v)) {
        out = zip(m, v).map(([m, poly]) => poly.map(v => compose(mScale(v), m)));
      }
    }

    return {
      output: out
    };
  }
};
