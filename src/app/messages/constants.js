import moment from 'moment-timezone';

export const MESSAGES = [
  {
    id: 1,
    authorId: 1,
    ticketId: 2,
    text: 'Just do this...',
    createdAt: moment().subtract(1, 'day').format()
  }, {
    id: 2,
    authorId: 1,
    ticketId: 2,
    text: 'Do this immediately!',
    createdAt: moment().subtract(3, 'hour').format()
  }, {
    id: 3,
    authorId: 3,
    ticketId: 2,
    text: 'I will be fired...',
    createdAt: moment().subtract(50, 'second').format()
  }, {
    id: 4,
    authorId: 1,
    ticketId: 1,
    text: 'Hohoho, it\'s your task...',
    createdAt: moment().subtract(5, 'hour').format()
  }
];
