import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { RandomPerson } from "../modules/RandomPerson"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  return (
    <Layout>
      <MyRouter>
        <RandomPerson path="/app/random-person/" />
      </MyRouter>
    </Layout>
  )
}

export default Router
