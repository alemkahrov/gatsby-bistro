import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"

export default function Product({ product }) {
  let { title, price, info } = product

  // set price
  price = price ? price : 0

  // set info
  info = info ? info.info : ""
  return (
    <ProductWrapper>
      <div className="product-info">
        <h3 className="title">{title}</h3>

        <p className="info">{info}</p>
      </div>

      <h3 className="price">€{price.toFixed(2)}</h3>
      <div className="dotted" />
    </ProductWrapper>
  )
}

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  /* @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem; 
    
  }  */

  .title {
    margin: 0;
    font-size: 1.6rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .price {
    color: ${styles.colors.mainGreen};
    margin: 0;
    font-weight: 700;
    font-size: 1.6rem;
  }

  .dotted {
    width: 100%;
    height: 2px;
    border-bottom: dotted 2px ${styles.colors.mainGrey};
    opacity: 0.7;
    position: absolute;
    top: 17px;
    z-index: 1;
    margin-top: 0.8rem;
    margin-bottom: 1.2rem;
  }
  .info {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    word-spacing: 0.2rem;
    text-transform: capitalize;
    opacity: 0.8;
    font-weight: 200;
  }
  /* @media (min-width: 650px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1rem;
  } */
`
