'use strict'

import PropTypes from 'prop-types'
import classNames from 'classnames'

const Img = ({ src, shadow = true, alt, customStyle }) => {
  const imgClasses = classNames({ shadow })

  return (
    <div>
      <img className={imgClasses} src={src} alt={alt} style={customStyle} />

      <style jsx>{`
        img {
          border-radius: 3px;
          transition: all 0.25s ease-out;
        }

        .shadow {
          box-shadow: 0 16px 32px 0 rgba(0, 0, 0, .1);
        }

        img:hover {
          transform: scale(1.01);
        }

        .shadow:hover {
          box-shadow: 0 16px 40px 0 rgba(0, 0, 0, .2);
        }
      `}</style>
    </div>
  )
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  alt: PropTypes.string
}

export default Img
