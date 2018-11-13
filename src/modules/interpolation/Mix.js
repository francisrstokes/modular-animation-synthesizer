import {isNumberArray, isNumber} from '../../util/types';
import { mapRange } from '../../util/math-util';

export const Mix = {
	name: 'Mix',
	tag: 'Interpolation',
	inputs: {
		toA: 'Number',
    toB: 'Number',
    value: 'Number'
	},
	outputs: {
		output: 'Number'
  },
	fn: ({ toA, toB, value }) => {
		let out;

		if (isNumberArray(value)) {
			out = value.map(v => mapRange(0, 1, toA, toB, v));
		} else if (isNumber(value)) {
			out = mapRange(0, 1, toA, toB, value);
		}

		return {
			output: out
		};
  }
};
