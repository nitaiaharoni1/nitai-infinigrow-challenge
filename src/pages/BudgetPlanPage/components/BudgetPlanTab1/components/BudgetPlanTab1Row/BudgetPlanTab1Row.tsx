import { FC } from 'react';

import { AffiliateProgram, ArrowDown, Dots } from 'assets';

interface Props {
  onClick: () => void;
  isExpanded: boolean;
}

export const BudgetPlanTab1Row: FC<Props> = ({
  onClick,
  isExpanded
}) => {
  
  const handleDotsClick = (e: any) => {
    e.stopPropagation();
    console.log('handleDotsClick');
  };
  
  return (
    <div className='flex w-full	border-2 h-14 items-center justify-between px-4' onClick={onClick}>
      <div className='cursor-pointer flex items-center'>
        <ArrowDown className={`${isExpanded && 'rotate-180'}`}/>
  
        <AffiliateProgram className='ml-8'/>
    
        <div className='ml-4'>
          Paid reviews
        </div>
      </div>
      <Dots onClick={handleDotsClick} className='cursor-pointer'/>
    </div>
  );
};

