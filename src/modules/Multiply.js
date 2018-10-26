export const Multiply = {
  name: 'Multiply',
  inputs: {
		a: 'Number',
    b: 'Number'
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ a, b }) => {
    let out;
    if (Array.isArray(a)) {
      if (Array.isArray(b)) {
        out = a.map((x, i) => x * b[i]);
      } else {
        out = a.map(x => x * b);
      }
    } else {
      out = a * b;
    }

    return {m: out};
  }
};
