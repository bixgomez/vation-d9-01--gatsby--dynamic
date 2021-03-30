import React from "react"
import { RandomPerson } from "../modules/RandomPerson"
import { Router as MyRouter } from "@reach/router"

import Layout from "../components/layout"

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
