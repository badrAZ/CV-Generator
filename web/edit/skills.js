import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'
import React from 'react'
import ToggleDisplay from 'common/toggle-display'
import { AiFillCloseCircle } from 'react-icons/ai'
import { CenterBlock } from 'common'

export default class Skills extends React.Component {
  _mutateSkills = cb => {
    let { onChange, skills } = this.props
    skills = [...skills]
    cb(skills)
    onChange(skills)
  }

  _addSkill = () =>
    this._mutateSkills(skills =>
      skills.unshift({
        domain: '',
        value: '',
      })
    )

  _onSkillChange = ({ target }) =>
    this._mutateSkills(skills => {
      const { key, field } = target.dataset
      skills[key][field] = target.value
    })

  _delSkill = ({ target }) =>
    this._mutateSkills(skills => skills.splice(target.dataset.key, 1))

  render() {
    return (
      <ToggleDisplay title='Domaines de connaissances'>
        <Col>
          <CenterBlock className='mb-2'>
            <Button variant='success' onClick={this._addSkill}>
              Add
            </Button>
          </CenterBlock>

          <ListGroup style={{ display: 'block', width: '100%' }}>
            {this.props.skills.map(({ domain, value }, key) => (
              <ListGroup.Item key={key}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Domaine</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    data-field='domain'
                    data-key={key}
                    onChange={this._onSkillChange}
                    value={domain}
                  />

                  <InputGroup.Prepend>
                    <InputGroup.Text>Technologies</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    data-field='value'
                    data-key={key}
                    onChange={this._onSkillChange}
                    value={value}
                  />

                  <InputGroup.Append>
                    <InputGroup.Text
                      className='text-danger'
                      onClick={this._delSkill}
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
      </ToggleDisplay>
    )
  }
}
Skills.propTypes = {
  onChange: PropTypes.func.isRequired,
  skills: PropTypes.array,
}
Skills.defaultProps = {
  skills: [],
}
