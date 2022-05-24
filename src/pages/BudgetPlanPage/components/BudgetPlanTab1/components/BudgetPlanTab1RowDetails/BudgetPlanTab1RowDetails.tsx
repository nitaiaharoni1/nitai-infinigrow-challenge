import { FC } from 'react';
import { Info } from 'assets';
import { BudgetPlanTab1RowDetailsTopRow } from '../BudgetPlanTab1RowDetailsTopRow/BudgetPlanTab1RowDetailsTopRow';
import { BudgetPlanTab1RowDetailsBudgetBreakdown } from '../BudgetPlanTab1RowDetailsBudgetBreakdown/BudgetPlanTab1RowDetailsBudgetBreakdown';

interface Props {

}

export const BudgetPlanTab1RowDetails: FC<Props> = ({}) => (
  <div
    className={'border-2 p-8'}
    style={{
      height: 580,
      marginTop: -2
    }}
  >
    <BudgetPlanTab1RowDetailsTopRow/>
    <BudgetPlanTab1RowDetailsBudgetBreakdown/>
  </div>
);

