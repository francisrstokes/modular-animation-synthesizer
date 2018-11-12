import {getCurrentTime, getDeltaTime, getTime} from '../../time';

export const TrueTime = {
	name: 'TrueTime',
	tag: 'Time',
	inputs: {
    divisor: 'Number'
  },
	outputs: {
    t: 'Number',
    dt: 'Number',
    frames: 'Number'
	},
	fn: ({ divisor = 1 }) => {
		return {
      t: getCurrentTime() / divisor,
      dt: getDeltaTime(),
      frames: getTime() / divisor
		}
	}
};
