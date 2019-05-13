import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Item from "./Item"
import MenuDate from "./MenuDate"
import { Section, Title, BgColor } from "../../../utils"
import styled from "styled-components"

const ITEMS = graphql`
  {
    items: allContentfulWochenMenuKarte {
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

export default function Menu() {
  return (
    <BgColor>
      <Section>
        <ItemList>
          <Title message="Aktuell" title="unser wochenmenü" />
          <MenuDate />
          <StaticQuery
            query={ITEMS}
            render={data => {
              const items = data.items.edges
              return items.map(item => {
                return <Item key={item.node.id} item={item.node} />
              })
            }}
          />
        </ItemList>
      </Section>
    </BgColor>
  )
}

const ItemList = styled.div`
display: grid:
grid-template-columns: 100%;
background: #fff;
padding: 2rem;
box-shadow: 0 2rem 5rem rgba(#000, .1);


@media (min-width: 992px) {
    width: 70vw;
    margin: 0 auto;
}
`
