import {vRotatePointAround} from 'vec-la-fp';

export const VectorRotate = {
  name: 'VectorRotate',
  tag: 'Vector',
  inputs: {
    v: 'Vector',
    cp: 'Vector',
    a: 'Number',
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, cp, a }) => {
    const cv = cp ? cp : [0 ,0];
    if (v.length && Array.isArray(v[0])) {
      return {
        output: v.map(vec => vRotatePointAround(a, cv, vec))
      };
    }
    return {
      output: vRotatePointAround(a, cv, v)
    };
  }
};
