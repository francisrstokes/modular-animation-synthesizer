export const Style = {
  name: 'Style',
  tag: 'Drawing',
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
      fillR = 1,
      fillG = 1,
      fillB = 1,
      fillA = 1,
      strokeR = 1,
      strokeG = 1,
      strokeB = 1,
      strokeA = 1,
      strokeWeight = 1
    } = props;

    mc.fill([fillR * 255, fillG * 255, fillB * 255, fillA]);
    mc.stroke([strokeR * 255, strokeG * 255, strokeB * 255, strokeA]);
    mc.strokeWeight(strokeWeight);

    return { gateOut: gateIn };
  }
};
