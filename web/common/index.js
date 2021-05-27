import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import React from 'react'

export const isDefined = v => v != null && v !== ''

export const Display = ({ children, predicate, Tag = 'div', ...props }) =>
  predicate ? (
    <Tag {...props}>
      {typeof children === 'function' ? children() : children}
    </Tag>
  ) : null
Display.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.func]),
  predicate: PropTypes.bool,
  Tag: PropTypes.node,
}

export const getXpId = xp => `${xp.company}|${xp.period}|${xp.poste}`

export const ResponsiveCol = ({ children, size, ...props }) => (
  <Col lg={size} md={size} sm={size} xl={size} xs={size} {...props}>
    {children}
  </Col>
)
ResponsiveCol.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
}

export const CenterBlock = ({ children, className }) => (
  <div className={`${className} text-center`}>{children}</div>
)
CenterBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
