import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import CanonicalLink from '@/components/CanonicalLink';
import LengthConverter from '@/components/tools/LengthConverter';
import { convertLength } from '@/lib/measurementMath.js';

const commonInches = [0.25, 0.5, 1, 2, 3, 5, 10, 12, 15, 20, 24, 27, 32];

const faqs = [
  {
    question: 'Wie viele Zentimeter sind ein Zoll?',
    answer: 'Ein Zoll entspricht exakt 2,54 cm beziehungsweise 25,4 mm. Der Rechner verwendet diesen festen Umrechnungsfaktor ohne Näherungswert.',
  },
  {
    question: 'Wie rechne ich Zentimeter zurück in Zoll?',
    answer: 'Teilen Sie den Zentimeterwert durch 2,54. Aus 30 cm werden so rund 11,811 Zoll. Für eine technische Angabe sollten Sie erst am Ende runden.',
  },
  {
    question: 'Sind Inch und Zoll dieselbe Einheit?',
    answer: 'Ja. Inch ist die englische Bezeichnung, Zoll die deutsche. Das Einheitenzeichen ist in beiden Fällen in; zusätzlich wird häufig das Doppelstrichzeichen verwendet.',
  },
  {
    question: 'Warum zeigt der Rechner mehrere Nachkommastellen?',
    answer: 'Nicht jeder metrische Wert ergibt eine ganze Zollzahl. Zusätzliche Stellen helfen beim Weiterrechnen; beim praktischen Messen genügt meist eine Rundung passend zur Genauigkeit des Werkzeugs.',
  },
];

const format = (value: number, digits = 3) =>
  new Intl.NumberFormat('de-DE', { maximumFractionDigits: digits }).format(value);

const ZollInCmRechner: React.FC = () => {
  const title = 'Zoll in cm Rechner: Inch, cm und mm umrechnen';
  const description = 'Zoll in cm Rechner für Inch, Zentimeter und Millimeter. Werte direkt umrechnen, Formeln verstehen und häufige Zollgrößen vergleichen.';
  const url = 'https://www.lineal.onl/zoll-in-cm-rechner';
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <CanonicalLink />

      <Layout>
        <div className="container max-w-6xl px-4 pb-16 sm:px-6">
          <header className="mb-8 max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase text-purple-700">Einheitenrechner</p>
            <h1 className="text-3xl font-black leading-tight text-gray-950 sm:text-5xl">Zoll in cm Rechner – Inch, cm und mm umrechnen</h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Geben Sie einen Wert ein und wählen Sie Zoll, Zentimeter oder Millimeter als Ausgangseinheit. Alle drei Ergebnisse werden sofort nebeneinander angezeigt.
            </p>
            <p className="mt-3 text-sm text-gray-500">Aktualisiert am 7. Oktober 2026</p>
          </header>

          <LengthConverter />

          <article className="blog-prose mx-auto mt-12 max-w-4xl" data-tool-article="zoll-in-cm-rechner">
            <nav className="not-prose mb-10 border-y border-gray-200 py-5" aria-label="Inhaltsverzeichnis">
              <p className="mb-3 font-bold text-gray-950">Inhalt</p>
              <div className="grid gap-2 text-sm sm:grid-cols-2">
                <a href="#umrechnung">Umrechnung verstehen</a>
                <a href="#beispiele">Durchgerechnete Beispiele</a>
                <a href="#tabelle">Häufige Zollwerte</a>
                <a href="#fehler">Runden und Fehler vermeiden</a>
              </div>
            </nav>

            <h2 id="umrechnung">So funktioniert die Umrechnung von Zoll in cm</h2>
            <p>
              Die Beziehung ist eindeutig: 1 Zoll sind exakt 25,4 Millimeter oder 2,54 Zentimeter. Diese Definition
              wird auch vom US-amerikanischen Metrologieinstitut{' '}
              <a href="https://www.nist.gov/pml/owm/si-units-length" target="_blank" rel="noreferrer">NIST</a>{' '}
              angegeben. Für Zoll nach Zentimeter multiplizieren Sie deshalb mit 2,54. Für den Rückweg teilen Sie
              den Zentimeterwert durch 2,54. Millimeter entstehen aus Zoll durch Multiplikation mit 25,4.
            </p>
            <p>
              Der Rechner führt dieselbe Rechnung in beide Richtungen aus. Die Auswahl oberhalb des Eingabefelds
              legt fest, welche Einheit Ihr Ausgangswert besitzt. Dadurch können Sie nicht nur Inch in cm, sondern
              auch mm in Zoll oder cm in mm umwandeln, ohne den Faktor wechseln zu müssen.
            </p>

            <h2 id="beispiele">Durchgerechnete Beispiele aus dem Alltag</h2>
            <h3>Ein 13,3-Zoll-Notebook einordnen</h3>
            <p>
              13,3 × 2,54 ergibt 33,782 cm. Das ist die Diagonale des Bildschirms, nicht seine Breite. Wer die
              tatsächliche Breite und Höhe benötigt, braucht zusätzlich das Seitenverhältnis und kann dafür den{' '}
              <Link to="/bildschirmgroesse-rechner">Bildschirmgröße-Rechner</Link> verwenden.
            </p>
            <h3>Ein 3/8-Zoll-Bauteil metrisch prüfen</h3>
            <p>
              Drei Achtel Zoll entsprechen 0,375 Zoll. Multipliziert mit 25,4 ergibt das 9,525 mm. Ein Lineal mit
              Millimeterteilung kann diesen Wert nur grob prüfen; für Durchmesser oder Passungen ist ein
              Messschieber sinnvoller. Das Ergebnis sollte deshalb nicht genauer dokumentiert werden, als das
              verwendete Messgerät ablesen kann.
            </p>
            <h3>30 cm in Zoll umrechnen</h3>
            <p>
              30 ÷ 2,54 ergibt ungefähr 11,811 Zoll. Für eine Produktbeschreibung sind 11,81 Zoll meist ausreichend,
              während eine grobe Größenangabe auf 11,8 Zoll gerundet werden kann. Die ungerundete Zahl bleibt für
              weitere Rechenschritte erhalten.
            </p>

            <h2 id="tabelle">Tabelle häufiger Werte</h2>
            <div className="overflow-x-auto">
              <table>
                <thead><tr><th>Zoll</th><th>Zentimeter</th><th>Millimeter</th></tr></thead>
                <tbody>
                  {commonInches.map((inch) => (
                    <tr key={inch}>
                      <td>{format(inch)} in</td>
                      <td>{format(convertLength(inch, 'inch', 'cm'))} cm</td>
                      <td>{format(convertLength(inch, 'inch', 'mm'))} mm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Die Tabelle eignet sich zum schnellen Vergleichen typischer Display-, Rohr- und Werkzeugangaben.
              Bei Brüchen wie 1/4 oder 1/2 Zoll ist der Dezimalwert bereits berücksichtigt. Für einen beliebigen
              Wert bleibt das Eingabefeld oberhalb der Tabelle genauer und schneller.
            </p>

            <h2 id="fehler">Richtig runden und typische Fehler vermeiden</h2>
            <ul>
              <li>Runden Sie erst das Endergebnis, nicht den Faktor 2,54.</li>
              <li>Verwechseln Sie die Displaydiagonale nicht mit der sichtbaren Bildschirmbreite.</li>
              <li>Schreiben Sie bei technischen Maßen die Einheit immer dazu.</li>
              <li>Behandeln Sie das Zollzeichen nicht als Angabe für Winkelminuten.</li>
            </ul>
            <p>
              Eine Umrechnung verändert nur die Schreibweise einer Länge. Sie verbessert nicht die ursprüngliche
              Messgenauigkeit. Wurde ein Gegenstand nur auf volle Millimeter gemessen, erzeugen vier ausgegebene
              Nachkommastellen keine zusätzliche Präzision.
            </p>

            <h2>Das Wichtigste in Kürze</h2>
            <ul>
              <li>1 Zoll = 2,54 cm = 25,4 mm.</li>
              <li>Von Zoll nach cm wird multipliziert, zurück nach Zoll wird dividiert.</li>
              <li>Zwischenergebnisse sollten ungerundet bleiben.</li>
              <li>Die Genauigkeit des Ausgangsmaßes bestimmt die sinnvolle Rundung.</li>
            </ul>

            <h2>Fragen zum Zoll-in-cm-Rechner</h2>
            {faqs.map((faq) => (
              <section key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </section>
            ))}

            <h2>Verwandte Messhilfen</h2>
            <p>
              Für die reine Rechenlogik erklärt der Ratgeber{' '}
              <Link to="/blog/zoll-in-cm-umrechnen">Zoll in cm umrechnen</Link> weitere Beispiele. Wer metrische
              Teilungen vergleicht, findet unter <Link to="/blog/cm-in-mm">cm in mm</Link> die passenden Regeln.
              Physische Abstände lassen sich nach der Umrechnung mit dem <Link to="/">kalibrierten Online-Lineal</Link> prüfen.
            </p>

            <h2>Zusammenfassung und nächster Schritt</h2>
            <p>
              Der feste Faktor macht die Umrechnung reproduzierbar, während der passende Rundungsgrad vom Einsatz
              abhängt. Tragen Sie Ihren Ausgangswert oben ein und übernehmen Sie anschließend genau die Einheit und
              Stellenzahl, die Ihr Messwerkzeug tatsächlich unterstützt.
            </p>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default ZollInCmRechner;
