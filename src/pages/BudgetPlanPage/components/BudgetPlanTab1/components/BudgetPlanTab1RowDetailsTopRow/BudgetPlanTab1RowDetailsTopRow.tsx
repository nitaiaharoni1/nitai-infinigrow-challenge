import { FC } from 'react';
import { Info } from 'assets';

interface Props {

}

export const BudgetPlanTab1RowDetailsTopRow: FC<Props> = ({}) => (
  <div className={'flex space-x-24'}>
    {/* Budget Frequency */}
    <div>
      <div className={'flex items-center space-x-2 text-gray-500'}>
        <div>
        Budget Frequency
        </div>
        <Info/>
      </div>
      {/*dropdown*/}
      <div>

      </div>
    </div>
    
    
    {/* Baseline [Annual] Budget */}
    <div>
      <div className={'flex items-center space-x-2 text-gray-500'}>
        <div>
        Baseline [Annual] Budget
        </div>
        <Info/>
      </div>
      {/*dropdown*/}
      <div>

      </div>
    </div>
    
    {/* Budget Allocation */}
    <div>
      <div className={'flex items-center space-x-2 text-gray-500'}>
        <div>
        Budget Allocation
        </div>
        <Info/>
      </div>
      {/*dropdown*/}
      <div>

      </div>
    </div>
  </div>
);

