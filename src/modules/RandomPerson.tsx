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
      <div className={"card--person"}>
        <h1>
          {person.name.title} {person.name.first} {person.name.last}
        </h1>
        <h2>{person.email}</h2>
        {/*<h3>*/}
        {/*  {person.location.street.number} {person.location.street.name}<br />*/}
        {/*  {person.location.city}, {person.location.state} {person.location.postcode}<br />*/}
        {/*  {person.location.country}<br />*/}
        {/*</h3>*/}
      </div>
      {/*<pre>{JSON.stringify(person, null, 2)}</pre>*/}
    </>
  )
}
