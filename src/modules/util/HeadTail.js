import {head, tail} from 'ramda';

export const HeadTail = {
  name: 'HeadTail',
  tag: 'Misc',
  inputs: {
    x: '[any]'
  },
	outputs: {
    head: 'any',
    tail: '[any]'
  },
  fn: ({ x }) => ({
    head: head(x),
    tail: tail(x)
  })
};
