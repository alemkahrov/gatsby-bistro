import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { SectionCenter, Title, styles } from "../../utils"
import styled from "styled-components"
import Item from "./Item"
import WochenDate from "./WochenDate"

const DATE = graphql`
  {
    date: allContentfulWochenmenuTitle {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
const ITEMS = graphql`
  {
    items: allContentfulWochenmenu {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
        }
      }
    }
  }
`

export default function WochenMenü() {
  return (
    <ItemCard>
      <SectionCenter>
        <Title message="aktuell" title="unser wochenmenü" />
        <StaticQuery
          query={DATE}
          render={data => {
            const title = data.date.edges
            return title.map(item => {
              return <WochenDate key={item.node.id} dateItem={item.node} />
            })
          }}
        />
      </SectionCenter>
      <SectionCenter>
        <StaticQuery
          query={ITEMS}
          render={data => {
            const product = data.date.edges
            return product.map(item => {
              return <Item key={item.node.id} itemList={item.node} />
            })
          }}
        />
      </SectionCenter>
    </ItemCard>
  )
}

const ItemCard = styled.div`
  background: ${styles.colors.mainLightGrey};
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 1rem;
`
