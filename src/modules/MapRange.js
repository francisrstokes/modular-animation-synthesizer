export const MapRange = {
	name: 'MapRange',
	inputs: {
		fromA: 'Number',
		fromB: 'Number',
		toA: 'Number',
    toB: 'Number',
    value: 'Number'
	},
	outputs: {
		mapped: 'Number'
  },
	fn: ({ fromA,fromB,toA,toB,value }) => ({
    mapped: (value-fromA)/(fromB-fromA) * (toB-toA) + toA
  })
};
