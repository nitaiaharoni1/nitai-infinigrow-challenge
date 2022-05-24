import { FC, useState } from 'react';

import { BudgetPlanTab1Row } from './components/BudgetPlanTab1Row/BudgetPlanTab1Row';
import { BudgetPlanTab1RowDetails } from './components/BudgetPlanTab1RowDetails/BudgetPlanTab1RowDetails';

interface Props {

}

export const BudgetPlanTab1: FC<Props> = ({}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  const handleExpand = () => {
    setIsExpanded((prevExpand) => !prevExpand);
  };
  
  return (
    <div className='mt-10'>
      <BudgetPlanTab1Row isExpanded={isExpanded} onClick={handleExpand}/>
      
      {isExpanded && <BudgetPlanTab1RowDetails/>}
   </div>
  );
};

