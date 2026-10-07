import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head as Helmet } from 'vite-react-ssg';
import { Mail } from 'lucide-react';
import CanonicalLink from '@/components/CanonicalLink';

const Contact = () => {
  const title = 'Kontakt – Lineal.online | Lineal online für Handy';
  const description = 'Kontaktieren Sie das Team von Lineal.online – dem kostenlosen Lineal online und Maßband für Handy, Tablet und PC.';
  const url = 'https://www.lineal.onl/kontakt';
  const shareImage = 'https://www.lineal.onl/lovable-uploads/online-lineal-messen.jpg';
  const pageSchema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Kontakt', url, description, inLanguage: 'de-DE' };
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
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      </Helmet>
      <CanonicalLink />

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="container flex-1 py-8">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Kontakt</h1>
            <p className="mb-6 text-gray-700">
              Haben Sie eine Frage, einen Verbesserungsvorschlag oder einen Fehler entdeckt? Schreiben Sie uns per
              E-Mail. Hilfreich sind bei technischen Problemen Angaben zu Gerät, Betriebssystem, Browser und
              Browserzoom. Bitte übermitteln Sie keine vertraulichen oder sensiblen Daten.
            </p>

            <div className="border-l-4 border-ruler-primary bg-ruler-primary-light p-5">
              <h2 className="text-lg font-semibold mb-3 text-ruler-primary">Kontakt per E-Mail</h2>
              <a
                href="mailto:info@lineal.onl?subject=Anfrage%20zu%20Lineal.online"
                className="inline-flex items-center gap-2 font-medium text-ruler-primary hover:underline"
              >
                <Mail size={18} aria-hidden="true" />
                info@lineal.onl
              </a>
              <p className="mt-4 mb-0 text-sm text-gray-700">
                Wir beantworten Anfragen so bald wie möglich. Je nach Anfrageaufkommen sowie an Wochenenden und
                Feiertagen kann die Bearbeitung mehrere Werktage dauern.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
