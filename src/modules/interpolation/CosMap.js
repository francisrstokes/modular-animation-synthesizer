import {isNumberArray, isNumber} from '../../util/types';
import { mapRange } from '../../util/math-util';

export const CosMap = {
	name: 'CosMap',
	tag: 'Interpolation',
	inputs: {
		toA: {type: 'Number', required: true},
    toB: {type: 'Number', required: true},
    value: {type: 'Number', required: true}
	},
	outputs: {
		output: 'Number'
  },
	fn: ({toA,toB,value}) => {
		let out;

		if (isNumberArray(value)) {
			out = value.map(v => mapRange(-1, 1, toA, toB, Math.cos(v)));
		} else if (isNumber(value)) {
			out = mapRange(-1, 1, toA, toB, Math.cos(value));
		}

		return {
			output: out
		};
  }
};
