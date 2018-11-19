import {w,h} from '../../constants';

const center = [w/2, h/2];
const widthHeight = [w, h];

export const Screen = {
	name: 'Screen',
	tag: 'Misc',
	inputs: {},
	outputs: {
		width: 'Number',
		height: 'Number',
		widthHeight: 'Vector',
		center: 'Vector',
  },
	fn: () => ({
    width: w,
		height: h,
		widthHeight,
		center
  })
};
