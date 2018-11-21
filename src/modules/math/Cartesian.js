import { isNumber } from '../../util/types';

const cartesianProduct = (a, b) => a.reduce((acc, ca) => {
  return [...acc, ...b.map(cb => [ca, cb])]
}, []);

export const Cartesian = {
  name: 'Cartesian',
  tag: 'Math',
  inputs: {
		a: {type: 'Number', required: true},
    b: {type: 'Number', required: true}
	},
	outputs: {
		output: 'Number'
  },
  fn: ({ a, b }) => {
    let out;

    if (isNumber(a)) {
      if (isNumber(b)) {
        out = [a, b];
      } else if (Array.isArray(b)) {
        out = b.map(b => [a, b]);
      }
    } else if (Array.isArray(a)) {
      if (isNumber(b)) {
        out = a.map(a => [a, b]);
      } else if (Array.isArray(b)) {
        out = cartesianProduct(a, b);
      }
    }

    return {output: out};
  }
};
