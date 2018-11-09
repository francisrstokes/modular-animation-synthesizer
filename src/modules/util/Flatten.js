export const Flatten = {
  name: 'Flatten',
  tag: 'Misc',
  inputs: {
    x: 'Array'
  },
	outputs: {output: 'Array'},
  fn: ({ x }) => ({
    output: x.reduce((acc, cur) => [...acc, ...cur], [])
  })
};
