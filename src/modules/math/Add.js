export const Add = {
  name: 'Add',
  inputs: {
		a: 'Number',
    b: 'Number'
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ a, b }) => {
    let out;
    // A is an array
    if (Array.isArray(a)) {
      // B is an array
      if (Array.isArray(b)) {
        out = a.map((x, i) => x + b[i]);
      } else {
        // A is an array but B is not
        out = a.map(x => x + b);
      }
    } else if (Array.isArray(b)) {
      //B is an array but a is not
      out = b.map(x => x + a);
    } else {
      // Neither A nor B is an array
      out = a + b;
    }

    return {m: out};
  }
};
