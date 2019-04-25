import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"
export default function contact() {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <PageHeader img={img}>
        <Banner title="contact us" subtitle="let's get in touch" />
      </PageHeader>
    </Layout>
  )
}
