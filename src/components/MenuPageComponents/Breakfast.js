import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { IntroText, Section, styles, BgColor } from "../../utils"
import styled from "styled-components"
import Product from "../MenuPageComponents/Product"
import ImgBreakfast from "./ImgBreakfast"

const ITEMS = graphql`
  {
    getItems: allContentfulFruhstuckColazione {
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

export default function Breakfast() {
  return (
    <BgColor>
      <Section>
        <IntroText title="frühstück" text="colazione" />
        <ImgBreakfast />
        <ProductList>
          <StaticQuery
            query={ITEMS}
            render={data => {
              const { edges: colazione } = data.getItems
              return colazione.map(item => {
                return <Product key={item.node.id} product={item.node} />
              })
            }}
          />
        </ProductList>
      </Section>
    </BgColor>
  )
}

export const ProductList = styled.div`
  margin: 6rem 0 2rem;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;

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
