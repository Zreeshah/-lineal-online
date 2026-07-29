import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head as Helmet } from 'vite-react-ssg';
import CanonicalLink from '@/components/CanonicalLink';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung – Lineal.online</title>
        <meta name="description" content="Datenschutzerklärung von Lineal.online – Informationen zur Verarbeitung Ihrer Daten beim Online-Lineal." />
        <html lang="de" />
      </Helmet>
      <CanonicalLink />

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md prose max-w-none">
            <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Datenschutzerklärung</h1>
            <p>
              Lineal.online betreibt die Website <a href="https://www.lineal.onl">https://www.lineal.onl</a>. Diese
              Seite informiert Sie über unsere Richtlinien zur Erfassung, Verwendung und Weitergabe
              personenbezogener Daten bei der Nutzung unseres Dienstes.
            </p>
            <p>
              Wir verwenden Ihre Daten ausschließlich zur Bereitstellung und Verbesserung des Dienstes. Mit der
              Nutzung des Dienstes erklären Sie sich mit dieser Richtlinie einverstanden.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Erhobene Daten</h2>
            <p>
              Wir erheben technische Daten wie IP-Adresse, Browsertyp, besuchte Seiten sowie Datum und Uhrzeit
              des Besuchs. Kalibrierungseinstellungen werden ausschließlich lokal in Ihrem Browser gespeichert.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Cookies</h2>
            <p>
              Wir verwenden Cookies und ähnliche Technologien, um die Nutzung des Dienstes zu analysieren und Ihre
              Einstellungen zu speichern. Sie können Cookies in Ihrem Browser jederzeit deaktivieren.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Datensicherheit</h2>
            <p>
              Die Sicherheit Ihrer Daten ist uns wichtig. Wir treffen angemessene technische und organisatorische
              Maßnahmen zum Schutz Ihrer Daten.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Werbung</h2>
            <p>
              Diese Website kann Werbung Dritter (z.B. Google AdSense) anzeigen. Werbepartner verwenden ggf.
              Cookies zur Personalisierung von Anzeigen.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Kontakt</h2>
            <p>
              Bei Fragen zur Datenschutzerklärung erreichen Sie uns unter:{' '}
              <a href="mailto:info@lineal.onl">info@lineal.onl</a>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
