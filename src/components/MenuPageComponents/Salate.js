import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { IntroText, Section, styles, SectionColor } from "../../utils"
import styled from "styled-components"
import Product from "../MenuPageComponents/Product"
import ImgSalate from "./ImgSalate"

const PRODUCTS = graphql`
  {
    items: allContentfulSalate {
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

export default function Salate() {
  return (
    <SectionColor>
      <Section>
        <IntroText title="Salate" text="insalate" />
        <ImgSalate />
        <ProductList>
          <StaticQuery
            query={PRODUCTS}
            render={data => {
              const { edges: salate } = data.items
              return salate.map(item => {
                return <Product key={item.node.id} products={item.node} />
              })
            }}
          />
        </ProductList>
      </Section>
    </SectionColor>
  )
}

export const ProductList = styled.div`
  margin: 4rem 0 2rem;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;

  /* @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 95%;
  } */
  @media (min-width: 768px) {
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
