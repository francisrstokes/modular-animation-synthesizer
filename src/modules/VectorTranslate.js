import {vAdd} from 'vec-la-fp';

export const VectorTranslate = {
  name: 'VectorTranslate',
  inputs: {
    v: 'Vector',
    tv: 'Vector'
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ v, tv }) => {
    let out;
    if (v.length && Array.isArray(v[0])) {
      if (tv.length && Array.isArray(tv[0])) {
        out = v.map((vec, i) => vAdd(tv[i], vec));
      } else {
        out = v.map(vec => vAdd(tv, vec));
      }
    } else {
      out = vAdd(tv, v);
    }

    return {
      output: out
    };
  }
};
