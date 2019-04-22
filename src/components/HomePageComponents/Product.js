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
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">€{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;

  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .name {
    color: ${styles.colors.mainGrey};
    margin-top: 0.5rem;
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
    font-size: 1.1rem;
  }
   @media (min-width: 650px) {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   grid-column-gap: 1rem;
        .name {
          font-size: 1.8rem;
        }
        .info {
          font-size: 1.4rem;
        }
  // }
`
