export const Gate = {
	name: 'Gate',
	tag: 'Misc',
	inputs: {
		trigger: 'any',
		x: 'any',
	},
	outputs: {
		output: 'any'
  },
	fn: ({ x }) => ({ output: x })
};
