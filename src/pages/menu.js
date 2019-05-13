import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import img from "../images/bcg/menuBcg.jpeg"
import { PageHeader, Banner } from "../utils"

import Vorspeisen from "../components/MenuPageComponents/Vorspeisen"
import Salate from "../components/MenuPageComponents/Salate"
import Nachspeisen from "../components/MenuPageComponents/Nachspeisen"
import Breakfast from "../components/MenuPageComponents/Breakfast"

const MenuPage = () => (
  <Layout>
    <SEO title="Menükarte - Wochenmenü, Italienische Spezialitäten, Wien 1080, Österreich, Restaurant, Bistro" />
    <PageHeader img={img}>
      <Banner
        title="speisekarte"
        subtitle="Italienische Speziallitäten täglich frisch bei uns"
      />
    </PageHeader>
    <Breakfast />
    <Vorspeisen />
    <Salate />
    <Nachspeisen />
  </Layout>
)

export default MenuPage
