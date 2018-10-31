import { isVector, isPolygon, isPolygonArray, isNumber, isNumberArray, isNumberArrayArray } from '../../util/types';
import {zip, transpose} from 'ramda';

const types = [
  ['v', isVector],
  ['p', isPolygon],
  ['pa', isPolygonArray],
  ['n', isNumber],
  ['na', isNumberArray],
  ['naa', isNumberArrayArray],
]

const tagType = inputs => {
  const k = Object.keys(inputs).sort();
  return k.reduce((acc, cur) => {
    const v = inputs[cur];
    const [tag] = types.find(([_, typeFn]) => typeFn(v));
    return [...acc, `${cur}:${tag}`];
  }, []).join(',');
}

export const DrawEllipse = {
  name: 'DrawEllipse',
  inputs: {
    v: 'Vector',
    r: 'Number',
    a: 'Number'
	},
	outputs: {
    done: 'Number'
  },
  fn: ({v, r, a}, mc) => {
    const de = mc.drawEllipse;
    const tag = tagType({v, r, a});

    switch (tag) {
      case 'a:n,r:v,v:v':{
        de(mc.ellipse(a, r, v));
        break;
      }
      case 'a:na,r:v,v:v':{
        a.map(a => de(mc.ellipse(a, r, v)));
        break;
      }
      case 'a:n,r:p,v:v':{
        r.map(r => de(mc.ellipse(a, r, v)));
        break;
      }
      case 'a:n,r:v,v:p':{
        v.map(v => de(mc.ellipse(a, r, v)));
        break;
      }
      case 'a:na,r:v,v:p':{
        zip(a, v).map(([a, v]) => de(mc.ellipse(a, r, v)));
        break;
      }
      case 'a:n,r:p,v:p':{
        zip(r, v).map(([r, v]) => de(mc.ellipse(a, r, v)));
        break;
      }
      case 'a:na,r:p,v:p':{
        transpose(a, r, v).map(([a, r, v]) => de(mc.ellipse(a, r, v)));
        break;
      }
      case 'a:n,r:v,v:pa':{
        v.map(v => de(mc.ellipse(a, r, v)));
        break;
      }
      case 'a:n,r:p,v:pa':{
        v.map(v => r.map(r => de(mc.ellipse(a, r, v))));
        break;
      }
      case 'a:na,r:p,v:pa':{
        v.map(v => zip(a, r).map(([a, r]) => de(mc.ellipse(a, r, v))));
        break;
      }
    }

    return {
      done: 1
    };
  }
};
