import { FC, useState } from 'react';

import { BudgetPlanAddChannelButton } from '../BudgetPlanAddChannelButton/BudgetPlanAddChannelButton';
import { BudgetPlanSetupChannelDialog } from '../BudgetPlanSetupChannelDialog/BudgetPlanSetupChannelDialog';

interface Props {
  onAddChannel: (channelName: string) => void;
}

export const BudgetPlanSetupChannel: FC<Props> = ({ onAddChannel }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => setIsDialogOpen(true);
  const handleClose = () => setIsDialogOpen(false);

  return (
    <>
      <div>
        <div className='font-semibold text-lg mt-4'>
          Setup channels
        </div>

        <div className='flex justify-between'>
          <div className='mt-4 font-normal text-gray w-5/12'>
            Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact
            with
            the help of tips and insights.
          </div>

          <BudgetPlanAddChannelButton onClick={handleOpen} />
        </div>
      </div>

      <BudgetPlanSetupChannelDialog
        isOpen={isDialogOpen}
        onAddChannel={onAddChannel}
        onClose={handleClose}
      />
    </>
  );
};

