import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function Title({ slogan, title }) {
  return (
    <TitleWrapper>
      <h1 className="slogan">{slogan}</h1>
      <h2 className="title">{title}</h2>
      <div className="underline" />
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-align: center;
  .slogan {
    color: ${styles.colors.mainYellow2};
    font-size: 2rem;
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    margin-right: -0.5rem;
    line-height: 1.2;
  }
  .title {
    font-size: 2rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.3rem" })};
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    display: block;
    margin: 0.5rem auto;
`
