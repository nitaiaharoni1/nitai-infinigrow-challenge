import { Dialog } from '@mui/material';
import { FC, useState } from 'react';

import { TextInput } from 'components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
}

export const BudgetPlanSetupChannelDialog: FC<Props> = ({
  onAdd,
  isOpen,
  onClose,
}) => {
  const [channelName, setChannelName] = useState('');

  const handleAdd = () => {
    onAdd(channelName);
    onClose();
  };

  const isDisabled = !channelName;

  return (
    <div>
      <Dialog className='w-full' onClose={onClose} open={isOpen}>
        <div className='p-10 w-96'>
          <div className='font-semibold text-lg'>
            Add Channel
          </div>

          <div className='mt-4 font-normal text-bla'>
            Add one of your budget channels.
          </div>

          <TextInput
            className='mt-4'
            onChange={setChannelName}
            placeholder='Channel Name'
          />

          <div className='flex place-content-end'>
            <button
              className={`bg-blue-500 text-white font-bold mt-4 py-2 px-4 ${isDisabled ? 'opacity-50' : 'hover:bg-blue-700'}`}
              disabled={isDisabled}
              onClick={handleAdd}
              type='button'
            >
              Add
            </button>
          </div>

        </div>
      </Dialog>
    </div>
  );
};

