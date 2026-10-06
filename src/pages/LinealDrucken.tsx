import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CreditCard, Download, Printer } from 'lucide-react';
import linealImage from '@/assets/Lineal-zum-Ausdrucken.png';
import CanonicalLink from '@/components/CanonicalLink';

const printFaqs = [
  {
    question: 'Warum darf „An Seite anpassen“ nicht aktiviert sein?',
    answer: 'Diese Option verkleinert oder vergrößert die PDF auf den bedruckbaren Bereich des Druckers. Dadurch stimmen Zentimeter-, Millimeter- und Zollskala nicht mehr mit der Originalgröße überein.',
  },
  {
    question: 'Welche PDF passt zu meinem Papier?',
    answer: 'Verwenden Sie die A4-Datei für 210 × 297 mm und die US-Letter-Datei für 8,5 × 11 Zoll. Das im Druckdialog gewählte Papier muss zur Datei passen.',
  },
  {
    question: 'Kann ich das Lineal nach dem Drucken ausschneiden?',
    answer: 'Ja. Schneiden Sie entlang der Außenkante, ohne die Nullmarke zu entfernen. Stabileres Papier oder eine transparente Laminierung erleichtert die spätere Nutzung.',
  },
  {
    question: 'Was mache ich, wenn die Bankkarte nicht in das Kontrollfeld passt?',
    answer: 'Brechen Sie die Messung ab und prüfen Sie Papierformat sowie Skalierung. Drucken Sie erneut mit 100 Prozent oder „Tatsächliche Größe“ und ohne automatische Seitenanpassung.',
  },
];

const LinealDrucken: React.FC = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <>
      <Helmet>
        <title>Lineal zum Ausdrucken – kostenloses Lineal 30 cm zum Drucken | Lineal.online</title>
        <meta
          name="description"
          content="Lineal zum Ausdrucken kostenlos – 30 cm oder 12 Zoll in Originalgröße. Druckbares Lineal direkt aus dem Browser, ideal für Schule, Büro und Heimwerken."
        />
        <meta name="keywords" content="lineal zum ausdrucken, lineal drucken, lineal 30 cm, lineal 12 zoll, druckbares lineal" />
        <html lang="de" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: printFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        })}</script>
      </Helmet>
      <CanonicalLink />

      <Layout>
        <div className="container mx-auto px-4 py-8 print:py-0">
          <div className="print:hidden">
            <div className="max-w-6xl mx-auto mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Lineal zum Ausdrucken – kostenloses Lineal online drucken
              </h1>

              <p className="text-lg text-gray-700 mb-6">
                Sie brauchen ein echtes Lineal, haben aber keines zur Hand? Mit unserem Tool können Sie ein
                <strong> Lineal in Originalgröße</strong> bis 29,7 cm bzw. 11,7 Zoll direkt aus dem Browser
                ausdrucken.
              </p>

              <div className="mb-8">
                <Button onClick={handlePrint} className="bg-ruler-primary hover:bg-ruler-secondary text-white">
                  <Printer className="mr-2 h-4 w-4" />
                  Lineal drucken
                </Button>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="lg:w-auto flex-shrink-0 flex justify-center lg:justify-start">
                  <img
                    src={linealImage}
                    alt="Lineal zum Ausdrucken in Originalgröße"
                    className="h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[800px] w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 space-y-8">
                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">So drucken Sie das Lineal korrekt</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Klicken Sie oben auf „Lineal drucken".</li>
                      <li>Wählen Sie im Druckdialog A4 (210 × 297 mm).</li>
                      <li>Stellen Sie die Skalierung auf 100% („tatsächliche Größe").</li>
                      <li>Druckorientierung Hoch- oder Querformat – je nach Vorliebe.</li>
                      <li>Prüfen Sie das Druckergebnis mit einem physischen Lineal.</li>
                    </ol>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Linealtypen zum Ausdrucken</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Lineal 30 cm zum Ausdrucken (Zentimeter und Millimeter)</li>
                      <li>Lineal 12 Zoll zum Ausdrucken</li>
                      <li>Kombiniertes Lineal in cm und Zoll</li>
                      <li>Lineal als PDF zum Speichern und Wiederverwenden</li>
                    </ul>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Nützliche Tipps</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Dickeres Papier oder Karton für mehr Stabilität.</li>
                      <li>Bei leichter Skalenabweichung den Zoom manuell anpassen.</li>
                      <li>Laminieren erhöht die Lebensdauer Ihres gedruckten Lineals.</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>

            <section className="mx-auto max-w-4xl border-t border-gray-200 pt-10" aria-labelledby="print-download-title">
              <h2 id="print-download-title" className="text-3xl font-bold text-gray-950">Druckvorlage maßhaltig ausgeben</h2>
              <p className="mt-4 leading-7 text-gray-700">
                Öffnen Sie die gewünschte PDF in einem PDF-Programm oder direkt im Browser. Wählen Sie im Druckdialog
                exakt das Papierformat der Datei und stellen Sie die Skalierung auf <strong>100 %</strong> oder
                <strong> „Tatsächliche Größe“</strong>. Optionen wie „An Seite anpassen“, „Einpassen“, „Verkleinern“
                oder „Fit to page“ müssen deaktiviert bleiben, weil sie die physische Länge der Skala verändern.
              </p>

              <ol className="mt-6 space-y-4 border-l-2 border-purple-200 pl-6 text-gray-700">
                <li><strong>1. Datei wählen:</strong> A4 oder US Letter muss mit dem eingelegten Papier übereinstimmen.</li>
                <li><strong>2. Maßstab festlegen:</strong> 100 % einstellen und jede automatische Anpassung ausschalten.</li>
                <li><strong>3. Vorschau prüfen:</strong> Keine Skalenlinie darf abgeschnitten oder auf eine zweite Seite verschoben sein.</li>
                <li><strong>4. Kontrollseite drucken:</strong> Zunächst nur ein Blatt ausgeben, bevor mehrere Kopien gestartet werden.</li>
              </ol>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="/downloads/lineal-a4-cm-mm-zoll.pdf"
                  download
                  className="flex min-h-24 items-center gap-4 rounded-md border border-purple-200 bg-white p-5 font-semibold text-purple-800 shadow-sm hover:border-purple-400"
                >
                  <Download size={24} aria-hidden="true" />
                  <span>A4-PDF: cm, mm und Zoll<span className="mt-1 block text-sm font-normal text-gray-600">210 × 297 mm</span></span>
                </a>
                <a
                  href="/downloads/lineal-us-letter-cm-mm-zoll.pdf"
                  download
                  className="flex min-h-24 items-center gap-4 rounded-md border border-purple-200 bg-white p-5 font-semibold text-purple-800 shadow-sm hover:border-purple-400"
                >
                  <Download size={24} aria-hidden="true" />
                  <span>US-Letter-PDF: cm, mm und Zoll<span className="mt-1 block text-sm font-normal text-gray-600">8,5 × 11 Zoll</span></span>
                </a>
              </div>

              <div className="mt-10 grid gap-6 border-y border-gray-200 py-8 md:grid-cols-[auto_1fr] md:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                  <CreditCard size={30} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-950">Ausdruck mit einer Bankkarte kontrollieren</h2>
                  <p className="mt-3 leading-7 text-gray-700">
                    Legen Sie eine Bankkarte im üblichen Format 85,60 × 53,98 mm auf das eingezeichnete Kontrollfeld.
                    Die lange und die kurze Kartenkante müssen gleichzeitig mit dem Rahmen übereinstimmen. Prüfen Sie
                    zusätzlich eine 10-cm-Strecke der Skala. Passt nur eine Richtung, wurde möglicherweise mit einem
                    falschen Seitenverhältnis oder einer druckerspezifischen Skalierung ausgegeben.
                  </p>
                </div>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-950">Häufige Fragen zur Druckvorlage</h2>
              <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
                {printFaqs.map((faq) => (
                  <section key={faq.question} className="py-5">
                    <h3 className="text-lg font-semibold text-gray-950">{faq.question}</h3>
                    <p className="mt-2 leading-7 text-gray-700">{faq.answer}</p>
                  </section>
                ))}
              </div>

              <p className="mt-8 leading-7 text-gray-700">
                Die Maße der Papiergrößen können Sie unter <Link className="font-medium text-purple-700 hover:underline" to="/papierformate">DIN-Papierformate vergleichen</Link>.
                Für eine Messung ohne Ausdruck bleibt das <Link className="font-medium text-purple-700 hover:underline" to="/">Online-Lineal in Originalgröße</Link> verfügbar;
                Hinweise zur Kontrolle stehen im Ratgeber <Link className="font-medium text-purple-700 hover:underline" to="/blog/ist-online-lineal-genau">Genauigkeit eines Online-Lineals</Link>.
              </p>
            </section>
          </div>

          <div className="hidden print:block print:m-0 print:p-0">
            <img src={linealImage} alt="Lineal zum Ausdrucken" className="w-auto h-auto max-w-none" />
          </div>
        </div>
      </Layout>

      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body, html { margin: 0; padding: 0; width: 210mm; height: 297mm; }
          header, footer, nav { display: none !important; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:m-0 { margin: 0 !important; }
          .print\\:p-0 { padding: 0 !important; }
          img { max-width: none !important; width: auto !important; height: auto !important; display: block; }
        }
      `}</style>
    </>
  );
};

export default LinealDrucken;
