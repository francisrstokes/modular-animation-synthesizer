export const pointInRect = ([x, y], [w, h], [px, py]) => {
  return px > x && px < x + w && py > y && py < y + h;
}