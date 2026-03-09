import React from 'react';
import { useDewPoint } from './useDewPoint';
import { Input } from '../../components/Input';
import { useI18n } from '../../core/i18n/I18nContext';

export const DewPointTool: React.FC = () => {
  const { 
    mode, setMode,
    temperature, setTemperature, 
    humidity, setHumidity, 
    airTemp, setAirTemp,
    surfaceTemp, setSurfaceTemp,
    result, errorKey 
  } = useDewPoint();
  const { t, formatNumber } = useI18n();

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      {/* Mode Switcher */}
      <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200/60 self-start">
        <button
          onClick={() => setMode('standard')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            mode === 'standard'
              ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {t('standardMode')}
        </button>
        <button
          onClick={() => setMode('condensation')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            mode === 'condensation'
              ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {t('condensationMode')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {mode === 'standard' ? (
          <>
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
          </>
        ) : (
          <>
            <Input
              label={t('airTemp')}
              type="number"
              value={airTemp}
              onChange={(e) => setAirTemp(e.target.value)}
              placeholder={t('tempPlaceholder')}
              step="0.1"
            />
            <Input
              label={t('surfaceTemp')}
              type="number"
              value={surfaceTemp}
              onChange={(e) => setSurfaceTemp(e.target.value)}
              placeholder={t('tempPlaceholder')}
              step="0.1"
            />
          </>
        )}
      </div>
      
      {errorKey && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-medium">
          {t(errorKey)}
        </div>
      )}
      
      {result !== null && !errorKey && (
        <div className="mt-2 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-indigo-600/80 font-semibold uppercase tracking-wider mb-1">
            {mode === 'standard' ? t('calculatedDewPoint') : t('criticalHumidity')}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-indigo-900 tracking-tight">
              {formatNumber(result, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
            </span>
            <span className="text-2xl font-medium text-indigo-700">
              {mode === 'standard' ? '°C' : '%'}
            </span>
          </div>
          {mode === 'condensation' && result > 100 && (
            <p className="mt-3 text-xs text-amber-600 font-medium max-w-xs">
              {/* Note: If result > 100, it means dew won't form even at 100% RH because surface is warmer than air dew point */}
              Surface temperature is above air temperature. Condensation is unlikely.
            </p>
          )}
          {mode === 'condensation' && (
            <p className="mt-3 text-xs text-slate-500 max-w-xs italic">
              {t('criticalHumidityDesc')}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
