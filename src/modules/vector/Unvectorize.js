import {zip} from 'ramda';
import { isVector, isPolygon, isPolygonArray } from '../../util/types';

export const Unvectorize = {
  name: 'Unvectorize',
  tag: 'Vector',
  inputs: {
		v: 'Vector'
	},
	outputs: {
    x: 'Number',
    y: 'Number'
  },
  fn: ({ v }) => {
    let out = {x: 0, y: 0};

    if (isVector(v)) {
      out = {
        x: v[0],
        y: v[1]
      }
    } else if (isPolygon(v)) {
      out = v.reduce(({x, y}, [nx, ny]) => {
        return {
          x: [...x, nx],
          y: [...y, ny],
        }
      }, {x: [], y: []});
    }

    return out;
  }
};
