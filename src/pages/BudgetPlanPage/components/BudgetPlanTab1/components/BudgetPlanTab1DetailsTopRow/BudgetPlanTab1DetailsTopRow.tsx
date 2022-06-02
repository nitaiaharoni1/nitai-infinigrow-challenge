import { FC, useEffect } from 'react';

import { Info } from 'assets';
import { TextInput } from 'components';
import { CategoryInput } from 'components/CategoryInput/CategoryInput';
import { BudgetAllocation } from 'types/enums/BudgetAllocation';
import colors from 'colors.module.scss';

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
  const handleBaseLineChange = (value: string) => {
    onBaselineChange(Number(value));
  };

  const isManualAllocation = budgetAllocation === BudgetAllocation.MANUAL;

  useEffect(() => {
    if (isManualAllocation) {
      handleBaseLineChange('');
    }
  });

  return (
    <div className='flex space-x-24'>
      {/* Budget Frequency */}

      <div>
        <div className='flex items-center space-x-2 text-gray'>
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
        <div className='flex items-center space-x-2 text-gray w-60'>
          <div style={{ color: isManualAllocation ? colors.lightBlue : colors.darkBlue }}>
            Baseline [Annual] Budget
          </div>

          <Info />
        </div>

        <TextInput
          disabled={isManualAllocation}
          onChange={handleBaseLineChange}
          type='number'
          value={isManualAllocation ? ' ' : undefined}
        />

        <div />
      </div>

      {/* Budget Allocation */}

      <div>
        <div className='flex items-center space-x-2 text-gray'>
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

