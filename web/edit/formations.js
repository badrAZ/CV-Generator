import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Display, CenterBlock } from 'common'
import { FaCalendarAlt, FaPlus, FaMinus, FaSchool } from 'react-icons/fa'
import { GiDiploma } from 'react-icons/gi'

export default class Formations extends React.Component {
  state = {
    displayed: false,
  }

  _toggleDisplayed = () =>
    this.setState(state => ({
      displayed: !state.displayed,
    }))

  _mutateFormations = cb => {
    let { onChange, formations } = this.props
    formations = [...formations]
    cb(formations)
    onChange(formations)
  }

  _addFormation = () =>
    this._mutateFormations(formations =>
      formations.unshift({
        year: 0,
        diploma: '',
        school: '',
      })
    )

  _onFormationChange = ({ target }) =>
    this._mutateFormations(formations => {
      const { key, field } = target.dataset
      formations[key][field] = target.value
    })

  _delFormation = ({ target }) =>
    this._mutateFormations(formations =>
      formations.splice(target.dataset.key, 1)
    )

  render() {
    const { displayed } = this.state
    const Toggle = displayed ? FaMinus : FaPlus
    return (
      <div>
        <Form.Row className='mt-2'>
          <Col>
            <h5>
              Formations{' '}
              <Toggle
                onClick={this._toggleDisplayed}
                style={{ cursor: 'pointer' }}
              />
            </h5>
          </Col>
        </Form.Row>

        <Display Tag={Form.Row} predicate={displayed}>
          <Col>
            <CenterBlock className='mb-2'>
              <Button variant='success' onClick={this._addFormation}>
                Add
              </Button>
            </CenterBlock>
            <ListGroup style={{ display: 'block', width: '100%' }}>
              {this.props.formations.map(({ year, diploma, school }, key) => (
                <ListGroup.Item key={key}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FaCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      data-field='year'
                      data-key={key}
                      onChange={this._onFormationChange}
                      value={year}
                    />

                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <GiDiploma />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      data-field='diploma'
                      data-key={key}
                      onChange={this._onFormationChange}
                      value={diploma}
                    />

                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FaSchool />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      data-field='school'
                      data-key={key}
                      onChange={this._onFormationChange}
                      value={school}
                    />

                    <InputGroup.Append>
                      <InputGroup.Text
                        className='text-danger'
                        onClick={this._delFormation}
                        data-key={key}
                        style={{ cursor: 'pointer' }}
                      >
                        <AiFillCloseCircle />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Display>
      </div>
    )
  }
}
Formations.propTypes = {
  onChange: PropTypes.func.isRequired,
  formations: PropTypes.object,
}
