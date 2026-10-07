import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import CanonicalLink from '@/components/CanonicalLink';
import ScreenSizeCalculator from '@/components/tools/ScreenSizeCalculator';

const faqs = [
  {
    question: 'Wie wird die Bildschirmbreite aus der Diagonale berechnet?',
    answer: 'Diagonale und Seitenverhältnis bilden ein rechtwinkliges Dreieck. Der Rechner verteilt die bekannte Diagonale proportional auf Breite und Höhe und wandelt Zoll anschließend in Zentimeter um.',
  },
  {
    question: 'Warum braucht der Rechner die Pixelauflösung für PPI?',
    answer: 'PPI beschreibt Pixel pro Zoll. Erst die diagonale Pixelzahl zusammen mit der physischen Diagonale zeigt, wie dicht die Bildpunkte tatsächlich auf dem Panel liegen.',
  },
  {
    question: 'Zählt der Rahmen zur angegebenen Bildschirmgröße?',
    answer: 'Nein. Die beworbene Diagonale bezieht sich normalerweise auf die sichtbare Displayfläche. Gehäuserand, Standfuß und Notebookdeckel gehören nicht zur berechneten Breite oder Höhe.',
  },
  {
    question: 'Kann ich mit dem Ergebnis ein Online-Lineal kalibrieren?',
    answer: 'Ja, wenn Diagonale, Seitenverhältnis und Auflösung korrekt sind. Eine zusätzliche Kontrolle mit einer Bankkarte oder einem physischen Lineal bleibt empfehlenswert.',
  },
];

const BildschirmgroesseRechner: React.FC = () => {
  const title = 'Bildschirmgröße Rechner: Breite, Höhe und PPI';
  const description = 'Bildschirmgröße berechnen: Diagonale, Seitenverhältnis und Auflösung eingeben und Breite, Höhe sowie Pixeldichte in PPI erhalten.';
  const url = 'https://www.lineal.onl/bildschirmgroesse-rechner';
  const shareImage = 'https://www.lineal.onl/lovable-uploads/online-lineal-messen.jpg';
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Bildschirmgröße Rechner',
    url,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    inLanguage: 'de-DE',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <html lang="de" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={shareImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={shareImage} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
      </Helmet>
      <CanonicalLink />

      <Layout>
        <div className="container max-w-6xl px-4 pb-16 sm:px-6">
          <header className="mb-8 max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase text-purple-700">Display-Rechner</p>
            <h1 className="text-3xl font-black leading-tight text-gray-950 sm:text-5xl">Bildschirmgröße Rechner – Breite, Höhe und PPI</h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Tragen Sie Diagonale, Seitenverhältnis und Pixelauflösung ein. Der Rechner bestimmt die sichtbare Breite, Höhe und Pixeldichte des Panels.
            </p>
            <p className="mt-3 text-sm text-gray-500">Aktualisiert am 7. Oktober 2026</p>
          </header>

          <ScreenSizeCalculator />

          <article className="blog-prose mx-auto mt-12 max-w-4xl" data-tool-article="bildschirmgroesse-rechner">
            <nav className="not-prose mb-10 border-y border-gray-200 py-5" aria-label="Inhaltsverzeichnis">
              <p className="mb-3 font-bold text-gray-950">Inhalt</p>
              <div className="grid gap-2 text-sm sm:grid-cols-2">
                <a href="#geometrie">Geometrie hinter der Diagonale</a>
                <a href="#ppi">PPI richtig einordnen</a>
                <a href="#display-beispiele">Beispiele vergleichen</a>
                <a href="#messgrenzen">Messgrenzen und Fehler</a>
              </div>
            </nav>

            <h2 id="geometrie">Wie der Bildschirmgröße-Rechner arbeitet</h2>
            <p>
              Eine Angabe wie 15,6 Zoll beschreibt ausschließlich die Diagonale der sichtbaren Fläche. Zwei Geräte
              können dieselbe Diagonale besitzen und trotzdem unterschiedlich breit sein, wenn ihre
              Seitenverhältnisse voneinander abweichen. Der Rechner behandelt Breite, Höhe und Diagonale als
              rechtwinkliges Dreieck. Aus dem Verhältnis 16:9 entsteht zunächst ein normiertes Dreieck; anschließend
              wird es auf die eingegebene Diagonale skaliert.
            </p>
            <p>
              Das Ergebnis wird zuerst in Zoll berechnet und danach mit dem exakten Faktor 2,54 in Zentimeter
              übertragen. Die Gehäuseabmessungen sind dabei bewusst nicht enthalten. Für eine passende Tasche oder
              Halterung müssen Rahmen, Scharniere und mögliche Wölbungen separat gemessen werden.
            </p>

            <h2>Schritt für Schritt zum passenden Wert</h2>
            <ol>
              <li>Übernehmen Sie die Displaydiagonale aus den technischen Daten oder messen Sie sie sichtbar von Ecke zu Ecke.</li>
              <li>Wählen Sie das Seitenverhältnis, zum Beispiel 16:9 für viele Monitore oder 3:2 für manche Notebooks.</li>
              <li>Tragen Sie die native Pixelauflösung ein, nicht eine im Betriebssystem eingestellte Skalierungsstufe.</li>
              <li>Lesen Sie Breite und Höhe in Zentimetern sowie die berechnete Pixeldichte ab.</li>
              <li>Kontrollieren Sie kritische Maße am realen Gerät.</li>
            </ol>

            <h2 id="ppi">Was PPI über ein Display aussagt</h2>
            <p>
              PPI bedeutet „pixels per inch“, also Pixel pro Zoll. Der Wert entsteht aus der diagonalen Pixelzahl,
              geteilt durch die physische Diagonale. Eine höhere Zahl bedeutet kleinere, dichter angeordnete Pixel;
              sie sagt aber allein nichts über Helligkeit, Farbraum, Kontrast oder Bildwiederholrate aus. PPI ist
              deshalb ein Geometriemaß und kein vollständiges Qualitätsurteil.
            </p>
            <p>
              Betriebssysteme können Texte und Bedienelemente vergrößern, ohne die echte Pixeldichte zu verändern.
              Eine Skalierung von 150 Prozent macht Schriften größer, verwandelt ein Panel mit 220 PPI aber nicht in
              ein Panel mit 147 PPI. Für Bildschirmmessungen ist diese Unterscheidung wichtig, weil CSS-Pixel und
              physische Bildpunkte nicht immer eins zu eins zusammenfallen.
            </p>

            <h2 id="display-beispiele">Durchgerechnete Vergleichsbeispiele</h2>
            <h3>15,6 Zoll bei 16:9 und Full HD</h3>
            <p>
              Der sichtbare Bereich ist ungefähr 34,54 cm breit und 19,43 cm hoch. Bei 1920 × 1080 Pixeln ergibt
              sich eine Dichte von rund 141,2 PPI. Diese Zahlen beschreiben nur das Panel; ein Notebook kann außen
              mehrere Zentimeter größer sein.
            </p>
            <h3>27 Zoll bei 16:9 und 4K</h3>
            <p>
              Ein 27-Zoll-Display im Format 16:9 ist etwa 59,77 cm breit und 33,62 cm hoch. Mit 3840 × 2160 Pixeln
              erreicht es ungefähr 163,2 PPI. Gegenüber Full HD auf derselben Fläche stehen in jeder Richtung doppelt
              so viele Pixel zur Verfügung.
            </p>
            <h3>13,5 Zoll bei 3:2</h3>
            <p>
              Das höhere 3:2-Format kommt bei 13,5 Zoll auf ungefähr 28,53 cm Breite und 19,02 cm Höhe. Obwohl die
              Diagonale kleiner als beim 15,6-Zoll-Beispiel ist, fällt das Verhältnis der nutzbaren Höhe zur Breite
              größer aus. Für Dokumente wirkt die Fläche deshalb anders als ein breites 16:9-Panel.
            </p>

            <h2 id="messgrenzen">Typische Fehler und Grenzen</h2>
            <ul>
              <li>Die Gehäusediagonale wird statt der sichtbaren Displaydiagonale gemessen.</li>
              <li>Eine gerundete Produktbezeichnung wird als millimetergenaues Maß behandelt.</li>
              <li>Die aktuelle Desktopauflösung wird mit der nativen Panelauflösung verwechselt.</li>
              <li>16:9 wird angenommen, obwohl das Gerät 16:10 oder 3:2 verwendet.</li>
            </ul>
            <p>
              Herstellerangaben können gerundet sein, und sichtbare Bereiche unterscheiden sich gelegentlich leicht
              von Modell zu Modell. Verwenden Sie das Ergebnis daher für Planung, Vergleich und Kalibrierung, nicht
              als Ersatz für eine mechanische Prüfung bei passgenauen Einbauten.
            </p>

            <h2>Das Wichtigste für die Auswahl</h2>
            <ul>
              <li>Die Zollzahl nennt die Diagonale, nicht die Breite.</li>
              <li>Das Seitenverhältnis bestimmt die Form des sichtbaren Rechtecks.</li>
              <li>Für PPI sind zusätzlich die horizontalen und vertikalen Pixel nötig.</li>
              <li>Rahmen und Gehäuse müssen getrennt vermessen werden.</li>
            </ul>

            <h2>Fragen zur Bildschirmgröße</h2>
            {faqs.map((faq) => (
              <section key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </section>
            ))}

            <h2>Verwandte Rechner und Ratgeber</h2>
            <p>
              Die praktische Messmethode erklärt <Link to="/blog/bildschirm-zoll-messen">Bildschirm in Zoll messen</Link>.
              Für den Einheitenwechsel steht der <Link to="/zoll-in-cm-rechner">Zoll-in-cm-Rechner</Link> bereit.
              Soll das Ergebnis zur Kalibrierung dienen, folgen Sie anschließend der Anleitung{' '}
              <Link to="/blog/bildschirm-kalibrieren">Bildschirm richtig kalibrieren</Link> und prüfen die Skala mit einer Referenz.
            </p>

            <h2>Zusammenfassung und nächster Schritt</h2>
            <p>
              Aus Diagonale und Seitenverhältnis lässt sich die physische Panelgröße eindeutig berechnen; die
              Pixelauflösung ergänzt daraus die PPI. Nutzen Sie oben zunächst die technischen Daten Ihres Geräts und
              messen Sie danach eine reale Kante nach, wenn das Ergebnis für eine Halterung oder Kalibrierung benötigt wird.
            </p>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default BildschirmgroesseRechner;
