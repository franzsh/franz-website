'use strict'

import Link from 'next/link'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import ButtonLink from './../ui/button-link'
import { colors, typography, phone } from './../ui/theme'

const Menu = ({ inversed = false }) => {
  const cl = classNames({ inversed })

  return (
    <ul className={cl}>
      <li>
        <Link href="/features">
          <span>Features</span>
        </Link>
      </li>

      <li>
        <Link href="/validate">
          <span>Validate</span>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <span>Contact</span>
        </Link>
      </li>

      <li>
        <ButtonLink
          href="/add-project"
          style={inversed ? null : 'primary'}
          inversed={inversed}
        >
          Get started
        </ButtonLink>
      </li>

      <style jsx>{`
        ul {
          display: flex;
          align-items: center;
        }

        li {
          margin-left: 20px;
          margin-right: 20px;
          cursor: pointer;
          font-size: ${typography.f11};
          font-weight: ${typography.bold};
        }

        li:last-child {
          margin-right: 0;
        }

        span {
          text-transform: uppercase;
          color: ${colors.black};
          transition: all 0.25s ease-out;
        }

        span:hover {
          color: rgba(${colors.blackHover});
        }

        .inversed span {
          color: ${colors.white};
        }

        .inversed span:hover {
          color: rgba(${colors.whiteHover});
        }

        @media ${phone} {
          display: none;
        }
      `}</style>
    </ul>
  )
}

Menu.propTypes = {
  inversed: PropTypes.bool
}

export default Menu
