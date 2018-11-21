import {prepend} from 'ramda';

export const PushFront = {
  name: 'PushFront',
  tag: 'Misc',
  inputs: {
    value: {type: 'any', required: true},
    array: {type: 'Array', required: true},
  },
	outputs: {
    output: '[any]'
  },
  fn: ({ value, array }) => ({
    output: prepend(value, array)
  })
};
