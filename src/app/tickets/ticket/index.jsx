import React, { Component } from 'react';
import { observer } from 'mobx-react';

import moment from 'moment-timezone';

@observer
class Ticket extends Component {
  componentWillMount() {
    this.onClick = this.onClickHandler.bind(this);
  }

  onClickHandler(ticket) {
    this.props.onClick(this.props.ticket);
  }

  render() {
    const ticket = this.props.ticket;

    return (
      <div className='ticket' onClick={this.onClick}>
        <div className='content'>
          <div className='author'>{ticket.author.name}</div>
          <div className='title'>
            <div className={`severity ${ticket.severity}`} />
            <div className='text'>{ticket.title}</div>
          </div>
          <div className='description'>{ticket.description}</div>
        </div>
        <div className='created-at'>{moment(ticket.createdAt).fromNow()}</div>
      </div>
    );
  }
}

Ticket.propTypes = {
  ticket: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Ticket;


