import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { styles } from "../../utils"
import { Section, Title, SectionButton } from "../../utils"

export default function Catering() {
  return (
    <StaticQuery
      query={graphql`
        {
          catering1: file(
            relativePath: { eq: "homeGallery/Catering-img-1.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          catering2: file(
            relativePath: { eq: "homeGallery/Catering-img.jpg" }
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
        const catering1 = data.catering1.childImageSharp.fluid
        const catering2 = data.catering2.childImageSharp.fluid
        return (
          <Section>
            <SectionWrapper>
              <div className="text-wrapper">
                <Title
                  message="einfach ihre nächste Feier"
                  title="bei uns reservieren"
                />
                <p className="text">
                  Wir organisieren, für kleine Gruppen, die etwas andere Feier
                  mit frisch zubereiteten Speisen aus unserer Speisekarte und
                  vielem mehr...
                </p>
                <Link to="/contact/" style={{ textDecoration: "none" }}>
                  <SectionButton style={{ margin: "2rem auto" }}>
                    anfragen
                  </SectionButton>
                </Link>
              </div>
              <div className="gallery-wrapper">
                <div className="item item-1">
                  <Img fluid={catering1} className="img" />
                </div>
                <div className="item item-2">
                  <Img fluid={catering2} className="img" />
                </div>
              </div>
            </SectionWrapper>
          </Section>
        )
      }}
    />
  )
}

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;

  .text {
    line-height: 3rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
    font-size: 1.4rem;
    margin-top: 3rem;
    text-align: center;
  }
  .gallery-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
  }
`
