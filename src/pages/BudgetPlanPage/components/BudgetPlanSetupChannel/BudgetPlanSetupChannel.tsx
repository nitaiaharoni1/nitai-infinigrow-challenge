import { Dialog } from '@mui/material';
import { FC, useState } from 'react';

import { BudgetPlanAddChannelButton } from '../BudgetPlanAddChannelButton/BudgetPlanAddChannelButton';

import { TextInput } from 'components';

interface Props {
  onAddChannel: (channelName: string) => void;
}

export const BudgetPlanSetupChannel: FC<Props> = ({ onAddChannel }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [channelName, setChannelName] = useState('');

  const handleOpen = () => setIsDialogOpen(true);
  const handleClose = () => setIsDialogOpen(false);
  
  const handleAdd = () => {
    onAddChannel(channelName);
    handleClose();
  };

  return (
    <>
      <div>
        <div className='font-semibold text-lg mt-4'>
          Setup channels
        </div>

        <div className='flex justify-between'>
          <div className='mt-4 font-normal text-gray-400 w-5/12'>
            Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact
            with
            the help of tips and insights.
          </div>

          <BudgetPlanAddChannelButton onClick={handleOpen} />
        </div>
      </div>

      {isDialogOpen && (
        <Dialog className='w-full' onClose={handleClose} open={isDialogOpen}>
          <div className='p-10 w-96'>
            <div className='font-semibold text-lg'>
              Add Channel
            </div>

            <div className='mt-4 font-normal text-gray-400'>
              Add one of your budget channels.
            </div>

            <TextInput
              className='mt-4'
              onChange={setChannelName}
              placeholder='Channel Name'
            />

            <div className='flex place-content-end'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4'
                onClick={handleAdd}
                type='button'
              >
                Add
              </button>
            </div>

          </div>
        </Dialog>
      )}
    </>
  );
};

