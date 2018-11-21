export const Multi = {
  name: 'Multi',
  tag: 'Interpolation',
  inputs: {
    n: {type: 'Number', required: true}
  },
	outputs: {output: 'Number'},
  fn: ({ n }) => ({ output: Array.from({length: n}, (_, i) => i / (n-1))})
};
