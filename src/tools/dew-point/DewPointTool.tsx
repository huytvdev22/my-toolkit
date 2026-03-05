import React from 'react';
import { useDewPoint } from './useDewPoint';
import { Input } from '../../components/Input';
import { useI18n } from '../../core/i18n/I18nContext';

export const DewPointTool: React.FC = () => {
  const { temperature, setTemperature, humidity, setHumidity, result, errorKey } = useDewPoint();
  const { t, formatNumber } = useI18n();

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label={t('temperature')}
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder={t('tempPlaceholder')}
          step="0.1"
        />
        <Input
          label={t('relativeHumidity')}
          type="number"
          value={humidity}
          onChange={(e) => setHumidity(e.target.value)}
          placeholder={t('humidityPlaceholder')}
          min="0"
          max="100"
          step="0.1"
        />
      </div>
      
      {errorKey && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-medium">
          {t(errorKey)}
        </div>
      )}
      
      {result !== null && !errorKey && (
        <div className="mt-2 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-indigo-600/80 font-semibold uppercase tracking-wider mb-1">{t('calculatedDewPoint')}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-indigo-900 tracking-tight">
              {formatNumber(result, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
            </span>
            <span className="text-2xl font-medium text-indigo-700">°C</span>
          </div>
        </div>
      )}
    </div>
  );
};
