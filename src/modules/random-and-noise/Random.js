export const Random = {
  name: 'Random',
  tag: 'Random and Noise',
  inputs: {},
	outputs: {
		output: 'Number'
  },
  fn: () => ({ output: Math.random() })
};
