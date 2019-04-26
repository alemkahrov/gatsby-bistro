import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HomeHeader,
  Banner,
  BannerButton,
  FillHeader,
  SectionCenter,
  Title,
} from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import fillImg from "../images/homeGallery/cta-img-1.jpg"
import fillImg1 from "../images/homeGallery/cta-img-2.jpg"
import Gallery from "../components/HomePageComponents/Gallery"
import Products from "../components/HomePageComponents/Products"
import TwoColSection from "../components/HomePageComponents/TwoColSection"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner
        title="benvenuto a  
         l'angolo di michel"
        subtitle="fuhrmannsgasse 1 - 1080 wien"
      >
        <Link to="/menu/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "4rem auto" }}>
            Speisekarte
          </BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <SectionCenter>
      <Title message="aktuell" title="unser wochenmenü" />
    </SectionCenter>
    <TwoColSection />
    <FillHeader img={fillImg}>
      <Banner title="delizioso" subtitle="täglich frische Gerichte" />
    </FillHeader>
    <Gallery />
    <FillHeader img={fillImg1}>
      <Banner
        title="italien daheim erleben"
        subtitle="original italienische spezialitäten zum mitnehmen "
      />
    </FillHeader>
    <Products />
  </Layout>
)

export default IndexPage
