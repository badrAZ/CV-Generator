import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import PropTypes from 'prop-types'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'

export default class General extends React.Component {
  _onChange = ({ target: { name, value } }) => {
    const { general, onChange } = this.props
    onChange({
      ...general,
      [name]: value.trim(),
    })
  }

  render() {
    const { general } = this.props
    return (
      <div>
        <Form.Row>
          <Col md={6}>
            <Form.Control
              placeHolder='First Name'
              name='firstName'
              onChange={this._onChange}
              value={general.firstName}
            />
          </Col>
          <Col md={6}>
            <Form.Control
              placeHolder='Last Name'
              name='lastName'
              onChange={this._onChange}
              value={general.lastName}
            />
          </Col>
        </Form.Row>

        <Form.Row className='mt-2'>
          <Col>
            <Form.Control
              placeHolder='Poste'
              name='poste'
              onChange={this._onChange}
              value={general.poste}
            />
          </Col>
        </Form.Row>

        <Form.Row className='mt-2'>
          <Col>
            <Form.Control
              placeHolder='Address'
              name='address'
              onChange={this._onChange}
              value={general.address}
            />
          </Col>
        </Form.Row>

        <Form.Row className='mt-2'>
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FiPhone />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeHolder='Tel'
                name='tel'
                onChange={this._onChange}
                value={general.tel}
              />
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FiMail />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeHolder='Mail'
                name='mail'
                onChange={this._onChange}
                value={general.mail}
              />
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaGithub />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeHolder='Github'
                name='github'
                onChange={this._onChange}
                value={general.github}
              />
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaLinkedin />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                id='linkedin'
                placeHolder='Linkedin'
                name='linkedin'
                onChange={this._onChange}
                value={general.linkedin}
              />
            </InputGroup>
          </Col>
        </Form.Row>
      </div>
    )
  }
}

General.propTypes = {
  onChange: PropTypes.func.isRequired,
  general: PropTypes.object,
}
