import {tagType} from '../../util/types';
import {zip, transpose} from 'ramda';


export const DrawEllipse = {
  name: 'DrawEllipse',
  inputs: {
    multiply: 'any',
    v: 'Vector',
    r: 'Number',
    a: 'Number'
	},
	outputs: {
    done: 'Number'
  },
  fn: ({multiply, v, r, a = 0}, mc) => {
    const useMultiply = Boolean(multiply);
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
        if (useMultiply) {
          a.map(a => v.map(v => de(mc.ellipse(a, r, v))));
        } else {
          zip(a, v).map(([a, v]) => de(mc.ellipse(a, r, v)));
        }
        break;
      }
      case 'a:n,r:p,v:p':{
        if (useMultiply) {
          r.map(r => v.map(v => de(mc.ellipse(a, r, v))));
        } else {
          zip(r, v).map(([r, v]) => de(mc.ellipse(a, r, v)));
        }
        break;
      }
      case 'a:na,r:p,v:p':{
        if (useMultiply) {
          a.map(a => r.map(r => v.map(v => de(mc.ellipse(a, r, v)))));
        } else {
          transpose(a, r, v).map(([a, r, v]) => de(mc.ellipse(a, r, v)));
        }
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
        if (useMultiply) {
          v.map(poly => poly.map(v => a.map(a => r.map(r => de(mc.ellipse(a, r, v))))));
        } else {
          v.map(v => zip(a, r).map(([a, r]) => de(mc.ellipse(a, r, v))));
        }
        break;
      }
    }

    return {
      done: 1
    };
  }
};
