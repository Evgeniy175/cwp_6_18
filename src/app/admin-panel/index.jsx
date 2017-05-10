import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col, ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { SEVERITY_TYPES } from '../tickets/constants';

@observer
class AdminPanel extends Component {
  componentWillMount() {
    this.onSeverityChange = this.onSeverityChangeHandler.bind(this);
    this.onClose = this.onCloseHandler.bind(this);
  }

  onSeverityChangeHandler(newSeverity) {
    this.props.onSeverityChange(this.props.ticket.id, newSeverity);
  }

  onCloseHandler() {
    this.props.onClose(this.props.ticket.id);
  }

  render() {
    return (
      <Col xs={12} className='admin-panel text-center'>
        <ButtonGroup>
          <DropdownButton title='Severity' id="bg-nested-dropdown">
            <MenuItem eventKey='1' onClick={() => {this.onSeverityChange(SEVERITY_TYPES.IMPORTANT)}}>Important</MenuItem>
            <MenuItem eventKey='2' onClick={() => {this.onSeverityChange(SEVERITY_TYPES.NORMAL)}}>Normal</MenuItem>
            <MenuItem eventKey='3' onClick={() => {this.onSeverityChange(SEVERITY_TYPES.MINOR)}}>Minor</MenuItem>
          </DropdownButton>
          <Button onClick={this.onClose}>Close</Button>
        </ButtonGroup>
      </Col>
    );
  }

  mapData(users, tickets, history) {
    history.forEach(item => {
      item.user = users.find(user => user.id === item.userId);
      item.ticket = tickets.find(ticket => ticket.id === item.ticketId);
    });
  }
}

AdminPanel.propTypes = {
  ticket: React.PropTypes.object.isRequired,
  onSeverityChange: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired
};

export default AdminPanel;


