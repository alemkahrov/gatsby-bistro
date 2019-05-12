import styled from "styled-components"
import React from "react"
import img from "../images/bcg/homeBcg1.jpg"
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
  min-height: calc(100vh - 68px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.img}) bottom/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
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
