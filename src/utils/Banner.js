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
export const FillBanner = ({ title, subtitle, children }) => {
  return (
    <FillBannerWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </FillBannerWrapper>
  )
}

const BannerWrapper = styled.div`
  /* margin-bottom: 3rem; */
  text-align: center;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    margin-right: -0.3rem;
  }
  h3 {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    margin-right: -0.15rem;
    font-size: 2.2rem;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 4rem;
      ${styles.letterSpacing({ spacing: "0.5rem" })};
      margin-right: -0.5rem;
    }
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 924px) {
    width: 70%;
    text-align: center;
  }
`

const FillBannerWrapper = styled(BannerWrapper)`
  h1 {
    color: ${styles.colors.mainGreen};
  }
  h3 {
    color: ${styles.colors.mainGrey};
  }
`
Banner.defaultProps = {
  title: "default title",
}
