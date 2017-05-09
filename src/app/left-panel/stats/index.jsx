import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { SEVERITY_TYPES } from '../../tickets/constants';


@observer
class Stats extends Component {
  render() {
    const tickets = this.props.tickets;

    const nOfOpenedTickets = tickets.filter(ticket => ticket.isOpen).length;
    const nOfClosedTickets = tickets.filter(ticket => !ticket.isOpen).length;

    const nOfImportantTickets = tickets.filter(ticket => ticket.severity === SEVERITY_TYPES.IMPORTANT).length;
    const nOfNormalTickets = tickets.filter(ticket => ticket.severity === SEVERITY_TYPES.NORMAL).length;
    const nOfMinorTickets = tickets.filter(ticket => ticket.severity === SEVERITY_TYPES.MINOR).length;

    return (
      <div className='stats'>
        <h2 className='header'>Stats</h2>
        <div>Opened: {nOfOpenedTickets}</div>
        <div>Closed: {nOfClosedTickets}</div>
        <hr />
        <div>Imporant: {nOfImportantTickets}</div>
        <div>Normal: {nOfNormalTickets}</div>
        <div>Minor: {nOfMinorTickets}</div>
      </div>
    );
  }
}

Stats.propTypes = {
  tickets: React.PropTypes.array.isRequired
};

export default Stats;


