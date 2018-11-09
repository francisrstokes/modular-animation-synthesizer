export const Step = {
  name: 'Step',
  tag: 'Interpolation',
  inputs: {
    edge: 'Number',
    n: 'Number'
  },
	outputs: {output: 'Number'},
  fn: ({ n, edge }) => ({ output: n < edge ? 0 : 1 })
};
