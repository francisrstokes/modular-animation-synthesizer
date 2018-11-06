import {getTime} from '../../shared/global';

export const Time = {
	name: 'Time',
	tag: 'Time',
	inputs: {},
	outputs: {
		t: 'Number',
		t2: 'Number',
		t10: 'Number',
		t30: 'Number',
		t60: 'Number',
		t100: 'Number',
		t200: 'Number',
		t300: 'Number',
	},
	fn: () => {
		const t = getTime();
		return {
			t,
			t2: t/2,
			t10: t/10,
			t30: t/30,
			t60: t/60,
			t100: t/100,
			t200: t/200,
			t300: t/300,
		}
	}
};
