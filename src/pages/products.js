import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
import Sortiment from "../components/ProductPageComponents/Sortiment"

export default function products() {
  return (
    <Layout>
      <SEO title="Produkte, Italienische Spezialitäten, Original aus Italien, Sortiment" />
      <PageHeader img={img}>
        <Banner
          title="original italienische spezialitäten"
          subtitle="Bei l'angolo di Michel in 1080 Wien erhältlich"
        />
      </PageHeader>
      <Sortiment />
    </Layout>
  )
}
