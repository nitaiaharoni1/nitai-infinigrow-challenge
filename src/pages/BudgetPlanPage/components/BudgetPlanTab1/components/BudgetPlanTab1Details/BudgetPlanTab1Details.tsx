import { FC } from 'react';

import { BudgetPlanTab1DetailsTopRow } from '../BudgetPlanTab1DetailsTopRow/BudgetPlanTab1DetailsTopRow';
import { BudgetPlanTab1DetailsBreakdown } from '../BudgetPlanTab1DetailsBreakdown/BudgetPlanTab1DetailsBreakdown';

interface Props {

}

export const BudgetPlanTab1Details: FC<Props> = ({}) => (
  <div
    className='border-2 p-8'
    style={{
      height: 580,
      marginTop: -2,
    }}
  >
    <BudgetPlanTab1DetailsTopRow />

    <BudgetPlanTab1DetailsBreakdown />
  </div>
);

