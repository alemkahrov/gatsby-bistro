import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Product from "./Product"
import { Section, Title, IntroText } from "../../utils"
import styled from "styled-components"

const Products = graphql`
  {
    getItems: allContentfulSortiment {
      edges {
        node {
          id
          title
          info {
            info
          }
          image {
            fluid(maxWidth: 500, maxHeight: 350) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Sortiment() {
  return (
    <Section>
      <IntroText
        title="Unser Sortiment"
        text="Feinste italienische Spezialitäten"
      />
      <ProductList>
        <StaticQuery
          query={Products}
          render={data => {
            const allProducts = data.getItems.edges
            return allProducts.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
    </Section>
  )
}

export const ProductList = styled.div`
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;

  @media (min-width: 576px) {
    margin: 4rem 0 2rem;
    grid-gap: 3rem;
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 1140px) {
    grid-template-columns: 1fr 1fr;
  }
  /* .gatsby-image-wrapper {
    height: 100%;
  } */
`
