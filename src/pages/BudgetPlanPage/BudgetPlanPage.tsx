import { FC, useState } from 'react';

import styles from './BudgetPlanPage.module.scss';
import { BudgetPlanSetupChannel, BudgetPlanSetupTabsSelector } from './components';

export const BudgetPlanPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={styles.root}>
      <div className='text-2xl font-medium'>
        Build your budget plan
      </div>

      <BudgetPlanSetupChannel />

      <BudgetPlanSetupTabsSelector activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};
