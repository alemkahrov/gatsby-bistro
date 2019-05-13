import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section, Title, SectionButton } from "../../utils"
import Img from "gatsby-image"

export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
        {
          img4: file(relativePath: { eq: "homeGallery/vorspeise_platte.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img5: file(relativePath: { eq: "homeGallery/ravioli2.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img6: file(relativePath: { eq: "homeGallery/panini_pala.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img7: file(
            relativePath: { eq: "homeGallery/bruschette_teller.JPG" }
          ) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        const img7 = data.img7.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="gallery-wrapper">
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
              </div>
              <div className="text-wrapper">
                <Title
                  message="Entdecke unsere"
                  title="leidenschaft & phantasie"
                />
                <p className="text">
                  Bei uns bekommen Sie ausschließlich frische hausgemachte
                  Spezialitäten. Originial italienisch.
                </p>
                <Link to="/menu/" style={{ textDecoration: "none" }}>
                  <SectionButton style={{ margin: "2rem auto" }}>
                    Speisekarte
                  </SectionButton>
                </Link>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1.5rem;
  .text {
    line-height: 3rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.1rem;
    font-size: 1.4rem;
    text-align: center;
  }
  .gallery-wrapper {
    display: grid;
    grid-row-gap: 1rem;
  }

  @media (min-width: 768px) {
    .gallery-wrapper {
      display: grid;
      grid-column: 1 / 5;
      grid-row: 1 / 3;
      grid-gap: 1rem;
    }
    .item-4 {
      grid-column: 1 / 3;
    }
    .item-5 {
      grid-column: 3 / 5;
    }
    .item-6 {
      grid-column: 1 / 3;
    }
    .item-7 {
      grid-column: 3 / 5;
    }
  }

  @media (min-width: 768px) {
    .text-wrapper {
      display: grid;
      grid-column: 5 / -1;
    }
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 4rem;
    .text {
      font-size: 1.6rem;
    }
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
`
