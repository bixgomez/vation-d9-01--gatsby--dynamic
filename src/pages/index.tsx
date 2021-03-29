import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Button } from "../components/Button/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>

    {/*<Button*/}
    {/*  size="small"*/}
    {/*  onClick={() => {*/}
    {/*    console.log("on button click")*/}
    {/*  }}*/}
    {/*  label="Log out"*/}
    {/*/>*/}

    <ul className={"some-links"}>
      <li>
        <Link to="/companies">View some companies.</Link>
      </li>
      <li>
        <Link to="/app/random-person">View a random person.</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
