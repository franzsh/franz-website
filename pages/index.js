'use strict'

import Page from './../layouts/page'
import Menu from './../components/menu'
import Header from './../components/header'
import Footer from './../components/footer'
import Container from './../ui/container'
import Feature from './../ui/feature'
import FeatureItem from './../ui/feature-item'
import ButtonLink from './../ui/button-link'
import Img from './../ui/img'
import { TrendingUpIcon, CpuIcon, ServerIcon } from './../ui/icons'

import { colors, typography, phone } from './../ui/theme'

const Home = () =>
  <Page>
    <Header>
      <Menu inversed={true} />
    </Header>

    <section className="inversed">
      <Container>
        <Feature>
          <FeatureItem>
            <h1>
              <strong>franz</strong> is your benchmarking assistant.
            </h1>

            <ButtonLink href="/add-project" inversed={true} cta={true}>
              Get started — It's free!
            </ButtonLink>
          </FeatureItem>

          <FeatureItem mobileHidden={true}>
            <Img
              src="https://images.unsplash.com/photo-1497384401032-2182d2687715?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
              alt="Hero"
            />
          </FeatureItem>
        </Feature>
      </Container>
    </section>

    <section>
      <Container>
        <Feature>
          <FeatureItem>
            <h2>
              <TrendingUpIcon />
              <span>Peak Traffic</span>
            </h2>
            <p>
              franz generates peak traffic for each of your endpoints in a per
              commit basis, so that you can see if your endpoints are getting
              better or worse throughout time.
            </p>
          </FeatureItem>

          <FeatureItem>
            <Img
              src="https://images.unsplash.com/photo-1497384401032-2182d2687715?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
              alt=""
            />
          </FeatureItem>
        </Feature>
      </Container>
    </section>

    <section>
      <Container>
        <Feature inversed={false}>
          <FeatureItem>
            <Img
              src="https://images.unsplash.com/photo-1497384401032-2182d2687715?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
              alt=""
            />
          </FeatureItem>

          <FeatureItem>
            <h2>
              <CpuIcon />

              <span>Different hardware specs</span>
            </h2>
            <p>
              franz builds your environment in several different hardware specs
              so that you can see how much you would gain with specific
              different spec.
            </p>
          </FeatureItem>
        </Feature>
      </Container>
    </section>

    <section>
      <Container>
        <Feature>
          <FeatureItem>
            <h2>
              <ServerIcon />
              <span>Machine Metrics</span>
            </h2>
            <p>
              franz records your machine metrics for each test, so that you know
              how much resources your machine is consuming while handling the
              traffic peak.
            </p>
          </FeatureItem>

          <FeatureItem>
            <Img
              src="https://images.unsplash.com/photo-1497384401032-2182d2687715?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
              alt=""
            />
          </FeatureItem>
        </Feature>
      </Container>
    </section>

    <section className="cli">
      <Container>
        <h2>
          <ServerIcon />
          <span>franz CLI</span>
        </h2>

        <p>the command line interface for franz.</p>

        <Img
          src="https://images.unsplash.com/photo-1497384401032-2182d2687715?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
          alt=""
          customStyle={{
            margin: '50px auto 30px',
            maxWidth: '500px',
            display: 'block'
          }}
        />

        <code>$ npm install -g franz</code>
      </Container>
    </section>

    <Footer />

    <style jsx>{`
      h1 {
        color: ${colors.white};
        font-size: ${typography.f35};
        font-weight: ${typography.thin};
        line-height: 3.25rem;
        margin-bottom: 50px;
      }

      strong {
        font-weight: ${typography.semibold};
      }

      section {
        border-bottom: 1px solid ${colors.border};
        min-height: 650px;
      }

      .inversed {
        margin-top: -120px;
        background-color: ${colors.black};
      }

      h2 {
        text-transform: uppercase;
        font-size: ${typography.f16};
        letter-spacing: 2px;
        margin-bottom: 10px;
        margin-top: 15px;
      }

      span {
        display: block;
        margin-top: 20px;
      }

      p {
        color: ${colors.secondary};
        font-size: ${typography.f14};
        line-height: 2rem;
      }

      .cli {
        max-width: 100%;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 50px;
      }

      .cli h2,
      .cli p {
        text-align: center;
      }

      code {
        display: block;
        background-color: ${colors.border};
        padding: 20px;
        color: ${colors.secondary};
        font-family: monospace;
        font-weight: ${typography.bold};
        border-radius: 2px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        overflow-x: auto;
        font-size: ${typography.f16};
        text-align: center;
      }

      @media ${phone} {
        .inversed {
          padding-top: 100px;
        }

        h1 {
          text-align: center;
        }

        h2 {
          margin-top: 30px;
          display: flex;
          align-items: center;
        }

        span {
          display: inline-block;
          margin-top: 0;
          margin-left: 15px;
        }
      }
    `}</style>
  </Page>

export default Home
