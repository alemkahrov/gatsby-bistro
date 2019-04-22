import React from "react"
import PropTypes from "prop-types"
// import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/Global/Navbar"
import Footer from "../components/Global/Footer"
// import '../styles/sass/layout.scss'

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </div>
)

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}
body {
  font-family: 'Open Sans', sans-serif;
  color:#262626;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
