import { FC } from 'react';

import { BudgetPlanTab1 } from '../components/BudgetPlanTab1/BudgetPlanTab1';

interface Tab {
  label: string;
  id: string;
  template: FC<any>;
}

export const tabs: Tab[] = [
  {
    label: 'Tab 1',
    id: 'tab_1',
    template: BudgetPlanTab1,
  },
  {
    label: 'Tab 2',
    id: 'tab_2',
    template: BudgetPlanTab1,
  },
];
