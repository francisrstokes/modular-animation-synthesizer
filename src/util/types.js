export const isNumber = a => Number.isFinite(a);
export const isArray = a => Array.isArray(a);
export const isArrayArray = a => isArray(a) && a.length && isArray(a[0]);
export const isNumberArray = a => isArray(a) && a.every(isNumber);
export const isNumberArrayArray = a => isArray(a) && a.every(isNumberArray);
export const isVector = a => isArray(a) && a.length === 2 && a.every(isNumber);
export const isPolygon = a => isArray(a) && a.every(isVector);
export const isPolygonArray = a => isArray(a) && a.every(isPolygon);
