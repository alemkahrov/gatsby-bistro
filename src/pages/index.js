import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton, PageHeader } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import fillImg from "../images/homeGallery/fill-img-1.jpg"
import fillImg1 from "../images/homeGallery/fill-img-2.jpg"
import Gallery from "../components/HomePageComponents/Gallery"
import TwoColSection from "../components/HomePageComponents/TwoColSection"
import Products from "../components/HomePageComponents/SectionProduct/Products"
import Catering from "../components/HomePageComponents/Catering"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner
        title="  
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

    <TwoColSection />
    <PageHeader img={fillImg}>
      <Banner title="delizioso" subtitle="täglich frische Gerichte" />
    </PageHeader>
    <Gallery />
    {/* <Speisekarte items={data.speisekarte} /> */}
    <PageHeader img={fillImg1}>
      <Banner
        title="italien daheim erleben"
        subtitle="original italienische spezialitäten zum mitnehmen "
      />
    </PageHeader>
    <Catering />
  </Layout>
)

/* export const query = graphql`
  {
    speisekarte: allContentfulSpeisekarte {
      edges {
        node {
          id
          title
          info {
            info
          }
          price
          category
          image {
            fixed(width: 80, height: 80) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
` */

export default IndexPage
