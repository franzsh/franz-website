'use strict'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import { phone } from './theme'

const FeatureItem = ({ children, mobileHidden = false }) => {
  const isHidden = classNames({ 'mobile-hidden': mobileHidden })

  return (
    <div className={isHidden}>
      {children}

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0 50px;
          text-align: left;
          width: 50%;
        }

        @media ${phone} {
          div {
            width: 100%;
          }

          .mobile-hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

FeatureItem.propTypes = {
  children: PropTypes.node,
  mobileHidden: PropTypes.bool
}

export default FeatureItem
