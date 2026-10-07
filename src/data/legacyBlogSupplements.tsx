import React from 'react';
import { Link } from 'react-router-dom';

type DiagramProps = {
  title: string;
  leftLabel: string;
  middleLabel: string;
  rightLabel: string;
  caption: string;
};

const MeasurementDiagram = ({ title, leftLabel, middleLabel, rightLabel, caption }: DiagramProps) => (
  <figure className="not-prose my-9 overflow-hidden rounded-md border border-purple-200 bg-white">
    <svg viewBox="0 0 760 230" role="img" aria-labelledby={`diagram-${title.replace(/\s+/g, '-').toLowerCase()}`} className="h-auto w-full">
      <title id={`diagram-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</title>
      <rect width="760" height="230" fill="#fafafa" />
      <text x="36" y="42" fontSize="20" fontWeight="700" fill="#111827">{title}</text>
      <line x1="60" y1="120" x2="700" y2="120" stroke="#7c3aed" strokeWidth="5" />
      {Array.from({ length: 17 }, (_, index) => {
        const x = 60 + index * 40;
        const major = index % 4 === 0;
        return <line key={x} x1={x} y1="120" x2={x} y2={major ? 82 : 98} stroke="#4c1d95" strokeWidth={major ? 3 : 2} />;
      })}
      <circle cx="60" cy="120" r="8" fill="#5b21b6" />
      <circle cx="380" cy="120" r="8" fill="#5b21b6" />
      <circle cx="700" cy="120" r="8" fill="#5b21b6" />
      <text x="60" y="164" textAnchor="middle" fontSize="16" fontWeight="700" fill="#374151">{leftLabel}</text>
      <text x="380" y="164" textAnchor="middle" fontSize="16" fontWeight="700" fill="#374151">{middleLabel}</text>
      <text x="700" y="164" textAnchor="middle" fontSize="16" fontWeight="700" fill="#374151">{rightLabel}</text>
    </svg>
    <figcaption className="border-t border-purple-100 px-5 py-3 text-sm leading-6 text-gray-600">{caption}</figcaption>
  </figure>
);

const supplements: Record<string, React.ReactNode> = {
  'lineal-10-cm-originalgroesse': (
    <>
      <MeasurementDiagram
        title="10 Zentimeter kontrollieren"
        leftLabel="0 cm"
        middleLabel="5 cm"
        rightLabel="10 cm"
        caption="Die Endpunkte sind wichtiger als der Bildschirmrand: Nullmarke und 10-cm-Strich müssen nach der Kalibrierung genau 100 mm auseinanderliegen."
      />
      <h2>Ein vollständiges Beispiel mit Kontrollmessung</h2>
      <p>
        Angenommen, Sie möchten ein Etikett prüfen, das laut Verpackung 86 mm breit sein soll. Nach der Kalibrierung
        legen Sie die linke Kante an die Nullmarke. Die rechte Kante endet bei 8,5 cm und einem weiteren
        Millimeterstrich, also bei 86 mm. Wiederholen Sie die Ablesung, indem Sie das Etikett umdrehen. Zeigt die
        zweite Messung ebenfalls 86 mm, ist das Ergebnis für eine unkritische Größenkontrolle plausibel. Eine
        Abweichung von mehreren Millimetern deutet eher auf Zoom, Skalierung oder einen schiefen Startpunkt hin.
      </p>
      <h2>Warum die Nullmarke wichtiger ist als die Außenkante</h2>
      <p>
        Eine Skala kann vor der Null noch einen sichtbaren Rand besitzen. Richten Sie das Objekt deshalb immer am
        Strich mit der Zahl 0 aus. Bei einer abgerundeten Objektkante wählen Sie den Punkt, an dem die gerade Seite
        beginnt, und schauen senkrecht auf das Display. Hüllen und erhabene Kameraränder verhindern oft, dass ein
        Gegenstand flach anliegt. In diesem Fall ist eine Markierung auf Papier sicherer als direkter Kontakt mit
        dem Bildschirm.
      </p>
      <h2>Wann 10 cm nicht vollständig auf das Display passen</h2>
      <p>
        Auf schmalen Smartphones kann eine horizontale 10-cm-Strecke breiter als die nutzbare Browserfläche sein.
        Wechseln Sie dann in die vertikale Ansicht oder messen Sie zwei Teilstrecken von jeweils 5 cm. Markieren Sie
        den Übergang auf einem Blatt und verschieben Sie das Objekt ohne Lücke oder Überlappung. Für eine feste
        Referenz ist das <Link to="/lineal-drucken">Lineal zum Ausdrucken bei 100 Prozent</Link> oft bequemer.
      </p>
      <h2>Typische Fehler bei einer 10-cm-Referenz</h2>
      <ul>
        <li>Der Browserzoom wird nach der Kalibrierung verändert.</li>
        <li>Die Bankkarte steckt während des Abgleichs in einer Hülle.</li>
        <li>Die Außenkante des Lineals wird statt der Nullmarke verwendet.</li>
        <li>Eine weiche oder gebogene Objektkante wird wie eine harte Kante abgelesen.</li>
      </ul>
      <p>
        Eine ausführliche Fehleranalyse bietet der Ratgeber <Link to="/blog/ist-online-lineal-genau">Wie genau ist ein Online-Lineal?</Link>.
        Für freie Längen können Sie anschließend das <Link to="/">kalibrierte Online-Lineal</Link> öffnen.
      </p>
    </>
  ),
  'lineal-fuer-handy': (
    <>
      <MeasurementDiagram
        title="Objekt am Handy ausrichten"
        leftLabel="Nullpunkt"
        middleLabel="Objektkante"
        rightLabel="Ablesewert"
        caption="Das Objekt liegt parallel zur Skala. Schon eine schräge Lage verlängert die scheinbar gemessene Strecke."
      />
      <h2>So messen Sie auf dem Smartphone Schritt für Schritt</h2>
      <ol>
        <li>Stellen Sie den Browserzoom auf 100 Prozent und öffnen Sie das <Link to="/">Lineal für Handy</Link>.</li>
        <li>Kalibrieren Sie die Skala mit einer bekannten Referenz und ändern Sie danach weder Zoom noch Ausrichtung.</li>
        <li>Entfernen Sie eine dicke Hülle, falls sie verhindert, dass die Objektkante bis an die Skala reicht.</li>
        <li>Legen Sie nur leichte, saubere Gegenstände vorsichtig an und lesen Sie den Endpunkt zweimal ab.</li>
      </ol>
      <h2>Beispiel: Schlüsselbreite prüfen</h2>
      <p>
        Eine flache Schlüsselreide beginnt an der Nullmarke und endet zwischen 24 und 25 mm. Die Kante liegt näher
        am 25-mm-Strich; als alltagstauglicher Wert notieren Sie deshalb etwa 24,7 mm, nicht 24,73 mm. Ein Display
        erlaubt keine beliebig feine Ablesung. Soll der Schlüssel in eine Halterung mit sehr wenig Spiel passen,
        kontrollieren Sie den Wert mit einem Messschieber.
      </p>
      <h2>Browser oder Lineal-App?</h2>
      <p>
        Die Browserlösung startet ohne Installation und speichert die Kalibrierung nur lokal. Eine App kann dafür
        Offline-Funktionen oder gerätespezifische Sensoren bieten. Entscheidend ist nicht das App-Symbol, sondern ob
        die Skala nach einem Gerätewechsel neu kontrolliert wird. Der Vergleich <Link to="/blog/lineal-app-vs-online">Lineal-App oder Online-Lineal</Link>
        hilft bei der Auswahl.
      </p>
      <h2>Schutz des Displays und Grenzen</h2>
      <p>
        Schraubenspitzen, Metallkanten und verschmutzte Teile gehören nicht direkt auf das Glas. Legen Sie ein dünnes
        Blatt Papier dazwischen oder übertragen Sie die Länge auf Papier. Das Handy-Lineal eignet sich für Etiketten,
        Karten, Knöpfe und Bastelmaterial. Für Gewinde, Innendurchmesser und sicherheitsrelevante Bauteile ist ein
        passendes physisches Messgerät erforderlich. Weitere Hinweise stehen unter <Link to="/blog/mm-genau-messen">Millimeter richtig messen</Link>.
      </p>
    </>
  ),
  'massband-online': (
    <>
      <MeasurementDiagram
        title="Lange Strecke in Abschnitte teilen"
        leftLabel="0 cm"
        middleLabel="20 cm"
        rightLabel="40 cm"
        caption="Jeder Abschnitt beginnt exakt an der vorherigen Endmarke. Eine Papiermarkierung verhindert Lücken und Überlappungen."
      />
      <h2>Online-Maßband und echtes Maßband sind nicht identisch</h2>
      <p>
        Ein physisches Band folgt Kurven und kann über viele Zentimeter oder Meter abgerollt werden. Der Bildschirm
        zeigt dagegen eine gerade Skala, deren Länge durch die sichtbare Fläche begrenzt ist. Das Online-Maßband ist
        daher besonders nützlich für kurze, flache Objekte oder als Referenz. Körperumfang, Möbel und Raummaße messen
        Sie verlässlicher mit einem flexiblen Bandmaß.
      </p>
      <h2>Beispiel: 58,4 cm abschnittsweise messen</h2>
      <p>
        Eine Papierbahn ist länger als die sichtbaren 20 cm. Messen Sie zunächst 20,0 cm und setzen Sie dort eine
        feine Bleistiftmarke. Wiederholen Sie den Vorgang bis 40,0 cm. Der letzte Abschnitt endet bei 18,4 cm. Die
        Rechnung lautet 20,0 + 20,0 + 18,4 = 58,4 cm. Kontrollieren Sie die Übergänge: Eine Lücke von nur 1 mm an
        jedem Übergang würde das Endergebnis bereits um 2 mm verändern.
      </p>
      <h2>Wann eine Teilmessung sinnvoll ist</h2>
      <p>
        Teilstrecken funktionieren bei geraden Papierkanten, Bändern oder dünnen Leisten. Bei Stoff, Kabeln oder
        gekrümmten Gegenständen führt das Verschieben schnell zu Zug- und Lagefehlern. Für diese Fälle ist ein echtes
        Maßband die bessere Wahl. Benötigen Sie nur kurze Zentimeterwerte, bietet der Ratgeber <Link to="/blog/massband-online-cm">Maßband online in cm</Link>
        zusätzliche Beispiele.
      </p>
      <h2>Vor jeder Messung kontrollieren</h2>
      <ul>
        <li>Browserzoom und Display-Skalierung seit der Kalibrierung unverändert?</li>
        <li>Skala mit einer zweiten bekannten Länge gegengeprüft?</li>
        <li>Objekt parallel und ohne Spannung ausgerichtet?</li>
        <li>Jeden Übergang eindeutig markiert?</li>
      </ul>
      <p>Startpunkt für kurze Messungen ist das <Link to="/">Online-Maßband in Zentimetern und Millimetern</Link>.</p>
    </>
  ),
  'metrisches-system': (
    <>
      <MeasurementDiagram
        title="Dezimale Längeneinheiten"
        leftLabel="1 mm"
        middleLabel="1 cm = 10 mm"
        rightLabel="1 m = 100 cm"
        caption="Beim Wechsel zur kleineren Einheit wird multipliziert, beim Wechsel zur größeren Einheit dividiert."
      />
      <h2>Die Stellenwertlogik hinter Meter, Zentimeter und Millimeter</h2>
      <p>
        Das metrische System verwendet Vorsätze, die Zehnerpotenzen ausdrücken. „Zenti“ steht für ein Hundertstel,
        „Milli“ für ein Tausendstel eines Meters. Deshalb sind 0,01 m gleich 1 cm und 0,001 m gleich 1 mm. Die
        offiziellen SI-Vorsätze werden vom <a href="https://www.bipm.org/en/measurement-units/si-prefixes" target="_blank" rel="noreferrer">Internationalen Büro für Maß und Gewicht</a>
        dokumentiert. Für die Rechnung brauchen Sie keine neue Formel, sondern verschieben nur die Dezimalstelle.
      </p>
      <h2>Drei durchgerechnete Beispiele</h2>
      <ul>
        <li><strong>2,35 m in cm:</strong> 2,35 × 100 = 235 cm.</li>
        <li><strong>47 mm in cm:</strong> 47 ÷ 10 = 4,7 cm.</li>
        <li><strong>860 cm in m:</strong> 860 ÷ 100 = 8,6 m.</li>
      </ul>
      <p>
        Schreiben Sie Einheit und Zahl immer gemeinsam auf. Die Zahl 47 allein sagt nicht, ob Millimeter,
        Zentimeter oder Meter gemeint sind. Bei technischen Zeichnungen verhindert eine einheitliche Einheit zudem,
        dass Werte aus verschiedenen Maßstäben vermischt werden.
      </p>
      <h2>Metrisch und angloamerikanisch vergleichen</h2>
      <p>
        Ein Wechsel innerhalb des metrischen Systems ist dezimal. Bei Zoll, Fuß und Yard gelten andere Faktoren.
        Deshalb sollte ein imperialer Wert zuerst eindeutig identifiziert und dann mit einem festen Faktor
        umgerechnet werden. Der Artikel zum <Link to="/blog/angloamerikanisches-system">angloamerikanischen Maßsystem</Link>
        zeigt den Unterschied; der <Link to="/zoll-in-cm-rechner">Zoll-in-cm-Rechner</Link> übernimmt konkrete Werte.
      </p>
      <h2>Einheiten auf einer Skala lesen</h2>
      <p>
        Auf einem metrischen Lineal liegen zwischen zwei Zentimeterzahlen gewöhnlich zehn Millimeterabstände. Der
        fünfte Strich markiert 5 mm beziehungsweise 0,5 cm. Prüfen Sie beim <Link to="/">Online-Lineal</Link> zuerst
        die gewählte Einheit, bevor Sie einen Zahlenwert übernehmen. Ein korrekt gelesener Wert mit falscher Einheit
        ist in der Praxis ebenso unbrauchbar wie eine falsche Ablesung.
      </p>
    </>
  ),
  'angloamerikanisches-system': (
    <>
      <MeasurementDiagram
        title="Zoll, Fuß und Yard"
        leftLabel="1 in = 25,4 mm"
        middleLabel="1 ft = 12 in"
        rightLabel="1 yd = 3 ft"
        caption="Anders als im metrischen System wechseln die Faktoren je nach Einheit."
      />
      <h2>Die wichtigsten Beziehungen auf einen Blick</h2>
      <table>
        <thead><tr><th>Einheit</th><th>Beziehung</th><th>Metrischer Wert</th></tr></thead>
        <tbody>
          <tr><td>1 Inch (in)</td><td>Grundwert</td><td>25,4 mm</td></tr>
          <tr><td>1 Foot (ft)</td><td>12 in</td><td>30,48 cm</td></tr>
          <tr><td>1 Yard (yd)</td><td>3 ft</td><td>91,44 cm</td></tr>
          <tr><td>1 Mile (mi)</td><td>1.760 yd</td><td>1,609344 km</td></tr>
        </tbody>
      </table>
      <p>
        Der internationale Zoll ist exakt als 25,4 mm definiert; die Herleitung und Umrechnungsfaktoren erläutert
        das <a href="https://www.nist.gov/pml/owm/si-units-length" target="_blank" rel="noreferrer">US-Metrologieinstitut NIST</a>.
        Dadurch sind Umrechnungen reproduzierbar, auch wenn das Einheitensystem selbst nicht dezimal aufgebaut ist.
      </p>
      <h2>Bruchzoll ohne Verwechslung lesen</h2>
      <p>
        Maße wie 3/8 oder 5/16 Zoll treten bei Werkzeugen und Bauteilen auf. Teilen Sie zuerst Zähler durch Nenner:
        3 ÷ 8 = 0,375. Anschließend multiplizieren Sie mit 25,4. Das Ergebnis für 3/8 Zoll ist 9,525 mm. Runden Sie
        erst am Ende und passend zum Messgerät. Ein Millimeterlineal kann 9,525 mm nicht mit derselben Auflösung wie
        ein Messschieber darstellen.
      </p>
      <h2>Wo begegnen diese Einheiten?</h2>
      <p>
        Bildschirmdiagonalen, Fotoformate und manche Rohr- oder Werkzeugangaben verwenden Zoll. Körpergrößen und
        Raummaße werden in den USA häufig in Fuß und Zoll notiert. Kilometer und Meter bleiben dagegen für viele
        internationale Anwendungen üblich. Beim Einkauf sollte deshalb immer geprüft werden, ob ein Angebot den
        Durchmesser, die Diagonale oder eine Nennweite meint.
      </p>
      <p>
        Für einzelne Werte nutzen Sie den <Link to="/zoll-in-cm-rechner">Rechner für Zoll, cm und mm</Link>.
        Die Grundlagen des Gegenmodells erklärt das <Link to="/blog/metrisches-system">metrische System</Link>.
      </p>
    </>
  ),
  tiefenmesser: (
    <>
      <MeasurementDiagram
        title="Tiefe korrekt abnehmen"
        leftLabel="Auflagefläche"
        middleLabel="Messstab senkrecht"
        rightLabel="Grund der Nut"
        caption="Die Brücke liegt plan auf, während der Messstab senkrecht bis zum tiefsten Punkt geführt wird."
      />
      <h2>Welcher Tiefenmesser passt zur Aufgabe?</h2>
      <p>
        Der Tiefenstab eines Messschiebers genügt für viele Bohrungen und Nuten. Ein eigenständiger
        Tiefenmessschieber besitzt eine breitere Auflage und bleibt auf größeren Flächen leichter rechtwinklig.
        Tiefenmessuhren eignen sich für Vergleichsmessungen, während Profillehren eher Formen übertragen als einen
        einzelnen Zahlenwert liefern. Ein Bildschirm-Lineal kann eine Tiefe nicht direkt erfassen, weil die
        Messrichtung senkrecht zur Displayfläche verläuft.
      </p>
      <h2>Schritt für Schritt zu einem belastbaren Wert</h2>
      <ol>
        <li>Späne, Staub und Grate von Auflagefläche und Vertiefung entfernen.</li>
        <li>Messgerät schließen und prüfen, ob es null anzeigt.</li>
        <li>Die Auflage vollständig und ohne Kippeln auf das Werkstück setzen.</li>
        <li>Messstab langsam bis zum Grund führen, ohne weiches Material einzudrücken.</li>
        <li>Wert ablesen, Messgerät um 90 Grad drehen und erneut messen.</li>
      </ol>
      <h2>Beispiel: Tiefe einer Sacklochbohrung</h2>
      <p>
        Die erste Messung zeigt 18,42 mm, die zweite 18,47 mm und die dritte 18,44 mm. Die Spannweite beträgt 0,05
        mm. Für eine dokumentierte Kontrolle kann der Mittelwert 18,44 mm verwendet werden, sofern das Messgerät und
        die Aufgabe diese Auflösung rechtfertigen. Zeigt eine Wiederholung dagegen 18,9 mm, sollte zuerst nach einem
        Span am Bohrungsgrund oder einer schiefen Auflage gesucht werden, statt die Werte einfach zu mitteln.
      </p>
      <h2>Häufige Fehler und ihre Wirkung</h2>
      <ul>
        <li><strong>Schräge Auflage:</strong> Der Messweg wird länger und der Wert meist zu groß.</li>
        <li><strong>Span am Grund:</strong> Der Stab stoppt zu früh; die gemessene Tiefe ist zu klein.</li>
        <li><strong>Grat an der Öffnung:</strong> Die Brücke liegt nicht plan auf.</li>
        <li><strong>Zu hoher Druck:</strong> Kunststoff oder weiche Beschichtungen werden verformt.</li>
        <li><strong>Falscher Bezug:</strong> Fase oder Senkung wird versehentlich zur Bohrtiefe gezählt.</li>
      </ul>
      <h2>Lineal, Messschieber oder Tiefenmesser?</h2>
      <p>
        Ein Lineal eignet sich für frei zugängliche Außenlängen. Der Messschieber erfasst zusätzlich Innen- und
        Außendurchmesser und besitzt häufig einen Tiefenstab. Ein spezieller Tiefenmesser lohnt sich, wenn die
        Auflagefläche breit sein muss oder viele Vertiefungen vergleichbar geprüft werden. Für die Länge einer
        Schraube bietet der Beitrag <Link to="/blog/schraube-lineal-messen">Schrauben richtig messen</Link> eine
        passende Methode; allgemeine Werkzeuggrenzen erklärt <Link to="/blog/mm-genau-messen">Millimeter genau messen</Link>.
      </p>
      <h2>Pflege und Dokumentation</h2>
      <p>
        Reinigen Sie die Messflächen nach Gebrauch und lagern Sie das Werkzeug trocken. Notieren Sie neben dem Wert
        auch Messstelle, Einheit, Werkzeug und Datum. Bei qualitätskritischen Bauteilen gelten die betrieblichen
        Prüf- und Kalibriervorgaben; eine Webanleitung ersetzt diese nicht. Für eine grobe Außenlänge bleibt das
        <Link to="/">Online-Lineal</Link> verfügbar, nicht jedoch für verdeckte Tiefen.
      </p>
      <h2>Auflagefläche und Bohrungsgrund richtig beurteilen</h2>
      <p>
        Nicht jede Vertiefung besitzt einen ebenen Grund. Eine mit einem Spiralbohrer erzeugte Sacklochbohrung endet
        häufig kegelförmig. Der Messstab berührt dann zuerst die Spitze dieses Kegels, während eine Zeichnung
        möglicherweise die nutzbare zylindrische Tiefe verlangt. Auch eine Fase an der Öffnung kann den Bezug
        verändern. Klären Sie daher vor dem Messen, ob die Gesamttiefe, die Tiefe bis zum Beginn der Bohrerspitze oder
        eine funktionale Einstecktiefe gesucht ist. Ohne eindeutige Definition können zwei korrekt abgelesene Werte
        trotzdem unterschiedliche Dinge beschreiben.
      </p>
      <h2>Auflösung, Wiederholbarkeit und Genauigkeit unterscheiden</h2>
      <p>
        Eine Digitalanzeige mit zwei Nachkommastellen zeigt eine Auflösung von 0,01 mm an. Das bedeutet nicht
        automatisch, dass der Messwert auf 0,01 mm richtig ist. Spiel im Messstab, Schmutz, Temperatur,
        Auflagefehler und die Gerätespezifikation beeinflussen das Ergebnis. Wiederholbarkeit bedeutet zunächst nur,
        dass dieselbe Methode ähnliche Werte liefert. Für eine Genauigkeitsaussage muss zusätzlich bekannt sein,
        wie das Messgerät geprüft wurde und welche Abweichung der Hersteller zulässt.
      </p>
      <h2>Drei praktische Fragen zum Tiefenmessen</h2>
      <h3>Kann ich die Tiefe mit einem normalen Lineal bestimmen?</h3>
      <p>
        Bei einer breiten, offenen Stufe kann ein schmales Stahllineal eine grobe Orientierung geben. In einer
        kleinen Bohrung fehlen jedoch eine sichere Auflage und eine eindeutige senkrechte Führung. Dort ist ein
        Tiefenstab oder Tiefenmessschieber deutlich geeigneter.
      </p>
      <h3>Warum ändern sich Werte beim Drehen des Werkzeugs?</h3>
      <p>
        Die Auflage kann verkanten, der Grund kann schräg sein oder ein Grat liegt nur auf einer Seite. Kleine
        Unterschiede sind ein Signal, die Messstelle zu reinigen und die Rechtwinkligkeit zu kontrollieren. Größere
        Unterschiede können tatsächlich auf eine schiefe oder ungleich tiefe Geometrie hinweisen.
      </p>
      <h3>Wie stark darf ich den Messstab drücken?</h3>
      <p>
        Nur so stark, dass der Stab sicher anliegt. Zusätzlicher Druck verbessert den Kontakt nicht, kann aber weiche
        Werkstoffe eindrücken, den Messstab biegen oder das Werkzeug kippen. Verwenden Sie bei jeder Wiederholung eine
        möglichst ähnliche, geringe Messkraft.
      </p>
    </>
  ),
  'lineal-online-kostenlos': (
    <>
      <MeasurementDiagram
        title="Kostenlos messen in drei Schritten"
        leftLabel="Kalibrieren"
        middleLabel="Anlegen"
        rightLabel="Ablesen"
        caption="Ohne Referenzabgleich ist eine Skala sichtbar, aber noch keine verlässliche physische Länge."
      />
      <h2>Was „kostenlos“ bei diesem Werkzeug bedeutet</h2>
      <p>
        Das Lineal lässt sich ohne Konto, Testphase oder App-Installation im Browser öffnen. Die Kalibrierung wird
        lokal im Browser gespeichert. Werbung finanziert den Betrieb; Werbedienste werden für Besucher mit
        anwendbaren europäischen Vorgaben erst entsprechend der Einwilligungsentscheidung geladen. Einzelheiten
        stehen in der <Link to="/datenschutz">Datenschutzerklärung</Link>.
      </p>
      <h2>Beispiel: Briefmarkenformat grob prüfen</h2>
      <p>
        Eine Marke soll 44 × 26 mm groß sein. Legen Sie zuerst die 44-mm-Kante an die Nullmarke und lesen Sie den
        Endpunkt ab. Drehen Sie das Stück anschließend und prüfen Sie 26 mm. Zeigt die Skala ungefähr 44 und 26 mm,
        passt das Format. Für einen drucktechnischen Beschnitt oder eine Echtheitsprüfung reicht eine
        Bildschirmmessung nicht aus.
      </p>
      <h2>Welche Einheit eignet sich wofür?</h2>
      <ul>
        <li><strong>Millimeter:</strong> kleine Kanten, Papier, Etiketten und Schraubenlängen.</li>
        <li><strong>Zentimeter:</strong> Karten, Fotos, Bastelteile und kurze Alltagsmaße.</li>
        <li><strong>Zoll:</strong> Bildschirmdiagonalen und internationale Produktangaben.</li>
      </ul>
      <p>
        Für beliebige Umrechnungen ist der <Link to="/zoll-in-cm-rechner">Zoll-in-cm-Rechner</Link> geeigneter als
        das Ablesen einer Skala. Zum Messen in Originalgröße öffnen Sie das <Link to="/">Online-Lineal</Link>.
      </p>
      <h2>Wann ein kostenloses Online-Lineal nicht genügt</h2>
      <p>
        Verwenden Sie ein physisches Werkzeug, wenn ein Maß sicherheitsrelevant ist, eine Passung bestimmt oder eine
        Toleranz von wenigen Zehntelmillimetern eingehalten werden muss. Auch gekrümmte und dreidimensionale Objekte
        lassen sich auf einer flachen Skala nur eingeschränkt prüfen. Der Ratgeber <Link to="/blog/ist-online-lineal-genau">Genauigkeit eines Online-Lineals</Link>
        hilft bei der Entscheidung.
      </p>
    </>
  ),
  'lineal-30-cm-online': (
    <>
      <MeasurementDiagram
        title="30 cm als drei Teilstrecken"
        leftLabel="0 cm"
        middleLabel="15 cm"
        rightLabel="30 cm"
        caption="Wenn 30 cm nicht gleichzeitig sichtbar sind, werden sauber markierte Teilstrecken addiert."
      />
      <h2>Passt eine 30-cm-Skala auf jeden Bildschirm?</h2>
      <p>
        Nein. Ein 30-cm-Lineal benötigt mindestens 300 mm nutzbare Länge in der gewählten Ausrichtung. Ein
        13-Zoll-Notebook kann im Querformat genug Breite bieten, während ein Smartphone nur einen Ausschnitt zeigt.
        Browserleisten und Seitenränder verkleinern die verfügbare Fläche zusätzlich. Die Displaydiagonale allein
        beantwortet die Frage nicht; Breite und Seitenverhältnis können Sie mit dem <Link to="/bildschirmgroesse-rechner">Bildschirmgröße-Rechner</Link> bestimmen.
      </p>
      <h2>Beispiel: 27,6 cm auf einem kleineren Display messen</h2>
      <p>
        Messen Sie zuerst 15,0 cm und markieren Sie den Endpunkt auf dem Objekt oder einem darunterliegenden Papier.
        Setzen Sie diese Marke an die Null. Der zweite Abschnitt endet bei 12,6 cm. Zusammen ergeben 15,0 + 12,6 =
        27,6 cm. Wiederholen Sie die Messung in umgekehrter Richtung. Eine andere Summe zeigt, dass ein Übergang
        verrutscht oder die Skala nicht stabil kalibriert war.
      </p>
      <h2>Bildschirmansicht oder Ausdruck?</h2>
      <p>
        Die Bildschirmansicht ist praktisch für spontane Kontrollen. Ein Ausdruck ist besser, wenn Sie die Skala
        bewegen, anzeichnen oder mehrfach verwenden möchten. Drucken Sie die Vorlage ausschließlich mit 100 Prozent
        beziehungsweise „Tatsächliche Größe“. Die Seite <Link to="/lineal-drucken">Lineal 30 cm ausdrucken</Link>
        enthält PDF-Dateien und eine Bankkartenkontrolle.
      </p>
      <h2>Geeignete und ungeeignete Aufgaben</h2>
      <p>
        Papierstreifen, Umschläge, Hefte und flache Leisten lassen sich abschnittsweise prüfen. Stoff, Körpermaße,
        Kabel und runde Gegenstände verschieben oder verformen sich zu leicht; dafür ist ein flexibles Maßband
        geeigneter. Für kurze Referenzen gibt es außerdem das <Link to="/blog/lineal-10-cm-originalgroesse">10-cm-Lineal in Originalgröße</Link>.
      </p>
    </>
  ),
  'zoll-in-cm-umrechnen': (
    <>
      <MeasurementDiagram
        title="Zoll in metrische Werte umrechnen"
        leftLabel="1 Zoll"
        middleLabel="2,54 cm"
        rightLabel="25,4 mm"
        caption="Der Faktor ist exakt. Rundungsabweichungen entstehen erst durch die gewählte Anzahl von Nachkommastellen."
      />
      <h2>Formeln für beide Richtungen</h2>
      <ul>
        <li><strong>Zoll → cm:</strong> Zollwert × 2,54</li>
        <li><strong>Zoll → mm:</strong> Zollwert × 25,4</li>
        <li><strong>cm → Zoll:</strong> Zentimeterwert ÷ 2,54</li>
        <li><strong>mm → Zoll:</strong> Millimeterwert ÷ 25,4</li>
      </ul>
      <p>
        Ein Zoll entspricht exakt 25,4 mm; das bestätigt das <a href="https://www.nist.gov/pml/owm/si-units-length" target="_blank" rel="noreferrer">NIST</a>.
        Bewahren Sie beim Rechnen zunächst mehr Stellen auf und runden Sie erst das Endergebnis.
      </p>
      <h2>Beispiel mit einer Bildschirmdiagonale</h2>
      <p>
        Ein Monitor mit 27 Zoll besitzt eine Diagonale von 27 × 2,54 = 68,58 cm. Das ist nicht seine Breite. Bei
        einem Seitenverhältnis von 16:9 liegt die sichtbare Breite bei ungefähr 59,77 cm. Für diese Geometrie ist der
        <Link to="/bildschirmgroesse-rechner">Bildschirmgröße-Rechner</Link> die passende Ergänzung.
      </p>
      <h2>Bruchzoll in Dezimalzoll umwandeln</h2>
      <p>
        Für 5/16 Zoll teilen Sie 5 durch 16. Das ergibt 0,3125 Zoll. Multipliziert mit 25,4 entstehen 7,9375 mm.
        Bei einem Lineal würden Sie ungefähr 7,9 oder 8 mm ablesen; eine technische Spezifikation sollte den
        ursprünglichen Bruch oder ausreichend viele Stellen behalten.
      </p>
      <h2>Runden ohne Scheingenauigkeit</h2>
      <p>
        Ein Ergebnis wie 11,8110236 Zoll ist mathematisch möglich, aber selten als Messwert sinnvoll. Hat das
        Ausgangsmaß nur eine Dezimalstelle, sollte das Ergebnis nicht plötzlich eine Genauigkeit im Mikrometerbereich
        behaupten. Für schnelle Berechnungen nutzen Sie den <Link to="/zoll-in-cm-rechner">Zoll-in-cm-Rechner</Link>;
        zum Vergleich einer realen Kante dient das <Link to="/">Online-Lineal in Zoll</Link>.
      </p>
    </>
  ),
  'bildschirm-kalibrieren': (
    <>
      <MeasurementDiagram
        title="Pixel in Millimeter übersetzen"
        leftLabel="0 Pixel"
        middleLabel="Referenzbreite"
        rightLabel="mm pro Pixel"
        caption="Die bekannte physische Breite wird mit der gemessenen Pixelbreite verknüpft."
      />
      <h2>Die Rechnung hinter der Kalibrierung</h2>
      <p>
        Angenommen, die 85,60 mm breite Referenzkarte belegt nach dem Abgleich 540 CSS-Pixel. Dann entsprechen 540 ÷
        85,60 ungefähr 6,31 Pixel einem Millimeter. Eine 10-cm-Strecke benötigt in dieser Darstellung rund 631
        Pixel. Ändert der Browserzoom die Größe der CSS-Pixel, stimmt der Faktor nicht mehr und muss neu bestimmt
        werden. Die ID-1-Abmessungen 85,60 × 53,98 mm sind in <a href="https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A7810%3Aed-3%3Av1%3Aen" target="_blank" rel="noreferrer">ISO/IEC 7810</a> beschrieben.
      </p>
      <h2>Sauberer Ablauf mit einer Bankkarte</h2>
      <ol>
        <li>Browserzoom auf 100 Prozent stellen und das Fenster nicht mehr skalieren.</li>
        <li>Eine unverformte Karte ohne Hülle verwenden.</li>
        <li>Die lange Kante vorsichtig parallel zur Referenzfläche halten.</li>
        <li>Anzeige anpassen, bis Anfang und Ende übereinstimmen.</li>
        <li>Mit einer zweiten bekannten Länge prüfen, nicht mit derselben Karte allein.</li>
      </ol>
      <h2>Eine unabhängige Kontrolle durchführen</h2>
      <p>
        Zeigt die 10-cm-Strecke eines physischen Lineals auf dem Bildschirm 99 mm, beträgt die relative Abweichung
        ungefähr 1 Prozent. Für eine grobe Größenkontrolle kann das genügen; für eine Passung nicht. Kontrollieren
        Sie möglichst sowohl eine kurze als auch eine längere Strecke, weil ein falsch gesetzter Nullpunkt und ein
        falscher Skalierungsfaktor unterschiedliche Fehler erzeugen.
      </p>
      <h2>Wann muss neu kalibriert werden?</h2>
      <ul>
        <li>nach einer Änderung des Browserzooms oder der Betriebssystem-Skalierung,</li>
        <li>nach dem Wechsel zwischen internem und externem Monitor,</li>
        <li>nach dem Drehen eines mobilen Geräts, falls die Darstellung neu berechnet wird,</li>
        <li>nach dem Löschen lokaler Browserdaten.</li>
      </ul>
      <p>
        Das Ergebnis können Sie direkt am <Link to="/">Online-Lineal</Link> prüfen. Realistische Einsatzgrenzen
        beschreibt <Link to="/blog/ist-online-lineal-genau">Wie genau ist ein Online-Lineal?</Link>.
      </p>
    </>
  ),
  'lineal-fuer-tablet': (
    <>
      <MeasurementDiagram
        title="Tablet im Querformat nutzen"
        leftLabel="0 cm"
        middleLabel="10 cm"
        rightLabel="20 cm"
        caption="Im Querformat steht meist mehr horizontale Skalenlänge zur Verfügung; kalibriert wird trotzdem auf dem konkreten Gerät."
      />
      <h2>Querformat, Hochformat und nutzbare Fläche</h2>
      <p>
        Die beworbene Displaydiagonale sagt nicht, wie viel Lineal im Browser sichtbar ist. Navigationsleisten,
        geteilte Fenster und das Seitenverhältnis bestimmen die nutzbare Breite. Für ein 20-cm-Objekt ist das
        Querformat meist günstiger. Nach dem Drehen sollten Sie prüfen, ob die Referenzlänge unverändert angezeigt
        wird, bevor Sie den Wert übernehmen.
      </p>
      <h2>Beispiel: Postkarte auf dem Tablet prüfen</h2>
      <p>
        Eine Karte soll 148 × 105 mm messen. Legen Sie zuerst die lange Kante an die Nullmarke; sie endet bei 14,8
        cm. Drehen Sie die Karte und prüfen Sie 10,5 cm. Zeigt eine Richtung einen deutlich anderen Wert, obwohl die
        Karte normgerecht ist, kontrollieren Sie Zoom, Ausrichtung und Kalibrierung. Für einen Druckauftrag ist ein
        physisches Lineal oder eine Schneidemaschine die bessere Endkontrolle.
      </p>
      <h2>Touch-Bedienung ohne versehentliches Zoomen</h2>
      <p>
        Zwei-Finger-Gesten können den Browserzoom verändern. Bedienen Sie Kalibrierung und Einheiten deshalb über die
        vorgesehenen Schaltflächen und prüfen Sie anschließend den Zoom. Legen Sie Stifte oder Metallteile nicht auf
        das Display. Ein dünnes Schutzpapier verhindert Kratzer, kann aber bei dicken Kanten einen kleinen Abstand zur
        Skala erzeugen.
      </p>
      <h2>Tablet, Handy oder Ausdruck auswählen</h2>
      <p>
        Das Tablet ist für längere flache Objekte angenehmer als ein Handy. Das Smartphone ist schneller verfügbar,
        zeigt aber weniger Strecke. Ein <Link to="/lineal-drucken">gedrucktes Lineal</Link> lässt sich bewegen und
        anzeichnen. Für die mobile Variante erklärt <Link to="/blog/lineal-fuer-handy">Lineal für Handy</Link> die
        Besonderheiten; die aktuelle Skala öffnen Sie auf der <Link to="/">Startseite</Link>.
      </p>
    </>
  ),
  'mm-genau-messen': (
    <>
      <MeasurementDiagram
        title="Werkzeug nach Toleranz wählen"
        leftLabel="Lineal"
        middleLabel="Messschieber"
        rightLabel="Mikrometer"
        caption="Je kleiner die zulässige Abweichung, desto geeigneter und kontrollierter muss das Messwerkzeug sein."
      />
      <h2>„Millimetergenau“ zuerst definieren</h2>
      <p>
        Im Alltag bedeutet der Ausdruck oft, auf den nächsten Millimeter abzulesen. In einer technischen Zeichnung
        kann dagegen eine Toleranz von ±0,1 mm oder weniger gefordert sein. Ein Lineal mit 1-mm-Teilung eignet sich
        nicht automatisch für eine Aussage auf Zehntelmillimeter. Notieren Sie deshalb vor der Messung, welche
        Abweichung für die Aufgabe noch akzeptabel ist.
      </p>
      <h2>Beispiel: Schraube mit wiederholter Messung</h2>
      <p>
        Drei Ablesungen ergeben 29,9 mm, 30,1 mm und 30,0 mm. Als Linealwert ist 30 mm sinnvoll. Die Angabe 30,00 mm
        würde eine höhere Sicherheit vortäuschen, als die Skala liefert. Muss die Schraube in eine genau definierte
        Senkung passen, verwenden Sie einen Messschieber und beachten Sie den richtigen Startpunkt der Kopfform. Das
        zeigt der Ratgeber <Link to="/blog/schraube-lineal-messen">Schrauben mit dem Lineal messen</Link>.
      </p>
      <h2>Welches Werkzeug für welche Aufgabe?</h2>
      <table>
        <thead><tr><th>Aufgabe</th><th>Geeignetes Werkzeug</th><th>Grund</th></tr></thead>
        <tbody>
          <tr><td>Papierkante grob prüfen</td><td>Lineal oder Online-Lineal</td><td>freie, flache Kante</td></tr>
          <tr><td>Außendurchmesser</td><td>Messschieber</td><td>parallele Messflächen</td></tr>
          <tr><td>Bohrungstiefe</td><td>Tiefenmesser</td><td>senkrechter Messweg</td></tr>
          <tr><td>sehr dünner Draht</td><td>Mikrometer</td><td>feinere Auflösung</td></tr>
        </tbody>
      </table>
      <h2>Vier Regeln für wiederholbare Ergebnisse</h2>
      <ol>
        <li>Messflächen reinigen und das Werkzeug auf null prüfen.</li>
        <li>Objekt und Skala parallel ausrichten.</li>
        <li>Mindestens zweimal an derselben Stelle messen.</li>
        <li>Nur so viele Nachkommastellen angeben, wie das Werkzeug rechtfertigt.</li>
      </ol>
      <p>
        Für die schnelle Vorprüfung steht das <Link to="/">Online-Lineal mit Millimeterskala</Link> bereit. Wann
        dessen Anzeige genügt, erklärt <Link to="/blog/ist-online-lineal-genau">die Genauigkeitsanalyse</Link>;
        verdeckte Tiefen behandelt der Beitrag <Link to="/blog/tiefenmesser">Tiefenmesser richtig verwenden</Link>.
      </p>
    </>
  ),
};

export const LegacyArticleSupplement = ({ slug }: { slug: string }) => supplements[slug] || null;
