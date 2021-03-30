import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import { RandomPerson } from "../modules/RandomPerson"
import { Router as MyRouter } from "@reach/router"

import Layout from "../components/layout"

const Company = ({ data }) => {
  const company = data.nodeCompany

  return (
    <Layout>
      <h1>{company.title}</h1>
      <p>
        <Link to="/companies">List of companies.</Link>
      </p>
      <div dangerouslySetInnerHTML={{ __html: company.body.processed }} />
      <hr />
      <h3>I would like to insert the name of a random person here.</h3>
      <Link to="/app/random-person/">
        You could also just go to random person
      </Link>
      <hr />
    </Layout>
  )
}

export const query = graphql`
  query($CompanyID: String!) {
    nodeCompany(id: { eq: $CompanyID }) {
      id
      title
      body {
        processed
      }
    }
  }
`

export default Company
