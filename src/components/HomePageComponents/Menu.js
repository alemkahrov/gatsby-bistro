import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Product from "./Product"
import styled from "styled-components"
import { Section, Title, SectionButton } from "../../utils"

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Menu() {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductItem>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges
            return products.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductItem>
    </Section>
  )
}

const ProductItem = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2rem;

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`