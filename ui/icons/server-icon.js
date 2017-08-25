'use strict'

import PropTypes from 'prop-types'

import IconBase from './icon-base'
import { colors } from './../theme'

const Server = ({ size, color = colors.black, customStyle }) =>
  <IconBase size={size} color={color} customStyle={customStyle}>
    <rect
      x="2"
      y="2"
      width="20"
      height="8"
      rx="2"
      ry="2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <rect
      x="2"
      y="14"
      width="20"
      height="8"
      rx="2"
      ry="2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <line
      x1="6"
      y1="6"
      x2="6"
      y2="6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <line
      x1="6"
      y1="18"
      x2="6"
      y2="18"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </IconBase>

Server.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.object
}

export default Server
