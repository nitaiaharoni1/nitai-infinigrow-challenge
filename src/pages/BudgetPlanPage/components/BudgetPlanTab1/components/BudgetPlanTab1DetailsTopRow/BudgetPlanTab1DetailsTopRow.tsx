import { FC } from 'react';

import { Info } from 'assets';
import { TextInput } from 'components';
import { CategoryInput } from 'components/CategoryInput/CategoryInput';
import { BudgetAllocation } from 'types/enums/BudgetAllocation';

interface Props {
  onBudgetAllocationChange: (key: BudgetAllocation) => void;
  budgetAllocation: BudgetAllocation;
  onBaselineChange: (value: number) => void;
}

export const BudgetPlanTab1DetailsTopRow: FC<Props> = ({
  onBudgetAllocationChange,
  budgetAllocation,
  onBaselineChange,
}) => {
  const a;

  const handleBaseLineChange = (value: string) => {
    onBaselineChange(+value);
  };

  return (
    <div className='flex space-x-24'>
      {/* Budget Frequency */}

      <div>
        <div className='flex items-center space-x-2 text-gray-500'>
          <div>
            Budget Frequency
          </div>

          <Info />
        </div>

        {/* dropdown */}

        <div />
      </div>

      {/* Baseline [Annual] Budget */}

      <div>
        <div className='flex items-center space-x-2 text-gray-500 w-60'>
          <div>
            Baseline [Annual] Budget
          </div>

          <Info />
        </div>

        <TextInput onChange={handleBaseLineChange} type='number' />

        <div />
      </div>

      {/* Budget Allocation */}

      <div>
        <div className='flex items-center space-x-2 text-gray-500'>
          <div>
            Budget Allocation
          </div>

          <Info />
        </div>

        <CategoryInput
          onChange={onBudgetAllocationChange as (key: string) => void}
          options={
            [
              {
                key: 'equal',
                label: 'Equal',
              },
              {
                key: 'manual',
                label: 'Manual',
              },
            ]
          }
        />

        <div />
      </div>
    </div>
  );
};

