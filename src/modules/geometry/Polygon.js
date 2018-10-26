export const Polygon = {
	name: 'Polygon',
	inputs: {
		sides: 'Number'
	},
	outputs: {
		points: '[Vector]'
  },
	fn: ({ sides }) => ({
    points: Array.from({length: Math.ceil(sides)}, (_, i) => {
      const a = Math.PI * 2 * (i / (sides));
      return [Math.cos(a), Math.sin(a)];
    })
  })
};
