import React from "react"

import styled from "styled-components"
import { styles } from "../../utils"

export default function WochenDate({ dateItem }) {
  const { title } = dateItem
  return (
    <WochenDateWrapper>
      <h3 className="title">{title}</h3>
    </WochenDateWrapper>
  )
}

const WochenDateWrapper = styled.div`
  font-size: 1.8rem;
  text-align: center;
  font-style: italic;
`
