import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'
import React from 'react'
import TextArea from 'jodit-react'
import ToggleDisplay from 'common/toggle-display'
import { CenterBlock } from 'common'

export default class Xps extends React.Component {
  _mutateXps = cb => {
    let { onChange, xps } = this.props
    xps = [...xps]
    cb(xps)
    onChange(xps)
  }

  _addXp = () =>
    this._mutateXps(xps =>
      xps.unshift({
        company: '',
        period: '',
        poste: '',
        content: '',
        missions: [],
        technologies: [],
      })
    )

  _delXp = ({ target }) =>
    this._mutateXps(xps => xps.splice(target.dataset.key, 1))

  _onXpChange = ({ target }) =>
    this._mutateXps(xps => {
      const { key, field } = target.dataset
      xps[key][field] = target.value
    })

  _onContentChange = (event, key) =>
    this._mutateXps(xps => {
      xps[key].content = event.target.innerHTML
    })

  render() {
    return (
      <ToggleDisplay title='Expériences professionnelles'>
        <Col>
          <CenterBlock className='mb-2'>
            <Button variant='success' onClick={this._addXp}>
              Add
            </Button>
          </CenterBlock>
          <ListGroup style={{ display: 'block', width: '100%' }}>
            {this.props.xps.map(({ company, period, poste, content }, key) => (
              <ListGroup.Item key={key}>
                <Form.Control
                  className='mt-1'
                  placeHolder='Company'
                  data-field='company'
                  data-key={key}
                  onChange={this._onXpChange}
                  value={company}
                />
                <Form.Control
                  className='mt-1'
                  placeHolder='Period'
                  data-field='period'
                  data-key={key}
                  onChange={this._onXpChange}
                  value={period}
                />
                <Form.Control
                  className='mt-1'
                  placeHolder='Poste'
                  data-field='poste'
                  data-key={key}
                  onChange={this._onXpChange}
                  value={poste}
                />
                <div className='mt-1'>
                  <TextArea
                    onBlur={event => this._onContentChange(event, key)}
                    value={content}
                  />
                </div>
                <CenterBlock className='mt-2'>
                  <Button variant='danger' onClick={this._delXp} data-key={key}>
                    Delete
                  </Button>
                </CenterBlock>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </ToggleDisplay>
    )
  }
}

Xps.propTypes = {
  onChange: PropTypes.func.isRequired,
  xps: PropTypes.array,
}
Xps.defaultProps = {
  xps: [],
}
