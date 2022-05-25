import { FC, useState } from 'react';

import { BudgetPlanTab1Details } from '../BudgetPlanTab1Details/BudgetPlanTab1Details';
import { BudgetPlanTab1Row } from '../BudgetPlanTab1Row/BudgetPlanTab1Row';

interface Props {
  channel: string;
  index: number;
  isExpanded: boolean;
  onExpand: (index: number) => void;
  onRemove: (index: number) => void;
}

export const BudgetPlanTab1Item: FC<Props> = ({
  channel,
  index,
  onExpand,
  onRemove,
  isExpanded,
}) => (
  <div className='mt-8'>
    <BudgetPlanTab1Row
      channel={channel}
      index={index}
      isExpanded={isExpanded}
      onExpand={onExpand}
      onRemove={onRemove}
    />

    {isExpanded && <BudgetPlanTab1Details />}
  </div>
);

