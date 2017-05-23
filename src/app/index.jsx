import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Grid, Row, Col } from 'react-bootstrap';
import { ROLES } from './users/index';

import State from './state';

import AdminPanel from './admin-panel/index.jsx';
import LeftPanel from './left-panel/index.jsx';
import Tickets from './tickets/index.jsx';
import Messages from './messages/index.jsx';

@observer
class App extends Component {
  componentWillMount() {
    this.state = new State();

    this.onTicketClick = this.onTicketClickHandler.bind(this);
    this.onMessageAdding = this.onMessageAddingHandler.bind(this);
    this.onSeverityChange = this.onSeverityChangeHandler.bind(this);
    this.onTicketClose = this.onTicketCloseHandler.bind(this);
  }

  onTicketClickHandler(ticket) {
    this.state.setSelectedTicket(ticket);
  }

  onMessageAddingHandler(message) {
    this.state
    this.state.addMessage(message);
  }

  onSeverityChangeHandler(id, newSeverity) {
    this.state.setSeverity(id, newSeverity);
  }

  onTicketCloseHandler(id) {
    this.state.closeTicket(id);
  }

  render() {
    const users = toJS(this.state.users);
    const tickets = toJS(this.state.tickets);
    const selectedTicket = toJS(this.state.selectedTicket);
    const messages = toJS(this.state.messages);
    const history = toJS(this.state.history);
    const currentUser = toJS(this.state.currentUser);
    const isCurrentUserAdmin = currentUser.role === ROLES.ADMIN;

    return (
      <Grid className='app'>
        <Row>
          { isCurrentUserAdmin && <AdminPanel ticket={selectedTicket} onSeverityChange={this.onSeverityChange} onClose={this.onTicketClose} /> }
        </Row>
        <Row>
          <LeftPanel users={users} tickets={tickets} history={history} />
          <Tickets users={users} tickets={tickets} selectedTicket={selectedTicket} onTicketSelect={this.onTicketClick} />
          <Messages users={users} messages={messages} selectedTicket={selectedTicket} onMessageAdding={this.onMessageAdding} currentUser={currentUser} />
        </Row>
      </Grid>
    );
  }
}

export default App;
