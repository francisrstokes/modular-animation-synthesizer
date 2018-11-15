export const Step = {
  name: 'Step',
  tag: 'Interpolation',
  inputs: {
    edge: 'Number',
    n: 'Number',
    invert: 'Number'
  },
	outputs: {output: 'Number'},
  fn: ({ n, edge, invert = 0 }) => ({
    output: invert
      ? n > edge ? 0 : 1
      : n < edge ? 0 : 1
  })
};
