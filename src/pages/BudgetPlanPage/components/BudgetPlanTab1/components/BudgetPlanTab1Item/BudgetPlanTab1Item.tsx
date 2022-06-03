import { FC } from 'react';

import { BudgetPlanTab1Details } from '../BudgetPlanTab1Details/BudgetPlanTab1Details';
import { BudgetPlanTab1Row } from '../BudgetPlanTab1Row/BudgetPlanTab1Row';

interface Props {
  channel: string;
  isExpanded: boolean;
  onExpand: () => void;
  onRemove: () => void;
  onEdit: (index: number, name: string) => void;
  index: number;
}

export const BudgetPlanTab1Item: FC<Props> = ({
  channel,
  onExpand,
  onRemove,
  onEdit,
  isExpanded,
  index,
}) => (
  <div className='mt-8'>
    <BudgetPlanTab1Row
      channel={channel}
      index={index}
      isExpanded={isExpanded}
      onEdit={onEdit}
      onExpand={onExpand}
      onRemove={onRemove}
    />

    {isExpanded || <BudgetPlanTab1Details />}
  </div>
);

