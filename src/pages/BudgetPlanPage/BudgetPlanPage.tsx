import { FC, useState } from 'react';

import styles from './BudgetPlanPage.module.scss';
import { BudgetPlanSetupChannel, BudgetPlanTabsSelector } from './components';
import { tabs } from './utils/tabs';

export const BudgetPlanPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const TabTemplate = tabs[activeTab]?.template;

  return (
    <div className={styles.root}>
      <div className='text-2xl font-medium'>
        Build your budget plan
      </div>

      <BudgetPlanSetupChannel />

      <BudgetPlanTabsSelector activeTab={activeTab} setActiveTab={setActiveTab} />

      <TabTemplate />

    </div>
  );
};
