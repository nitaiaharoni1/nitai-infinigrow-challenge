import { FC, useState } from 'react';

import { BudgetPlanTab1DetailsBreakdown } from '../BudgetPlanTab1DetailsBreakdown/BudgetPlanTab1DetailsBreakdown';
import { BudgetPlanTab1DetailsTopRow } from '../BudgetPlanTab1DetailsTopRow/BudgetPlanTab1DetailsTopRow';

import { BudgetAllocation } from 'types/enums/BudgetAllocation';

export const BudgetPlanTab1Details: FC = () => {
  const [budgetAllocation, setBudgetAllocation] = useState<BudgetAllocation>(BudgetAllocation.EQUAL);
  const [baseline, setBaseline] = useState<number>(0);

  const handleBaselineChange = (value: number) => {
    setBaseline(value);
  };

  const handleBudgetAllocationChange = (key: BudgetAllocation) => {
    setBudgetAllocation(key);
  };

  return (
    <div
      className='border-2 p-8'
      style={{
        height: 580,
        marginTop: -2,
      }}
    >
      <BudgetPlanTab1DetailsTopRow
        budgetAllocation={budgetAllocation}
        onBaselineChange={handleBaselineChange}
        onBudgetAllocationChange={handleBudgetAllocationChange}
      />

      <BudgetPlanTab1DetailsBreakdown
        baseline={baseline}
        budgetAllocation={budgetAllocation}
      />
    </div>
  );
};

