import { FC } from 'react';

import styles from './BudgetPlanPage.module.scss';
import { BudgetPlanSetupChannel } from './components';

export const BudgetPlanPage: FC = () => (
  <div className={styles.root}>
    <div>
      Build your budget plan
    </div>

    <BudgetPlanSetupChannel />
  </div>
);
