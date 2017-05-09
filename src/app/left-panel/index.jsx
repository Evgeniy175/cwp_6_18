import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';

import Stats from './stats/index.jsx';
import History from './history/index.jsx';

@observer
class LeftPanel extends Component {
  render() {
    const tickets = this.props.tickets;
    const users = this.props.users;
    const history = this.props.history;

    this.mapData(users, tickets, history);

    return (
      <Col xs={4}>
        <Grid fluid={true}>
          <Row>
            <Stats tickets={tickets} />
          </Row>
          <Row>
            <History users={users} tickets={tickets} history={history} />
          </Row>
        </Grid>
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

  LeftPanel.propTypes = {
  users: React.PropTypes.array.isRequired,
  tickets: React.PropTypes.array.isRequired,
  history: React.PropTypes.array.isRequired
};

export default LeftPanel;


