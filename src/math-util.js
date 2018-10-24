import {vDist} from 'vec-la-fp';

export const pointInRect = ([x, y], [w, h], [px, py]) => {
  return px > x && px < x + w && py > y && py < y + h;
};

export const pointInCircle = (cp, r, p) => {
  return vDist(cp, p) <= r;
};
