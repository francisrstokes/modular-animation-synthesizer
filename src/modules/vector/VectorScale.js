import {curry, zip} from 'ramda';
import { isVector, isPolygon, isPolygonArray } from '../../util/types';

const vMultiply = curry(([x, y], [x2, y2]) => [x*x2, y*y2]);

export const VectorScale = {
  name: 'VectorScale',
  inputs: {
		v: 'Vector',
    scale: 'Number'
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, scale }) => {
    let out;
    if (isVector(v)) {
      if (isVector(scale)) {
        out = vMultiply(v, scale);
      } else if (isPolygon(scale)) {
        out = scale.map(sv => vMultiply(v, sv));
      } else if (isPolygonArray(scale)) {
        out = scale.map(scalePoly => scalePoly.map(sv => vMultiply(v, scrollBv)));
      }
    } else if (isPolygon(v)) {
      if (isVector(scale)) {
        out = v.map(vMultiply(scale));
      } else if (isPolygon(scale)) {
        out = zip(v, scale).map(([v1, sv]) => vMultiply(v1, sv));
      } else if (isPolygonArray(scale)) {
        out = scale.map(scalePoly => zip(v, scalePoly).map(([v1, sv]) => vMultiply(v1, sv)));
      }
    } else if (isPolygonArray(v)) {
      if (isVector(scale)) {
        out = v.map(poly => poly.map(v1 => vMultiply(v1, scale)));
      } else if (isPolygon(scale)) {
        out = v.map(poly => zip(poly, scale).map(([v1, sv]) => vMultiply(v1, sv)));
      } else if (isPolygonArray(scale)) {
        out = zip(v, scale).map(([poly, scalePoly]) => zip(poly, scalePoly).map(([v1, sv]) => vMultiply(v1, sv)));
      }
    }

    return {
      output: out
    };
  }
};
