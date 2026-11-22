import React from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '@/components/FaqSection';

const HomepageMeasurementGuide: React.FC = () => (
  <section className="mb-10 border-t border-gray-200 pt-10" aria-label="Ratgeber zum Messen am Bildschirm">
    <div className="prose prose-sm max-w-none text-gray-700 sm:prose-base lg:prose-lg prose-headings:text-gray-900 prose-a:text-purple-700">
      <h2>Wie das Online-Lineal funktioniert</h2>
      <p>
        Ein Online-Lineal übersetzt die Breite von Bildschirmpixeln in Millimeter. Der Browser kennt zwar die
        Anzahl der dargestellten Pixel, aber häufig nicht die reale Breite des Panels. Betriebssystem-Skalierung,
        Browserzoom und externe Monitore können denselben Pixelwert unterschiedlich groß erscheinen lassen.
        Deshalb braucht das Werkzeug eine Kalibrierung: Erst danach entspricht der Abstand zwischen zwei
        Skalenstrichen möglichst genau einem Millimeter. Die Umrechnung folgt anschließend derselben festen Regel:
        <strong> 1 cm = 10 mm</strong>.
      </p>

      <h3>Welche Bezeichnung passt zu welchem Zweck?</h3>
      <p>
        Viele Suchbegriffe beschreiben dasselbe Werkzeug, setzen aber unterschiedliche Schwerpunkte. Entscheidend
        ist nicht die Bezeichnung, sondern ob die Skala auf dem verwendeten Bildschirm kalibriert wurde.
      </p>
      <p>
        Auf dem Smartphone, auf dem Tablet und am Computer zeigt das Online-Lineal die Skala direkt im
        Browser — nach der Kalibrierung in Zentimetern, Millimetern oder Zoll. Entscheidend ist nicht die
        Bezeichnung, sondern ob die Skala auf dem verwendeten Bildschirm kalibriert wurde.
      </p>

      <h2>Kalibrieren mit der Bankkarte oder Bildschirmdiagonale</h2>
      <p>
        Für den Kartenabgleich verwenden Sie eine Bankkarte im Format 85,60 × 53,98 mm. Legen Sie die lange Kante
        vorsichtig an die Referenzfläche und verändern Sie die Skala, bis beide Breiten übereinstimmen. Alternativ
        tragen Sie die bekannte Bildschirmdiagonale in Zoll ein. Diese Methode funktioniert am besten, wenn
        Auflösung und Seitenverhältnis korrekt erkannt werden. Prüfen Sie das Ergebnis danach mit einer zweiten
        bekannten Länge; eine Anleitung bietet der Beitrag zur{' '}
        <Link to="/blog/bildschirm-kalibrieren">Bildschirmkalibrierung</Link>.
      </p>

      <h2>Wie genau ist ein Bildschirm-Lineal?</h2>
      <p>
        Nach sauberer Kalibrierung ist ein Bildschirm-Lineal für Papier, Etiketten und eine schnelle Größenkontrolle
        brauchbar. Eine feste Genauigkeit lässt sich jedoch nicht versprechen: Zoom, Pixeldichte, Blickwinkel und
        gerundete Objektkanten beeinflussen die Ablesung. Wiederholen Sie die Messung und vergleichen Sie Anfang und
        Ende mit derselben Skala. Bei Passungen, sehr kleinen Durchmessern oder sicherheitsrelevanten Bauteilen ist
        ein Messschieber die bessere Wahl. Mehr dazu steht im Ratgeber{' '}
        <Link to="/blog/ist-online-lineal-genau">Wie genau ist ein Online-Lineal?</Link>.
      </p>

      <h2>Typische Messungen</h2>
      <ul>
        <li>
          <strong>Versandetikett:</strong> Prüfen Sie bei einem Sollmaß von 100 × 150 mm beide Kanten. Zeigt die
          Skala 99 mm und 150 mm, ist die kurze Seite ungefähr 1 mm zu klein.
        </li>
        <li>
          <strong>Ring:</strong> Messen Sie den Innendurchmesser. Bei 18,2 mm ergibt die Rechnung 18,2 × π einen
          Innenumfang von ungefähr 57,2 mm. Die Grenzen dieser Methode erklärt die Anleitung zum{' '}
          <Link to="/blog/ring-lineal-messen">Ringmessen</Link>.
        </li>
        <li>
          <strong>Schraube:</strong> Beginnt die Messung bei 2 mm und endet die Spitze bei 32 mm, beträgt die
          Differenz 30 mm. Welcher Startpunkt zur Kopfform gehört, zeigt der Beitrag{' '}
          <Link to="/blog/schraube-lineal-messen">Schrauben mit dem Lineal messen</Link>.
        </li>
      </ul>

      <h3>Konkrete Längen auf dem Bildschirm</h3>
      <p>
        Kleine Strecken von einem bis sieben Zentimetern lassen sich direkt an der Skala ablesen, längere
        Strecken von zehn, fünfzehn oder zwanzig Zentimetern in Teilabschnitten. Schreibweisen mit Komma,
        zum Beispiel 2,5 cm, meinen dieselbe Strecke wie die ausgeschriebene Form. Alle Angaben sind nur
        dann physisch verlässlich, wenn der Browserzoom unverändert bleibt und die Skala zuvor mit einer
        bekannten Länge abgeglichen wurde.
      </p>

      <h2>Häufige Fehler</h2>
      <p>
        Stellen Sie den Browserzoom vor der Kalibrierung auf 100 Prozent und verändern Sie ihn während der Messung
        nicht. Prüfen Sie außerdem die Anzeige-Skalierung des Betriebssystems, besonders nach einem Monitorwechsel.
        Legen Sie die tatsächliche Messkante an die Nullmarke: Abgerundete Ecken, Hüllen und Schatten erzeugen sonst
        einen falschen Startpunkt. Harte oder scharfkantige Gegenstände sollten das Display nicht direkt berühren.
      </p>
    </div>

    <FaqSection />
  </section>
);

export default HomepageMeasurementGuide;
