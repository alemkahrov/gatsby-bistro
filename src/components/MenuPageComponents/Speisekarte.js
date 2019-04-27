import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Section } from "../../utils"
import styled from "styled-components"
import Produkte from "./Produkte"

const PRODUKTE = graphql`
  {
    item: allContentfulSpeisekarte {
      edges {
        node {
          title
          price
          id
          description {
            description
          }
          category
        }
      }
    }
  }
`

export default function Speisekarte() {
  return (
    <Section>
      <SpeisekarteList>
        <StaticQuery
          query={PRODUKTE}
          render={data => {
            const produkte = data.item.edges
            return produkte.map(item => {
              return <Produkte key={item.node.id} produkte={item.node} />
            })
          }}
        />
      </SpeisekarteList>
    </Section>
  )
}

const SpeisekarteList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin: auto;
    width: 70%;
  }
`
