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
      fillR = 1,
      fillG = 1,
      fillB = 1,
      fillA = 1
    } = props;
    mc.background([fillR * 255, fillG * 255, fillB * 255, fillA]);
    return {
      gateOut: gateIn
    };
  }
};
