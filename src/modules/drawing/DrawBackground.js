export const DrawBackground = {
  name: 'DrawBackground',
  inputs: {
    gateIn: 'any',
    fillR: 'Number',
    fillG: 'Number',
    fillB: 'Number',
    fillA: 'Number'
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
      fillA = 1
    } = props;
    mc.background([fillR,fillG,fillB,fillA]);
    return {
      gateOut: gateIn
    };
  }
};
