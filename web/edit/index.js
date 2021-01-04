import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React from 'react'

import { getData, setData } from '../controller'

import Formations from './formations'
import General from './general'
import Xps from './xps'

const printCv = () => {
  const page = document.getElementsByClassName('page')[0].innerHTML
  const tmpPage = `<html><head><title>CV</title></head><body>${page}</body></html>`

  const realPage = document.body.innerHTML
  document.body.innerHTML = tmpPage

  window.print()

  document.body.innerHTML = realPage
}

export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._getData()
  }

  _getData() {
    getData().then(data => {
      if (data === undefined) {
        data = {
          general: {},
          xp: [],
          formations: [],
          skills: {},
          languages: [],
          hobbies: [],
        }
      }
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

  _onSubmit = () => {
    setData(this.state.data).then(() => this._getData(), console.error)
  }

  render() {
    const { data } = this.state
    if (data === undefined) {
      return null
    }

    const { formations, general, xp } = data
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
            <Form.Row className='mt-2 text-md-center'>
              <Col>
                <Button variant='success' type='submit'>
                  Save
                </Button>{' '}
                <Button variant='primary' onClick={printCv}>
                  Print
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}
