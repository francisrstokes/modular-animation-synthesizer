import {vAdd} from 'vec-la-fp';

export const Rect = {
  name: 'Rect',
  tag: 'Geometry',
	inputs: {
    centered: 'Boolean',
		dimensions: 'Vector'
	},
	outputs: {
		points: '[Vector]'
  },
	fn: ({ centered, dimensions: [w, h] }) => {
    const modifier = centered ? [-w/2, -h/2] : [0 ,0];
    const points = [
      [0, 0],
      [w, 0],
      [w, h],
      [0, h]
    ].map(vAdd(modifier));
    return { points };
  }
};
