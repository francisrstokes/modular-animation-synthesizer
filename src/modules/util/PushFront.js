import {prepend} from 'ramda';

export const PushFront = {
  name: 'PushFront',
  tag: 'Misc',
  inputs: {
    value: 'any',
    array: '[any]'
  },
	outputs: {
    output: '[any]'
  },
  fn: ({ value, array }) => ({
    output: prepend(value, array)
  })
};
