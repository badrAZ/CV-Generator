import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import { ResponsiveCol } from 'common'

const Formations = ({ formations }) => (
  <Container fluid>
    {formations.map(formation => (
      <Row key={formation.diploma}>
        <ResponsiveCol size={1}>{formation.year}</ResponsiveCol>
        <ResponsiveCol size={7}>
          <b>{formation.diploma}</b>
        </ResponsiveCol>
        <ResponsiveCol className='awesome text-right' size={4}>
          {formation.school}
        </ResponsiveCol>
      </Row>
    ))}
  </Container>
)
Formations.propTypes = {
  formations: PropTypes.arrayOf({
    year: PropTypes.number,
    diploma: PropTypes.string,
    school: PropTypes.string,
  }),
}

export { Formations as default }
