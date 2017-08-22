'use strict'

import Head from 'next/head'

import pkg from './../package'

if (global.document) {
  const info = [
    `${pkg.name} v${pkg.version}`,
    `${pkg.description}`,
    `find the code here: ${pkg.repository}`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const viewSource = event => {
  const allowed = ['P', 'H1', 'SPAN']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  document.location = pkg.repository
  event.preventDefault()
}

const Page = ({ children }) =>
  <main onDoubleClick={viewSource}>
    {children}

    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
          Roboto, 'Helvetica Neue', Arial, sans-serif;
      }

      svg {
        vertical-align: middle;
      }

      img {
        width: 100%;
      }

      ul,
      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </main>

export default Page
