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
    if (v.length && Array.isArray(v[0])) {
      return {
        output: v.map(vec => vScale(scale, vec))
      };
    }
    return {
      output: vScale(scale, v)
    };
  }
};
