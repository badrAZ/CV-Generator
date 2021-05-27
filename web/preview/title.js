import PropTypes from 'prop-types'
import React from 'react'

const Title = ({ title }) => (
  <div className='title ruleWrapper'>
    <span className='awesome'>{title.slice(0, 3)}</span>
    {title.slice(3)} <hr className='rule' />
  </div>
)
Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export { Title as default }
