'use strict'

import React from 'react'
import Link from 'next/link'

import pkg from './../package'

import { colors, typography, phone } from './../ui/theme'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div>
        <p>made with love by franz.</p>

        <ul>
          <li>
            <a href="https://twitter.com/franzsh">twitter</a>/
          </li>

          <li>
            <a href="https://github.com/franzsh">github</a>/
          </li>

          <li>
            <Link href="/validate">
              <span>validate</span>
            </Link>/
          </li>

          <li>
            <Link href="/contact">
              <span>contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <p>
        © {currentYear} — franz | {pkg.description}
      </p>

      <style jsx>{`
        footer {
          display: flex;
          align-items: center;
          padding: 50px;
          justify-content: space-between;
          border-top: 1px solid ${colors.border};
        }

        p {
          color: ${colors.secondary};
          font-size: ${typography.f12};
        }

        ul {
          display: flex;
          margin-top: 5px;
        }

        a,
        span {
          color: ${colors.secondary};
          font-size: ${typography.f12};
          margin-right: 5px;
          cursor: pointer;
        }

        a:hover,
        span:hover {
          color: ${colors.black};
        }

        li {
          margin-right: 5px;
          color: ${colors.secondary};
          font-size: ${typography.f12};
        }

        @media ${phone} {
          footer {
            text-align: center;
            flex-direction: column;
          }

          div {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
