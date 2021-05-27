import PropTypes from 'prop-types'
import React from 'react'

const Hobbies = ({ hobbies }) => (
  <div>
    <b>{hobbies}</b>
  </div>
)
Hobbies.propTypes = {
  hobbies: PropTypes.string,
}

export { Hobbies as default }
