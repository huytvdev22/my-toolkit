export function calculateDewPoint(temperature: number, relativeHumidity: number): number {
  const a = 17.27;
  const b = 237.7;
  const alpha = (a * temperature) / (b + temperature) + Math.log(relativeHumidity / 100.0);
  return (b * alpha) / (a - alpha);
}
