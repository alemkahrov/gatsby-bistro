import React from "react"

import styled from "styled-components"
import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  text-align: center;
  .title {
    font-size: 3.4rem;
    color: ${styles.colors.mainWhite};
    line-height: 1;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: ".75rem" })};
    margin-right: -0.75rem;
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    font-weight: 300;
    text-transform: capitalize;
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: ".15rem" })};
    margin-right: -0.15rem;
  }
`

Banner.defaultProps = {
  title: "default title",
}
