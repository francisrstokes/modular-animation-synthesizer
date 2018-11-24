import state from './state';

export const FeedbackIn = {
	name: 'FeedbackIn',
	tag: 'Feedback',
	inputs: {
    key: {type: 'any', required: true},
    x: {type: 'any', required: true}
	},
	outputs: {
    x: 'any'
  },
	fn: ({ key, x }) => {
    state[key] = x;
    return { x }
  }
};
