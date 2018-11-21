import {append} from 'ramda';

export const PushBack = {
  name: 'PushBack',
  tag: 'Misc',
  inputs: {
    value: {type: 'any', required: true},
    array: {type: 'Array', required: true},
  },
	outputs: {
    output: '[any]'
  },
  fn: ({ value, array }) => ({
    output: append(value, array)
  })
};
