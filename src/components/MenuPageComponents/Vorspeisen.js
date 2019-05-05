import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { IntroText, Section, SectionCenter, styles } from "../../utils"
import styled from "styled-components"
import Product from "../MenuPageComponents/Product"
import ImgVorspeisen from "./ImgVorspeisen"

const PRODUCTS = graphql`
  {
    items: allContentfulVorspeisen {
      edges {
        node {
          id
          title
          price
          info {
            info
          }
        }
      }
    }
  }
`

export default function Vorspeisen() {
  return (
    <Section>
      <IntroText title="vorspeisen" text="antipasti" />
      <ImgVorspeisen />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const { edges: antipasti } = data.items
            return antipasti.map(item => {
              return <Product key={item.node.id} products={item.node} />
            })
          }}
        />
      </ProductList>
    </Section>
  )
}

export const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  grid-column-gap: 2rem;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    /* width: 90vw;
           margin: auto; */
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }
  /* @media (min-width: 992px) {
           grid-template-columns: 1fr 1fr;
           grid-gap: 4rem;
         } */
`
