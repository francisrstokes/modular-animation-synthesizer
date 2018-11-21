export const Gate = {
	name: 'Gate',
	tag: 'Misc',
	inputs: {
		trigger: {type: 'Number', required: true},
		x: {type: 'any', required: true},
	},
	outputs: {
		output: 'any'
  },
	fn: ({ x }) => ({ output: x })
};
