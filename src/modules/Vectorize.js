export const Vectorize = {
  name: 'Vectorize',
  inputs: {
		x: 'Vector',
    y: 'Number'
	},
	outputs: {
		output: 'Vector'
  },
  fn: ({ x, y }) => {
    return {
      output: [x, y]
    };
  }
};
