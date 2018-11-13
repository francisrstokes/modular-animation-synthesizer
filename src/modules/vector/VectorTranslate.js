import {vAdd} from 'vec-la-fp';
import {isVector, isPolygon, isPolygonArray} from '../../util/types';
import {zip} from 'ramda';

export const VectorTranslate = {
  name: 'VectorTranslate',
  tag: 'Vector',
  inputs: {
    v: 'Vector',
    tv: 'Vector',
    multiply: 'Number'
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, tv, multiply }) => {
    let out;

    if (isVector(tv)) {
      if (isVector(v)) {
        // 1. Simply the point (v) to the translation vector (tv)
        out = vAdd(v, tv);
      } else if (isPolygon(v)) {
        // 2. Translate each polygon point by translation vector
        out = v.map(vAdd(tv));
      } else if (isPolygonArray(v)) {
        // 3. Translate each polygon by the translation vector
        out = v.map(poly => poly.map(vAdd(tv)));
      }
    } else if (isPolygon(tv)) {
      if (isVector(v)) {
        // 4. Translate the point by each translation vector
        out = tv.map(vAdd(v));
      } else if (isPolygon(v)) {
        // 5. Translate each point by each translation vector
        if (multiply) {
          out = tv.map(tv1 => v.map(vAdd(tv1)));
        } else {
          out = zip(v, tv).map(([v, tv]) => vAdd(v, tv));
        }
      } else if (isPolygonArray(v)) {
        // 6. Translate each polygon by each translation vector
        out = zip(tv, v).map(([v1, poly]) => poly.map(vAdd(v1)));
      }
    } else if (isPolygonArray(tv)) {
      if (isVector(v)) {
        // 7. Translate each polygon of the translation vector by the point (inverse of 3)
        out = tv.map(poly => poly.map(vAdd(v)));
      } else if (isPolygon(v)) {
        // Translate each polygon in the translation vector by each point in the polygon (inverse of 6)
        out = zip(tv, v).map(([poly, v1]) => poly.map(vAdd(v1)));
      } else if (isPolygonArray(v)) {
        // Translate each point in each polygon by each point in each polygon in the translation vector
        out = zip(tv, v).map(([poly1, poly2]) => zip(poly1, poly2).map(([v1, v2]) => vAdd(v1, v2)));
      }
    }

    return {
      output: out
    };
  }
};
