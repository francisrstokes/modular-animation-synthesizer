const mapRange = (fromA,fromB,toA,toB,value) => (value-fromA)/(fromB-fromA) * (toB-toA) + toA;

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
		output: 'Number'
  },
	fn: ({ fromA,fromB,toA,toB,value }) => ({
    output: Array.isArray(value)
      ? value.mapRange(v => mapRange(fromA,fromB,toA,toB,v))
      : mapRange(fromA,fromB,toA,toB,value)
  })
};
