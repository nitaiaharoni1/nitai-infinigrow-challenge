import { FC, MouseEvent, useState } from 'react';

import { TextInput } from 'components';

interface Props {
  onEdit: (index: number, name: string) => void;
  channel: string;
  index: number;
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
}

export const BudgetPlanTab1RowChannelTitle: FC<Props> = ({
  onEdit,
  index,
  channel,
  isEditMode,
  setIsEditMode,
}) => {
  const [newChannelTitle, setNewChannelTitle] = useState<string>(channel);

  const handleEditSubmit = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onEdit(index, newChannelTitle);
    setIsEditMode(false);
    setNewChannelTitle('');
  };

  const handleEditCancel = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsEditMode(false);
    setNewChannelTitle('');
  };

  const handleEditChange = (value: string) => {
    setNewChannelTitle(value);
  };

  return (
    <div>
      {isEditMode ? (
        <div className='ml-2 flex items-center'>
          <TextInput
            onChange={handleEditChange}
            placeholder={channel}
          />

          <div className='ml-2 flex items-center'>
            <button
              className='border-2 cursor-pointer px-2 hover:shadow rounded-full bg-red-100 hover:bg-red-200'
              onClick={handleEditCancel}
              type='button'
            >
              Clear
            </button>

            <button
              className='border-2 cursor-pointer px-2 hover:shadow ml-1 rounded-full bg-blue-100 hover:bg-blue-200'
              onClick={handleEditSubmit}
              type='button'
            >
              Submit
            </button>
          </div>

        </div>
      ) : (
        <div className='ml-4'>
          {channel}
        </div>
      )}
    </div>
  );
};

