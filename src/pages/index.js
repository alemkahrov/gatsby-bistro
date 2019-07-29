import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HomeHeader,
  Banner,
  BannerButton,
  PageHeader,
  BookingButton,
} from "../utils"
import img from "../images/bcg/homeBcg.png"
import fillImg from "../images/homeGallery/fill-img-1.jpg"
import fillImg1 from "../images/homeGallery/fill-img-2.jpg"
import Gallery from "../components/HomePageComponents/Gallery"
import TwoColSection from "../components/HomePageComponents/TwoColSection"
import Catering from "../components/HomePageComponents/Catering"
import Menu from "../components/HomePageComponents/SectionMenuCard/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner
        title="  
         l'angolo di michel"
        subtitle="Fuhrmannsgasse 1 - 1080 wien"
      >
        <div className="button-box">
          <Link
            to="/menu/"
            style={{ textDecoration: "none" }}
            className="btn-1"
          >
            <BannerButton>Speisekarte</BannerButton>
          </Link>
          <a
            href="https://booking-widget.quandoo.de/iframe.html?agentId=2&merchantId=55189&origin=https%3A%2F%2Fadmin.quandoo.com&path=https%3A%2F%2Fbooking-widget.quandoo.com%2F&theme=brand"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="btn-2"
          >
            <BookingButton>reservieren</BookingButton>
          </a>
        </div>
      </Banner>
    </HomeHeader>
    <Menu />
    <TwoColSection />
    <PageHeader img={fillImg}>
      <Banner title="delizioso" subtitle="Täglich frische Gerichte" />
    </PageHeader>
    <Gallery />
    <PageHeader img={fillImg1}>
      <Banner
        title="italien daheim erleben"
        subtitle="Original italienische Spezialitäten zum mitnehmen "
      >
        <Link to="/products/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "4rem auto" }}>Sortiment</BannerButton>
        </Link>
      </Banner>
    </PageHeader>
    <Catering />
  </Layout>
)

export default IndexPage
