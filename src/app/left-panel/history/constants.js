export const ACTIONS = {
  COMMENTED: 'commented',
  SET_SEVERITY: 'set severity',
  TICKET_ADDED: 'ticket added',
  TICKET_CLOSED: 'ticket closed'
};

export const HISTORY = [
  {
    id: 1,
    action: ACTIONS.TICKET_ADDED,
    userId: 1,
    ticketId: 1
  }, {
    id: 2,
    action: ACTIONS.TICKET_ADDED,
    userId: 1,
    ticketId: 2
  },
];
