'use strict'

import { Component } from 'react'
import queryString from 'query-string'
import isGithubRepo from 'is-github-repo'
import PropTypes from 'prop-types'

import Page from './../layouts/page'
import Header from './../components/header'
import Footer from './../components/footer'
import Menu from './../components/menu'
import Container from './../ui/container'
import Input from './../ui/input'
import Center from './../ui/center'
import Button from './../ui/button'
import ProductTitle from './../ui/product-title'

import { colors } from './../ui/theme'

class AddProject extends Component {
  constructor() {
    super()

    this.state = {
      repoInvalid: false
    }

    this.onSubmitAddProject = this.onSubmitAddProject.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitAddProject(e) {
    e.preventDefault()

    const { repository } = this.state

    if (!repository) {
      return this.setState({ repoInvalid: true })
    }

    const isGit = isGithubRepo(repository)

    if (isGit) {
      const query = { repo: repository, build: 1 }

      window.location = `${process.env.APP_URL}?${queryString.stringify(query)}`
    }
  }

  render() {
    return (
      <Page>
        <Header color={colors.black}>
          <Menu />
        </Header>

        <Center>
          <Container>
            <ProductTitle
              product="Add project"
              description="add your project and run franz benchmarking."
            />

            <form onSubmit={this.onSubmitAddProject}>
              <Input
                align="center"
                placeholder="organization/repository"
                name="repository"
                handleInputChange={this.handleInputChange}
                isInvalid={this.state.repoInvalid}
              />

              <Button
                type="submit"
                style="primary"
                block={true}
                customStyle={{ marginTop: '40px' }}
              >
                Add project
              </Button>
            </form>
          </Container>
        </Center>

        <Footer />

        <style jsx>{`
          form {
            max-width: 300px;
            margin: 75px auto;
            text-align: center;
          }
        `}</style>
      </Page>
    )
  }
}

AddProject.propTypes = {
  history: PropTypes.object,
  url: PropTypes.object
}

export default AddProject
