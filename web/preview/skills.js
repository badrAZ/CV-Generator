import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import { ResponsiveCol } from 'common'

const Skills = ({ skills }) => (
  <Container fluid>
    {skills.map(({ domain, value }) => (
      <Row key={domain}>
        <ResponsiveCol className='text-right' size={3}>
          <b>{domain}</b>
        </ResponsiveCol>
        <Col>{value}</Col>
      </Row>
    ))}
  </Container>
)
Skills.propTypes = {
  skills: PropTypes.arrayOf({
    domaine: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }),
}
Skills.defaultProps = {
  skills: [],
}

export { Skills as default }
