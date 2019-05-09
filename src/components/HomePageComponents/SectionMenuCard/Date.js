import React from "react"

import styled from "styled-components"
import { styles } from "../../../utils"

export default function Date({ dateItem }) {
  const { title } = dateItem
  return (
    <WochenDateWrapper>
      <h3 className="title">{title}</h3>
    </WochenDateWrapper>
  )
}

const WochenDateWrapper = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  font-style: italic;
  color: ${styles.colors.mainGreen};
      margin-bottom: -3rem;
}
`
