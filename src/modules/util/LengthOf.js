import { isArray, isArrayArray } from "../../util/types";

export const LengthOf = {
  name: 'LengthOf',
  tag: 'Misc',
  inputs: {
    x: 'Array'
  },
	outputs: {
    output: 'Number'
  },
  fn: ({ x }) => {
    let out;
    if (isArray(x)) {
      if (isArrayArray(x)) {
        out = x.map(x => x.length);
      } else {
        out = x.length;
      }
    } else {
      out = 0;
    }

    return {
      output: out
    }
  }
};
