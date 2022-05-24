import { FC, useMemo } from 'react';

import { BudgetPlanContext } from './BudgetPlanContext';

export const BudgetPlanProvider: FC = ({ children }) => {
  const value = useMemo(() => ({}), []);

  return (
    <BudgetPlanContext.Provider value={value}>
      {children}
    </BudgetPlanContext.Provider>
  );
};

