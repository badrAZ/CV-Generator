import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import React from 'react'
import ToggleDisplay from 'common/toggle-display'

export default class Hobbies extends React.Component {
  _onHobbiesChange = ({ target }) => this.props.onChange(target.value)

  render() {
    return (
      <ToggleDisplay title='Centres d’intérêts '>
        <Col>
          <Form.Control
            onChange={this._onHobbiesChange}
            value={this.props.hobbies}
          />
        </Col>
      </ToggleDisplay>
    )
  }
}
Hobbies.propTypes = {
  onChange: PropTypes.func.isRequired,
  hobbies: PropTypes.string,
}
