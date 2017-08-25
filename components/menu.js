'use strict'

import Link from 'next/link'

import ButtonLink from './../ui/button-link'
import { colors, typography, phone } from './../ui/theme'

const Menu = () => {
  return (
    <ul>
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
        <ButtonLink href="/add-project" inversed={true}>
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
          font-size: ${typography.f14};
        }

        li:last-child {
          margin-right: 0;
        }

        span {
          text-transform: lowercase;
          color: ${colors.white};
          transition: all 0.25s ease-out;
        }

        span:hover {
          color: rgba(${colors.whiteHover});
        }

        @media ${phone} {
          display: none;
        }
      `}</style>
    </ul>
  )
}

export default Menu
