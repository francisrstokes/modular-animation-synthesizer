export const Flatten = {
  name: 'Flatten',
  tag: 'Misc',
  inputs: {
    x: {type: 'Array', required: true}
  },
	outputs: {output: 'Array'},
  fn: ({ x }) => ({
    output: x.reduce((acc, cur) => [...acc, ...cur], [])
  })
};
