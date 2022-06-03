import moment from 'moment';

import { BudgetFrequency } from 'types/enums/BudgetFrequency';

export const breakdownOptions = {
  [BudgetFrequency.MONTHLY]: {
    range: 12,
    getTitle: (index: number) => moment().month(index).format('MMM YY'),
  },
  [BudgetFrequency.QUARTERLY]: {
    range: 4,
    getTitle: (index: number) => moment().quarter(index + 1).format('Q'),
  },
  [BudgetFrequency.ANNUALLY]: {
    range: 1,
    getTitle: () => moment().format('YYYY'),
  },
};
