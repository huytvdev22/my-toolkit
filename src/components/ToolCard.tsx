import React from 'react';
import { ToolDefinition } from '../tools/ToolInterface';
import { TranslationKey } from '../core/i18n/translations';

interface ToolCardProps {
  tool: ToolDefinition;
  onClick: (tool: ToolDefinition) => void;
  t: (key: TranslationKey) => string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick, t }) => {
  return (
    <div
      onClick={() => onClick(tool)}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col h-full group"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{t(tool.nameKey)}</h3>
      <p className="text-slate-600 text-sm flex-grow leading-relaxed">{t(tool.descriptionKey)}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tool.keywordKeys.map((keywordKey) => (
          <span key={keywordKey} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/60">
            {t(keywordKey)}
          </span>
        ))}
      </div>
    </div>
  );
};
