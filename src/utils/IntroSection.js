import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"
export default class IntroSection extends Component {
  render() {
    return (
      <Section>
        <Title message="wir lieben italien" title="unsere passion" />
        <IntroSection>
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
        </IntroSection>
      </Section>
    )
  }
}

const IntroSection = styled.div``
