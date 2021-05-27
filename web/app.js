import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'

import Edit from './edit'
import Preview from './preview'

const generateKey = () => Math.random(8).toString(16).slice(2)

function App() {
  const [tmp, toggleTmp] = useState(false)
  const [editKey, setEditKey] = useState(generateKey())
  const [previewKey, setPreviewKey] = useState(generateKey())

  return (
    <Container fluid>
      <Row className='mt-2 d-print-none'>
        <Col>
          <label>
            <b>Temporal</b>{' '}
            <input
              type='checkbox'
              onChange={() => {
                toggleTmp(!tmp)
                setEditKey(generateKey())
                setPreviewKey(generateKey())
              }}
              checked={tmp}
            />
          </label>
        </Col>
      </Row>
      <Row className='d-print-none'>
        <Col md={6}>
          <Edit tmp={tmp} key={editKey} />
        </Col>
        <Col md={6}>
          <Preview tmp={tmp} key={previewKey} />
        </Col>
      </Row>
      <Row className='d-none d-print-block'>
        <Preview tmp={tmp} key={previewKey} />
      </Row>
    </Container>
  )
}

export default App
