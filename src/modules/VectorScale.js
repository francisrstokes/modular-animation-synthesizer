import {vScale} from 'vec-la-fp';

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
    if (v.length && Array.isArray(v[0])) {
      if (Array.isArray(scale)) {
        out = v.map((vec, i) => vScale(scale[i], vec))
      } else {
        out = v.map(vec => vScale(scale, vec))
      }
    } else {
      out = vScale(scale, v);
    }
    return {
      output: out
    };
  }
};
