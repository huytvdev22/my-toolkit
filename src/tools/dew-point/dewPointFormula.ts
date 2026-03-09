export function calculateDewPoint(temperature: number, relativeHumidity: number): number {
  const a = 17.27;
  const b = 237.7;
  const alpha = (a * temperature) / (b + temperature) + Math.log(relativeHumidity / 100.0);
  return (b * alpha) / (a - alpha);
}

export function calculateCriticalHumidity(airTemp: number, surfaceTemp: number): number {
  const a = 17.27;
  const b = 237.7;
  const exponent = (a * surfaceTemp) / (b + surfaceTemp) - (a * airTemp) / (b + airTemp);
  return 100 * Math.exp(exponent);
}
