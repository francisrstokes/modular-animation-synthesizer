import {mTranslate} from 'vec-la-fp';
import { isFunction, isFunctionArray, isVector, isPolygon, isPolygonArray } from '../../util/types';
import {compose, zip} from 'ramda';

export const MatrixTranslate = {
  name: 'MatrixTranslate',
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
        out = mTranslate(v);
      } else if (isPolygon(v)) {
        out = v.map(v => mTranslate(v));
      } else if (isPolygonArray(v)) {
        out = v.map(poly => poly.map(v => mTranslate(v)));
      }
    } else if (isFunction(m)) {
      if (isVector(v)) {
        out = compose(mTranslate(v), m);
      } else if (isPolygon(v)) {
        out = v.map(v => compose(mTranslate(v), m));
      } else if (isPolygonArray(v)) {
        out = v.map(poly => poly.map(v => compose(mTranslate(v), m)));
      }
    } else if (isFunctionArray(m)) {
      if (isVector(v)) {
        out = m.map(m => compose(mTranslate(v), m));
      } else if (isPolygon(v)) {
        out = zip(m, v).map(([m, v]) => compose(mTranslate(v), m));
      } else if (isPolygonArray(v)) {
        out = zip(m, v).map(([m, poly]) => poly.map(v => compose(mTranslate(v), m)));
      }
    }

    return {
      output: out
    };
  }
};
