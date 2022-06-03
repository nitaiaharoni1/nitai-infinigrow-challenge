import { FC, useState } from 'react';

import { BudgetPlanSetupChannel, BudgetPlanTabsSelector } from './components';
import { defaultChannels } from './utils/defaultChannels';
import { tabs } from './utils/tabs';

export const BudgetPlanPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [channels, setChannels] = useState<string[]>(defaultChannels);

  const handleRemove = (index: number) => {
    const newChannels = [...channels];
    newChannels.splice(index, 1);
    setChannels(newChannels);
  };

  const handleEdit = (index: number, newTitle: string) => {
    const newChannels = channels.map((channel, i) => (i === index ? newTitle : channel));
    setChannels(newChannels);
  };

  const handleAdd = (name: string) => {
    setChannels((prev) => [...prev, name]);
  };

  const TabTemplate = tabs[activeTab]?.template;

  return (
    <div>
      <div className='text-2xl font-medium'>
        Build your budget plan
      </div>

      <BudgetPlanSetupChannel onAdd={handleAdd} />

      <BudgetPlanTabsSelector
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <TabTemplate
        channels={channels}
        onEdit={handleEdit}
        onRemove={handleRemove}
      />

    </div>
  );
};
