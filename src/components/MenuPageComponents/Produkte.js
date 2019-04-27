import React from "react"

import styled from "styled-components"
import { styles } from "../../utils"

export default function Produkte({ produkte }) {
  const { title, price, description } = produkte
  return (
    <ProduktWrapper>
      <div className="product-content">
        <div className="info">
          <h3 className="title">{title}</h3>
          <span className="price">{price}</span>
        </div>
      </div>
    </ProduktWrapper>
  )
}

const ProduktWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`
