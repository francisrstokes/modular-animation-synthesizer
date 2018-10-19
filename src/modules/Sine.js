export const Sine = {
	name: 'Sine',
	inputs: {
		x: 'Number'
	},
	outputs: {
		sinx: 'Number',
		nsinx: 'Number',
	},
  fn: ({ x }) => {
    const sx = Math.sin(x);
    return {
      sinx: sx,
      nsinx: (1 + sx) / 2
    }
  }
};
