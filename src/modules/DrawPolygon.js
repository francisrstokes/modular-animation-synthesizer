export const DrawPolygon = (mc) => ({
  name: 'DrawPolygon',
  inputs: {
		points: '[Vector]'
	},
	outputs: {
    done: 'Number'
  },
  fn: ({ points }) => {
    mc.drawPolygon(mc.polygon(points));
    return {
      done: true
    };
  }
});
