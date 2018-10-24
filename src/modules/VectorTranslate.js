import {vAdd} from 'vec-la-fp';

export const VectorTranslate = {
  name: 'VectorTranslate',
  inputs: {
    v: 'Vector',
    vxy: 'Vector',
    x: 'Number',
    y: 'Number',
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, vxy, x, y }) => {
    const txy = vxy || [x, y];
    if (v.length && Array.isArray(v[0])) {
      return {
        output: v.map(vec => vAdd(txy, vec))
      };
    }
    return {
      output: vAdd(txy, v)
    };
  }
};
