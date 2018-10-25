export const DrawPolygon = {
  name: 'DrawPolygon',
  inputs: {
		points: '[Vector]'
	},
	outputs: {
    done: 'Number'
  },
  fn: ({ points }, mc) => {
    mc.drawPolygon(mc.polygon(points));
    return {
      done: true
    };
  }
};
