import { FC, useState } from 'react';

import { BudgetPlanTab1Item } from './components/BudgetPlanTab1Item/BudgetPlanTab1Item';

interface Props {
  channels: string[];
}

export const BudgetPlanTab1: FC<Props> = ({ channels }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>();

  const handleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(undefined);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className='mt-10'>
      {channels.map((channel, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <BudgetPlanTab1Item
            key={channel}
            channel={channel}
            index={index}
            isExpanded={isExpanded}
            onClick={handleExpand}
          />
        );
      })}
    </div>
  );
};

