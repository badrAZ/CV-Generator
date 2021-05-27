import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import React from 'react'

import { getData, setData } from '../controller'

import Formations from './formations'
import General from './general'
import Languages from './languages'
import Skills from './skills'
import Xps from './xps'
import Hobbies from './hobbies'

export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._getData()
  }

  _getData() {
    getData(this.props.tmp).then(data => {
      this.setState({
        data,
      })
    }, console.error)
  }

  _onGeneralChange = general => {
    this.setState(state => ({
      data: {
        ...state.data,
        general,
      },
    }))
  }

  _onXpsChange = xp => {
    this.setState(state => ({
      data: {
        ...state.data,
        xp,
      },
    }))
  }

  _onFormationsChange = formations => {
    this.setState(state => ({
      data: {
        ...state.data,
        formations,
      },
    }))
  }

  _onSkillsChange = skills => {
    this.setState(state => ({
      data: {
        ...state.data,
        skills,
      },
    }))
  }

  _onLanguagesChange = languages => {
    this.setState(state => ({
      data: {
        ...state.data,
        languages,
      },
    }))
  }

  _onHobbiesChange = hobbies => {
    this.setState(state => ({
      data: {
        ...state.data,
        hobbies,
      },
    }))
  }

  _onSubmit = () => {
    setData(this.state.data, this.props.tmp).then(
      () => this._getData(),
      console.error
    )
  }

  render() {
    const { data = {} } = this.state
    const { formations, general, hobbies, languages, skills, xp } = data
    return (
      <Card className='mt-3'>
        <Card.Header className='text-center'>
          <h3>Edit</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this._onSubmit}>
            <General general={general} onChange={this._onGeneralChange} />
            <Xps xps={xp} onChange={this._onXpsChange} />
            <Formations
              formations={formations}
              onChange={this._onFormationsChange}
            />
            <Skills skills={skills} onChange={this._onSkillsChange} />
            <Languages
              languages={languages}
              onChange={this._onLanguagesChange}
            />
            <Hobbies hobbies={hobbies} onChange={this._onHobbiesChange} />
            <Form.Row className='mt-2 text-md-center'>
              <Col>
                <Button variant='success' type='submit'>
                  Save
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}
Edit.propTypes = {
  tmp: PropTypes.bool,
}
