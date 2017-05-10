import { action, observable, computed } from 'mobx';

import { USERS } from './users/index.jsx';
import { TICKETS, SEVERITY_TYPES } from './tickets/constants';
import { MESSAGES } from './messages/constants';
import { HISTORY } from './left-panel/history/constants';

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
  }

  @action
  closeTicket(id) {
    const idx = this.tickets.findIndex(t => t.id === id);

    if (idx === -1) return;

    this.tickets[idx].isOpen = false;
  }
}

export default AppState;
