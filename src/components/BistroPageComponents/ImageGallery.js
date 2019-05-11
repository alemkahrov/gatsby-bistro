import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles } from "../../utils"
import Img from "gatsby-image"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "bistroGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    }
  }
`

export default function ImageGallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges
        return (
          <ImageGalleryWrapper>
            {images.map(({ node }, index) => {
              return (
                <div key={index} className={`item item-${index + 1}`}>
                  <Img fluid={node.childImageSharp.fluid} className="img" />
                </div>
              )
            })}
          </ImageGalleryWrapper>
        )
      }}
    />
  )
}

const ImageGalleryWrapper = styled.div`
  background: ${styles.colors.mainLightGrey};
  display: grid;
  /* grid-template-columns: auto; */
  grid-template: repeat(5, 9vw) / repeat(9, 1fr);
  grid-gap: 0.5rem;
  padding: 1rem;
  margin-bottom: 4rem;
  .item-1 {
    grid-column: 8 / -1;
    grid-row: 1 / -1;
  }
  .item-2 {
    grid-column: 3 / span 2;
    grid-row: 2 / span 4;
  }
  .item-3 {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
  }
  .item-4 {
    grid-column: 3 / 5;
    grid-row: 1 / span 1;
  }
  .item-5 {
    grid-column: 6 / span 2;
    grid-row: 1 / span 3;
  }
  .item-6 {
    grid-column: 5 / 6;
    grid-row: 2 / span 2;
  }
  .item-7 {
    grid-column: 5 / span 3;
    grid-row: 4 / span 2;
  }
  .item-8 {
    grid-column: 1 / 3;
    grid-row: 1 / span 3;
  }
  .item-9 {
    grid-column: 1 / span 2;
    grid-row: 4 / span 2;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`
