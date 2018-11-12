import {isNumberArray, isNumber} from '../../util/types';
import { mapRange } from '../../util/math-util';

export const MapRange = {
	name: 'MapRange',
	tag: 'Interpolation',
	inputs: {
		fromA: 'Number',
		fromB: 'Number',
		toA: 'Number',
    toB: 'Number',
    value: 'Number'
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
