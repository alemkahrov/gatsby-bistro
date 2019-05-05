import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import img from "../images/bcg/menuBcg.jpeg"
import { PageHeader, Banner } from "../utils"

import Vorspeisen from "../components/MenuPageComponents/Vorspeisen"
import Salate from "../components/MenuPageComponents/Salate"
import Nachspeisen from "../components/MenuPageComponents/Nachspeisen"
import Frühstück from "../components/MenuPageComponents/Frühstück"

const MenuPage = () => (
  <Layout>
    <SEO title="Menükarte - Wochenmenü, Italienische Spezialitäten, Wien 1080, Österreich, Restaurant, Bistro" />
    <PageHeader img={img}>
      <Banner
        title="speisekarte"
        subtitle="italienische speziallitäten täglich frisch bei uns"
      />
    </PageHeader>
    <Frühstück />
    <Vorspeisen />
    <Salate />
    <Nachspeisen />
  </Layout>
)

export default MenuPage
