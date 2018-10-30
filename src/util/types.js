export const isVector = a => {
  return Array.isArray(a) && a.length === 2 && a.every(Number.isFinite);
};

export const isPolygon = a => {
  return Array.isArray(a) && a.every(isVector);
};

export const isPolygonArray = a => {
  return Array.isArray(a) && a.every(isPolygon);
};
