import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import img from "../images/bcg/menuBcg.jpeg"
import { PageHeader, Banner, SectionButton } from "../utils"

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
    <a
      href="https://booking-widget.quandoo.de/iframe.html?agentId=2&merchantId=55189&origin=https%3A%2F%2Fadmin.quandoo.com&path=https%3A%2F%2Fbooking-widget.quandoo.com%2F&theme=brand"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <SectionButton style={{ margin: " 2rem auto 4rem auto" }}>
        reservieren
      </SectionButton>
    </a>
  </Layout>
)

export default MenuPage
