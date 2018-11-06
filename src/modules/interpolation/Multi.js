export const Multi = {
  name: 'Multi',
  tag: 'Interpolation',
  inputs: {n: 'Number'},
	outputs: {output: 'Number'},
  fn: ({ n }) => ({ output: Array.from({length: n}, (_, i) => i / (n-1))})
};
