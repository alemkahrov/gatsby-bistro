import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { IntroText, Section } from "../../utils"
import styled from "styled-components"
import Product from "../MenuPageComponents/Product"
import ImgNachspeisen from "./ImgNachspeisen"

const ITEMS = graphql`
  {
    DolciQuery: allContentfulDolci {
      edges {
        node {
          id
          title
          price
        }
      }
    }
  }
`

export default function Nachspeisen() {
  return (
    <Section>
      <IntroText title="Nachspeisen" text="dolci" />
      <ImgNachspeisen />
      <ProductList>
        <StaticQuery
          query={ITEMS}
          render={data => {
            const { edges: dolci } = data.DolciQuery
            return dolci.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
    </Section>
  )
}

export const ProductList = styled.div`
  margin: 6rem 0 2rem;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  grid-column-gap: 2rem;

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
