import {tagType, isStyleArray, isStyle} from '../../util/types';
import {zip, transpose} from 'ramda';
import {applyStyle} from '../../util/drawing/apply-style';

export const DrawEllipse = {
  name: 'DrawEllipse',
  tag: 'Drawing',
  inputs: {
    multiply: {type: 'Number', required: false},
    v: {type: 'Vector', required: true},
    r: {type: 'Vector', required: true},
    a: {type: 'Number', required: false},
    style: {type: 'Style', required: true}
	},
	outputs: {
    done: 'Number'
  },
  fn: ({multiply, v, r, a = 0, style}, mc) => {
    const useMultiply = Boolean(multiply);
    const de = mc.drawEllipse;
    const tag = tagType({v, r, a});

    if (isStyle(style)) {
      applyStyle(mc, style);
    }

    switch (tag) {
      case 'a:n,r:v,v:v':{
        if (isStyleArray(style)) {
          style.forEach(style => {
            applyStyle(mc, style);
            de(mc.ellipse(a, r, v));
          });
        } else {
          de(mc.ellipse(a, r, v));
        }
        break;
      }
      case 'a:na,r:v,v:v':{
        if (isStyleArray(style)) {
          zip(a, style).forEach(([a, style]) => {
            applyStyle(mc, style);
            de(mc.ellipse(a, r, v))
          });
        } else {
          a.forEach(a => de(mc.ellipse(a, r, v)));
        }
        break;
      }
      case 'a:n,r:p,v:v': {
        if (isStyleArray(style)) {
          zip(r, style).forEach(([r, style]) => {
            applyStyle(mc, style);
            de(mc.ellipse(a, r, v))
          });
        } else {
          r.forEach(r => de(mc.ellipse(a, r, v)));
        }
        break;
      }
      case 'a:n,r:v,v:p': {
        if (isStyleArray(style)) {
          zip(v, style).forEach(([v, style]) => {
            applyStyle(mc, style);
            de(mc.ellipse(a, r, v))
          });
        } else {
          v.forEach(v => de(mc.ellipse(a, r, v)));
        }
        break;
      }
      case 'a:na,r:v,v:p':{
        if (useMultiply) {
          if (isStyleArray(style)) {
            a.map(a => v.map(v => style.map(style => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v));
            })));
          } else {
            a.map(a => v.map(v => de(mc.ellipse(a, r, v))));
          }
        } else {
          if (isStyleArray(style)) {
            transpose([a, v, style]).forEach(([a, v, style]) => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v));
            })
          } else {
            zip(a, v).map(([a, v]) => de(mc.ellipse(a, r, v)));
          }
        }
        break;
      }
      case 'a:n,r:p,v:p':{
        if (useMultiply) {
          if (isStyleArray(style)) {
            r.map(r => v.map(v => style.map(style => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v));
            })));
          } else {
            r.map(r => v.map(v => de(mc.ellipse(a, r, v))));
          }
        } else {
          if (isStyleArray(style)) {
            transpose([r, v, style]).map(([r, v, style]) => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v));
            });
          } else {
            zip(r, v).map(([r, v]) => de(mc.ellipse(a, r, v)));
          }
        }
        break;
      }
      case 'a:na,r:p,v:p':{
        if (useMultiply) {
          if (isStyleArray(style)) {
            a.map(a => r.map(r => v.map(v => style.map(style => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v));
            }))));
          } else {
            a.map(a => r.map(r => v.map(v => de(mc.ellipse(a, r, v)))));
          }
        } else {
          if (isStyleArray(style)) {
            transpose(a, r, v, style).map(([a, r, v, style]) => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v))
            });
          } else {
            transpose(a, r, v).map(([a, r, v]) => de(mc.ellipse(a, r, v)));
          }
        }
        break;
      }
      case 'a:n,r:v,v:pa':{
        if (isStyleArray(style)) {
          v.map(v => zip(v, style).map(([v, style]) => {
            applyStyle(mc, style);
            de(mc.ellipse(a, r, v))
          }));
        } else {
          v.map(v => de(mc.ellipse(a, r, v)));
        }
        break;
      }
      case 'a:n,r:p,v:pa':{
        if (isStyleArray(style)) {
          v.map(v => r.map(r => style.map(style => {
            applyStyle(mc, style);
            de(mc.ellipse(a, r, v))
          })));
        } else {
          v.map(v => r.map(r => de(mc.ellipse(a, r, v))));
        }
        break;
      }
      case 'a:na,r:p,v:pa':{
        if (useMultiply) {
          if (isStyleArray(style)) {
            v.map(poly => poly.map(v => a.map(a => r.map(r => style.map(style => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v))
            })))));
          } else {
            v.map(poly => poly.map(v => a.map(a => r.map(r => de(mc.ellipse(a, r, v))))));
          }
        } else {
          if (isStyleArray(style)) {
            zip(v, style).map(([v, style]) => zip(a, r).map(([a, r]) => {
              applyStyle(mc, style);
              de(mc.ellipse(a, r, v))
            }));
          } else {
            v.map(v => zip(a, r).map(([a, r]) => de(mc.ellipse(a, r, v))));
          }
        }
        break;
      }
    }

    return {
      done: 1
    };
  }
};
