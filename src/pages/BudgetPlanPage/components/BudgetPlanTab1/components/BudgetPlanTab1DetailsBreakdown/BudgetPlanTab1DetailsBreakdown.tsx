import { range } from 'lodash';
import { FC } from 'react';

import { BudgetPlanTab1DetailsBreakdownOption } from '../BudgetPlanTab1DetailsBreakdownOption/BudgetPlanTab1DetailsBreakdownOption';

import { breakdownOptions } from 'pages/BudgetPlanPage/utils/breakdownOptions';
import { BudgetAllocation } from 'types/enums/BudgetAllocation';
import { BudgetFrequency } from 'types/enums/BudgetFrequency';

interface Props {
  budgetAllocation: BudgetAllocation;
  budgetFrequency: BudgetFrequency;
  baseline: number;
}

export const BudgetPlanTab1DetailsBreakdown: FC<Props> = ({
  budgetAllocation,
  budgetFrequency,
  baseline,
}) => {
  const isEqualAllocation = budgetAllocation === BudgetAllocation.EQUAL;

  const breakdownRange = range(breakdownOptions[budgetFrequency].range);

  return (
    <div className='border-2 p-8 mt-14 bg-lightGray'>
      <div className={`font-semibold text-lg ${isEqualAllocation ? 'text-lightBlue' : 'text-darkBlue'}`}>
        Budget Breakdown
      </div>

      <div className='mt-4 font-normal text-gray'>
        By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.
      </div>

      <div className='mt-6 grid gap-4 grid-cols-6 grid-rows-2'>
        {breakdownRange.map((index) => (
          <BudgetPlanTab1DetailsBreakdownOption
            key={index}
            baseline={baseline}
            budgetFrequency={budgetFrequency}
            index={index}
            isEqual={isEqualAllocation}
          />
        ))}
      </div>
    </div>
  );
};

