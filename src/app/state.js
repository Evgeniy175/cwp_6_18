import { action, observable, computed } from 'mobx';

import { USERS } from './users/index.jsx';
import { TICKETS, SEVERITY_TYPES } from './tickets/constants';
import { MESSAGES } from './messages/constants';
import { HISTORY, ACTIONS } from './left-panel/history/constants';

class AppState {
  @observable users = USERS;
  @observable tickets = TICKETS;
  @observable messages = MESSAGES;
  @observable history = HISTORY;

  @observable selectedTicket = TICKETS[0];
  @observable currentUser = USERS[0];

  @action
  setSelectedTicket(value) {
    this.selectedTicket = value;
  }

  @action
  addMessage(value) {
    this.messages.push(value);

    const historyMessage = {
      id: this.history[this.history.length - 1].id + 1,
      action: ACTIONS.COMMENTED,
      userId: value.authorId,
      ticketId: value.ticketId
    };

    this.addToHistory(historyMessage);
  }

  @action
  addToHistory(value) {
    this.history.push(value);
  }

  @action
  setSeverity(id, newSeverity) {
    const idx = this.tickets.findIndex(t => t.id === id);

    if (idx === -1) return;

    this.tickets[idx].severity = newSeverity;

    const historyMessage = {
      id: this.history[this.history.length - 1].id + 1,
      action: ACTIONS.SET_SEVERITY,
      userId: this.currentUser.id,
      ticketId: id
    };

    this.addToHistory(historyMessage);
  }

  @action
  closeTicket(id) {
    const idx = this.tickets.findIndex(t => t.id === id);

    if (idx === -1) return;

    this.tickets[idx].isOpen = false;

    const historyMessage = {
      id: this.history[this.history.length - 1].id + 1,
      action: ACTIONS.TICKET_CLOSED,
      userId: this.currentUser.id,
      ticketId: id
    };

    this.addToHistory(historyMessage);
  }
}

export default AppState;
