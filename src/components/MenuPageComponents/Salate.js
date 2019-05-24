import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { IntroText, Section, styles, BgColor } from "../../utils"
import styled from "styled-components"
import Product from "../MenuPageComponents/Product"
import ImgSalate from "./ImgSalate"

const ITEMS = graphql`
  {
    InsalateQuery: allContentfulInsalate {
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
    <BgColor>
      <Section>
        <IntroText title="Salate" text="insalate" />
        <ImgSalate />
        <ProductList>
          <StaticQuery
            query={ITEMS}
            render={data => {
              const { edges: salate } = data.InsalateQuery
              return salate.map(item => {
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
