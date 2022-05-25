import { FC } from 'react';

import { TextInput } from 'components';
import { getMonthName } from 'utils/functions/getMonthName';

interface Props {
  monthIndex: number;
  isEqual: boolean;
  value?: string;
}

export const BudgetPlanTab1DetailsBreakdownMonth: FC<Props> = ({
  monthIndex,
  isEqual,
  value,
}) => {
  const year = new Date().toLocaleDateString('en-us', { year: 'numeric' })
    .toString()
    .substr(-2);
  const monthString = getMonthName(monthIndex);
  const title = `${monthString} ${year}`;

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

