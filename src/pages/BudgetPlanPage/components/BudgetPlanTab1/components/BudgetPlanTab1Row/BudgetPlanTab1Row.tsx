import { FC, MouseEvent } from 'react';

import { AffiliateProgram, ArrowDown, Dots } from 'assets';

interface Props {
  onClick: (index: number) => void;
  isExpanded: boolean;
  channel: string;
  index: number;
}

export const BudgetPlanTab1Row: FC<Props> = ({
  onClick,
  isExpanded,
  channel,
  index,
}) => {
  const handleDotsClick = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    console.log('handleDotsClick');
  };

  return (
    <div
      className='flex w-full border-2 h-14 items-center justify-between px-4 cursor-pointer hover:shadow'
      onClick={() => onClick(index)}
    >
      <div className='flex items-center'>
        <ArrowDown className={`${isExpanded && 'rotate-180'}`} />

        <AffiliateProgram className='ml-8' />

        <div className='ml-4'>
          {channel}
        </div>
      </div>

      <div className='cursor-pointer w-14 h-14 flex items-center justify-content-center'>
        <Dots onClick={handleDotsClick} />
      </div>
    </div>
  );
};

