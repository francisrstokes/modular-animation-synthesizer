export const Step = {
  name: 'Step',
  tag: 'Interpolation',
  inputs: {
    edge: {type: 'Number', required: true},
    n: {type: 'Number', required: true},
    invert: {type: 'Number', required: false},
  },
	outputs: {output: 'Number'},
  fn: ({ n, edge, invert = 0 }) => ({
    output: invert
      ? n > edge ? 0 : 1
      : n < edge ? 0 : 1
  })
};
