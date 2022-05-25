import { range } from 'lodash';
import { FC } from 'react';

import { BudgetPlanTab1DetailsBreakdownMonth } from '../BudgetPlanTab1DetailsBreakdownMonth/BudgetPlanTab1DetailsBreakdownMonth';

import { BudgetAllocation } from 'types/enums/BudgetAllocation';

interface Props {
  budgetAllocation: BudgetAllocation;
  baseline: number;
}

const monthesNum = 12;

export const BudgetPlanTab1DetailsBreakdown: FC<Props> = ({
  budgetAllocation,
  baseline,
}) => {
  const isEqualAllocation = budgetAllocation === BudgetAllocation.EQUAL;
  const value = isEqualAllocation ? (baseline / monthesNum).toFixed(1) : undefined;

  return (
    <div className='border-2 p-8 mt-14'>
      <div className='font-semibold text-lg' style={{ color: isEqualAllocation ? '#99A4C2' : '#2A3558' }}>
        Budget Breakdown
      </div>

      <div className='mt-4 font-normal text-gray-400'>
        By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.
      </div>

      <div className='mt-6 grid gap-4 grid-cols-6 grid-rows-2'>
        {range(monthesNum)
          .map((month) => (
            <BudgetPlanTab1DetailsBreakdownMonth
              key={month}
              isEqual={isEqualAllocation}
              monthIndex={month}
              value={value}
            />
          ))}
      </div>
    </div>
  );
};

