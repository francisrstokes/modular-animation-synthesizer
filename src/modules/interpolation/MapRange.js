import {isNumberArray, isNumber} from '../../util/types';

const mapRange = (fromA,fromB,toA,toB,value) => (value-fromA)/(fromB-fromA) * (toB-toA) + toA;

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
