/* eslint-disable react/prop-types */

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { getData } from '../controller'

import Formations from './formations'
import General from './general'
import Hobbies from './hobbies'
import Languages from './languages'
import Skills from './skills'
import Title from './title'
import Xps from './xps'

export default class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    getData().then(data => {
      this.setState({
        data,
      })
    }, console.error)
  }

  render() {
    const { data } = this.state
    if (data === undefined) {
      return null
    }

    return (
      <Container className='page' fluid>
        <Row>
          <Col className='text-center'>
            <General general={data.general} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title title='Expériences professionnelles' />
          </Col>
        </Row>
        <Row>
          <Xps xps={data.xp} />
        </Row>
        <Row>
          <Col>
            <Title title='Formations' />
          </Col>
        </Row>
        <Row>
          <Formations formations={data.formations} />
        </Row>
        <Row>
          <Col>
            <Title title='Domaines de connaissances' />
          </Col>
        </Row>
        <Row>
          <Skills skills={data.skills} />
        </Row>
        <Row>
          <Col>
            <Title title='Langues' />
          </Col>
        </Row>
        <Row>
          <Container fluid>
            <Row>
              <Languages languages={data.languages} />
            </Row>
          </Container>
        </Row>
        <Row>
          <Col>
            <Title title='Centres d’intérêts' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Hobbies hobbies={data.hobbies} />
          </Col>
        </Row>
      </Container>
    )
  }
}
