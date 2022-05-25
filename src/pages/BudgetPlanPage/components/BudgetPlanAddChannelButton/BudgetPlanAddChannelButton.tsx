import { FC } from 'react';

interface Props {
  onClick: () => void;
}

export const BudgetPlanAddChannelButton: FC<Props> = ({ onClick }) => (
  <div
    className='border-2 flex place-items-center px-2 h-10 w-32 cursor-pointer hover:shadow'
    onClick={onClick}
  >
    + Add Channel
  </div>
);

