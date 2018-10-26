export const Arrayify = {
  name: 'Arrayify',
  inputs: {
    x: 'any',
    n: 'Number'
  },
	outputs: {output: '[any]'},
  fn: ({ x, n }) => ({
    output: Array.from({length: n}, () => x)
  })
};
