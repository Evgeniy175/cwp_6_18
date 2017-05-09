import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';

import { ACTIONS } from '../constants';

const CONTENT_RENDERS = {};

CONTENT_RENDERS[ACTIONS.COMMENTED] = (user, ticket) => {
  return (
    <div className='content'>
      {user.name} commented on ticket #{ticket.id}
    </div>
  );
};
CONTENT_RENDERS[ACTIONS.SET_SEVERITY] = (user, ticket) => {
  return (
    <div className='content'>
      {user.name} set severity to {ticket.severity}
    </div>
  );
};
CONTENT_RENDERS[ACTIONS.TICKET_ADDED] = (user, ticket) => {
  return (
    <div className='content'>
      {user.name} added ticket #{ticket.id}
    </div>
  );
};

@observer
class HistoryItem extends Component {
  render() {
    const item = this.props.item;
    const user = item.user;
    const ticket = item.ticket;

    return (
      <div className='item'>
        <div className='image'>
          <img src={user.avatar} />
        </div>
        {CONTENT_RENDERS[item.action](user, ticket)}
      </div>
    );
  }
}

HistoryItem.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default HistoryItem;


