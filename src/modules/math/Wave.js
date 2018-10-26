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
    const sx = Array.isArray(x) ? x.map(Math.sin) : Math.sin(x);
    const cx = Array.isArray(x) ? x.map(Math.cos) : Math.cos(x);
    return {
      sinx: sx,
			nsinx: Array.isArray(sx) ? sx.map(v => (1 + v) / 2) : (1 + sx) / 2,
			cosx: cx,
      ncosx: Array.isArray(cx) ? cx.map(v => (1 + v) / 2) : (1 + cx) / 2,
    }
  }
};