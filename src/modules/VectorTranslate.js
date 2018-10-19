import {vAdd} from 'vec-la-fp';

export const VectorTranslate = {
  name: 'VectorTranslate',
  inputs: {
		v: 'Vector',
    x: 'Number',
    y: 'Number',
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, x, y }) => {
    if (v.length && Array.isArray(v[0])) {
      return {
        output: v.map(vec => vAdd([x, y], vec))
      };
    }
    return {
      output: vAdd([x, y], v)
    };
  }
};
