import { FC } from 'react';

import { TextInput } from 'components';
import { getMonthName } from 'utils/functions/getMonthName';

interface Props {
  monthIndex: number;
}

export const BudgetPlanTab1DetailsBreakdownMonth: FC<Props> = ({ monthIndex }) => {
  const year = new Date().toLocaleDateString('en-us', { year: 'numeric' }).toString().substr(-2);
  const monthString = getMonthName(monthIndex);
  const title = `${monthString} ${year}`;
  return (
    <div>
      <div>
        {title}
      </div>

      <TextInput currency='$' type='number' />
    </div>
  );
};

