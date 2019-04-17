/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/globals/navbar"
import Footer from "../components/globals/Footer"

//import "./layout.css"
//import "./bootstrap.min.css"
//import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

{
  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #222;
    background-color: #fff;
  }
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
