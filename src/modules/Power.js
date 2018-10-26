export const Power = {
  name: 'Power',
  inputs: {
		x: 'Number',
		n: 'Number',
	},
	outputs: {
		m: 'Number'
  },
  fn: ({ x, n }) => ({
    m: x**n
  })
};
