import { FC, useState } from 'react';

import styles from './BudgetPlanPage.module.scss';
import { BudgetPlanSetupChannel, BudgetPlanTabsSelector } from './components';
import { tabs } from './utils/tabs';

export const BudgetPlanPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [channels, setChannels] = useState<string[]>(['Paid reviews', 'Paid Ads']);

  const handleRemoveChannel = (index: number) => {
    const newChannels = [...channels];
    newChannels.splice(index, 1);
    setChannels(newChannels);
  };

  const handleAddChannel = (channelName: string) => {
    setChannels((prev) => [...prev, channelName]);
  };

  const TabTemplate = tabs[activeTab]?.template;

  return (
    <div className={styles.root}>
      <div className='text-2xl font-medium'>
        Build your budget plan
      </div>

      <BudgetPlanSetupChannel onAddChannel={handleAddChannel} />

      <BudgetPlanTabsSelector activeTab={activeTab} setActiveTab={setActiveTab} />

      <TabTemplate channels={channels} onRemoveChannel={handleRemoveChannel} />

    </div>
  );
};
