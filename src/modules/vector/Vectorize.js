export const Vectorize = {
  name: 'Vectorize',
  inputs: {
		x: 'Number',
    y: 'Number'
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ x, y }) => {
    let out;
    if (Array.isArray(x)) {
      if (Array.isArray(y)) {
        out = x.map((a, i) => [a, y[i]]);
      } else {
        out = x.map(a => [a, y]);
      }
    } else {
      out = [x, y];
    }

    return {
      output: out
    };
  }
};
