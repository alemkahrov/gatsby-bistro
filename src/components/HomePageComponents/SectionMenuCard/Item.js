import React from "react"

import styled from "styled-components"
import { styles } from "../../../utils"

export default function Item({ item }) {
  let { title, price, info } = item

  // set price
  price = price ? price : 0

  // set info
  info = info ? info.info : ""

  return (
    <ItemWrapper>
      <div className="product-info">
        <h3 className="title">{title}</h3>

        <p className="info">{info}</p>
      </div>

      <h3 className="price">€{price.toFixed(2)}</h3>
      <div className="border" />
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 6rem 0;

  .title {
    margin: 0;
    font-size: 1.6rem;
    font-family: ${styles.textSlanted};

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

  .border {
    width: 100%;
    height: 2px;
    border-bottom: dotted 2px ${styles.colors.mainGrey} !important;
    opacity: 0.7;
    position: absolute;
    top: 2rem;
    margin-top: 5.2rem;
    z-index: 10;
  }
  .info {
    font-size: 1.4rem;
    margin-top: 1rem;
    word-spacing: 0.2rem;
    opacity: 0.8;
    font-weight: 200;
    flex-wrap: wrap;
  }
`
