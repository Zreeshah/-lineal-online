import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import CanonicalLink from '@/components/CanonicalLink';
import PaperSizeViewer from '@/components/tools/PaperSizeViewer';
import { paperSizes } from '@/lib/paperSizes.js';
import { convertLength } from '@/lib/measurementMath.js';

const faqs = [
  {
    question: 'Wie groß ist DIN A4 in Zentimetern?',
    answer: 'DIN A4 misst 21,0 × 29,7 cm beziehungsweise 210 × 297 mm. Im Querformat werden nur Breite und Höhe vertauscht; die Papierfläche bleibt gleich.',
  },
  {
    question: 'Warum ist A3 doppelt so groß wie A4?',
    answer: 'A3 besitzt die doppelte Fläche von A4. Wird ein A3-Bogen an seiner längeren Seite halbiert, entstehen zwei A4-Blätter mit demselben Seitenverhältnis.',
  },
  {
    question: 'Ist die Bildschirmdarstellung wirklich 1:1?',
    answer: 'Sie ist nur dann physisch 1:1, wenn der Bildschirm korrekt kalibriert ist und der Browserzoom unverändert bleibt. Ohne Referenzabgleich ist die Darstellung lediglich proportional.',
  },
  {
    question: 'Passt A4 auf US-Letter-Papier?',
    answer: 'Nicht vollständig ohne Anpassung. US Letter ist breiter und kürzer als A4. Beim Drucken können deshalb Ränder, Umbruch oder Skalierung abweichen.',
  },
];

const formatInches = (millimeters: number) =>
  new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(convertLength(millimeters, 'mm', 'inch'));

const Papierformate: React.FC = () => {
  const title = 'Papierformate: DIN A0 bis A10 in cm, mm & Zoll';
  const description = 'Papierformate der DIN-A-Reihe vergleichen: A0 bis A10 in cm, mm und Zoll mit kalibrierter 1:1-Ansicht und praktischen Beispielen.';
  const url = 'https://www.lineal.onl/papierformate';
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
    name: 'DIN-Papierformate in Originalgröße',
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
            <p className="mb-3 text-sm font-bold uppercase text-purple-700">Papiergrößen</p>
            <h1 className="text-3xl font-black leading-tight text-gray-950 sm:text-5xl">Papierformate – DIN A0 bis A10 in cm, mm und Zoll</h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Wählen Sie ein DIN-Format und vergleichen Sie seine reale Kontur am kalibrierten Bildschirm. Die Tabelle darunter liefert alle Maße ohne Scrollen.
            </p>
            <p className="mt-3 text-sm text-gray-500">Aktualisiert am 7. Oktober 2026</p>
          </header>

          <PaperSizeViewer />

          <article className="blog-prose mx-auto mt-12 max-w-4xl" data-tool-article="papierformate">
            <nav className="not-prose mb-10 border-y border-gray-200 py-5" aria-label="Inhaltsverzeichnis">
              <p className="mb-3 font-bold text-gray-950">Inhalt</p>
              <div className="grid gap-2 text-sm sm:grid-cols-2">
                <a href="#din-system">System der A-Reihe</a>
                <a href="#format-tabelle">Maßtabelle A0 bis A10</a>
                <a href="#beispiele-papier">Praxisbeispiele</a>
                <a href="#druckfehler">Druckfehler vermeiden</a>
              </div>
            </nav>

            <h2 id="din-system">Wie die DIN-A-Papierformate aufgebaut sind</h2>
            <p>
              Die A-Reihe gehört zu den zugeschnittenen Papierformaten, die in{' '}
              <a href="https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/03/66/36631.html" target="_blank" rel="noreferrer">ISO 216</a>{' '}
              beschrieben werden. A0 beginnt mit einer Fläche von ungefähr einem Quadratmeter. Jede folgende Größe
              entsteht durch Halbieren der längeren Kante: Aus A0 wird A1, aus A1 wird A2 und so weiter. Das
              charakteristische Seitenverhältnis bleibt dabei erhalten, sodass Inhalte ohne neue Proportionen
              verkleinert oder vergrößert werden können.
            </p>
            <p>
              Die Maßangaben werden in ganzen Millimetern geführt. Zentimeter sind für den Alltag leichter lesbar,
              Zoll helfen beim Vergleich mit internationalen Druckvorgaben. Weil 1 Zoll exakt 25,4 mm entspricht,
              ergeben sich bei der Zollangabe fast immer Dezimalwerte. Diese Werte sind Umrechnungen und keine
              alternative Normgröße.
            </p>

            <h2 id="format-tabelle">DIN A0 bis A10 als Tabelle</h2>
            <div className="overflow-x-auto">
              <table>
                <thead><tr><th>Format</th><th>Millimeter</th><th>Zentimeter</th><th>Zoll</th></tr></thead>
                <tbody>
                  {paperSizes.map((size) => (
                    <tr key={size.name}>
                      <td>{size.name}</td>
                      <td>{size.width} × {size.height} mm</td>
                      <td>{(size.width / 10).toFixed(1).replace('.', ',')} × {(size.height / 10).toFixed(1).replace('.', ',')} cm</td>
                      <td>{formatInches(size.width)} × {formatInches(size.height)} in</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              A4 ist das typische Format für Briefe und Bürodrucke. A5 eignet sich für kleinere Hefte, während A3
              häufig für Pläne oder Posterentwürfe genutzt wird. A7 bis A10 sind so klein, dass Beschnitt und
              Druckerrand im Verhältnis zum Blatt deutlich stärker ins Gewicht fallen.
            </p>

            <h2>So verwenden Sie die 1:1-Ansicht</h2>
            <ol>
              <li>Kalibrieren Sie den Bildschirm zuerst über das <Link to="/">Online-Lineal</Link>.</li>
              <li>Lassen Sie den Browserzoom danach unverändert.</li>
              <li>Wählen Sie das gewünschte Format und die Ausrichtung.</li>
              <li>Scrollen Sie innerhalb der Zeichenfläche, wenn das Blatt größer als das Display ist.</li>
              <li>Vergleichen Sie eine sichtbare Kante mit einem vorhandenen Blatt oder einer bekannten Länge.</li>
            </ol>
            <p>
              Die Ansicht ist besonders hilfreich, um Etiketten, Karten oder kleine Formate räumlich einzuschätzen.
              Sie ersetzt keine Druckvorschau: Ein Druckertreiber kann Ränder hinzufügen oder eine Seite automatisch
              skalieren, obwohl die Bildschirmkontur zuvor korrekt war.
            </p>

            <h2 id="beispiele-papier">Drei praktische Formatentscheidungen</h2>
            <h3>Ein A4-Dokument auf A5 verkleinern</h3>
            <p>
              A5 besitzt die halbe Fläche von A4. Eine Skalierung auf 70,7 Prozent reduziert beide Kanten ungefähr
              im gleichen Verhältnis. Schrift und Linien werden dabei ebenfalls kleiner; ein bloßes Halbieren auf
              50 Prozent wäre deutlich zu stark.
            </p>
            <h3>Eine 10 × 15 cm Fotofläche auf A4 planen</h3>
            <p>
              A4 ist 21,0 × 29,7 cm groß. Im Hochformat bleiben neben einer 10 cm breiten Fotofläche insgesamt 11 cm
              übrig. Wird sie mittig platziert, sind das rechnerisch 5,5 cm links und rechts, bevor Druckerränder
              berücksichtigt werden.
            </p>
            <h3>A4 und US Letter nicht verwechseln</h3>
            <p>
              A4 misst 210 × 297 mm; US Letter 215,9 × 279,4 mm. Letter ist also 5,9 mm breiter, aber 17,6 mm kürzer.
              Tabellen oder Fußzeilen nahe der A4-Unterkante können beim Wechsel abgeschnitten oder auf eine neue
              Seite geschoben werden.
            </p>

            <h2 id="druckfehler">Häufige Fehler beim Drucken</h2>
            <ul>
              <li>„An Seite anpassen“ verändert die physische Größe des Dokuments.</li>
              <li>Randloser Druck wird ausgewählt, obwohl der Drucker das Papier dabei vergrößert.</li>
              <li>Hoch- und Querformat werden verwechselt, obwohl die Zahlen korrekt sind.</li>
              <li>Eine Zollumrechnung wird auf eine ganze Zahl gerundet und anschließend als Zuschnittmaß verwendet.</li>
            </ul>
            <p>
              Für eine maßhaltige Vorlage sollten Sie 100 Prozent oder „Tatsächliche Größe“ wählen und den Ausdruck
              anschließend kontrollieren. Auf der Seite <Link to="/lineal-drucken">Lineal zum Ausdrucken</Link>
              stehen dafür druckfertige A4- und US-Letter-Dateien bereit.
            </p>

            <h2>Kernaussagen</h2>
            <ul>
              <li>Jede Stufe der A-Reihe halbiert die Fläche des vorherigen Formats.</li>
              <li>Millimeter sind die maßgebliche Darstellung für den Zuschnitt.</li>
              <li>Eine 1:1-Bildschirmansicht setzt eine gültige Kalibrierung voraus.</li>
              <li>US Letter und A4 sind ähnlich, aber nicht austauschbar.</li>
            </ul>

            <h2>Fragen zu DIN-Papierformaten</h2>
            {faqs.map((faq) => (
              <section key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </section>
            ))}

            <h2>Zusammenfassung und nächster Schritt</h2>
            <p>
              Die Tabelle liefert belastbare Nennmaße, während die 1:1-Ansicht ein Gefühl für die reale Fläche gibt.
              Wählen Sie oben Ihr Format, prüfen Sie eine Kante am kalibrierten Display und laden Sie für einen
              maßhaltigen Kontrollausdruck anschließend die passende PDF-Vorlage herunter.
            </p>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default Papierformate;
