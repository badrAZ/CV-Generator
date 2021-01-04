import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import React from 'react'
import Row from 'react-bootstrap/Row'

import Edit from './edit'
import Preview from './preview'

const App = () => (
  <Container fluid>
    <Row>
      <Col md={6}>
        <Edit />
      </Col>
      <Col md={6}>
        <Preview />
      </Col>
    </Row>
  </Container>
)

export default App
