import moment from 'moment-timezone';

export const SEVERITY_TYPES = {
  IMPORTANT: 'red',
  NORMAL: 'yellow',
  MINOR: 'green'
};

export const TICKETS = [
  {
    id: 1,
    authorId: 1,
    executorId: 2,
    title: 'Finish him!',
    description: 'You should find out how to finish this sem',
    createdAt: moment().subtract(10, 'day').format(),
    isOpen: true,
    severity: SEVERITY_TYPES.NORMAL
  }, {
    id: 2,
    authorId: 1,
    executorId: 3,
    title: 'Do lab no.18',
    description: 'Just finish lab no.18',
    createdAt: moment().subtract(5, 'day').format(),
    isOpen: true,
    severity: SEVERITY_TYPES.IMPORTANT
  }
];
