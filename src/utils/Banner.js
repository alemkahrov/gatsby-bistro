import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
export const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  h1 {
    color: ${styles.colors.mainWhite};
    font-size: 2.5rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    margin-right: -0.3rem;
  }
  h3 {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    margin-right: -0.15rem;
    font-size: 1.7rem;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.5rem;
      ${styles.letterSpacing({ spacing: "0.5rem" })};
      margin-right: -0.5rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`
Banner.defaultProps = {
  title: "default title",
}
