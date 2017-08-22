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
    <Head>
      <title>
        franz — {pkg.description}
      </title>

      {/* Meta */}
      <meta name="description" content={pkg.description} />
      <meta name="keywords" content={pkg.keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Twitter Meta */}
      <meta name="twitter:title" content="franz" />
      <meta name="twitter:description" content={pkg.description} />
      <meta name="twitter:site" content="@franzsh" />
      <meta name="twitter:creator" content="@franzsh" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image:src"
        content="https://franz.sh/static/cover.png"
      />

      {/* Facebook Meta */}
      <meta property="og:title" content="franz" />
      <meta property="og:description" content={pkg.description} />
      <meta property="og:site_name" content="franz" />
      <meta property="og:url" content="https://franzh.sh" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="static/cover.png" />
    </Head>

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
