import { ToolDefinition } from './ToolInterface';
import { DewPointTool } from './dew-point/DewPointTool';

export const toolsRegistry: ToolDefinition[] = [
  {
    id: 'dew-point-calculator',
    nameKey: 'dewPointCalculator',
    descriptionKey: 'dewPointDesc',
    keywordKeys: ['kw_dew', 'kw_point', 'kw_temperature', 'kw_humidity', 'kw_weather', 'kw_magnus'],
    component: DewPointTool,
  },
];
