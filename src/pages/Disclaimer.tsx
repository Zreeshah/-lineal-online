import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head as Helmet } from 'vite-react-ssg';
import CanonicalLink from '@/components/CanonicalLink';

const Disclaimer = () => {
  const title = 'Impressum & Haftungsausschluss – Lineal.online';
  const description = 'Impressum und Haftungsausschluss von Lineal.online – Ihrem kostenlosen Lineal online und Maßband für Handy, Tablet und PC.';
  const url = 'https://www.lineal.onl/impressum';
  const shareImage = 'https://www.lineal.onl/lovable-uploads/online-lineal-messen.jpg';
  const pageSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Impressum und Haftungsausschluss', url, description, inLanguage: 'de-DE' };
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
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md prose max-w-none">
            <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Impressum & Haftungsausschluss</h1>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Angaben gemäß § 5 DDG</h2>
            <p>
              [NAME]<br />
              [STRASSE]<br />
              [PLZ ORT]
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Kontakt</h2>
            <p>
              Telefon: [TELEFON]<br />
              E-Mail: <a href="mailto:info@lineal.onl">info@lineal.onl</a>
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Verantwortlich für den Inhalt</h2>
            <p>
              Verantwortlich gemäß § 18 Abs. 2 MStV:<br />
              [NAME]<br />
              [STRASSE]<br />
              [PLZ ORT]
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Haftungsausschluss</h2>
            <p>
              Alle Informationen auf dieser Website (<a href="https://www.lineal.onl">https://www.lineal.onl</a>)
              werden nach bestem Wissen und ausschließlich zu Informationszwecken bereitgestellt. Lineal.online
              übernimmt keine Garantie für Vollständigkeit, Zuverlässigkeit oder Genauigkeit dieser Informationen.
              Handlungen auf Grundlage der hier gefundenen Informationen erfolgen auf eigenes Risiko. Für kritische
              Messungen (z.B. in Technik oder Bauwesen) verwenden Sie bitte zertifizierte physische Messgeräte.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Externe Links</h2>
            <p>
              Unsere Website kann Links zu externen Websites enthalten. Wir haben keinen Einfluss auf deren
              Inhalt und übernehmen keine Verantwortung für externe Inhalte oder deren Datenschutzpraxis.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Zustimmung</h2>
            <p>Mit der Nutzung unserer Website akzeptieren Sie diesen Haftungsausschluss und seine Bedingungen.</p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Aktualisierung</h2>
            <p>Änderungen an diesem Dokument werden hier sichtbar veröffentlicht.</p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
