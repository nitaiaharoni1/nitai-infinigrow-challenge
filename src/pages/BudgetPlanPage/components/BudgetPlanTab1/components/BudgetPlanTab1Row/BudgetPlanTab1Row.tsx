import { FC } from 'react';

import { AffiliateProgram, ArrowDown } from 'assets';

interface Props {
  onClick: () => void;
  isExpanded: boolean;
}

export const BudgetPlanTab1Row: FC<Props> = ({ onClick, isExpanded }) => (
  <div className='cursor-pointer w-full	border-2 h-14 flex items-center' onClick={onClick}>
    <ArrowDown className={`ml-4 ${isExpanded && 'rotate-180'}`}/>

    <AffiliateProgram className='ml-8'/>

    <div className='ml-4'>
      Paid reviews
    </div>
  </div>
);

