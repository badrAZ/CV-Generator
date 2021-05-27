import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

import { Display } from './'

export default class ToggleDisplay extends React.Component {
  state = {
    displayed: this.props.displayed,
  }

  _toggleDisplayed = () =>
    this.setState(state => ({
      displayed: !state.displayed,
    }))

  render() {
    const { children, title } = this.props
    const { displayed } = this.state
    const Toggle = displayed ? FaMinus : FaPlus
    return [
      <Form.Row className='mt-2' key='toggle'>
        <Col>
          <h5>
            {title}{' '}
            <Toggle
              onClick={this._toggleDisplayed}
              style={{ cursor: 'pointer' }}
            />
          </h5>
        </Col>
      </Form.Row>,
      <Display Tag={Form.Row} predicate={displayed} key='children'>
        {children}
      </Display>,
    ]
  }
}
ToggleDisplay.defaultProps = {
  displayed: false,
}
ToggleDisplay.propTypes = {
  children: PropTypes.node,
  displayed: PropTypes.bool,
  title: PropTypes.string.isRequired,
}
