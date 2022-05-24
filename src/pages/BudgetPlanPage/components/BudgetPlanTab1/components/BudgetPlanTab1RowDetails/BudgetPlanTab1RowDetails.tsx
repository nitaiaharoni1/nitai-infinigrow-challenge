import { FC } from 'react';
import { Info } from 'assets';

interface Props {

}

export const BudgetPlanTab1RowDetails: FC<Props> = ({}) => (
  <div className={'border-2 p-8'} style={{ height: 580 }}>
    <div>
      <div>
              <div>
        Budget Frequency
      </div>
        <Info></Info>
      </div>
      {/*dropdown*/}
      <div>

      </div>
    </div>
    <div>

    </div>
  </div>
);

