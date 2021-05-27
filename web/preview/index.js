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

    getData(this.props.tmp).then(data => {
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
        <Row className='mt-3'>
          <Col>
            <Title title='Expériences professionnelles' />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Xps xps={data.xp} />
        </Row>
        <Row>
          <Col>
            <Title title='Formations' />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Formations formations={data.formations} />
        </Row>
        <Row className='mt-1'>
          <Col>
            <Title title='Domaines de connaissances' />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Skills skills={data.skills} />
        </Row>
        <Row className='mt-1'>
          <Col>
            <Title title='Langues' />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Container fluid>
            <Row>
              <Languages languages={data.languages} />
            </Row>
          </Container>
        </Row>
        <Row className='mt-1'>
          <Col>
            <Title title='Centres d’intérêts' />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <Hobbies hobbies={data.hobbies} />
          </Col>
        </Row>
      </Container>
    )
  }
}
