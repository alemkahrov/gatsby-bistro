import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Product from "./Product"
import { Section, Title } from "../../../utils"
import styled from "styled-components"

const getProducts = graphql`
  {
    items: allContentfulProduktUbersicht {
      edges {
        node {
          id
          title
          image {
            fluid(maxWidth: 426) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <Section>
      <Title
        message="feinste italienische spezialitäten"
        title="unsere produkte"
      />
      <StaticQuery
        query={getProducts}
        render={data => {
          const { edges: allProducts } = data.items
          return allProducts.map(item => {
            return <Product key={item.node.id} product={item.node} />
          })
        }}
      />
    </Section>
  )
}
