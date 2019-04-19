import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/aboutBcg.jpeg"
import { Title } from "../utils"
import { Section } from "../utils"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="about us" subtitle=" a little about us" />
    </PageHeader>
    <Section>
      <Title slogan="story about us" title="our mission" />
    </Section>
  </Layout>
)

export default AboutPage
