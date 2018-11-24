const median = a => {
  const sorted = [...a].sort((a, b) => a > b);
  const mid = a.length / 2;
  if (a.length % 2 === 1) {
    const i1 = Math.floor(mid);
    const i2 = Math.ceil(mid);
    return (sorted[i1] + sorted[i2]) / 2;
  }
  return a[mid];
};

export const Median = {
	name: 'Median',
	tag: 'Math',
	inputs: {
		x: {type: '[Number]', required: true}
	},
	outputs: {
		median: 'Number'
	},
  fn: ({ x }) => ({
		median: median(x)
	})
};
