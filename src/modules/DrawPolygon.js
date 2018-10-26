export const DrawPolygon = {
  name: 'DrawPolygon',
  inputs: {
    points: '[Vector]',
    fillR: 'Number',
    fillG: 'Number',
    fillB: 'Number',
    fillA: 'Number',
    strokeR: 'Number',
    strokeG: 'Number',
    strokeB: 'Number',
    strokeA: 'Number',
	},
	outputs: {
    done: 'Number'
  },
  fn: (props, mc) => {
    const {
      points,
      fillR = 255,
      fillG = 255,
      fillB = 255,
      fillA = 1,
      strokeR = 255,
      strokeG = 255,
      strokeB = 255,
      strokeA = 1,
    } = props;
    mc.fill([fillR,fillG,fillB,fillA]);
    mc.stroke([strokeR,strokeG,strokeB,strokeA]);
    mc.drawPolygon(mc.polygon(points));
    return {
      done: 1
    };
  }
};
