import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"
import Menu from "../components/HomePageComponents/Menu"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner
        title="benvenuto a  
         l'angolo di michel"
        subtitle="55 main street- Santa Monica, CA"
      >
        <Link to="/speisekarte/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>
            Speisekarte
          </BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
