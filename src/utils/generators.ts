type padNumber = {
  id: string;
  value: number;
}

export const generateNumbers = (max:number = 10): padNumber[] => {
  return new Array(max).fill(null).map((e, index) => ({
    id: Math.random().toString(),
    value: index,
  }));
};
