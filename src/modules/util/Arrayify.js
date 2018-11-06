export const Arrayify = {
  name: 'Arrayify',
  tag: 'Misc',
  inputs: {
    x: 'any',
    n: 'Number'
  },
	outputs: {output: '[any]'},
  fn: ({ x, n }) => ({
    output: Array.from({length: n}, () => x)
  })
};
