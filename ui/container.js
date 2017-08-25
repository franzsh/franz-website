'use strict'

import PropTypes from 'prop-types'

const Container = ({ children, align = null }) =>
  <div className={align}>
    {children}

    <style jsx>{`
      div {
        max-width: 100%;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
      }

      .center {
        text-align: center;
      }

      .right {
        text-align: right;
      }
    `}</style>
  </div>

Container.propTypes = {
  children: PropTypes.node,
  align: PropTypes.string
}

export default Container
