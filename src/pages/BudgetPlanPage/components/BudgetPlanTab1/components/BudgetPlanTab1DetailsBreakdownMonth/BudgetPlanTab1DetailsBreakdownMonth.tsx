import moment from 'moment';
import { FC } from 'react';

import { TextInput } from 'components';

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
  const title = moment().month(monthIndex).format('MMM YY');

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

