import { Popper } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDotsClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(anchorEl ? null : e.currentTarget);
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

      <div className='cursor-pointer w-10 h-10 flex items-center justify-content-center rounded-full hover:shadow-lg' onClick={handleDotsClick}>
        <Dots className='w-full' />
      </div>

      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        placement='bottom-end'
      >
        <div className='border-2 bg-white w-36'>
          <div className='hover:bg-gray-200 p-2 cursor-pointer'>
            Edit
          </div>

          <div className='text-red-500 bg-red-50 hover:bg-red-200 p-2 cursor-pointer'>
            Remove
          </div>
        </div>
      </Popper>

    </div>
  );
};

