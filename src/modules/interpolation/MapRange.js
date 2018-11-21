import {isNumberArray, isNumber} from '../../util/types';
import { mapRange } from '../../util/math-util';

export const MapRange = {
	name: 'MapRange',
	tag: 'Interpolation',
	inputs: {
		fromA: {type: 'Number', required: true},
		fromB: {type: 'Number', required: true},
		toA: {type: 'Number', required: true},
    toB: {type: 'Number', required: true},
    value: {type: 'Number', required: true},
	},
	outputs: {
		output: 'Number'
  },
	fn: ({ fromA,fromB,toA,toB,value }) => {
		let out;

		if (isNumberArray(value)) {
			out = value.map(v => mapRange(fromA, fromB, toA, toB, v));
		} else if (isNumber(value)) {
			out = mapRange(fromA, fromB, toA, toB, value);
		}

		return {
			output: out
		};
  }
};
