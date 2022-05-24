import { FC, MouseEvent } from 'react';

import { AffiliateProgram, ArrowDown, Dots } from 'assets';

interface Props {
  onClick: () => void;
  isExpanded: boolean;
}

export const BudgetPlanTab1Row: FC<Props> = ({
  onClick,
  isExpanded,
}) => {
  const handleDotsClick = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    console.log('handleDotsClick');
  };

  return (
    <div className='flex w-full border-2 h-14 items-center justify-between px-4 cursor-pointer hover:shadow' onClick={onClick}>
      <div className='flex items-center'>
        <ArrowDown className={`${isExpanded && 'rotate-180'}`} />

        <AffiliateProgram className='ml-8' />

        <div className='ml-4'>
          Paid reviews
        </div>
      </div>

      <div className='cursor-pointer w-14 h-14 flex items-center justify-content-center'>
        <Dots onClick={handleDotsClick} />
      </div>
    </div>
  );
};

