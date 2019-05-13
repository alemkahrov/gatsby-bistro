import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { IntroText, Section, SectionCenter, styles } from "../../utils"
import styled from "styled-components"
import Product from "../MenuPageComponents/Product"
import ImgVorspeisen from "./ImgVorspeisen"

const ITEMS = graphql`
  {
    getItems: allContentfulVorspeisenAntipasti {
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
      <IntroText title="Vorspeisen" text="antipasti" />
      <ImgVorspeisen />
      <ProductList>
        <StaticQuery
          query={ITEMS}
          render={data => {
            const { edges: antipasti } = data.getItems
            return antipasti.map(item => {
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

  /* @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 80%;
    justify-content: center;
  } */
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
