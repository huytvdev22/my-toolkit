import { useState, useMemo } from 'react';
import { calculateDewPoint } from './dewPointFormula';
import { TranslationKey } from '../../core/i18n/translations';

export function useDewPoint() {
  const [temperature, setTemperature] = useState<string>('');
  const [humidity, setHumidity] = useState<string>('');
  const [errorKey, setErrorKey] = useState<TranslationKey | null>(null);

  const result = useMemo(() => {
    setErrorKey(null);
    if (!temperature && !humidity) return null;

    const t = parseFloat(temperature);
    const h = parseFloat(humidity);

    if (isNaN(t)) {
      setErrorKey('invalidTemp');
      return null;
    }
    if (isNaN(h) || h < 0 || h > 100) {
      setErrorKey('invalidHumidity');
      return null;
    }

    return calculateDewPoint(t, h);
  }, [temperature, humidity]);

  return {
    temperature,
    setTemperature,
    humidity,
    setHumidity,
    result,
    errorKey
  };
}
