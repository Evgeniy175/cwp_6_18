import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';

import Item from './item/index.jsx';

@observer
class History extends Component {
  render() {
    const tickets = this.props.tickets;
    const users = this.props.users;
    const history = this.props.history;

    this.mapData(users, tickets, history);

    return (
      <div className='history'>
        <h2 className='header'>History</h2>
        {
          history.map(item => (
            <Item key={`history_${item.id}`} item={item} />
          ))
        }
      </div>
    );
  }

  mapData(users, tickets, history) {
    history.forEach(item => {
      item.user = users.find(user => user.id === item.userId);
      item.ticket = tickets.find(ticket => ticket.id === item.ticketId);
    });
  }
}

History.propTypes = {
  users: React.PropTypes.array.isRequired,
  tickets: React.PropTypes.array.isRequired,
  history: React.PropTypes.array.isRequired
};

export default History;


