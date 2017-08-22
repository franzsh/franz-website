'use strict'

import Page from './../layouts/page'
import Logo from './../components/logo'

const Home = () =>
  <Page>
    <section>
      <div>
        <a href="https://github.com/franzsh">
          <Logo color="#fff" size="200px" />
          <h1>best benchmarking buddy</h1>
        </a>
      </div>
    </section>

    <style jsx>{`
      section {
        background-color: #000;
        min-height: 100vh;
        max-height: 100vh;
        padding: 100px;
        display: flex;
        align-items: center;
        text-align: center;
      }

      div {
        width: 100%;
      }

      a {
        display: inline-block;
      }

      h1 {
        color: #fff;
        font-weight: 300;
        margin-top: 30px;
        font-size: 16px;
      }
    `}</style>
  </Page>

export default Home
