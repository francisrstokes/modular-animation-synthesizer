export const Arrayify = {
  name: 'Arrayify',
  tag: 'Misc',
  inputs: {
    x: {type: 'Number', required: true},
    n: {type: 'any', required: true},
  },
	outputs: {output: '[any]'},
  fn: ({ x, n }) => ({
    output: Array.from({length: n}, () => x)
  })
};
