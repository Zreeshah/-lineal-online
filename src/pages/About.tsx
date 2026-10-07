import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head as Helmet } from 'vite-react-ssg';
import CanonicalLink from '@/components/CanonicalLink';

const About = () => {
  const title = 'Über uns – Lineal.online | Lineal online & Maßband für Handy';
  const description = 'Lineal.online ist Ihr kostenloses Lineal online in Originalgröße. Erfahren Sie mehr über unser Maßband online für Handy, Tablet und PC.';
  const url = 'https://www.lineal.onl/ueber-uns';
  const shareImage = 'https://www.lineal.onl/lovable-uploads/online-lineal-messen.jpg';
  const pageSchema = { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'Über Lineal.online', url, description, inLanguage: 'de-DE' };
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
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
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none">
              <h1 className="text-3xl font-bold mb-6 text-ruler-primary">Über uns</h1>

              <p>
                Hinter Lineal.online steht eine kleine unabhängige Redaktion. Die Website entstand aus einer einfachen Alltagssituation:
                Ein kleines Objekt sollte schnell gemessen werden, aber ein physisches Lineal war gerade nicht zur
                Hand. Das Werkzeug soll deshalb eine leicht zugängliche Messhilfe im Browser bereitstellen – ohne
                Installation und auf Smartphone, Tablet oder Computer. Ergänzende Artikel erklären Maßeinheiten,
                Kalibrierung und typische Anwendungen. Die Nutzung der Grundfunktionen ist kostenlos.
              </p>

              <h2>Warum eine Kalibrierung notwendig ist</h2>
              <p>
                Browser kennen zunächst nur Pixel. Ein Pixel hat jedoch nicht auf jedem Bildschirm dieselbe physische
                Größe. Lineal.online muss daher bestimmen, wie viele Bildschirmpixel einem Millimeter entsprechen.
                Erst aus diesem Verhältnis kann die Skala in Zentimetern, Millimetern oder Zoll gezeichnet werden.
                Betriebssystem, Browserzoom, Display-Skalierung und Pixeldichte können das Ergebnis beeinflussen.
              </p>

              <h2>So funktioniert der Abgleich mit einer Bankkarte</h2>
              <p>
                Für die manuelle Kalibrierung kann eine übliche Bankkarte als Referenz dienen. Karten nach dem Format
                ID-1 sind 85,60 Millimeter breit. Nutzer legen ihre Karte an die dargestellte Referenz und verändern
                deren Breite, bis beide übereinstimmen. Aus der dabei gemessenen Pixelbreite berechnet die Anwendung
                den Wert Pixel pro Millimeter. Anschließend wird die Linealskala mit diesem Faktor dargestellt. Die
                gewählte Einstellung wird nur im <code>localStorage</code> des Browsers gespeichert und nicht an uns
                übertragen.
              </p>

              <h2>Grenzen eines Bildschirmlineals</h2>
              <p>
                Das Online-Lineal ist eine praktische Hilfe für alltägliche, unkritische Messungen. Es ist kein
                geeichtes oder zertifiziertes Messgerät. Ungenaue Kalibrierung, ein Browserzoom ungleich 100 Prozent,
                nachträgliche Änderungen der Display-Skalierung, gekrümmte Bildschirme oder das Ablesen aus einem
                schrägen Winkel können Abweichungen verursachen. Auch eine Kartenhülle oder eine Karte, die nicht dem
                ID-1-Format entspricht, verfälscht den Abgleich. Für Bauarbeiten, Maschinen, Medizin, Sicherheit oder
                andere Anwendungen mit engen Toleranzen sollte ein geeignetes physisches Messgerät verwendet werden.
              </p>

              <h2>Hinweise und Fehler melden</h2>
              <p>
                Wir prüfen die Bedienung und Inhalte regelmäßig, können aber Fehler nicht vollständig ausschließen.
                Wenn eine Skala auf Ihrem Gerät falsch erscheint, nennen Sie uns bitte Gerätemodell, Betriebssystem,
                Browser, Browserzoom, gewählte Kalibrierungsmethode und die beobachtete Abweichung. Auch Hinweise auf
                unklare Formulierungen, defekte Links oder Darstellungsprobleme sind willkommen. Schreiben Sie an{' '}
                <a href="mailto:info@lineal.onl">info@lineal.onl</a> oder nutzen Sie die{' '}
                <a href="/kontakt">Kontaktseite</a>. Bitte senden Sie keine vertraulichen Daten. Rückmeldungen helfen
                der Redaktion, das Werkzeug nachvollziehbar weiterzuentwickeln und bekannte Einschränkungen offen zu
                dokumentieren. Jede sachliche Rückmeldung wird geprüft.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
