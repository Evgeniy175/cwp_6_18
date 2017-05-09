import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Grid, Row, Col } from 'react-bootstrap';

import moment from 'moment-timezone';

import Message from './message/index.jsx';
import AddMessage from './add-message/index.jsx';

@observer
class Messages extends Component {
  componentWillMount() {
    this.onTicketSelect = this.onTicketSelectHandler.bind(this);
    this.onMessageAdding = this.onMessageAddingHandler.bind(this);
  }

  onTicketSelectHandler(ticket) {
    this.props.onTicketSelect(ticket);
  }

  onMessageAddingHandler(text) {
    const message = this.buildNewMessage(text);
    this.props.onMessageAdding(message);
  }

  buildNewMessage(text) {
    const messages = this.props.messages;
    const id = messages[messages.length - 1].id + 1;
    const authorId = this.props.currentUser.id;
    const ticketId = this.props.selectedTicket.id;

    return {
      id,
      authorId,
      ticketId,
      text,
      createdAt: moment().format()
    }
  }

  render() {
    const users = this.props.users;
    const ticket = this.props.selectedTicket;
    const messages = this.props.messages.filter(message => message.ticketId === ticket.id);

    this.mapData(users, ticket, messages);

    return (
      <Col className='messages' xs={4}>
        <h2 className='header'>{ticket.author.name} ({ticket.author.email}) to {ticket.executor.name}</h2>
        {
          messages.map(message => (
            <Message key={`message_${message.id}`} message={message} />
          ))
        }
        <AddMessage onSubmit={this.onMessageAdding} />
      </Col>
    );
  }

  mapData(users, ticket, messages) {
    ticket.author = users.find(user => user.id === ticket.authorId);
    ticket.executor = users.find(user => user.id === ticket.executorId);

    messages.forEach(message => {
      message.author = users.find(user => user.id === message.authorId);
      message.ticket = ticket;
    });
  }
}

Messages.propTypes = {
  users: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired,
  selectedTicket: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object.isRequired,
  onMessageAdding: React.PropTypes.func.isRequired
};

export default Messages;


