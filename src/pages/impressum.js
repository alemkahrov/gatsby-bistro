import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../utils"
import styled from "styled-components"

const ImpressumPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <Section>
      <ImpressumWrapper>
        <h1>Impressum</h1>
        <p>
          Informationspflicht laut §5 E-Commerce Gesetz, §14
          Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht
          laut §25 Mediengesetz.
        </p>
        <p>
          L'angolo di Michel <br />
          Inhaber: Michel Borkovic
          <br />
          Fuhrmannsgasse 1
          <br />
          1080 Wien,
          <br />
          Österreich <br />
        </p>
        <p>
          <span>Tel.:</span> +43 676/46 144 18 <br />
          <span>E-Mail:</span> michel@langolo.at <br />
        </p>
        <p>
          <span>Berufsbezeichnung:</span> Inhaber von L'angolo di Michel <br />
          <span>Verleihungsstaat:</span> Österreich <br />
        </p>
        <p>
          Quelle: Erstellt mit dem Impressum Generator von Online Marketing
          Agentur Wien in Kooperation mit smartetechnik.at
        </p>
        <h2>EU-Streitschlichtung</h2>
        <p>
          Gemäß Verordnung über Online-Streitbeilegung in
          Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
          Online-Streitbeilegungsplattform (OS-Plattform) informieren.
          Verbraucher haben die Möglichkeit, Beschwerden an die Online
          Streitbeilegungsplattform der Europäischen Kommission unter
          http://ec.europa.eu/odr?tid=121133386 zu richten. Die dafür
          notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
        </p>
        <p>
          Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
          verpflichtet sind, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h2>Urheberrechtshinweis</h2>
        <p>
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
          unterliegen dem Urheberrecht. Falls notwendig, werden wir die
          unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
          verfolgen.
        </p>
        <p>
          Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
          verletzen, bitten wir Sie uns zu kontaktieren.
        </p>
      </ImpressumWrapper>
    </Section>
  </Layout>
)

const ImpressumWrapper = styled.div`
  p {
    font-size: 1.6rem;
  }
  span {
    font-weight: 700;
  }
`

export default ImpressumPage
