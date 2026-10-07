import React from 'react';

const HomeContent: React.FC = () => (
  <div className="prose prose-sm max-w-none text-gray-700 md:prose-base lg:prose-lg">
    <h2 className="mb-4 text-2xl font-bold text-[#9b87f5]">
      Lineal online in Originalgröße: eine Messhilfe für den Alltag
    </h2>
    <p>
      Lineal.online zeigt eine Skala in Zentimetern, Millimetern oder Zoll direkt im Browser. Das ist hilfreich,
      wenn gerade kein physisches Lineal griffbereit ist und Sie einen kleinen Gegenstand grob prüfen möchten. Die
      Anzeige ist jedoch erst nach einem Referenzabgleich als <strong>Lineal in Originalgröße</strong> nutzbar.
    </p>
    <p>
      Der Grund ist einfach: Zwei Bildschirme können gleich viele Pixel anzeigen, obwohl ihre Flächen verschieden
      groß sind. Browserzoom und Betriebssystem-Skalierung verändern die Darstellung zusätzlich. Das Werkzeug kann
      diese Unterschiede nicht zuverlässig erraten und benötigt deshalb eine Kalibrierung auf dem jeweiligen Gerät.
    </p>

    <h2 className="mb-4 text-2xl font-bold text-[#9b87f5]">So führen Sie eine Messung durch</h2>
    <ol className="mb-4 list-decimal pl-6">
      <li className="mb-2">
        <strong>Browserzoom prüfen:</strong> Stellen Sie ihn auf 100 Prozent und verändern Sie ihn während der
        Messung nicht.
      </li>
      <li className="mb-2">
        <strong>Skala kalibrieren:</strong> Gleichen Sie die lange Kante einer Bankkarte im ID-1-Format mit der
        Referenz ab oder verwenden Sie eine andere bekannte Länge.
      </li>
      <li className="mb-2">
        <strong>Einheit wählen:</strong> Nutzen Sie cm, mm oder Zoll passend zur Aufgabe. Dabei gilt immer{' '}
        <strong>1 cm = 10 mm</strong>.
      </li>
      <li className="mb-2">
        <strong>Objekt anlegen:</strong> Legen Sie eine gerade Kante an die Nullmarke und lesen Sie den Endpunkt
        senkrecht von oben ab.
      </li>
    </ol>

    <h2 className="mb-4 text-2xl font-bold text-[#9b87f5]">Wofür reicht ein Bildschirm-Lineal?</h2>
    <p>
      Nach sorgfältiger Kalibrierung eignet sich das Werkzeug für Größenvergleiche, Papier, Etiketten,
      Bastelmaterial und andere unkritische Alltagsmessungen. Eine zweite Messung hilft, Ablesefehler zu erkennen.
      Bei runden oder weichen Kanten ist das Ergebnis eher als Näherung zu verstehen.
    </p>
    <p>
      Für Passungen, Gewinde, medizinische Anwendungen, Bauarbeiten oder sicherheitsrelevante Bauteile verwenden Sie
      ein geeignetes physisches Messgerät. Ein Messschieber kann Innen- und Außendurchmesser deutlich besser erfassen
      als eine flache Bildschirmskala.
    </p>

    <h2 className="mb-4 text-2xl font-bold text-[#9b87f5]">Kalibrierung regelmäßig kontrollieren</h2>
    <p>
      Prüfen Sie die Skala erneut, nachdem Sie den Zoom, die Anzeige-Skalierung, den Monitor oder die Ausrichtung des
      Geräts geändert haben. Auch das Löschen der Browserdaten kann die gespeicherte Einstellung entfernen. Eine
      kurze Kontrolle mit derselben Referenz ist verlässlicher als die Annahme, dass eine ältere Einstellung noch
      stimmt.
    </p>
  </div>
);

export default HomeContent;
