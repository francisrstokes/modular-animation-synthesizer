export const Multiply = {
  name: 'Multiply',
  inputs: {
		a: 'Number',
    b: 'Number'
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ a, b }) => ({
    m: a * b
  })
};
