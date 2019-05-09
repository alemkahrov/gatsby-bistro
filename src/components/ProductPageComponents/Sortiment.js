import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Product from "./Product"
import { Section, Title, IntroText } from "../../utils"
import styled from "styled-components"

const getProducts = graphql`
  {
    items: allContentfulSortiment {
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
        title="unser sortiment"
        text="feinste italienische spezialitäten"
      />
      <ProductList>
        <StaticQuery
          query={getProducts}
          render={data => {
            const allProducts = data.items.edges
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
  margin: 6rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 4rem;

  @media (min-width: 776px) {
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`
