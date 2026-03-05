import React from 'react';
import { TranslationKey } from '../core/i18n/translations';

export interface ToolDefinition {
  id: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  keywordKeys: TranslationKey[];
  component: React.FC;
}
