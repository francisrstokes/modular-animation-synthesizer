import {isNumberArray, isNumber} from '../../util/types';
import { mapRange } from '../../util/math-util';

export const SinMap = {
	name: 'SinMap',
	tag: 'Interpolation',
	inputs: {
		toA: 'Number',
    toB: 'Number',
    value: 'Number'
	},
	outputs: {
		output: 'Number'
  },
	fn: ({toA,toB,value}) => {
		let out;

		if (isNumberArray(value)) {
			out = value.map(v => mapRange(-1, 1, toA, toB, Math.sin(v)));
		} else if (isNumber(value)) {
			out = mapRange(-1, 1, toA, toB, Math.sin(value));
		}

		return {
			output: out
		};
  }
};
