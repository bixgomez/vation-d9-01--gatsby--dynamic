import React, { useState, useEffect, FC } from "react"
import { RouteComponentProps } from "@reach/router"

type Props = RouteComponentProps<{
  results: string
}>

export const RandomPerson: FC<Props> = ({ results = 1 }) => {
  const [person, setPerson] = React.useState({ name: "test" })

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${1}`)
      .then((data) => data.json())
      .then((json) => setPerson(json.results[0]))
  }, [])

  return (
    <>
      <h1>
        {person.name.first} {person.name.last}
      </h1>
    </>
  )
}
