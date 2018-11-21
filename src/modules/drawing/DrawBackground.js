export const DrawBackground = {
  name: 'DrawBackground',
  tag: 'Drawing',
  inputs: {
    gateIn: {type: 'any', required: true},
    fillR: {type: 'Number', required: false},
    fillG: {type: 'Number', required: false},
    fillB: {type: 'Number', required: false},
    fillA: {type: 'Number', required: false},
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
