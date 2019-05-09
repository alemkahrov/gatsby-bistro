import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"
import { styles } from "../../utils"

export default function Product({ product }) {
  const { title, info } = product
  const { fluid } = product.image
  return (
    <ProductWrapper>
      <Img fluid={fluid} className="img" />
      <div className="content-box">
        <h3 className="title">{title}</h3>
        <p className="info">{info.info}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
  .title {
    font-family: ${styles.textSlanted};
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  .info {
    font-size: 1.3rem;
    
    }
  }
  img {
  }
`
