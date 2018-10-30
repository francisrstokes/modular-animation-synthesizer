export const Style = {
  name: 'Style',
  inputs: {
    gateIn: 'any',

    fillR: 'Number',
    fillG: 'Number',
    fillB: 'Number',
    fillA: 'Number',

    strokeR: 'Number',
    strokeG: 'Number',
    strokeB: 'Number',
    strokeA: 'Number',

    strokeWeight: 'Number'
	},
	outputs: {
    gateOut: 'any'
  },
  fn: (props, mc) => {
    const {
      gateIn,
      fillR = 255,
      fillG = 255,
      fillB = 255,
      fillA = 1,
      strokeR = 255,
      strokeG = 255,
      strokeB = 255,
      strokeA = 1,
      strokeWeight = 1
    } = props;

    mc.fill([fillR,fillG,fillB,fillA]);
    mc.stroke([strokeR,strokeG,strokeB,strokeA]);
    mc.strokeWeight(strokeWeight);

    return { gateOut: gateIn };
  }
};
