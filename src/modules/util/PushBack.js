import {append} from 'ramda';

export const PushBack = {
  name: 'PushBack',
  tag: 'Misc',
  inputs: {
    value: 'any',
    array: '[any]'
  },
	outputs: {
    output: '[any]'
  },
  fn: ({ value, array }) => ({
    output: append(value, array)
  })
};
