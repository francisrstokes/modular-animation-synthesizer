export const DrawPolygon = (mc) => ({
  name: 'DrawPolygon',
  inputs: {
		points: '[Vector]'
	},
	outputs: {},
  fn: ({ points }) => {
    mc.drawPolygon(mc.polygon(points));
    return {};
  }
});
