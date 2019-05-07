import React, { Component } from "react"
import { Section, IntroText, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class MainText extends Component {
  render() {
    return (
      <Section>
        <IntroText title="wie alles begann..." />
        <IntroTextWrapper>
          <p className="text">
            In dieser Ecke in Italien, der{" "}
            <span className="f-weight">Comer See</span> hab ich vor ein paar
            Jahren Italien aus einer ganz anderen Perspektive kennengelernt.
            Durch mehrere Reisen begleitet von einer echten Italienerin ist die
            Idee geboren, diese Liebe und Leidenschaft für Italien nach Wien in
            den 8ten Bezirk zu bringen.
          </p>
          <p className="text center">
            So ist heute <span className="f-weight">L'Angolo di Michel</span>{" "}
            entstanden.
          </p>
        </IntroTextWrapper>
      </Section>
    )
  }
}

const IntroTextWrapper = styled.div`
  /* width: 90%; */
  margin: 0 auto;
  .text {
    line-height: 3rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.1rem;
    font-size: 1.4rem;
    .f-weight {
      font-weight: 700;
    }
  }
  .center {
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 70%;
    .text {
      font-size: 1.6rem;
    }
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
