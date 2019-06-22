import styled from "styled-components"
import React from "react"
import img from "../images/bcg/homeBcg.png"
function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}
function FillHeader({ img, children }) {
  return <CtaHeader img={img}>{children}</CtaHeader>
}

const IndexHeader = styled.header`
  min-height: calc(80vh - 68px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.img}) bottom/cover scroll no-repeat;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    min-height: calc(100vh - 68px);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${props => props.img}) bottom/cover fixed no-repeat;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  }
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 50vh;
`

const CtaHeader = styled(IndexHeader)`
  min-height: 70vh;
`

HomeHeader.defaultProps = {
  img: img,
}
PageHeader.defaultProps = {
  img: img,
}
FillHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader, FillHeader }
