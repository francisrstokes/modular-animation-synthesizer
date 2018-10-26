export const Gate = {
	name: 'Gate',
	inputs: {
		trigger: 'any',
		x: 'any',
	},
	outputs: {
		output: 'any'
  },
	fn: ({ x }) => ({ output: x })
};
