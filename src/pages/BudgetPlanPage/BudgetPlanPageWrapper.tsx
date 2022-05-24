import { FC } from 'react';

import { BudgetPlanPage } from './BudgetPlanPage';

import { BudgetPlanProvider } from 'context';

export const BudgetPlanPageWrapper: FC = () => (
  <BudgetPlanProvider>
    <BudgetPlanPage />
  </BudgetPlanProvider>
);
