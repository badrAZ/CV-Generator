import PropTypes from 'prop-types'
import React from 'react'

const Hobbies = ({ hobbies }) => (
  <div>
    <b>{hobbies.join(', ')}</b>
  </div>
)
Hobbies.propTypes = {
  hobbies: PropTypes.arrayOf(PropTypes.string),
}

export { Hobbies as default }
