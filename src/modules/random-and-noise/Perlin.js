
import {Noise} from 'noisejs';
import { isVector, isPolygon, isPolygonArray } from '../../util/types';

let n;

const reNorm = x => (x + 1) / 2;

export const Perlin = {
  name: 'Perlin',
  tag: 'Random and Noise',
  inputs: {
    seed: 'Number',
    v: 'Vector'
  },
	outputs: {
		output: 'Number'
  },
  fn: ({seed, v}) => {
    if (!n) {
      const s = (typeof seed === 'undefined') ? Math.random() : seed;
      n = new Noise(s);
    }

    let out = 0;

    if (isVector(v)) {
      out = reNorm(n.perlin2(...v));
    } else if (isPolygon(v)) {
      out = v.map(v => reNorm(n.perlin2(...v)));
    } else if (isPolygonArray(v)) {
      out = v.map(v => v.map(v => reNorm(n.perlin2(...v))));
    }

    return {
      output: out
    }
  }
};
