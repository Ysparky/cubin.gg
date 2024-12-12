export const formatTime = (time: number): string => {
  return (Math.floor(time * 100) / 100).toFixed(2);
};
