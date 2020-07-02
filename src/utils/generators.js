export const generateNumbers = (max = 10) => {
  return new Array(max).fill(null).map((e, index) => ({
    id: Math.random().toString(),
    value: index,
  }));
};
