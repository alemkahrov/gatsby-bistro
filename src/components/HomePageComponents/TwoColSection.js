import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { styles } from "../../utils"
import { Section, Title, SectionButton } from "../../utils"

const SINGLE_IMG = graphql`
  {
    img4: file(relativePath: { eq: "homeGallery/img-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function TwoColSection() {
  return (
    <StaticQuery
      query={SINGLE_IMG}
      render={data => {
        const img4 = data.img4.childImageSharp.fluid
        return (
          <Section>
            <TwoColSectionWrapper>
              <div className="text-wrapper">
                <Title message="wir lieben italien" title="unsere mission" />
                <p className="text">
                  Wir versprechen frische und qualitative Produkte. Das „Eck“ im
                  8ten mit Charme Liebe und Leidenschaft für Italienische
                  Spezialitäten.
                </p>
                <Link to="/bistro/" style={{ textDecoration: "none" }}>
                  <SectionButton style={{ margin: "2rem auto" }}>
                    unser bistro
                  </SectionButton>
                </Link>
              </div>
              <div className="item">
                <Img fluid={img4} />
              </div>
            </TwoColSectionWrapper>
          </Section>
        )
      }}
    />
  )
}

const TwoColSectionWrapper = styled.div`
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

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
  }
`
