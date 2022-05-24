import { FC } from 'react';

import { BudgetPlanAddChannelButton } from '../BudgetPlanAddChannelButton/BudgetPlanAddChannelButton';

export const BudgetPlanSetupChannel: FC = () => (
  <div>
    <div className='font-semibold text-lg mt-4'>
      Setup channels
    </div>

    <div className='flex justify-between'>
      <div className='mt-4 font-normal text-gray-400 w-5/12'>
        Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact
        with
        the help of tips and insights.
      </div>

      <BudgetPlanAddChannelButton />
    </div>
  </div>
);

