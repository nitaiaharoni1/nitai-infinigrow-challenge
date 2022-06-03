import { Menu } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';

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

  const handleClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

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

      <Menu
        anchorEl={anchorEl}
        MenuListProps={{
          style: {
            padding: 0,
          },
        }}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <div
          className='text-red-500 bg-red hover:bg-red-200 p-2 pr-10 cursor-pointer'
          onClick={onRemove}
        >
          Remove
        </div>

        <div
          className='p-2 hover:bg-gray-100 cursor-pointer pr-10'
          onClick={handleEditClick}
        >
          Edit
        </div>

      </Menu>

    </div>
  );
};

