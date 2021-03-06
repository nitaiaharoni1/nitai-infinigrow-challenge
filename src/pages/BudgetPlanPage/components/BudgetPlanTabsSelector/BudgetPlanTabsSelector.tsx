import { FC } from 'react';

import { tabs } from 'pages/BudgetPlanPage/utils/tabs';

interface Props {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export const BudgetPlanTabsSelector: FC<Props> = ({ activeTab = 0, setActiveTab }) => {
  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex space-x-4 mt-10 text-xl font-semibold'>
      {tabs.map((tab, index) => {
        const isSelected = index === activeTab;
        return (
          <div
            key={tab.id}
            className={`cursor-pointer ${isSelected ? 'underline underline-offset-4' : 'text-gray hover:text-blue-300'}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        );
      })}

    </div>
  );
};

