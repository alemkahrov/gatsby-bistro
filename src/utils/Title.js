import React from "react"
import styled from "styled-components"
import { styles } from "."
export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3>{message}</h3>
      <h1>{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}
Title.defaultProps = {
  message: "our message",
  title: "our title",
}

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h3 {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    margin-right: -0.3rem;
    font-size: 2rem;
    color: ${styles.colors.mainRed};
  }
  h1 {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    margin-right: -0.3rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 7rem;
    height: 0.2rem;
    background: ${styles.colors.mainRed};
    margin: 1rem auto;
  }

  @media (min-width: 768px) {
    h3,
    h1 {
      font-size: 2.5rem;
    }
  }
`
