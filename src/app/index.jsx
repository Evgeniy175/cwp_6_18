import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Grid, Row, Col } from 'react-bootstrap';

import State from './state';

import LeftPanel from './left-panel/index.jsx';
import Tickets from './tickets/index.jsx';
import Messages from './messages/index.jsx';

@observer
class App extends Component {
  componentWillMount() {
    this.state = new State();

    this.onTicketClick = this.onTicketClickHandler.bind(this);
    this.onMessageAdding = this.onMessageAddingHandler.bind(this);
  }

  onTicketClickHandler(ticket) {
    this.state.setSelectedTicket(ticket);
  }

  onMessageAddingHandler(message) {
    this.state.addMessage(message);
  }

  render() {
    const users = toJS(this.state.users);
    const tickets = toJS(this.state.tickets);
    const selectedTicket = toJS(this.state.selectedTicket);
    const currentUser = toJS(this.state.currentUser);
    const messages = toJS(this.state.messages);
    const history = toJS(this.state.history);

    return (
      <Grid className='app'>
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
