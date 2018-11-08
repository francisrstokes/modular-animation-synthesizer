import {curry, zip} from 'ramda';
import {tagType} from '../../util/types';

const vMultiply = curry(([x, y], [x2, y2]) => [x*x2, y*y2]);

export const VectorScale = {
  name: 'VectorScale',
  tag: 'Vector',
  inputs: {
		v: 'Vector',
    scale: 'Number'
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, scale }) => {
    const tag = tagType({scale, v});
    let out;

    switch (tag) {
      case 'scale:v,v:v': {
        out = vMultiply(v, scale);
        break;
      }
      case 'scale:p,v:v': {
        out = scale.map(sv => vMultiply(v, sv));
        break;
      }
      case 'scale:pa,v:v': {
        out = scale.map(scalePoly => scalePoly.map(sv => vMultiply(sv, scrollBv)));
        break;
      }
      case 'scale:v,v:p': {
        out = v.map(vMultiply(scale));
        break;
      }
      case 'scale:p,v:p': {
        out = zip(v, scale).map(([v1, sv]) => vMultiply(v1, sv));
        break;
      }
      case 'scale:pa,v:p': {
        out = scale.map(scalePoly => zip(v, scalePoly).map(([v1, sv]) => vMultiply(v1, sv)));
        break;
      }
      case 'scale:v,v:pa': {
        out = v.map(poly => poly.map(v1 => vMultiply(v1, scale)));
        break;
      }
      case 'scale:p,v:pa': {
        out = v.map(poly => zip(poly, scale).map(([v1, sv]) => vMultiply(v1, sv)));
        break;
      }
      case 'scale:pa,v:pa': {
        out = zip(v, scale).map(([poly, scalePoly]) => zip(poly, scalePoly).map(([v1, sv]) => vMultiply(v1, sv)));
        break;
      }
    }

    return {
      output: out
    };
  }
};
