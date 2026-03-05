import React, { useState, useMemo } from 'react';
import { SearchBar } from '../components/SearchBar';
import { ToolCard } from '../components/ToolCard';
import { toolsRegistry } from '../tools/registry';
import { ToolDefinition } from '../tools/ToolInterface';
import { ArrowLeft, SearchX } from 'lucide-react';
import { useI18n } from '../core/i18n/I18nContext';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<ToolDefinition | null>(null);
  const { t } = useI18n();

  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return toolsRegistry;

    return toolsRegistry.filter((tool) => {
      const name = t(tool.nameKey).toLowerCase();
      const desc = t(tool.descriptionKey).toLowerCase();
      const keywords = tool.keywordKeys.map(k => t(k).toLowerCase());

      return (
        name.includes(query) ||
        desc.includes(query) ||
        keywords.some((keyword) => keyword.includes(query))
      );
    });
  }, [searchQuery, t]);

  if (selectedTool) {
    const ToolComponent = selectedTool.component;
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button
          onClick={() => setSelectedTool(null)}
          className="mb-6 flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform" />
          {t('backToTools')}
        </button>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-6 md:px-8 md:py-8 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{t(selectedTool.nameKey)}</h2>
            <p className="text-slate-500 mt-2 leading-relaxed max-w-3xl">{t(selectedTool.descriptionKey)}</p>
          </div>
          <div className="p-6 md:p-8">
            <ToolComponent />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 md:gap-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{t('utilityTools')}</h1>
          <p className="text-slate-500 mt-2 text-lg">{t('selectTool')}</p>
        </div>
        <div className="w-full md:w-auto md:min-w-[320px]">
          <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={t('searchPlaceholder')} />
        </div>
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onClick={setSelectedTool} t={t} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 bg-white rounded-3xl border border-slate-200 border-dashed text-center">
          <div className="bg-slate-50 p-4 rounded-full mb-4">
            <SearchX className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('noToolsFound')}</h3>
          <p className="text-slate-500 max-w-sm">{t('noToolsDesc', { query: searchQuery })}</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-6 px-4 py-2 bg-indigo-50 text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition-colors"
          >
            {t('clearSearch')}
          </button>
        </div>
      )}
    </div>
  );
};
