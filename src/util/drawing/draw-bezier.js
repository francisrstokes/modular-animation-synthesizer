export const drawBezier = (ctx, p1, cp1, cp2, p2, lineWidth = 2) => {
  ctx.beginPath();
  ctx.moveTo(...p1);
  ctx.bezierCurveTo(...cp1, ...cp2, ...p2);
  ctx.lineWidth = lineWidth;
  ctx.stroke();
};
