'use strict'

import PropTypes from 'prop-types'
import Link from 'next/link'

import Logo from './logo'
import { colors } from './../ui/theme'

const Header = ({ children, logoHref = '/', color = colors.white }) =>
  <header>
    <Link href={logoHref}>
      <h1>
        <Logo color={color} size="70px" />
      </h1>
    </Link>

    {children}

    <style jsx>{`
      header {
        height: 120px;
        display: flex;
        align-items: center;
        padding-left: 50px;
        padding-right: 50px;
        justify-content: space-between;
      }

      h1 {
        cursor: pointer;
      }
    `}</style>
  </header>

Header.propTypes = {
  children: PropTypes.node.isRequired,
  logoHref: PropTypes.string,
  color: PropTypes.string
}

export default Header
