import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import { getXpId, ResponsiveCol } from 'common'

const Xps = ({ xps }) => (
  <div>
    {xps.map(xp => (
      <Container fluid key={getXpId(xp)}>
        <Row>
          <ResponsiveCol size={5} className='subTitle'>
            {xp.company}
          </ResponsiveCol>
          <ResponsiveCol size={7} className='subTitle text-right'>
            {xp.period}
          </ResponsiveCol>
        </Row>
        <Row>
          <Col className='awesome'>{xp.poste}</Col>
        </Row>
        <Row>
          <Col>
            <p
              className='content'
              dangerouslySetInnerHTML={{
                __html: xp.content,
              }}
            />
          </Col>
        </Row>
      </Container>
    ))}
  </div>
)

Xps.propTypes = {
  xps: PropTypes.arrayOf({
    company: PropTypes.string,
    period: PropTypes.string,
    poste: PropTypes.string,
    content: PropTypes.string,
    missions: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
}

export { Xps as default }
