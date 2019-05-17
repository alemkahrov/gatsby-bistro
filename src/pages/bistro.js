import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"
import MainText from "../components/BistroPageComponents/MainText"
import ImageGallery from "../components/BistroPageComponents/ImageGallery"
import ImageGallery1 from "../components/BistroPageComponents/ImageGallery1"

const BistroPage = () => {
  return (
    <Layout>
      <SEO title="Italienisches Bistro - L'angolo di michel" />
      <PageHeader img={img}>
        <Banner title="bistro - l'angolo di michel" subtitle="Unsere Mission" />
      </PageHeader>
      <MainText />

      <ImageGallery1 />
    </Layout>
  )
}

export default BistroPage
