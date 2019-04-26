import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, IntroText, Section } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
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
      <IntroText
        title="L'angolo di Michel"
        text="verspricht frische und qualitative Produkte. Das „Eck“ im 8ten mit Charme und Liebe für Italienische Spezialitäten."
      />
    </Section>
  </Layout>
)

export default MenuPage
