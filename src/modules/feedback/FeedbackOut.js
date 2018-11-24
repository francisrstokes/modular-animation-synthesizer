import state from './state';

export const FeedbackOut = {
	name: 'FeedbackOut',
	tag: 'Feedback',
	inputs: {
    key: {type: 'any', required: true},
    initial: {type: 'any', required: true}
	},
	outputs: {
    x: 'any'
  },
	fn: ({ key, initial }) => {
    if (!(key in state)) {
      state[key] = initial;
      return {x: initial};
    }

    return { x: state[key] }
  }
};
