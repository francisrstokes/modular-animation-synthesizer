import { isPolygon, isPolygonArray } from '../../util/types';

export const DrawPolygon = {
  name: 'DrawPolygon',
  inputs: {
    points: '[Vector]'
	},
	outputs: {
    done: 'Number'
  },
  fn: ({points}, mc) => {
    if (isPolygonArray(points)) {
      points.forEach(ps => mc.drawPolygon(mc.polygon(ps)));
    } else if (isPolygon(points)) {
      mc.drawPolygon(mc.polygon(points));
    }

    return {
      done: 1
    };
  }
};
