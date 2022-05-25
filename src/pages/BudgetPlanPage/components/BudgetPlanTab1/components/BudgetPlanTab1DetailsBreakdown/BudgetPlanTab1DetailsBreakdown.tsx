import { range } from 'lodash';
import { FC } from 'react';

import { BudgetPlanTab1DetailsBreakdownMonth } from '../BudgetPlanTab1DetailsBreakdownMonth/BudgetPlanTab1DetailsBreakdownMonth';

import { BudgetAllocation } from 'types/enums/BudgetAllocation';

interface Props {
  budgetAllocation: BudgetAllocation;
}

export const BudgetPlanTab1DetailsBreakdown: FC<Props> = ({ budgetAllocation }) => {
  
  const equalValue =
  
  return (
    <div className='border-2 p-8 mt-14'>
      <div className='font-semibold text-lg'>
        Budget Breakdown
      </div>
  
      <div className='mt-4 font-normal text-gray-400'>
        By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.
      </div>
  
      <div className='mt-6 grid gap-4 grid-cols-6 grid-rows-2'>
        {range(12)
          .map((month) => <BudgetPlanTab1DetailsBreakdownMonth value={} key={month} monthIndex={month}/>)}
      </div>
    </div>
  );
};

