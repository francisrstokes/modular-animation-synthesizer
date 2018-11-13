
import {Noise} from 'noisejs';
import { isVector, isPolygon, isPolygonArray } from '../../util/types';

let n;
let s;

const reNorm = x => x + 0.5;

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
      s = seed;
    } else if (seed !== s) {
      n.seed(seed);
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
