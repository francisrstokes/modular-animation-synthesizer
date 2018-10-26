export const DrawBackground = {
  name: 'DrawBackground',
  inputs: {
    fillR: 'Number',
    fillG: 'Number',
    fillB: 'Number',
    fillA: 'Number'
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
      fillA = 1
    } = props;
    mc.background([fillR,fillG,fillB,fillA]);
    return {
      done: 1
    };
  }
};
