import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"
import { styles } from "../../utils"

export default function Product({ product }) {
  let { title, info } = product
  let { fluid } = product.image

  info = info ? info.info : ""
  return (
    <ProductWrapper>
      <Img fluid={fluid} className="img" />
      <div className="content-box">
        <h3 className="title">{title}</h3>
        <p className="info">{info}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;

  .title {
    font-family: ${styles.textSlanted};
    font-size: 1.8rem;

    color: ${styles.colors.mainGreen};
    text-transform: uppercase;
  }
  .info {
    font-size: 1.3rem;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;

    .title {
      font-size: 2rem;
      margin-top: 0.5rem;
    }
    .info {
      font-size: 1.5rem;
    }
  }
  .img {
    width: 100%;
    height: auto;
    display: block;
  }
`
