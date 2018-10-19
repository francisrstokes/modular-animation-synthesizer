export const Wave = {
	name: 'Wave',
	inputs: {
		x: 'Number'
	},
	outputs: {
		sinx: 'Number',
		nsinx: 'Number',
		cosx: 'Number',
		ncosx: 'Number',
	},
  fn: ({ x }) => {
    const sx = Math.sin(x);
    const cx = Math.cos(x);
    return {
      sinx: sx,
			nsinx: (1 + sx) / 2,
			cosx: cx,
      ncosx: (1 + cx) / 2,
    }
  }
};
