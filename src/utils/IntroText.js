import React from "react"
import styled from "styled-components"
import { styles } from "."
export function IntroText({ title, text }) {
  return (
    <IntroTextWrapper>
      <h1>{title}</h1>
      <div className="underline" />
      <p>{text}</p>
    </IntroTextWrapper>
  )
}
IntroText.defaultProps = {
  title: "our title",
}

const IntroTextWrapper = styled.div`
  width: 90%;
  margin: auto;
  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: -0.3rem;
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    color: ${styles.colors.mainGreen};
    text-align: center;
  }
  .underline {
    width: 7rem;
    height: 0.2rem;
    background: ${styles.colors.mainGrey};
    margin: 1rem auto;
  }
  p {
    font-size: 1.6rem;
    color: ${styles.colors.mainGrey};
    margin-top: 2rem;
    line-height: 3rem;
    text-align: center;
    word-spacing: 0.1rem;
  }

  @media (min-width: 768px) {
    width: 70%;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
