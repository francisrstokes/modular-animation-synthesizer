export const Polygon = {
	name: 'Polygon',
	inputs: {
		sides: 'Number'
	},
	outputs: {
		points: '[Vector]'
  },
	fn: ({ sides }) => ({
    points: Array.from({length: sides || 1}, (_, i) => {
      const a = Math.PI * 2 * (i / (sides-1));
      return [Math.cos(a), Math.sin(a)];
    })
  })
};
