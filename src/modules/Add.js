export const Add = {
  name: 'Add',
  inputs: {
		a: 'Number',
    b: 'Number'
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ a, b }) => ({ m: a + b })
};
