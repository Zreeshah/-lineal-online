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
            <p>Stand: 7. Oktober 2026</p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten auf Lineal.online ist der im{' '}
              <a href="/impressum">Impressum</a> genannte Betreiber. Datenschutzanfragen können an{' '}
              <a href="mailto:info@lineal.onl">info@lineal.onl</a> gerichtet werden.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">2. Hosting und Server-Protokolldaten</h2>
            <p>
              Die Website wird bei [HOSTING-ANBIETER, ANSCHRIFT] gehostet. Beim Aufruf können technisch notwendige
              Server-Protokolldaten verarbeitet werden: IP-Adresse, Datum und Uhrzeit, angeforderte Datei oder URL,
              übertragene Datenmenge, Referrer-URL, Browser, Betriebssystem und HTTP-Statuscode. Die Verarbeitung
              erfolgt zur sicheren, stabilen Bereitstellung und zur Abwehr von Missbrauch auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Protokolldaten werden nach [SPEICHERDAUER SERVER-LOGS] gelöscht, sofern keine
              sicherheitsrelevante Prüfung oder gesetzliche Aufbewahrung eine längere Speicherung erfordert.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">3. Kalibrierungsdaten im Browser</h2>
            <p>
              Einstellungen zur Kalibrierung des Lineals werden ausschließlich im <code>localStorage</code> des
              verwendeten Browsers gespeichert. Sie werden nicht an Lineal.online übertragen. Die lokale Speicherung
              dient der vom Nutzer gewünschten Funktion des Messwerkzeugs und beruht auf Art. 6 Abs. 1 lit. f DSGVO.
              Die Daten bleiben erhalten, bis sie über die Browser-Einstellungen gelöscht werden.
            </p>

            <h2 id="cookie-einstellungen" className="text-xl font-semibold mb-3 text-ruler-primary">
              4. Cookies und Einwilligungsverwaltung
            </h2>
            <p>
              Notwendige Speicherungen sichern Grundfunktionen und dokumentieren die Datenschutzentscheidung.
              Analyse- und Werbetechnologien werden erst nach einer freiwilligen Einwilligung gemäß Art. 6 Abs. 1
              lit. a DSGVO geladen. Die Einwilligung kann jederzeit über „Cookie-Einstellungen“ im Footer geändert
              oder widerrufen werden. Der Widerruf berührt nicht die Rechtmäßigkeit der vorherigen Verarbeitung.
            </p>
            <p>
              Für Besucher, auf die europäische Datenschutzvorgaben Anwendung finden, wird Googles zertifizierte
              Privacy-&-Messaging-CMP mit IAB Transparency and Consent Framework verwendet. Bis eine Entscheidung
              vorliegt, bleiben die Consent-Mode-Signale für Werbung, Werbedaten, Personalisierung und Analyse auf
              „denied“ gesetzt.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">5. Reichweitenanalyse</h2>
            <p>
              Als Analysedienst ist [ANALYSE-DIENST, ANBIETER, ANSCHRIFT] vorgesehen. Soweit der Dienst aktiviert
              wird, kann er Nutzungsdaten wie Seitenaufrufe, Geräteinformationen, gekürzte oder vollständige
              IP-Adresse, Referrer und Interaktionen verarbeiten. Die Verarbeitung und das Setzen nicht notwendiger
              Cookies erfolgen ausschließlich nach Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die vorgesehene
              Speicherdauer beträgt [SPEICHERDAUER ANALYSEDATEN].
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">6. Werbung: Google AdSense und Monetag</h2>
            <p>
              Nach Einwilligung können Google AdSense (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland) und Monetag (betrieben durch Unternehmen der Propeller-Ads-Gruppe) geladen werden. Beide Dienste
              können Cookies, vergleichbare Kennungen, IP-Adresse, Geräte- und Browserdaten, ungefähren Standort sowie
              Informationen über Seitenaufrufe und Anzeigeninteraktionen verarbeiten. Diese Daten können für
              Anzeigenbereitstellung, Reichweitenmessung, Betrugsprävention und – sofern ausgewählt – personalisierte
              Werbung verwendet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Eine Verarbeitung oder Übermittlung in Drittländer kann nicht ausgeschlossen werden. Weitere
              Informationen bieten die{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Datenschutzhinweise von Google</a>,
              die <a href="https://monetag.com/privacy/" target="_blank" rel="noreferrer">Datenschutzhinweise von Monetag</a>{' '}
              und die <a href="https://adssettings.google.com/partnerads" target="_blank" rel="noreferrer">Google-Einstellungen für Anzeigen auf Partnerseiten</a>.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">7. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich
              ist oder gesetzliche Pflichten bestehen. Konkrete Fristen der eingebundenen Dienste richten sich nach
              deren Einstellungen und Datenschutzhinweisen. Nach Zweckfortfall werden Daten gelöscht oder anonymisiert.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">8. Rechte betroffener Personen</h2>
            <p>Betroffene Personen haben nach Maßgabe der DSGVO insbesondere das Recht auf:</p>
            <ul>
              <li>Auskunft über verarbeitete personenbezogene Daten (Art. 15 DSGVO),</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
              <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
              <li>Datenübertragbarkeit, soweit anwendbar (Art. 20 DSGVO),</li>
              <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO),</li>
              <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</li>
            </ul>
            <p>
              Außerdem besteht das Recht, sich bei einer zuständigen Datenschutz-Aufsichtsbehörde zu beschweren
              (Art. 77 DSGVO). Zur Ausübung der Rechte genügt eine Nachricht an die oben genannte Kontaktadresse.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">9. Aktualisierung</h2>
            <p>
              Diese Datenschutzerklärung wird angepasst, wenn sich Dienste, Rechtslage oder Datenverarbeitungen ändern.
              Die jeweils aktuelle Fassung ist auf dieser Seite abrufbar.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
