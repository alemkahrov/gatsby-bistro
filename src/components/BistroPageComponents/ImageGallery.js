import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section, Title } from "../../utils"
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
                <figure key={index} className={`item item-${index + 1}`}>
                  <Img fluid={node.childImageSharp.fluid} />
                </figure>
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
  grid-template: repeat(5, 9vw) / repeat(8, 1fr);
  grid-column-gap: 1rem;
  padding: 1.5rem;

  .figure {
    margin: 0 0 0 0;
  }
 
  .item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  .item-2 {
    grid-column: 3 / span 2;
    grid-row: 1 / span 5;
  }
  .item-3 {
    grid-column: 5 / 7;
    grid-row: 1 / 4;
  }
  .item-4 {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
  }
  .item-5 {
    grid-column: 7 / -1;
    grid-row: 1 / span 1;
  }
  .item-6 {
    grid-column: 7 / -1;
    grid-row: 2 / span 2;
  }
  .item-7 {
    grid-column: 1 / 1;
    grid-row: 4 / span 2;
  }
  .item-8 {
    grid-column: 5 / 7;
    grid-row: 4 / span 2;
  }
  .item-9 {
    grid-column: 2 / span 1;
    grid-row: 4 / span 2;
  }
  .item-10 {
    grid-column: 7 / -1;
    grid-row: 4 / span 2;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`
