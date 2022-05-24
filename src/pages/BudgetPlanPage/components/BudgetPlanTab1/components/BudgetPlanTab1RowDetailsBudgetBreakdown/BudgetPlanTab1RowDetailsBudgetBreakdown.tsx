import { FC } from 'react';

interface Props {

}

export const BudgetPlanTab1RowDetailsBudgetBreakdown: FC<Props> = ({}) => (
  <div className='border-2 p-8 mt-14'>
    <div className='font-semibold text-lg'>
      Budget Breakdown
    </div>

    <div className='mt-4 font-normal text-gray-400'>
      By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.
    </div>
  </div>
);

