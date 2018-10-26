export const runWithContext = (context, fnStr) => {
  const keys = Object.keys(context);
  const values = Object.values(context);
  return Function(...keys, fnStr)(...values);
};
