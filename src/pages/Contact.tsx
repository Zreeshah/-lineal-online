import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head as Helmet } from 'vite-react-ssg';
import { Mail } from 'lucide-react';
import CanonicalLink from '@/components/CanonicalLink';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt – Lineal.online | Lineal online für Handy</title>
        <meta name="description" content="Kontaktieren Sie das Team von Lineal.online – dem kostenlosen Lineal online und Maßband für Handy, Tablet und PC." />
        <html lang="de" />
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
                Wir bemühen uns, Anfragen innerhalb von [ANTWORTZEIT] zu beantworten. An Wochenenden und Feiertagen
                kann die Bearbeitung länger dauern.
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
