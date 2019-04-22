import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
export default function speisekarte() {
  return (
    <Layout>
      <SEO title="Speisekarte - Wochenmenü" />
      <PageHeader img={img}>
        <Banner
          title="wochenmenü"
          subtitle="italienische speziallitäten täglich frisch bei uns"
        />
      </PageHeader>
    </Layout>
  )
}
