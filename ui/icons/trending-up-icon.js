'use strict'

import PropTypes from 'prop-types'

import IconBase from './icon-base'
import { colors } from './../theme'

const TrendingUpIcon = ({ size, color = colors.black, customStyle }) =>
  <IconBase size={size} color={color} customStyle={customStyle}>
    <polyline
      points="23 6 13.5 15.5 8.5 10.5 1 18"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <polyline
      points="17 6 23 6 23 12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </IconBase>

TrendingUpIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.object
}

export default TrendingUpIcon
