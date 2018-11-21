import {transpose, zip} from 'ramda';
import {isNumberArray, isArrayArray} from '../../util/types';

const resolveColor = (R, G, B, A) => {
  const rIsArray = isNumberArray(R);
  const gIsArray = isNumberArray(G);
  const bIsArray = isNumberArray(B);
  const aIsArray = isNumberArray(A);

  if (rIsArray) {
    if (gIsArray) {
      if (bIsArray) {
        if (aIsArray) {
          return transpose([R.map(x => Math.round(x * 255)), G.map(x => Math.round(x * 255)), B.map(x => Math.round(x * 255)), A]);
        } else {
          return transpose([R, G, B]).map(([r, g, b]) => [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), A]);
        }
      } else {
        if (aIsArray) {
          return transpose([R, G, A]).map(([r, g, a]) => [Math.round(r * 255), Math.round(g * 255), Math.round(B * 255), a]);
        } else {
          return zip(R, G).map(([r, g]) => [Math.round(r * 255), Math.round(g * 255), Math.round(B * 255), A]);
        }
      }
    } else {
      if (bIsArray) {
        if (aIsArray) {
          return transpose([R, B, A]).map(([r, b, a]) => [Math.round(r * 255), Math.round(G * 255), Math.round(b * 255), a]);
        } else {
          return zip(R, B).map(([r, b]) => [Math.round(r * 255), Math.round(G * 255), Math.round(b * 255), A]);
        }
      } else {
        if (aIsArray) {
          return zip(R, A).map(([r, a]) => [Math.round(r * 255), Math.round(G * 255), Math.round(B * 255), a]);
        } else {
          return R.map(r => [Math.round(r * 255), Math.round(G * 255), Math.round(B * 255), A]);
        }
      }
    }
  } else {
    if (gIsArray) {
      if (bIsArray) {
        if (aIsArray) {
          return transpose([G, B, A]).map(([g, b, a]) => [Math.round(R * 255), Math.round(g * 255), Math.round(b * 255), a]);
        } else {
          return zip(G, B).map(([g, b]) => [Math.round(R * 255), Math.round(g * 255), Math.round(b * 255), A]);
        }
      } else {
        if (aIsArray) {
          return zip(G, A).map(([g, a]) => [Math.round(R * 255), Math.round(g * 255), Math.round(B * 255), a]);
        } else {
          return G.map(g => [Math.round(R * 255), Math.round(g * 255), Math.round(B * 255), A]);
        }
      }
    } else {
      if (bIsArray) {
        if (aIsArray) {
          return zip(B, A).map(([b, a]) => [Math.round(R * 255), Math.round(G * 255), Math.round(b * 255), a]);
        } else {
          return B.map(b => [Math.round(R * 255), Math.round(G * 255), Math.round(b * 255), A]);
        }
      } else {
        if (aIsArray) {
          return A.map(a => [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255), a]);
        } else {
          return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255), A];
        }
      }
    }
  }
}

const styleTypeObject = { '@@isStyle': true };

export const Style = {
  name: 'Style',
  tag: 'Drawing',
  inputs: {
    fillR: {type: 'Number', required: false},
    fillG: {type: 'Number', required: false},
    fillB: {type: 'Number', required: false},
    fillA: {type: 'Number', required: false},

    strokeR: {type: 'Number', required: false},
    strokeG: {type: 'Number', required: false},
    strokeB: {type: 'Number', required: false},
    strokeA: {type: 'Number', required: false},

    strokeWeight: {type: 'Number', required: false}
	},
	outputs: {
    style: 'style'
  },
  fn: (props) => {
    const {
      fillR = 1,
      fillG = 1,
      fillB = 1,
      fillA = 1,
      strokeR = 1,
      strokeG = 1,
      strokeB = 1,
      strokeA = 1,
      strokeWeight = 1
    } = props;

    const stroke = resolveColor(strokeR, strokeG, strokeB, strokeA);
    const fill = resolveColor(fillR, fillG, fillB, fillA);
    let out;

    if (isArrayArray(stroke)) {
      if (isArrayArray(fill)) {
        if (isNumberArray(strokeWeight)) {
          out = transpose([stroke, fill, strokeWeight]).map(([stroke, fill, strokeWeight]) => ({...styleTypeObject, stroke, fill, strokeWeight}));
        } else {
          out = zip(stroke, fill).map(([stroke, fill]) => ({ ...styleTypeObject, stroke, fill, strokeWeight }));
        }
      } else {
        if (isNumberArray(strokeWeight)) {
          out = fill.map(fill => ({ stroke, fill, strokeWeight }));
        } else {
          out = zip(fill, strokeWeight).map(([fill, strokeWeight]) => ({ ...styleTypeObject, stroke, fill, strokeWeight }));
        }
      }
    } else {
      if (isArrayArray(fill)) {
        if (isNumberArray(strokeWeight)) {
          out = zip(stroke, strokeWeight).map(([stroke, strokeWeight]) => ({ ...styleTypeObject, stroke, fill, strokeWeight }));
        } else {
          out = fill.map(fill => ({ ...styleTypeObject, stroke, fill, strokeWeight }));
        }
      } else {
        if (isNumberArray(strokeWeight)) {
          out = zip(strokeWeight, fill).map(([strokeWeight, fill]) => ({ ...styleTypeObject, stroke, fill, strokeWeight }));
        } else {
          out = {
            ...styleTypeObject,
            stroke,
            fill,
            strokeWeight
          };
        }
      }
    }

    return {
      style: out
    }
  }
};
