import {getCurrentTime, getDeltaTime, getFrames} from '../../time';

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
	fn: ({ divisor = 1 }) => ({
      t: getCurrentTime() / divisor,
      dt: getDeltaTime(),
      frames: getFrames() / divisor
	})
};
