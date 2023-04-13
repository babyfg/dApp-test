export const formatPrice = (input: number | string | undefined): string => {
  const value = Math.abs(Number(input));
  if (value < 1000) return value.toFixed(1);
  if (value < 1000000) return `${(value / 1000).toFixed(1)}K`;
  if (value < 1000000000) return `${(value / 1000000).toFixed(1)}M`;
  return '0.0';
};
