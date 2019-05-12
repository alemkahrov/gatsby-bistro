import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Date from "./Date"
import styled from "styled-components"

const DATE = graphql`
  {
    date: allContentfulWochenDatum {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

export default function MenuDate() {
  return (
    <ItemList>
      <StaticQuery
        query={DATE}
        render={data => {
          const date = data.date.edges
          return date.map(item => {
            return <Date key={item.node.id} dateItem={item.node} />
          })
        }}
      />
    </ItemList>
  )
}

const ItemList = styled.div`
display: grid:
grid-template-columns: 100%;
padding-top: 2rem;

`
