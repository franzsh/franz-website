'use strict'

import PropTypes from 'prop-types'
import Link from 'next/link'
import classNames from 'classnames'

import { colors, typography, phone } from './theme'

const ButtonLink = ({
  children,
  href,
  type,
  style,
  inversed,
  cta,
  disabled,
  block,
  customStyle
}) => {
  const btnClasses = classNames({
    primary: style === 'primary',
    inversed,
    cta,
    disabled,
    block
  })

  return (
    <Link href={href}>
      <span className={btnClasses} type={type} style={customStyle}>
        {children}

        <style jsx>{`
          span {
            padding: 4px 22px;
            display: inline-block;
            font-size: ${typography.f10};
            font-weight: ${typography.semibold};
            border: 1px solid transparent;
            cursor: pointer;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            line-height: 1.4rem;
            text-transform: uppercase;
            user-select: none;
            margin-bottom: 0;
            touch-action: manipulation;
            background-image: none;
            color: ${colors.white};
            background-color: ${colors.title};
            transition: all 0.25s ease-out;
            letter-spacing: 0.05rem;
          }

          .primary {
            background-color: ${colors.black};
          }

          .primary:hover {
            background-color: rgba(${colors.blackHover});
          }

          .inversed {
            background-color: ${colors.white};
            color: ${colors.black};
          }

          .inversed:hover {
            background-color: rgba(${colors.whiteHover});
          }

          .cta {
            font-size: ${typography.f12};
            padding: 8px 30px;
          }

          .disabled {
            cursor: not-allowed;
            opacity: .65;
            box-shadow: none;
          }

          .block {
            display: block;
            width: 100%;
            padding-top: 6px;
            padding-bottom: 6px;
          }

          @media ${phone} {
            .cta {
              width: 100%;
              display: block;
            }
          }
        `}</style>
      </span>
    </Link>
  )
}

ButtonLink.defaultProps = {
  type: 'button',
  inversed: false,
  cta: false,
  block: false,
  disabled: false
}

ButtonLink.propTypes = {
  onClick: PropTypes.func,
  customStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  href: PropTypes.string,
  style: PropTypes.oneOf(['primary']),
  inversed: PropTypes.bool,
  cta: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool
}

export default ButtonLink
