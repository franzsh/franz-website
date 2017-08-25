'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { phone } from './theme'

const Feature = ({ children, inversed = true, align = 'center' }) => {
  const featureClasses = classNames({
    inversed,
    center: align === 'center'
  })

  return (
    <div className={featureClasses}>
      {children}

      <style jsx>{`
        div {
          display: flex;
          height: 100%;
          flex-wrap: wrap;
        }

        .center {
          height: 100vh;
          align-items: center;
        }

        @media ${phone} {
          .inversed {
            align-items: start;
            flex-direction: column-reverse;
          }

          .center {
            height: auto;
            padding-top: 50px;
            padding-bottom: 50px;
          }
        }
      `}</style>
    </div>
  )
}

Feature.propTypes = {
  children: PropTypes.node,
  inversed: PropTypes.bool,
  align: PropTypes.string
}

export default Feature
