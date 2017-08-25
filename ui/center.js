'use strict'

import PropTypes from 'prop-types'
import classNames from 'classnames'

const Center = ({ children, hasHeader = true }) => {
  const cl = classNames({ 'has-header': hasHeader })

  return (
    <div className={cl}>
      {children}

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          flex-direction: row;
          min-height: 100vh;
        }

        .has-header {
          margin-top: -120px;
        }
      `}</style>
    </div>
  )
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
  hasHeader: PropTypes.bool
}

export default Center
