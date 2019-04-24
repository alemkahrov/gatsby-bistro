import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"
export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="wir lieben italien" title="unsere passion" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            blanditiis dolorum quae doloremque molestias expedita, eum voluptas
            distinctio! Molestiae fuga temporibus nemo non vel mollitia nesciunt
            quaerat facere voluptate earum.
          </p>
          <Link to="/bistro/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>
              unser bistro
            </SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  /* width: 90%; */
  margin: 2rem auto;
  .text {
    line-height: 3rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.1rem;
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    width: 70%;
    /* .text {
      font-size: 1.6rem;
    } */
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
