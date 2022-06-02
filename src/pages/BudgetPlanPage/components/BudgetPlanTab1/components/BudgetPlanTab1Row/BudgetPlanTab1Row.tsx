import { Popper } from '@mui/material';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';

import { TextInput } from '../../../../../../components';
import { BudgetPlanTab1RowChannelTitle } from '../BudgetPlanTab1RowChannelTitle/BudgetPlanTab1RowChannelTitle';

import { AffiliateProgram, ArrowDown, Dots } from 'assets';

interface Props {
  onExpand: () => void;
  onRemove: () => void;
  onEdit: (index: number, name: string) => void;
  isExpanded: boolean;
  channel: string;
  index: number;
}

export const BudgetPlanTab1Row: FC<Props> = ({
  onExpand,
  onRemove,
  onEdit,
  index,
  isExpanded,
  channel,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleDotsClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const handleEditClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsEditMode(true);
  };

  return (
    <div
      className='flex w-full border-2 h-14 items-center justify-between px-4 cursor-pointer hover:shadow'
      onClick={onExpand}
    >
      <div className='flex items-center'>
        <ArrowDown className={`${isExpanded && 'rotate-180'}`} />

        <AffiliateProgram className='ml-8' />

        <BudgetPlanTab1RowChannelTitle
          channel={channel}
          index={index}
          isEditMode={isEditMode}
          onEdit={onEdit}
          setIsEditMode={setIsEditMode}
        />
      </div>

      <div
        className='cursor-pointer w-10 h-10 flex items-center justify-content-center rounded-full hover:shadow-lg'
        onClick={handleDotsClick}
      >
        <Dots className='w-full' />
      </div>

      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        placement='bottom-end'
      >
        <div className='border-2 bg-white w-36'>
          <div className='text-red-500 bg-red hover:bg-red-200 p-2 cursor-pointer' onClick={onRemove}>
            Remove
          </div>

          <div className='hover:shadow p-2 cursor-pointer' onClick={handleEditClick}>
            Edit
          </div>
        </div>
      </Popper>

    </div>
  );
};

