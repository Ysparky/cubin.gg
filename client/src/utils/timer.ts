export const calculateElapsedTime = (startTime: number): number => {
  return (Date.now() - startTime) / 1000;
};
