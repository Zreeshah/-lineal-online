import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head as Helmet } from 'vite-react-ssg';
import { Target, Zap } from 'lucide-react';
import CanonicalLink from '@/components/CanonicalLink';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Über uns – Lineal.online | Lineal online & Maßband für Handy</title>
        <meta
          name="description"
          content="Lineal.online ist Ihr kostenloses Lineal online in Originalgröße. Erfahren Sie mehr über unser Maßband online für Handy, Tablet und PC."
        />
        <html lang="de" />
      </Helmet>
      <CanonicalLink />

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="container flex-1 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h1 className="text-3xl font-bold mb-6 text-ruler-primary">Über uns</h1>

              <p className="text-lg text-gray-700 mb-6">
                Willkommen bei <strong>Lineal.online</strong>, Ihrem zuverlässigen, präzisen digitalen Messwerkzeug.
                Wir haben dieses Tool gebaut, damit Sie jederzeit ein <strong>Lineal online</strong> zur Hand
                haben – auch wenn gerade kein echtes Lineal in der Nähe ist.
              </p>

              <p className="text-gray-700 mb-6">
                In einer zunehmend digitalen Welt sind klassische Werkzeuge nicht immer verfügbar. Deshalb haben
                wir eine Web-App entwickelt, die Ihren Bildschirm in ein kalibriertes <strong>Lineal in
                Originalgröße</strong> verwandelt – ob am PC, Tablet oder als <strong>Lineal für Handy</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Target className="text-ruler-primary mr-3" size={32} />
                  <h2 className="text-xl font-semibold text-ruler-primary">Unsere Mission</h2>
                </div>
                <p className="text-gray-700">
                  Ein zugängliches, präzises und einfach zu bedienendes <strong>Maßband online</strong> für alle
                  bereitzustellen – unabhängig vom Ort oder Gerät.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Zap className="text-ruler-primary mr-3" size={32} />
                  <h2 className="text-xl font-semibold text-ruler-primary">Unsere Vision</h2>
                </div>
                <p className="text-gray-700">
                  Das verlässlichste und meistgenutzte digitale Lineal im deutschsprachigen Raum zu sein – und
                  Millionen Menschen bei ihren alltäglichen Messungen zu helfen.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">Warum Lineal.online wählen?</h2>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Garantierte Präzision durch fortschrittliche Kalibrierung</li>
                <li>✓ 100% kostenlos – keine Registrierung, keine Abos</li>
                <li>✓ Einfache, intuitive Bedienung</li>
                <li>✓ Kompatibel mit allen Geräten (PC, Tablet, Smartphone)</li>
                <li>✓ Datenschutz zuerst – Kalibrierung wird lokal gespeichert</li>
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
