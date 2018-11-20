import {zip} from 'ramda';
import { isPolygon, isPolygonArray, isStyleArray, isStyle } from '../../util/types';
import {applyStyle} from '../../util/apply-style';

export const DrawPolygon = {
  name: 'DrawPolygon',
  tag: 'Drawing',
  inputs: {
    points: '[Vector]',
    style: 'style'
	},
	outputs: {
    done: 'Number'
  },
  fn: ({points, style}, mc) => {

    if (isStyle(style)) {
      applyStyle(mc, style);
    }

    if (isPolygonArray(points)) {
      if (isStyleArray(style)) {
        zip(points, style).forEach(([points, style]) => {
          applyStyle(mc, style);
          mc.drawPolygon(mc.polygon(points));
        });
      } else {
        points.forEach(points => mc.drawPolygon(mc.polygon(points)));
      }
    } else if (isPolygon(points)) {
      if (isStyleArray(style)) {
        style.forEach(style => {
          applyStyle(mc, style);
          mc.drawPolygon(mc.polygon(points));
        });
      } else {
        mc.drawPolygon(mc.polygon(points));
      }
    }

    return {
      done: 1
    };
  }
};
