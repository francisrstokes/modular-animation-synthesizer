export const Power = {
  name: 'Power',
  inputs: {
		x: 'Number',
		n: 'Number',
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ x, n }) => {
    let out;
    // X is an array
    if (Array.isArray(x)) {
      // N is an array
      if (Array.isArray(n)) {
        out = x.map((a, i) => a**n[i]);
      } else {
        // A is an array but B is not
        out = x.map(a => a**n);
      }
    } else if (Array.isArray(n)) {
      //B is an array but a is not
      out = n.map(p => x**p);
    } else {
      // Neither A nor B is an array
      out = x**n;
    }

    return {m: out};
  }
};
