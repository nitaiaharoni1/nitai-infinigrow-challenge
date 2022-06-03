import moment from 'moment';
import { FC } from 'react';

import { TextInput } from 'components';
import { breakdownOptions } from 'pages/BudgetPlanPage/utils/breakdownOptions';
import { BudgetFrequency } from 'types/enums/BudgetFrequency';

interface Props {
  index: number;
  isEqual: boolean;
  baseline: number;
  budgetFrequency: BudgetFrequency;
}

export const BudgetPlanTab1DetailsBreakdownOption: FC<Props> = ({
  index,
  isEqual,
  baseline,
  budgetFrequency,
}) => {
  const breakdownOption = breakdownOptions[budgetFrequency];
  const title = breakdownOptions[budgetFrequency].getTitle(index);
  const value = isEqual ? (baseline / breakdownOption.range).toFixed(1) : undefined;

  return (
    <div>
      <div>
        {title}
      </div>

      <TextInput
        currency='$'
        disabled={isEqual}
        type='number'
        value={value?.toString()}
      />
    </div>
  );
};

