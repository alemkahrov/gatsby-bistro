import React from "react"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ImgNachspeisen() {
  return (
    <StaticQuery
      query={graphql`
        {
          img1: file(relativePath: { eq: "menuGallery/dolci.jpg" }) {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        const img1 = data.img1.childImageSharp.fixed

        return (
          <ImageWrapper>
            <Img fixed={img1} className="img" />
          </ImageWrapper>
        )
      }}
    />
  )
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  .img {
    border-radius: 50%;
  }
`
