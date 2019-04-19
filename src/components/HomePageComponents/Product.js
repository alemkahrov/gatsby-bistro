import React from "react"

import styled from "styled-components"
import { styles } from "../../utils"
import Img from "gatsby-image"

export default function Product({ product }) {
  const { name, price, ingredients } = product
  const { fixed } = product.img
  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="product-content">
        <div className="product-info">
          <h3 className="name">{name}</h3>
          <span className="price">{price}</span>
        </div>
        <p className="ingredients">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1.5rem;
  .product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .price {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${styles.colors.mainYellow};
  }
  .img {
    border-radius: 0.5rem;
  }
  .ingredients {
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`
