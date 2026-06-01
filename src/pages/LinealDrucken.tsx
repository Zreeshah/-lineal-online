import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import reglaImage from '@/assets/Regla para Imprimir.png';
import CanonicalLink from '@/components/CanonicalLink';

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
                    src={reglaImage}
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
          </div>

          <div className="hidden print:block print:m-0 print:p-0">
            <img src={reglaImage} alt="Lineal zum Ausdrucken" className="w-auto h-auto max-w-none" />
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
