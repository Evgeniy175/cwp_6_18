import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observable, computed, toJS } from 'mobx';
import { Grid, Row, Col, Button } from 'react-bootstrap';

@observer
class AddMessage extends Component {
  @observable value = '';

  componentWillMount() {
    this.onChange = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setValue(e.target.value);
  }

  @action
  setValue(value) {
    this.value = value;
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.props.onSubmit(this.value);
  }

  render() {
    return (
      <div className='add-message'>
        <Grid fluid={true}>
          <Row>
            <Col xs={8} className='column-container'>
              <textarea onChange={this.onChange} />
            </Col>
            <Col xs={4} className='column-container'>
              <Button bsStyle='primary' bsSize='large' onClick={this.onSubmit}>Submit</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

AddMessage.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default AddMessage;


