import React, { Component } from 'react';
import { observer } from 'mobx-react';

import moment from 'moment-timezone';

@observer
class Message extends Component {
  render() {
    const message = this.props.message;
    const isAuthorMessage = message.authorId === message.ticket.authorId;

    return (
      <div className={`message ${isAuthorMessage ? 'light-yellow' : 'light-green'}`}>
        <div className='head'>
          <div className='author'>{message.author.name}</div>
          <div className='created-at'>{moment(message.createdAt).fromNow()}</div>
        </div>
        <div className='text'>{message.text}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
};

export default Message;


