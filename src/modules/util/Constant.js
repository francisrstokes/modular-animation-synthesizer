export const Constant = {
  name: 'Constant',
  tag: 'Misc',
  inputs: {
    x: {type: 'any', required: true}
  },
	outputs: {output: 'any'},
  fn: ({ x }) => ({ output: x })
};
