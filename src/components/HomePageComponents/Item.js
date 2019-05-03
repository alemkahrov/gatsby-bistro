import React from "react"

import styled from "styled-components"

export default function Item({ itemList }) {
  const { title, price, description } = itemList
  return (
    <ItemWrapper>
      <div className="wrapper">
        <div className="item-content">
          <h2 className="title">{title}</h2>
          <h2 className="price">{price}</h2>
        </div>
        <p className="description">{description}</p>
      </div>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  padding: 2rem;
  .item-content {
    display: flex;
  }
`
