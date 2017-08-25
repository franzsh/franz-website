'use strict'

import PropTypes from 'prop-types'

const IconBase = ({ size = '24px', color, customStyle, children }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={customStyle}
  >
    {children}

    <style jsx>{`
      svg {
        vertical-align: middle;
      }
    `}</style>
  </svg>

IconBase.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.object
}

export default IconBase
