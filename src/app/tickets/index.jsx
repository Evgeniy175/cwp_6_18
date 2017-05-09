import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';

import Ticket from './ticket/index.jsx';

@observer
class Tickets extends Component {
  componentWillMount() {
    this.onTicketSelect = this.onTicketSelectHandler.bind(this);
  }

  onTicketSelectHandler(ticket) {
    this.props.onTicketSelect(ticket);
  }

  render() {
    const tickets = this.props.tickets;
    const users = this.props.users;

    this.mapUsersOnTickets(users, tickets);

    return (
      <Col className='tickets' xs={4}>
        <h2 className='header'>Tickets</h2>
        {
          tickets.map(ticket => (
            <Ticket key={`ticket_${ticket.id}_${ticket.isOpen}`} ticket={ticket} onClick={this.onTicketSelect} />
          ))
        }
      </Col>
    );
  }

  mapUsersOnTickets(users, tickets) {
    tickets.forEach(ticket => {
      ticket.author = users.find(user => user.id === ticket.authorId);
      ticket.executor = users.find(user => user.id === ticket.executorId);
    });
  }
}

Tickets.propTypes = {
  users: React.PropTypes.array.isRequired,
  tickets: React.PropTypes.array.isRequired,
  selectedTicket: React.PropTypes.object.isRequired,
  onTicketSelect: React.PropTypes.func.isRequired
};

export default Tickets;


