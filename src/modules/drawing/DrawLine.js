import {zip} from 'ramda';
import { isPolygon, isPolygonArray, isStyleArray, isStyle } from '../../util/types';
import {applyStyle} from '../../util/apply-style';

export const DrawLine = {
  name: 'DrawLine',
  tag: 'Drawing',
  inputs: {
    points: {type: 'Polygon', required: true},
    style: {type: 'Style', required: true}
	},
	outputs: {
    done: 'Number'
  },
  fn: ({points, style}, mc) => {

    if (isStyle(style)) {
      applyStyle(mc, style);
    }

    // [ ps1, ps2, ..., psN ]
    if (isPolygonArray(points)) {
      if (isStyleArray(style)) {
        zip(points, style).forEach(([points, style]) => {
          applyStyle(mc, style);
          points.forEach((p, i) => {
            if (i === points.length - 1) return;
            const p2 = points[i+1];
            mc.drawLine(mc.line(p, p2));
          });
        });
      } else {
        points.forEach(points => points.forEach((p, i) => {
          if (i === points.length - 1) return;
          const p2 = points[i+1];
          mc.drawLine(mc.line(p, p2));
        }));
      }
    } else if (isPolygon(points)) {
      // [p1, p2, ..., pN]
      if (isStyleArray(style)) {
        style.forEach(style => {
          applyStyle(mc, style);
          points.forEach((p, i) => {
            if (i === points.length - 1) return;
            const p2 = points[i+1];
            mc.drawLine(mc.line(p, p2));
          });
        });
      } else {
        points.forEach((p, i) => {
          if (i === points.length - 1) return;
          const p2 = points[i+1];
          mc.drawLine(mc.line(p, p2));
        });
      }
    }

    return {
      done: 1
    };
  }
};
