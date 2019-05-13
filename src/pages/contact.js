import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"
import Contact from "../components/ContactPageComponents/Contact"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <PageHeader img={img}>
        <Banner
          title="haben wir ihr interesse geweckt?"
          subtitle="Schreiben Sie uns einfach"
        />
      </PageHeader>
      <Contact />
    </Layout>
  )
}

export default ContactPage
