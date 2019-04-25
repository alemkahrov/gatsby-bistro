import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, SectionCenter } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
export default function menu() {
  return (
    <Layout>
      <SEO title="Menükarte - Wochenmenü, Italienische Spezialitäten, Wien 1080" />
      <PageHeader img={img}>
        <Banner
          title="menükarte"
          subtitle="italienische speziallitäten täglich frisch bei uns"
        />
      </PageHeader>
    </Layout>
  )
}
