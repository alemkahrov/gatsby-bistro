import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles } from "../../utils"
import Img from "gatsby-image"

export default function ImageGallery1() {
  return (
    <StaticQuery
      query={graphql`
        {
          img1: file(relativePath: { eq: "bistroGallery/img-1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img2: file(relativePath: { eq: "bistroGallery/img-2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img3: file(relativePath: { eq: "bistroGallery/img-3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img4: file(relativePath: { eq: "bistroGallery/img-4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img5: file(relativePath: { eq: "bistroGallery/img-5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img6: file(relativePath: { eq: "bistroGallery/img-6.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img7: file(relativePath: { eq: "bistroGallery/img-7.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img8: file(relativePath: { eq: "bistroGallery/img-8.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img9: file(relativePath: { eq: "bistroGallery/img-9.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        const img7 = data.img7.childImageSharp.fluid
        const img8 = data.img8.childImageSharp.fluid
        const img9 = data.img9.childImageSharp.fluid
        return (
          <ImageGalleryWrapper>
            <div className="item item-1">
              <Img fluid={img1} />
            </div>
            <div className="item item-2">
              <Img fluid={img2} />
            </div>
            <div className="item item-3">
              <Img fluid={img3} />
            </div>
            <div className="item item-4">
              <Img fluid={img4} />
            </div>
            <div className="item item-5">
              <Img fluid={img5} />
            </div>
            <div className="item item-6">
              <Img fluid={img6} />
            </div>
            <div className="item item-7">
              <Img fluid={img7} />
            </div>
            <div className="item item-8">
              <Img fluid={img8} />
            </div>
            <div className="item item-9">
              <Img fluid={img9} />
            </div>
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
