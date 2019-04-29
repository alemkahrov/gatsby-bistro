import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, IntroText, Section } from "../utils"

const MenuPage = () => (
  <Layout>
    <SEO title="Menükarte - Wochenmenü, Italienische Spezialitäten, Wien 1080, Österreich, Restaurant, Bistro" />
    <PageHeader img={img}>
      <Banner
        title="speisekarte"
        subtitle="italienische speziallitäten täglich frisch bei uns"
      />
    </PageHeader>
    <Section>
      <IntroText title="frühstück" text="colazione" />
    </Section>
  </Layout>
)

export default MenuPage
