import {getTime} from '../global';

export const Time = {
	name: 'Time',
	inputs: {},
	outputs: {
		t: 'Number',
		t2: 'Number',
		t10: 'Number',
		t30: 'Number',
		t60: 'Number',
	},
	fn: () => {
		const t = getTime();
		return {
			t,
			t2: t/2,
			t10: t/10,
			t30: t/30,
			t60: t/60,
		}
	}
};
