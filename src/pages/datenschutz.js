import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../utils"
import styled from "styled-components"
import { styles } from "../utils"

const DatenschutzPage = () => (
  <Layout>
    <SEO title="Datenschutzerklärung" />
    <Section>
      <DatenschutzWrapper>
        <h1>Datenschutzerklärung</h1>
        <h2>Datenschutz</h2>
        <p>
          Wir haben diese Datenschutzerklärung (Fassung 24.05.2019-121133386)
          verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung
          (EU) 2016/679 und dem Datenschutzgesetz (DSG) zu erklären, welche
          Informationen wir sammeln, wie wir Daten verwenden und welche
          Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
        </p>
        <p>
          Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr
          technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die
          wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
        </p>
        <h2>Automatische Datenspeicherung</h2>
        <p>
          Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen
          automatisch erstellt und gespeichert, so auch auf dieser Webseite.
        </p>
        <p>
          Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser
          Webserver (Computer auf dem diese Webseite gespeichert ist)
          automatisch Daten wie
        </p>
        <ul>
          <li>die Adresse (URL) der aufgerufenen Webseite</li>
          <li>Browser und Browserversion</li>
          <li>das verwendete Betriebssystem</li>
          <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
          <li>
            den Hostname und die IP-Adresse des Geräts von welchem aus
            zugegriffen wird
          </li>
          <li>Datum und Uhrzeit</li>
        </ul>
        <p>in Dateien (Webserver-Logfiles).</p>
        <p>
          In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und
          danach automatisch gelöscht. Wir geben diese Daten nicht weiter,
          können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
          rechtswidrigem Verhalten eingesehen werden. Die Rechtsgrundlage
          besteht nach Artikel 6 Absatz 1 f DSGVO (Rechtmäßigkeit der
          Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den
          fehlerfreien Betrieb dieser Webseite durch das Erfassen von
          Webserver-Logfiles zu ermöglichen.
        </p>
        <h2>Cookies</h2>
        <p>
          Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu
          speichern. Im Folgenden erklären wir, was Cookies sind und warum Sie
          genutzt werden, damit Sie die folgende Datenschutzerklärung besser
          verstehen.
        </p>
        <h2>Was genau sind Cookies?</h2>
        <p>
          Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser.
          Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet
          Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine
          Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
        </p>
        <p>
          Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche
          Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen
          sind es HTTP-Cookies, da es auch noch anderer Cookies für andere
          Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von
          unserer Website auf Ihrem Computer gespeichert werden. Diese
          Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem “Hirn”
          Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und
          einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein
          oder mehrere Attribute angegeben werden.
        </p>
        <p>
          Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise
          Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite
          wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“
          Informationen an unsere Seite zurück. Dank der Cookies weiß unsere
          Website, wer Sie sind und bietet Ihnen Ihre gewohnte
          Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene
          Datei, in anderen wie beispielsweise Firefox sind alle Cookies in
          einer einzigen Datei gespeichert.
        </p>
        <p>
          Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies.
          Erstanbieter-Cookies werden direkt von unserer Seite erstellt,
          Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google
          Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da
          jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies
          variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind
          keine Software-Programme und enthalten keine Viren, Trojaner oder
          andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres
          PCs zugreifen.
        </p>
        <p>So können zum Beispiel Cookie-Daten aussehen:</p>
        <ul>
          <li>Name: _ga </li>
          <li>Ablaufzeit: 2</li>
          <li>Verwendung: Unterscheidung der Webseitenbesucher</li>
          <li>Beispielhafter Wert: GA1.2.1326744211.152121133386</li>
        </ul>
        <p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
        <ul>
          <li>Ein Cookie soll mindestens 4096 Bytes enthalten können</li>
          <li>
            Pro Domain sollen mindestens 50 Cookies gespeichert werden können
          </li>
          <li>
            Insgesamt sollen mindestens 3000 Cookies gespeichert werden können
          </li>
          <li>Beispielhafter Wert: GA1.2.1326744211.152121133386</li>
        </ul>
        <h2>Welche Arten von Cookies gibt es?</h2>
        <p>
          Die Frage welche Cookies wir im Speziellen verwenden, hängt von den
          verwendeten Diensten ab und wird in der folgenden Abschnitten der
          Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf
          die verschiedenen Arten von HTTP-Cookies eingehen.
        </p>
        <p>Man kann 4 Arten von Cookies unterscheiden:</p>
        <h3>Unbedingt notwendige Cookies</h3>
        <p>
          Diese Cookies sind nötig, um grundlegende Funktionen der Website
          sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User
          ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft
          und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb
          nicht gelöscht, selbst wenn der User sein Browserfenster schließt.
        </p>
        <h3>Funktionelle Cookies</h3>
        <p>
          Diese Cookies sammeln Infos über das Userverhalten und ob der User
          etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies
          auch die Ladezeit und das Verhalten der Website bei verschiedenen
          Browsern gemessen.
        </p>
        <h3>Zielorientierte Cookies</h3>
        <p>
          Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit.
          Beispielsweise werden eingegebene Standorte, Schriftgrößen oder
          Formulardaten gespeichert.
        </p>
        <h3>Werbe-Cookies</h3>
        <p>
          Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu
          dem User individuell angepasste Werbung zu liefern. Das kann sehr
          praktisch, aber auch sehr nervig sein.
        </p>
        <p>
          Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite
          gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich
          wird diese Entscheidung auch in einem Cookie gespeichert.
        </p>
        <h2>Wie kann ich Cookies löschen?</h2>
        <p>
          Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst.
          Unabhängig von welchem Service oder welcher Website die Cookies
          stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur
          teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können Sie
          Cookies von Drittanbietern blockieren, aber alle anderen Cookies
          zulassen.
        </p>
        <p>
          Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser
          gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen
          wollen, können Sie dies in Ihren Browser-Einstellungen finden:
        </p>
        <a href="https://support.google.com/chrome/answer/95647?tid=121133386">
          Chrome: Cookies in Chrome löschen, aktivieren und verwalten
        </a>
        <br />
        <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=121133386">
          Safari: Verwalten von Cookies und Websitedaten mit Safari
        </a>
        <br />
        <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=121133386">
          Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf
          Ihrem Computer abgelegt haben
        </a>
        <br />
        <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=121133386">
          Internet Explorer: Löschen und Verwalten von Cookies
        </a>
        <br />
        <a href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=121133386">
          Microsoft Edge: Löschen und Verwalten von Cookies
        </a>
        <br />
        <br />
        <p>
          Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren
          Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie
          gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
          entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise
          ist je nach Browser verschieden. Am besten ist es Sie suchen die
          Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder
          “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers oder
          tauschen das Wort “Chrome” gegen den Namen Ihres Browsers, z.B. Edge,
          Firefox, Safari aus.
        </p>
        <h2>Wie sieht es mit meinem Datenschutz aus?</h2>
        <p>
          Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist
          festgehalten, dass das Speichern von Cookies eine Einwilligung des
          Website-Besuchers (also von Ihnen) verlangt. Innerhalb der EU-Länder
          gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese
          Richtlinien. In Österreich erfolgte aber die Umsetzung dieser
          Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG).
        </p>
        <p>
          {" "}
          Wenn Sie mehr über Cookies wissen möchten und vor technischen
          Dokumentationen nicht zurückscheuen, empfehlen wir
          https://tools.ietf.org/html/rfc6265, dem Request for Comments der
          Internet Engineering Task Force (IETF) namens “HTTP State Management
          Mechanism”.
        </p>
        <h2>Speicherung persönlicher Daten</h2>
        <p>
          Persönliche Daten, die Sie uns auf dieser Website elektronisch
          übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder
          andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars
          oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt
          und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher
          verwahrt und nicht an Dritte weitergegeben.
        </p>
        <p>
          Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit
          jenen Besuchern, die Kontakt ausdrücklich wünschen und für die
          Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und
          Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht
          weiter, können jedoch nicht ausschließen, dass diese Daten beim
          Vorliegen von rechtswidrigem Verhalten eingesehen werden.
        </p>
        <p>
          Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits
          dieser Webseite – können wir keine sichere Übertragung und den Schutz
          Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten
          niemals unverschlüsselt per E-Mail zu übermitteln.
        </p>
        <p>
          Die Rechtsgrundlage besteht nach Artikel 6 Absatz 1 a DSGVO
          (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung
          zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können
          diesen Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht
          aus, Sie finden unsere Kontaktdaten im Impressum.
        </p>
        <h2>Rechte laut Datenschutzgrundverordnung</h2>
        <p>
          Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen
          Datenschutzgesetzes (DSG) grundsätzlich die folgende Rechte zu:
        </p>
        <ul>
          <li>Recht auf Berichtung (Artikel 16 DSGVO)</li>
          <li>
            Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)
          </li>
          <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
          <li>
            Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit
            der Berichtigung oder Löschung personenbezogener Daten oder der
            Einschränkung der Verarbeitung (Artikel 19 DSGVO)
          </li>
          <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
          <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
          <li>
            Recht, nicht einer ausschließlich auf einer automatisierten
            Verarbeitung — einschließlich Profiling — beruhenden Entscheidung
            unterworfen zu werden (Artikel 22 DSGVO)
          </li>
        </ul>
        <p>
          Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
          Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
          sonst in einer Weise verletzt worden sind, können Sie sich bei der
          Aufsichtsbehörde beschweren, welche in Österreich die
          Datenschutzbehörde ist, deren Webseite Sie unter
          https://www.dsb.gv.at/ finden.
        </p>
        <h2>Auswertung des Besucherverhaltens</h2>
        <p>
          In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob
          und wie wir Daten Ihres Besuchs dieser Website auswerten. Die
          Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir
          können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person
          schließen.
        </p>
        <p>
          Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu
          widersprechen erfahren Sie in der folgenden Datenschutzerklärung.
        </p>
        <h2>TLS-Verschlüsselung mit https</h2>
        <p>
          Wir verwenden https um Daten abhörsicher im Internet zu übertragen
          (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1 DSGVO). Durch
          den Einsatz von TLS (Transport Layer Security), einem
          Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet
          können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen
          die Benutzung dieser Absicherung der Datenübertragung am kleinen
          Schlosssymbol links oben im Browser und der Verwendung des Schemas
          https (anstatt http) als Teil unserer Internetadresse.
        </p>
        <h2>Google Fonts Lokal Datenschutzerklärung</h2>
        <p>
          Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre
          Parkway Mountain View, CA 94043, USA) auf unserer Webseite. Wir haben
          die Google-Schriftarten lokal, d.h. auf unserem Webserver, nicht
          Googles Server, eingebunden. Dadurch gibt es keine Verbindung zu
          Server von Google und somit auch keine Datenübertragung bzw.
          Speicherung.
        </p>
        <h2>Was sind Google Fonts?</h2>
        <p>
          Google Fonts (früher Google Web Fonts) ist ein interaktives
          Verzeichnis mit mehr als 800 Schriftarten, die die Google LLC zur
          freien Verwendung bereitstellt. Mit Google Fonts könnte man die
          Schriften nutzen, ohne sie auf den eigenen Server hochzuladen. Doch um
          diesbezüglich jede Informationsübertragung zum Google-Server zu
          unterbinden, haben wir die Schriftarten auf unseren Server
          heruntergeladen. Auf diese Weise handeln wir datenschutzkonform und
          senden keine Daten an Google Fonts weiter.
        </p>
        <p>
          Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten
          Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein
          Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite
          rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf
          https://developers.google.com/fonts/faq?tid=121133386.
        </p>
        <h2>Warum verwenden wir Google Fonts auf unserer Webseite?</h2>
        <p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen,
        und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts
        ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu
        halten. Alle Google-Schriften sind automatisch für das Web optimiert und
        dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen
        Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die
        niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google
        Fonts sogenannte sichere Web Fonts. Unterschiedliche
        Bildsynthese-Systeme (Rendering) in verschiedenen Browsern,
        Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche
        Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren.
        Dank des schnellen Content Delivery Network (CDN) gibt es mit Google
        Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt
        alle gängigen Browser ( Google Chrome, Mozilla Firefox, Apple Safari,
        Opera) und funktioniert zuverlässig auf den meisten modernen mobilen
        Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone,
        iPad, iPod).</p> 
        <p>Wir verwenden die Google Fonts also, damit wir unser
        gesamtes Online-Service so schön und einheitlich wie möglich darstellen
        können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das bereits ein
        „berechtigtes Interesse“ an der Verarbeitung von personenbezogenen Daten
        dar. Unter „berechtigtem Interesse“ versteht man in diesem Fall sowohl
        rechtliche als auch wirtschaftliche oder ideelle Interessen, die vom
        Rechtssystem anerkannt werden.</p> 
        <h2>Welche Daten werden von Google
        gespeichert?</h2> 
        <p>Wenn Sie unsere Webseite besuchen, werden die Schriften
        über einen Google-Server nachgeladen. Durch diesen externen Aufruf
        werden Daten an die Google-Server übermittelt. So erkennt Google auch,
        dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts
        API wurde entwickelt, um die Erfassung, Speicherung und Verwendung von
        Endnutzerdaten auf das zu reduzieren, was für eine effiziente
        Bereitstellung von Schriften nötig ist. API steht übrigens für
        „Application Programming Interface“ und dient unter anderem als
        Datenübermittler im Softwarebereich.</p> 
        <p>Google Fonts speichert CSS- und
        Font-Anfragen sicher bei Google und ist somit geschützt. Durch die
        gesammelten Nutzungszahlen kann Google die Beliebtheit der Schriften
        feststellen. Die Ergebnisse veröffentlicht Google auf internen
        Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet
        Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche
        Webseiten Google-Schriften verwenden. Diese Daten werden in der
        BigQuery-Datenbank von Google Fonts veröffentlicht. BigQuery ist ein
        Webservice von Google für Unternehmen, die große Datenmengen bewegen und
        analysieren wollen.</p> 
        <p>Zu bedenken gilt allerdings noch, dass durch jede
        Google Font Anfrage auch Informationen wie IP-Adresse,
        Spracheinstellungen, Bildschirmauflösung des Browsers, Version des
        Browsers und Name des Browsers automatisch an die Google-Server
        übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht
        klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.</p> 
        <h2>Wie
        lange und wo werden die Daten gespeichert?</h2> 
        <p>Anfragen für CSS-Assets
        speichert Google einen Tag lang auf Ihren Servern, die hauptsächlich
        außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines
        Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine
        Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die
        Schriftart einer Webseite ändern kann.</p> 
        <p>Die Font-Dateien werden bei
        Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die
        Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von
        Webseiten auf die gleichen Schriften verweisen, werden sie nach dem
        ersten Besuch zwischengespeichert und erscheinen sofort auf allen
        anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google
        Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von
        Sprache zu erhöhen und das Design zu verbessern.</p> 
        <h2>Wie kann ich meine
        Daten löschen bzw. die Datenspeicherung verhindern?</h2> 
        <p>Jene Daten, die
        Google für einen Tag bzw. ein Jahr speichert können nicht einfach
        gelöscht werden. Die Daten werden beim Seitenaufruf automatisch an
        Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen
        Sie den Google-Support auf
        https://support.google.com/?hl=de&tid=121133386 kontaktieren.
        Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere
        Seite nicht besuchen.</p> 
        <p>Anders als andere Web-Schriften erlaubt uns Google
        uneingeschränkten Zugriff auf alle Schriftarten. Wir können also
        unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum
        für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen
        finden Sie auf https://developers.google.com/fonts/faq?tid=121133386.
        Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch
        wirklich detaillierte Informationen über Datenspeicherung sind nicht
        enthalten. Es ist relativ schwierig (beinahe unmöglich), von Google
        wirklich präzise Informationen über gespeicherten Daten zu bekommen.</p>
        <p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese
        Daten verwendet werden, können Sie auch auf
        https://www.google.com/intl/de/policies/privacy/ nachlesen.</p> 
        <h2>Google Maps
        Datenschutzerklärung</h2> 
        <p>Wir verwenden Google Maps der Firma Google Inc.
        (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer
        Webseite.</p> 
        <p>Durch die Nutzung der Funktionen dieser Karte werden Daten an
        Google übertragen. Welche Daten von Google erfasst werden und wofür
        diese Daten verwendet werden, können Sie auf
        https://www.google.com/intl/de/policies/privacy/ nachlesen.</p> 
        <h2>Eingebettete
        Social Media Elemente Datenschutzerklärung</h2> 
        <p>Wir binden auf unserer
        Webseite Elemente von Social Media Diensten ein um Bilder, Videos und
        Texte anzuzeigen. Durch den Besuch von Seiten die diese Elemente
        darstellen, werden Daten von Ihrem Browser zum jeweiligen Social Media
        Dienst übertragen und dort gespeichert. Wir haben keinen Zugriff auf
        diese Daten. Die folgenden Links führen Sie zu den Seiten der jeweiligen
        Social Media Dienste wo erklärt wird, wie diese mit Ihren Daten umgehen:</p>
        <p>
        <ul>
          <li>Instagram-Datenschutzrichtlinie:
        https://help.instagram.com/519522125107875</li>
      <li>Für YouTube gilt die Google
        Datenschutzerklärung: https://policies.google.com/privacy?hl=de</li>
        <li>Facebook-Datenrichtline: https://www.facebook.com/about/privacy</li>
      <li>Twitter
        Datenschutzrichtlinie: https://twitter.com/de/privacy</li>
        </ul>
         </p>
          <h2>Facebook
        Datenschutzerklärung</h2> 
        <p>Wir verwenden auf dieser Webseite Funktionen von
        Facebook, einem Social Media Network der Firma Facebook Ireland Ltd., 4
        Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland. Welche
        Funktionen (Soziale Plug-ins) Facebook bereitstellt, können Sie auf
        https://developers.facebook.com/docs/plugins/ nachlesen. Durch den
        Besuch unserer Webseite können Informationen an Facebook übermittelt
        werden. Wenn Sie über ein Facebook-Konto verfügen, kann Facebook diese
        Daten Ihrem persönlichen Konto zuordnen. Sollten Sie das nicht wünschen,
        melden Sie sich bitte von Facebook ab. Die Datenschutzrichtlinien,
        welche Informationen Facebook sammelt und wie sie diese verwenden finden
        Sie auf https://www.facebook.com/policy.php.</p> 
        <h2>Instagram
        Datenschutzerklärung</h2> 
        <p>Wir verwenden auf unserer Webseite Funktionen des
        Social Media Netzwerks Instagram der Firma Instagram LLC, 1601 Willow
        Rd, Menlo Park CA 94025, USA.</p> 
        <p>Mit den Funktionen zum Einbetten von
        Instagram-Inhalten (Embed-Funktion) können wir Bilder und Videos
        anzeigen.</p> 
        <p>Durch den Aufruf von Seiten die solche Funktionen nutzen
        werden Daten (IP-Adresse, Browserdaten, Datum, Uhrzeit, Cookies) an
        Instagram übermittelt, gespeichert und ausgewertet.</p> 
        <p>Sollten Sie ein
        Instagram-Konto haben und angemeldet sein, werden diese Daten Ihrem
        persönlichen Konto und den darin gespeicherten Daten zugeordnet.</p> 
        <p>Die
        Datenschutzrichtlinien, welche Informationen Instagram sammelt und wie
        sie diese verwenden finden Sie auf
        https://help.instagram.com/519522125107875.</p> 
        <p>Quelle: Erstellt mit dem
        Datenschutz Generator von Online Marketing AdSimple in Kooperation mit
        styleundfashion.de</p>
      </DatenschutzWrapper>
    </Section>
  </Layout>
)

const DatenschutzWrapper = styled.div`
  p,
  li,
  a {
    font-size: 1.6rem;
    color: ${styles.colors.mainBlack};
  }
  ul {
    margin-left: 4rem;
  }
  a:hover {
    color: ${styles.colors.mainGreen};
  }
`

export default DatenschutzPage
