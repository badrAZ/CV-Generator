import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

const Languages = ({ languages }) => (
  <Container fluid>
    <Row>
      {languages.map(lg => (
        <Col key={lg.language}>
          <b>{lg.language}:</b> {lg.level}
        </Col>
      ))}
    </Row>
  </Container>
)
Languages.propTypes = {
  languages: PropTypes.arrayOf({
    language: PropTypes.string,
    level: PropTypes.string,
  }),
}
Languages.defaultProps = {
  languages: [],
}

export { Languages as default }
