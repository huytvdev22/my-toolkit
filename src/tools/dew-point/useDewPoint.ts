import { useState, useMemo } from 'react';
import { calculateDewPoint, calculateCriticalHumidity } from './dewPointFormula';
import { TranslationKey } from '../../core/i18n/translations';

export type DewPointMode = 'standard' | 'condensation';

export function useDewPoint() {
  const [mode, setMode] = useState<DewPointMode>('standard');
  
  // Standard mode states
  const [temperature, setTemperature] = useState<string>('');
  const [humidity, setHumidity] = useState<string>('');
  
  // Condensation mode states
  const [airTemp, setAirTemp] = useState<string>('');
  const [surfaceTemp, setSurfaceTemp] = useState<string>('');
  
  const [errorKey, setErrorKey] = useState<TranslationKey | null>(null);

  const result = useMemo(() => {
    setErrorKey(null);
    
    if (mode === 'standard') {
      if (!temperature && !humidity) return null;
      const t = parseFloat(temperature);
      const h = parseFloat(humidity);
      if (isNaN(t)) {
        if (temperature) setErrorKey('invalidTemp');
        return null;
      }
      if (isNaN(h) || h < 0 || h > 100) {
        if (humidity) setErrorKey('invalidHumidity');
        return null;
      }
      return calculateDewPoint(t, h);
    } else {
      if (!airTemp && !surfaceTemp) return null;
      const ta = parseFloat(airTemp);
      const ts = parseFloat(surfaceTemp);
      if (isNaN(ta)) {
        if (airTemp) setErrorKey('invalidAirTemp');
        return null;
      }
      if (isNaN(ts)) {
        if (surfaceTemp) setErrorKey('invalidSurfaceTemp');
        return null;
      }
      const res = calculateCriticalHumidity(ta, ts);
      // Humidity can't exceed 100% in this context for physical meaning, 
      // but the formula might return > 100 if surfaceTemp > airTemp.
      // If surfaceTemp > airTemp, dew will never form unless air is supersaturated.
      return res;
    }
  }, [mode, temperature, humidity, airTemp, surfaceTemp]);

  return {
    mode,
    setMode,
    temperature,
    setTemperature,
    humidity,
    setHumidity,
    airTemp,
    setAirTemp,
    surfaceTemp,
    setSurfaceTemp,
    result,
    errorKey
  };
}
