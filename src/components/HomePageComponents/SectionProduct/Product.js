import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"

export default function Product({ product }) {
  const { title } = product
  const { fluid } = product.image
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={fluid} className="card-img-top" />
        <p className="title">{title}</p>
      </div>
    </div>
  )
}
