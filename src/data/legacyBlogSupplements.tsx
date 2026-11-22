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
  // <!-- MERGED-EXPANSIONS-2026-11-22 -->
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
      <h2>Wofür sich eine 10-cm-Skala im Alltag eignet</h2>
      <p>Eine Strecke von 10 cm ist eine handliche Bezugsgröße. Sie reicht für viele kleine
        Gegenstände, ohne dass ein langes Lineal nötig ist. Typische Beispiele sind Schmuckstücke,
        Schrauben, Knöpfe, Etiketten, Visitenkarten und Bastelteile aus Papier. Auch in der Schule
        hilft die Strecke: Ein Kind kann daran ablesen, wie lang 10 cm wirklich sind, und das
        Ergebnis mit einem Bleistift oder einem Radiergummi vergleichen.</p>
      <p>Für längere Gegenstände dient die 10-cm-Strecke als Teilmaß. Wer ein Armband oder eine
        Papierkante von 17 cm prüfen will, misst zuerst 10 cm, markiert den Endpunkt und misst
        danach die restlichen 7 cm. So wird aus einer kurzen Skala ein brauchbares Werkzeug für
        mittlere Längen. Wichtig ist dabei nur, dass der Übergang sauber markiert wird. Eine Lücke
        oder eine Überlappung von einem Millimeter verfälscht das Ergebnis um genau diesen Betrag.</p>
      <h2>Schritt für Schritt: 10 cm anzeigen und prüfen</h2>
      <ol>
        <li>Stellen Sie den Browserzoom auf 100 Prozent. Verändern Sie ihn danach nicht mehr.</li>
        <li>Öffnen Sie das <Link to="/">Lineal online in Originalgröße</Link> auf der Startseite.</li>
        <li>Wählen Sie die Einheit Zentimeter und stellen Sie das Querformat ein, wenn der
          Bildschirm im Hochformat zu schmal ist.</li>
        <li>Kalibrieren Sie die Skala mit einer Bankkarte im ID-1-Format. Die lange Kante muss 85,60
          mm entsprechen.</li>
        <li>Prüfen Sie die Kalibrierung mit einer zweiten bekannten Länge, zum Beispiel einer
          Visitenkarte von 85 mm Breite.</li>
        <li>Legen Sie den Gegenstand mit seiner geraden Kante an die Nullmarke und lesen Sie den
          Endpunkt senkrecht von oben ab.</li>
        <li>Wiederholen Sie die Ablesung ein zweites Mal. Weichen die beiden Werte ab, war der
          Startpunkt oder der Blickwinkel nicht gleich.</li>
      </ol>
      <h2>Durchgerechnetes Beispiel: ein Armband von 17,5 cm</h2>
      <p>Ein Armband ist 17,5 cm lang. Es passt nicht vollständig auf die 10-cm-Skala. Messen Sie
        deshalb in zwei Abschnitten. Legen Sie den Anfang des Armbands an die Nullmarke und
        markieren Sie den Punkt bei 10 cm mit einem kleinen Bleistiftstrich auf einem
        darunterliegenden Blatt Papier. Verschieben Sie dann das Armband so, dass die Marke an der
        Nullmarke liegt. Der zweite Abschnitt endet bei 7,5 cm. Die Rechnung lautet 10,0 + 7,5 =
        17,5 cm.</p>
      <p>Prüfen Sie das Ergebnis, indem Sie die Messung in umgekehrter Richtung wiederholen.
        Beginnen Sie am anderen Ende des Armbands und messen Sie zuerst 7,5 cm und dann 10 cm.
        Ergibt sich wieder 17,5 cm, ist die Messung plausibel. Eine andere Summe zeigt, dass eine
        Marke verrutscht ist oder die Skala nach der Kalibrierung verändert wurde.</p>
      <h2>Häufige Fehler bei der 10-cm-Messung</h2>
      <ul>
        <li><strong>Ab Bildschirmrand gemessen:</strong> Die Skala beginnt an der Nullmarke, nicht
          am Rand des Bildschirms oder am Rand des Lineals. Wer am Rand beginnt, misst zu viel.</li>
        <li><strong>Ausrichtung nach der Kalibrierung gewechselt:</strong> Ein Wechsel vom
          Hochformat ins Querformat verändert die Darstellung. Kalibrieren Sie nach jedem Wechsel
          neu.</li>
        <li><strong>Schräger Blickwinkel:</strong> Wer von der Seite auf den Bildschirm schaut,
          liest den Endpunkt verschoben ab. Blicken Sie senkrecht von oben auf die Skala.</li>
        <li><strong>Spiegelung und helles Licht:</strong> Starke Spiegelung macht die feinen Striche
          schwer lesbar. Drehen Sie den Bildschirm etwas oder verdunkeln Sie den Raum.</li>
        <li><strong>Gegenstand schräg angelegt:</strong> Eine schräge Lage verlängert die scheinbar
          gemessene Strecke. Richten Sie die Kante parallel zur Skala aus.</li>
      </ul>
      <h2>Grenzen: was eine Bildschirmmessung nicht leisten kann</h2>
      <p>Ein Online-Lineal ist kein geeichtes Messgerät. Es eignet sich für schnelle
        Größenkontrollen, für die Schule, für Bastelarbeiten und für den Vergleich von Etiketten. Es
        eignet sich nicht für Passungen, für Gewinde, für medizinische Anwendungen oder für Arbeiten
        mit engen Toleranzen. Dort gehört ein physisches Messgerät hin, zum Beispiel ein
        Messschieber.</p>
      <p>Auch die Genauigkeit hat Grenzen. Auf einem Bildschirm lassen sich Werte auf etwa einen
        halben Millimeter ablesen, wenn die Kalibrierung sorgfältig war. Feinere Angaben, etwa 24,73
        mm, täuschen eine Genauigkeit vor, die ein Bildschirm nicht liefern kann. Notieren Sie
        deshalb gerundete Werte wie etwa 24,7 mm.</p>
      <p>Wenn Sie eine feste Skala in der Hand halten wollen, ist das <Link
        to="/lineal-drucken">Lineal zum Ausdrucken</Link> die bessere Wahl. Es lässt sich bewegen,
        anzeichnen und mehrfach verwenden, ohne dass eine Kalibrierung nötig ist.</p>
      <h2>Häufige Fragen</h2>
      <h3>Passt eine 10-cm-Skala auf jedes Smartphone?</h3>
      <p>Nein. Auf schmalen Smartphones kann eine waagerechte Strecke von 10 cm breiter sein als die
        nutzbare Bildschirmfläche. Wechseln Sie dann in das Querformat oder messen Sie zwei
        Abschnitte von jeweils 5 cm. Die Anleitung zur <Link
        to="/blog/bildschirm-kalibrieren">Bildschirmkalibrierung</Link> erklärt, wie Sie die Skala
        vorher prüfen.</p>
      <h3>Warum weicht mein Wert von der Angabe auf der Verpackung ab?</h3>
      <p>Meist liegt es an der Kalibrierung, am Browserzoom oder am Startpunkt. Prüfen Sie zuerst,
        ob der Zoom noch bei 100 Prozent steht und ob die Nullmarke wirklich der Startpunkt war.
        Wiederholen Sie die Messung mit einer zweiten bekannten Länge. Bleibt die Abweichung groß,
        kalibrieren Sie erneut.</p>
      <h3>Kann ich 10 cm auch ausdrucken statt anzeigen?</h3>
      <p>Ja. Das <Link to="/lineal-drucken">Lineal zum Ausdrucken</Link> steht als A4- und als
        US-Letter-PDF bereit. Drucken Sie es mit 100 Prozent aus und prüfen Sie das aufgedruckte
        Prüfmaß, bevor Sie damit messen.</p>
      <h3>Ist das Online-Lineal genau genug für Schmuck?</h3>
      <p>Für eine grobe Größenkontrolle ja, etwa um zu prüfen, ob ein Anhänger ungefähr 20 mm oder
        30 mm lang ist. Für eine Bestellung mit festen Maßen oder für eine Passung reicht eine
        Bildschirmmessung nicht aus. Messen Sie solche Stücke mit einem Messschieber oder einem
        physischen Lineal nach. Mehr dazu steht im Ratgeber <Link
        to="/blog/ist-online-lineal-genau">Wie genau ist ein Online-Lineal?</Link></p>
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
      <h2>Wofür sich ein Lineal fürs Handy eignet</h2>
      <p>Das Handy ist fast immer dabei. Genau deshalb ist ein Lineal fürs Handy praktisch: im
        Laden, wenn ein Etikett geprüft werden soll, in der Werkstatt, wenn ein kleines Teil
        gemessen werden muss, oder in der Schule, wenn kein Lineal im Ranzen liegt. Es braucht keine
        Installation und kein Konto. Der Browser genügt, und die Kalibrierung wird nur lokal auf dem
        Gerät gespeichert.</p>
      <h2>Hochformat oder Querformat: was ist besser?</h2>
      <p>Im Hochformat ist der Bildschirm schmal. Eine waagerechte Strecke von 10 cm passt dann oft
        nicht vollständig auf die Anzeige. Im Querformat steht deutlich mehr Breite zur Verfügung.
        Drehen Sie das Handy deshalb für längere Messungen ins Querformat. Wichtig ist die
        Reihenfolge: Drehen Sie zuerst, kalibrieren Sie danach. Ein Wechsel der Ausrichtung nach der
        Kalibrierung verändert die Darstellung und macht die Messung unbrauchbar.</p>
      <h2>Schritt für Schritt: messen auf dem Smartphone</h2>
      <ol>
        <li>Stellen Sie den Browserzoom auf 100 Prozent. Auf dem Handy heißt das: Die Seite darf
          nicht vergrößert sein.</li>
        <li>Öffnen Sie das <Link to="/">Lineal online in Originalgröße</Link> auf der Startseite.</li>
        <li>Drehen Sie das Handy in die Ausrichtung, in der Sie messen wollen.</li>
        <li>Kalibrieren Sie die Skala mit einer Bankkarte im ID-1-Format. Die lange Kante muss 85,60
          mm entsprechen.</li>
        <li>Prüfen Sie die Skala mit einer zweiten bekannten Länge, zum Beispiel mit einer
          Visitenkarte von 85 mm Breite.</li>
        <li>Legen Sie den Gegenstand mit seiner geraden Kante vorsichtig an die Nullmarke.</li>
        <li>Lesen Sie den Endpunkt senkrecht von oben ab und wiederholen Sie die Ablesung ein
          zweites Mal.</li>
      </ol>
      <h2>Durchgerechnetes Beispiel: ein Knopf von 18 mm</h2>
      <p>Ein Knopf soll 18 mm Durchmesser haben. Legen Sie ihn flach auf den Bildschirm, sodass eine
        gerade Kante durch seine Mitte verläuft. Der linke Rand beginnt an der Nullmarke, der rechte
        Rand endet bei 18 mm. Lesen Sie den Wert zweimal ab. Zeigt die zweite Ablesung 17 mm oder 19
        mm, lag der Knopf beim ersten Mal schräg oder der Startpunkt war nicht die Nullmarke.</p>
      <p>Ein zweites Beispiel: Ein Etikett ist 62 mm breit. Das passt gut auf ein Handy im
        Querformat. Legen Sie die linke Kante an die Nullmarke und lesen Sie 62 mm ab. Drehen Sie
        das Etikett danach um und messen Sie von der anderen Seite. Ergibt sich wieder 62 mm, ist
        die Messung plausibel. Eine Abweichung von einem Millimeter ist bei einer Bildschirmmessung
        normal und kein Grund zur Sorge, solange es nicht um eine Passung geht.</p>
      <h2>Display schützen: drei einfache Regeln</h2>
      <p>Erstens: Keine schweren oder scharfen Gegenstände direkt auf das Glas legen.
        Schraubenspitzen, Metallkanten und Werkzeuge gehören nicht auf den Bildschirm. Zweitens: Ein
        dünnes Blatt Papier dazwischenlegen, wenn der Gegenstand rau oder verschmutzt ist. Drittens:
        Das Handy flach auf einen Tisch legen, statt es in der Hand zu halten. So rutscht nichts,
        und der Gegenstand drückt nicht mit seinem Gewicht auf eine Stelle.</p>
      <h2>Häufige Fehler auf dem Smartphone</h2>
      <ul>
        <li><strong>Hülle nicht entfernt:</strong> Eine dicke Hülle verhindert, dass die Kante des
          Gegenstands bis an die Skala reicht. Nehmen Sie die Hülle vor der Messung ab.</li>
        <li><strong>Zoom versehentlich verändert:</strong> Zwei Finger auf dem Bildschirm vergrößern
          die Seite schnell. Prüfen Sie nach jedem Berühren, ob der Zoom noch bei 100 Prozent steht.</li>
        <li><strong>Kalibrierung vom Tablet übernommen:</strong> Jedes Gerät braucht seine eigene
          Kalibrierung. Was auf dem Tablet stimmt, stimmt auf dem Handy nicht automatisch. Die
          Anleitung für das <Link to="/blog/lineal-fuer-tablet">Lineal für Tablet</Link> erklärt den
          Unterschied.</li>
        <li><strong>Schräger Blickwinkel:</strong> Wer von der Seite schaut, liest den Endpunkt
          verschoben ab. Blicken Sie senkrecht von oben auf die Skala.</li>
        <li><strong>Gegenstand schräg angelegt:</strong> Eine schräge Lage verlängert die scheinbar
          gemessene Strecke. Richten Sie die Kante parallel zur Skala aus.</li>
      </ul>
      <h2>Grenzen: was das Handy-Lineal nicht kann</h2>
      <p>Ein Handy-Lineal ist kein geeichtes Messgerät. Es eignet sich für schnelle Größenkontrollen
        und für den Alltag. Es eignet sich nicht für sicherheitsrelevante Maße, für Passungen oder
        für Toleranzen von wenigen Zehntelmillimetern. Dort gehört ein physisches Messgerät hin.</p>
      <p>Wer eine feste Skala in der Hand halten will, kann das <Link to="/lineal-drucken">Lineal
        zum Ausdrucken</Link> verwenden. Es lässt sich bewegen, anzeichnen und mehrfach nutzen. Der
        Vergleich <Link to="/blog/lineal-app-vs-online">Lineal-Anwendung oder Online-Lineal</Link>
        hilft bei der Entscheidung, welche Lösung für den eigenen Zweck besser passt.</p>
      <h2>Häufige Fragen</h2>
      <h3>Funktioniert das Handy-Lineal auf Android und iPhone?</h3>
      <p>Ja. Das Lineal läuft im Browser und braucht keine Installation. Es funktioniert auf Android
        und iPhone, auf dem Tablet und auf dem PC. Kalibrieren Sie es auf jedem Gerät neu, weil
        Displaygröße und Skalierung unterschiedlich sind.</p>
      <h3>Warum ist mein Wert nach dem Drehen des Handys falsch?</h3>
      <p>Weil die Ausrichtung nach der Kalibrierung gewechselt wurde. Drehen Sie zuerst, kalibrieren
        Sie danach. Jede Änderung der Ausrichtung, des Zooms oder der Anzeige-Skalierung macht eine
        neue Kalibrierung nötig. Mehr dazu steht in der Anleitung <Link
        to="/blog/mm-genau-messen">Millimeter richtig messen</Link>.</p>
      <h3>Kann ich mit dem Handy auch 10 cm anzeigen?</h3>
      <p>Ja, im Querformat. Eine Strecke von <Link to="/blog/lineal-10-cm-originalgroesse">10 cm in
        Originalgröße</Link> passt auf den meisten Smartphones nur quer auf den Bildschirm. Im
        Hochformat messen Sie die Strecke in zwei Abschnitten von jeweils 5 cm.</p>
      <h3>Schadet das Messen dem Bildschirm?</h3>
      <p>Nein, wenn Sie vorsichtig sind. Legen Sie nur leichte, saubere Gegenstände an und kein
        Werkzeug mit scharfen Kanten. Ein dünnes Blatt Papier zwischen Gegenstand und Glas schützt
        zusätzlich. Drücken Sie den Gegenstand nicht fest auf den Bildschirm.</p>
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
      <h2>Was ein Online-Maßband ist und was es nicht ist</h2>
      <p>Ein Online-Maßband zeigt eine gerade Skala in Zentimetern und Millimetern direkt im
        Browser. Es ersetzt ein physisches Bandmaß nur für kurze, flache Gegenstände. Ein echtes
        Bandmaß folgt Kurven, lässt sich um einen Körper legen und über viele Zentimeter oder Meter
        abrollen. Der Bildschirm kann das nicht. Er zeigt eine gerade Skala, deren Länge durch die
        sichtbare Fläche begrenzt ist.</p>
      <p>Trotzdem ist das Online-Maßband nützlich. Es ist sofort da, wenn kein Bandmaß in der Nähe
        ist. Es braucht keine Installation und kein Konto. Es eignet sich für Papier, Etiketten,
        Karten, Bastelteile und kurze gerade Kanten. Für Körperumfang, für Möbel, für Raummaße und
        für alles Gekrümmte bleibt das flexible Bandmaß die richtige Wahl.</p>
      <h2>Schritt für Schritt: mit dem Online-Maßband messen</h2>
      <ol>
        <li>Stellen Sie den Browserzoom auf 100 Prozent und verändern Sie ihn danach nicht mehr.</li>
        <li>Öffnen Sie das <Link to="/">Lineal online in Originalgröße</Link> auf der Startseite.</li>
        <li>Wählen Sie die Einheit Zentimeter. Für feine Werte wechseln Sie danach zu Millimeter.</li>
        <li>Kalibrieren Sie die Skala mit einer Bankkarte im ID-1-Format. Die lange Kante muss 85,60
          mm entsprechen.</li>
        <li>Prüfen Sie die Skala mit einer zweiten bekannten Länge, zum Beispiel mit einer
          Visitenkarte von 85 mm Breite.</li>
        <li>Legen Sie den Gegenstand mit seiner geraden Kante an die Nullmarke und lesen Sie den
          Endpunkt senkrecht von oben ab.</li>
        <li>Wiederholen Sie die Ablesung. Weichen die beiden Werte ab, war der Startpunkt oder der
          Blickwinkel nicht gleich.</li>
      </ol>
      <p>Legen Sie bei längeren Gegenständen den Übergang auf ein Blatt Papier und markieren Sie ihn
        mit einem feinen Bleistiftstrich. So lässt sich die Messung in Abschnitten fortsetzen, ohne
        dass ein Stück verloren geht.</p>
      <h2>Durchgerechnetes Beispiel: ein Geschenkband von 74 cm</h2>
      <p>Ein Geschenkband ist 74 cm lang und damit deutlich länger als die sichtbare Skala. Messen
        Sie es in Abschnitten. Der erste Abschnitt endet bei 20,0 cm. Setzen Sie dort eine feine
        Marke auf das Band oder auf ein darunterliegendes Blatt Papier. Der zweite Abschnitt endet
        wieder bei 20,0 cm, der dritte ebenso. Der letzte Abschnitt endet bei 14,0 cm. Die Rechnung
        lautet 20,0 + 20,0 + 20,0 + 14,0 = 74,0 cm.</p>
      <p>Kontrollieren Sie jeden Übergang. Eine Lücke von nur 1 mm an einem Übergang verändert das
        Endergebnis um 1 mm. Bei drei Übergängen können so schnell 3 mm Fehler entstehen. Messen Sie
        deshalb langsam und markieren Sie jeden Übergang eindeutig. Wiederholen Sie die Messung in
        umgekehrter Richtung. Ergibt sich wieder 74,0 cm, ist die Messung plausibel.</p>
      <h2>Gekrümmte Gegenstände: der Schnur-Trick</h2>
      <p>Ein Band oder ein Kabel lässt sich nicht direkt auf einer geraden Skala messen. Ein
        einfacher Hilfsweg ist eine Schnur. Legen Sie die Schnur entlang des Gegenstands und
        markieren Sie Anfang und Ende auf der Schnur. Ziehen Sie die Schnur danach gerade und messen
        Sie die markierte Strecke auf dem Bildschirm. Das Ergebnis ist eine Näherung, keine genaue
        Messung. Die Schnur darf dabei nicht gedehnt werden, und die Markierung muss genau sitzen.</p>
      <h2>Häufige Fehler beim Online-Maßband</h2>
      <ul>
        <li><strong>Ab Bildschirmrand gemessen:</strong> Die Skala beginnt an der Nullmarke, nicht
          am Rand des Bildschirms. Wer am Rand beginnt, misst zu viel.</li>
        <li><strong>Übergänge nicht markiert:</strong> Wer Abschnitte ohne Marke aneinanderreiht,
          verliert oder verdoppelt leicht ein Stück. Markieren Sie jeden Übergang.</li>
        <li><strong>Stoff oder Kabel gespannt:</strong> Zug verändert die Länge. Legen Sie weiche
          Gegenstände flach hin und spannen Sie sie nicht.</li>
        <li><strong>Zoom nach der Kalibrierung verändert:</strong> Jede Änderung des Zooms oder der
          Anzeige-Skalierung macht eine neue Kalibrierung nötig.</li>
        <li><strong>Kurven direkt gemessen:</strong> Eine gerade Skala kann keine Kurve abbilden.
          Nutzen Sie den Schnur-Trick oder ein flexibles Bandmaß.</li>
      </ul>
      <h2>Grenzen: wann ein echtes Bandmaß nötig ist</h2>
      <p>Ein Online-Maßband ist kein geeichtes Messgerät. Es eignet sich für schnelle
        Größenkontrollen, für die Schule und für Bastelarbeiten. Es eignet sich nicht für
        Zuschnitte, für Passungen, für sicherheitsrelevante Maße oder für Toleranzen von wenigen
        Millimetern. Dort gehört ein physisches Bandmaß oder ein Messschieber hin.</p>
      <p>Wenn Sie eine feste Skala in der Hand halten wollen, ist das <Link
        to="/lineal-drucken">Lineal zum Ausdrucken</Link> die bessere Wahl. Es lässt sich bewegen,
        anzeichnen und mehrfach verwenden. Die Übersicht der <Link
        to="/papierformate">Papierformate</Link> hilft dabei, das passende Blatt für den Ausdruck zu
        wählen.</p>
      <h2>Häufige Fragen</h2>
      <h3>Kann ich mit dem Online-Maßband einen Raum ausmessen?</h3>
      <p>Nein. Ein Raum ist viel länger als die sichtbare Skala, und Wände lassen sich nicht an
        einen Bildschirm legen. Nutzen Sie für Räume ein Bandmaß oder einen Laser-Entfernungsmesser.
        Das Online-Maßband eignet sich nur für kurze, flache Gegenstände.</p>
      <h3>Wie messe ich etwas, das länger ist als der Bildschirm?</h3>
      <p>Messen Sie in Abschnitten und markieren Sie jeden Übergang auf einem Blatt Papier. Addieren
        Sie die Abschnitte danach zusammen. Ein Beispiel mit 74 cm steht weiter oben in diesem
        Artikel. Prüfen Sie das Ergebnis, indem Sie in umgekehrter Richtung erneut messen.</p>
      <h3>Ist das Online-Maßband auch auf dem Handy nutzbar?</h3>
      <p>Ja. Es läuft im Browser auf dem Smartphone, auf dem Tablet und auf dem PC. Auf dem Handy
        drehen Sie das Gerät für längere Strecken ins Querformat und kalibrieren danach neu. Die
        Anleitung <Link to="/blog/lineal-fuer-handy">Lineal für Handy</Link> erklärt die Schritte
        für das Smartphone.</p>
      <h3>Warum zeigt das Maßband nach dem Zoomen falsche Werte?</h3>
      <p>Weil der Browserzoom die Größe der dargestellten Pixel verändert. Stellen Sie den Zoom auf
        100 Prozent zurück und kalibrieren Sie die Skala erneut, bevor Sie weitere Gegenstände
        messen. Mehr dazu steht im Artikel <Link to="/blog/zentimeter-online">Zentimeter
        online</Link>.</p>
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
      <h2>Warum das metrische System so einfach ist</h2>
      <p>Das metrische System beruht auf der Zahl Zehn. Jede Einheit ist das Zehnfache der
        nächstkleineren oder der zehnte Teil der nächstgrößeren. Deshalb lassen sich Werte durch
        Verschieben des Kommas umrechnen. Wer 2,35 m in Zentimeter umrechnen will, verschiebt das
        Komma um zwei Stellen und erhält 235 cm. Eine neue Formel ist dafür nicht nötig.</p>
      <p>Das System entstand in Frankreich im späten 18. Jahrhundert. Der Meter wurde als
        Basiseinheit für Längen festgelegt. Heute verwenden fast alle Länder der Welt das metrische
        System. Es ist die Grundlage des internationalen Einheitensystems, das auch als SI-System
        bekannt ist. Das SI-System ergänzt die Länge um weitere Basiseinheiten, etwa das Kilogramm
        für die Masse und die Sekunde für die Zeit.</p>
      <h2>Die Vorsätze: von Milli bis Kilo</h2>
      <p>Die Vorsätze vor der Einheit geben an, um welchen Faktor es sich handelt. Sie sind immer
        Zehnerpotenzen. Die wichtigsten Vorsätze für Längen stehen in dieser Übersicht:</p>
      <table>
        <thead><tr><th>Vorsatz</th><th>Zeichen</th><th>Faktor</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td>Zenti</td><td>c</td><td>ein Hundertstel</td><td>1 cm = 0,01 m</td></tr>
          <tr><td>Dezi</td><td>d</td><td>ein Zehntel</td><td>1 dm = 0,1 m</td></tr>
          <tr><td>Meter</td><td>m</td><td>eins</td><td>1 m</td></tr>
          <tr><td>Deka</td><td>da</td><td>zehn</td><td>1 dam = 10 m</td></tr>
          <tr><td>Hekto</td><td>h</td><td>hundert</td><td>1 hm = 100 m</td></tr>
          <tr><td>Kilo</td><td>k</td><td>tausend</td><td>1 km = 1.000 m</td></tr>
        </tbody>
      </table>
      <p>Im Alltag brauchen Sie vor allem Milli, Zenti und Kilo. Milli steht für ein Tausendstel,
        Zenti für ein Hundertstel und Kilo für ein Tausendfaches. Wer diese drei Vorsätze kennt,
        kann fast alle Längen im Alltag umrechnen. Dezi, Deka und Hekto kommen in der Schule vor, im
        Alltag selten.</p>
      <h2>Schritt für Schritt: Einheiten umrechnen</h2>
      <ol>
        <li>Schreiben Sie den Wert mit seiner Einheit auf, zum Beispiel 0,75 m.</li>
        <li>Zählen Sie die Stufen zwischen den Einheiten. Von Meter zu Zentimeter sind es zwei
          Stufen: Meter zu Dezimeter, Dezimeter zu Zentimeter.</li>
        <li>Verschieben Sie das Komma um so viele Stellen, wie es Stufen sind. Bei einer kleineren
          Einheit nach rechts, bei einer größeren Einheit nach links.</li>
        <li>Schreiben Sie das Ergebnis wieder mit Einheit auf, zum Beispiel 75 cm.</li>
        <li>Prüfen Sie das Ergebnis mit einer einfachen Überlegung: 0,75 m ist weniger als ein
          Meter, also muss der Wert in Zentimetern unter 100 liegen. 75 cm passt.</li>
      </ol>
      <p>Ein Merksatz hilft: In die kleinere Einheit wird die Zahl größer, in die größere Einheit
        wird die Zahl kleiner. Wer von Meter in Millimeter umrechnet, erhält eine größere Zahl. Wer
        von Millimeter in Meter umrechnet, erhält eine kleinere Zahl.</p>
      <h2>Durchgerechnete Beispiele aus dem Alltag</h2>
      <p><strong>Beispiel 1: 0,75 m in cm.</strong> Zwei Stufen nach unten, das Komma wandert zwei
        Stellen nach rechts. 0,75 m = 75 cm. Das entspricht etwa der Breite eines schmalen
        Schreibtischs.</p>
      <p><strong>Beispiel 2: 125 mm in cm.</strong> Eine Stufe nach oben, das Komma wandert eine
        Stelle nach links. 125 mm = 12,5 cm. Das entspricht etwa der Länge eines Kugelschreibers.</p>
      <p><strong>Beispiel 3: 3,2 km in m.</strong> Drei Stufen nach unten, das Komma wandert drei
        Stellen nach rechts. 3,2 km = 3.200 m. Das entspricht einem längeren Spaziergang.</p>
      <p><strong>Beispiel 4: 8 mm in cm.</strong> Eine Stufe nach oben, das Komma wandert eine
        Stelle nach links. 8 mm = 0,8 cm. Das entspricht etwa der Dicke eines Bleistifts.</p>
      <p><strong>Beispiel 5: 2.400 mm in m.</strong> Drei Stufen nach oben, das Komma wandert drei
        Stellen nach links. 2.400 mm = 2,4 m. Das entspricht etwa der Höhe einer Zimmertür mit
        Rahmen.</p>
      <p>Schreiben Sie Einheit und Zahl immer gemeinsam auf. Die Zahl 47 allein sagt nicht, ob
        Millimeter, Zentimeter oder Meter gemeint sind. Bei technischen Zeichnungen verhindert eine
        einheitliche Einheit zudem, dass Werte aus verschiedenen Maßstäben vermischt werden.</p>
      <h2>Metrisch und angloamerikanisch im Vergleich</h2>
      <p>Der Wechsel innerhalb des metrischen Systems ist dezimal. Der Wechsel zum
        angloamerikanischen System ist es nicht. Dort gelten andere Faktoren: 1 Zoll sind 2,54 cm, 1
        Fuß sind 30,48 cm und 1 Yard sind 91,44 cm. Deshalb sollte ein Wert aus dem
        angloamerikanischen System zuerst eindeutig bestimmt und dann mit einem festen Faktor
        umgerechnet werden. Der Artikel zum <Link
        to="/blog/angloamerikanisches-system">angloamerikanischen Maßsystem</Link> erklärt die
        Einheiten im Einzelnen. Für konkrete Werte ist der <Link
        to="/zoll-in-cm-rechner">Zoll-in-cm-Rechner</Link> schneller als das Rechnen von Hand.</p>
      <h2>Häufige Fehler beim Umrechnen</h2>
      <ul>
        <li><strong>Komma falsch verschoben:</strong> Von Meter zu Zentimeter sind es zwei Stellen,
          nicht eine. Zählen Sie die Stufen, bevor Sie das Komma verschieben.</li>
        <li><strong>Einheit vergessen:</strong> Ein Wert ohne Einheit ist unbrauchbar. Schreiben Sie
          die Einheit immer dazu.</li>
        <li><strong>Millimeter und Zentimeter verwechselt:</strong> 10 mm sind 1 cm, nicht 10 cm.
          Ein Faktor von zehn macht den Unterschied.</li>
      </ul>
      <h2>Häufige Fragen</h2>
      <h3>Was ist die Basiseinheit für Längen im metrischen System?</h3>
      <p>Der Meter. Alle anderen Längeneinheiten leiten sich von ihm ab: Millimeter, Zentimeter,
        Dezimeter, Kilometer und die übrigen Vorsätze. Das metrische System ist die Grundlage des
        internationalen Einheitensystems.</p>
      <h3>Wie rechne ich Millimeter in Zentimeter um?</h3>
      <p>Teilen Sie durch zehn oder verschieben Sie das Komma um eine Stelle nach links. 47 mm sind
        4,7 cm. 8 mm sind 0,8 cm. Der Artikel <Link to="/blog/cm-in-mm">cm in mm</Link> zeigt die
        Umrechnung in beiden Richtungen mit einer Tabelle.</p>
      <h3>Warum ist das metrische System einfacher als das angloamerikanische?</h3>
      <p>Weil alle Einheiten auf der Zahl Zehn beruhen. Umrechnungen gelingen durch Verschieben des
        Kommas. Im angloamerikanischen System gelten dagegen unterschiedliche Faktoren wie 12, 3
        oder 1.760. Das macht das Rechnen von Hand deutlich aufwendiger.</p>
      <h3>Gilt das metrische System überall auf der Welt?</h3>
      <p>Fast überall. Die meisten Länder verwenden das metrische System im Alltag, in der Schule
        und in der Technik. Die USA verwenden im Alltag weiterhin Zoll, Fuß und Yard. Deshalb ist es
        sinnvoll, beide Systeme zu kennen und bei internationalen Angaben genau hinzusehen.</p>
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
      <h2>Was ein Tiefenmesser misst — und was nicht</h2>
      <p>Ein Tiefenmesser misst, wie tief eine Vertiefung ist. Er misst also eine Strecke nach
        unten, nicht eine Strecke über eine Fläche. Typische Fälle sind eine Bohrung, eine Nut, eine
        Aussparung oder eine Vertiefung in einem Werkstück. Die Frage lautet immer: Wie weit reicht
        die Vertiefung von der Oberfläche nach unten?</p>
      <p>Das unterscheidet den Tiefenmesser von einem Lineal. Ein Lineal misst eine Länge auf einer
        Fläche, zum Beispiel die Breite eines Brettes oder die Länge einer Schraube. Es kann keine
        Tiefe messen, weil es nicht in die Vertiefung hineinreicht. Ein Tiefenmesser hat dagegen
        einen Stab oder eine Stange, die in die Vertiefung eingeführt wird und dort den Boden
        erreicht.</p>
      <h2>Die drei Bauarten im Überblick</h2>
      <p>Es gibt drei verbreitete Bauarten, die bereits auf der Seite genannt werden. Sie
        unterscheiden sich in der Art, wie der Wert angezeigt wird, und in der Genauigkeit.</p>
      <p>Der mechanische Tiefenmesser zeigt den Wert über eine Skala mit Nonius oder über eine
        Messuhr an. Er braucht keine Batterie und ist robust. Er eignet sich gut für die Werkstatt,
        wenn eine zuverlässige Messung ohne Strom gewünscht ist. Das Ablesen braucht etwas Übung,
        weil man die Skala genau betrachten muss.</p>
      <p>Der digitale Tiefenmesser zeigt den Wert auf einer digitalen Anzeige an. Er ist einfach
        abzulesen und zeigt den Wert direkt in Millimetern an, zum Beispiel 12,5 mm. Er braucht eine
        Batterie und ist empfindlicher gegenüber Schmutz und Feuchtigkeit als ein mechanisches
        Gerät. Für viele Nutzer ist die digitale Anzeige bequemer, weil sie keine Skala ablesen
        müssen.</p>
      <h2>Schritt für Schritt: Tiefe richtig messen</h2>
      <p>Die folgenden Schritte ergänzen die kurze Anleitung, die bereits auf der Seite steht. Sie
        beschreiben, was bei jedem Schritt zu beachten ist.</p>
      <ol>
        <li>Reinigen Sie das Werkstück. Entfernen Sie Späne, Staub und Grat von der Oberfläche und
          aus der Vertiefung. Schon ein kleiner Span unter der Basis verfälscht das Ergebnis.</li>
        <li>Setzen Sie die Basis des Tiefenmessers plan auf die Oberfläche. Die Basis muss
          vollständig aufliegen und darf nicht wackeln. Wenn die Oberfläche uneben ist, suchen Sie
          eine ebene Stelle in der Nähe der Vertiefung.</li>
        <li>Führen Sie den Stab vorsichtig in die Vertiefung ein, bis er den Boden berührt. Drücken
          Sie nicht fest, sondern lassen Sie den Stab nur anliegen.</li>
        <li>Halten Sie den Tiefenmesser senkrecht. Wenn er schräg steht, misst er eine längere
          Strecke als die wirkliche Tiefe. Schauen Sie von der Seite, ob der Stab gerade steht.</li>
        <li>Lesen Sie den Wert in Millimetern ab. Bei einem digitalen Gerät steht der Wert auf der
          Anzeige, bei einem mechanischen Gerät lesen Sie ihn an der Skala ab.</li>
        <li>Wiederholen Sie die Messung ein zweites Mal. Weichen die beiden Werte um mehr als 0,1 mm
          voneinander ab, reinigen Sie das Werkstück erneut und messen Sie noch einmal.</li>
        <li>Notieren Sie den Wert sofort, zum Beispiel 12,5 mm. So geht er nicht verloren und kann
          später mit anderen Maßen verglichen werden.</li>
      </ol>
      <h2>Durchgerechnete Beispiele</h2>
      <p>Drei Beispiele zeigen, wie die Messung in der Praxis aussieht.</p>
      <p>Erstes Beispiel, eine Bohrung: Eine Bohrung soll 12,0 mm tief sein. Die Messung ergibt 12,5
        mm. Die Bohrung ist also 0,5 mm tiefer als geplant. Für viele Anwendungen ist das
        unproblematisch. Wenn die Tiefe genau stimmen muss, ist das ein Hinweis, die Bohrung zu
        prüfen, bevor das Werkstück weiterverarbeitet wird.</p>
      <p>Zweites Beispiel, eine Nut: Eine Nut ist 8,0 mm tief. Eine Schraube mit einer Länge von 10
        mm soll in die Nut eingesetzt werden. Die Schraube ist 2,0 mm länger als die Nut tief ist.
        Sie würde also 2,0 mm überstehen. In diesem Fall braucht man eine kürzere Schraube oder eine
        tiefere Nut. Wie man die Länge einer Schraube richtig misst, steht im Beitrag <Link
        to="/blog/schraube-lineal-messen">Schraube mit dem Lineal messen</Link>.</p>
      <h2>Häufige Fehler bei der Tiefenmessung</h2>
      <p>Der häufigste Fehler ist der schräge Stab. Wenn der Tiefenmesser nicht senkrecht steht,
        misst er eine längere Strecke als die wirkliche Tiefe. Ein Winkel von nur wenigen Grad
        reicht aus, um den Wert um mehrere Zehntel Millimeter zu verfälschen. Halten Sie den
        Tiefenmesser deshalb immer senkrecht und prüfen Sie die Lage von der Seite.</p>
      <p>Der zweite Fehler ist eine verschmutzte Vertiefung. Späne, Staub oder Grat auf dem Boden
        der Vertiefung verhindern, dass der Stab den wirklichen Boden erreicht. Der gemessene Wert
        ist dann zu klein. Reinigen Sie die Vertiefung vor der Messung gründlich und entfernen Sie
        lose Teile.</p>
      <p>Der dritte Fehler ist eine wackelnde Basis. Wenn die Basis nicht plan auf der Oberfläche
        liegt, kann der Tiefenmesser kippen. Der Wert ist dann nicht verlässlich. Suchen Sie eine
        ebene Stelle und halten Sie die Basis mit leichtem Druck fest, ohne sie zu verkanten.</p>
      <h2>Häufige Fragen</h2>
      <h3>Was ist ein Tiefenmesser?</h3>
      <p>Ein Tiefenmesser ist ein Werkzeug, das die Tiefe einer Vertiefung misst, zum Beispiel die
        Tiefe einer Bohrung, einer Nut oder einer Aussparung. Er wird mit seiner Basis auf die
        Oberfläche gesetzt und sein Stab reicht bis zum Boden der Vertiefung. Der Wert wird in
        Millimetern abgelesen.</p>
      <h3>Kann ich eine Tiefe mit einem Lineal messen?</h3>
      <p>Nein, nicht verlässlich. Ein Lineal liegt auf der Oberfläche auf und reicht nicht in die
        Vertiefung hinein. Es kann nur Längen auf einer Fläche messen. Für eine Tiefe brauchen Sie
        einen Tiefenmesser oder den Tiefenmessstab eines Messschiebers.</p>
      <h3>Wie genau ist ein Tiefenmesser?</h3>
      <p>Ein mechanischer Tiefenmesser und ein digitaler Tiefenmesser zeigen den Wert in der Regel
        auf ein Zehntel Millimeter genau an. Die Genauigkeit hängt davon ab, ob das Werkstück sauber
        ist, ob die Basis plan aufliegt und ob der Stab senkrecht steht. Wiederholen Sie die Messung
        ein zweites Mal, um Fehler zu vermeiden.</p>
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
      <h2>Was kostenlos hier bedeutet</h2>
      <p>Kostenlos bedeutet bei diesem Werkzeug: kein Konto, keine Anmeldung und keine Installation.
        Sie öffnen die Seite im Browser und können sofort messen. Es gibt keine Testphase, die
        abläuft, und keine Funktion, die erst nach einer Zahlung freigeschaltet wird. Die
        Grundfunktionen stehen jedem offen, der die Seite aufruft.</p>
      <p>Die Kalibrierung wird nur lokal im Browser gespeichert. Sie wird nicht an den Betreiber
        übertragen. Das bedeutet auch: Wenn Sie die Browserdaten löschen oder ein anderes Gerät
        verwenden, müssen Sie neu kalibrieren. Das ist kein Fehler, sondern eine Folge davon, dass
        nichts über Sie gespeichert wird.</p>
      <h2>Schritt für Schritt: die erste kostenlose Messung</h2>
      <ol>
        <li>Öffnen Sie das <Link to="/">Lineal online in Originalgröße</Link> auf der Startseite.
          Eine Anmeldung ist nicht nötig.</li>
        <li>Stellen Sie den Browserzoom auf 100 Prozent und verändern Sie ihn danach nicht mehr.</li>
        <li>Wählen Sie die Einheit, die zu Ihrer Aufgabe passt: Millimeter für kleine Kanten,
          Zentimeter für Karten und Fotos, Zoll für internationale Angaben.</li>
        <li>Kalibrieren Sie die Skala mit einer Bankkarte im ID-1-Format. Die lange Kante muss 85,60
          mm entsprechen.</li>
        <li>Prüfen Sie die Skala mit einer zweiten bekannten Länge, zum Beispiel mit einer
          Visitenkarte von 85 mm Breite.</li>
        <li>Legen Sie den Gegenstand mit seiner geraden Kante an die Nullmarke und lesen Sie den
          Endpunkt senkrecht von oben ab.</li>
        <li>Wiederholen Sie die Ablesung. Weichen die beiden Werte ab, war der Startpunkt oder der
          Blickwinkel nicht gleich.</li>
      </ol>
      <h2>Durchgerechnetes Beispiel: ein Foto von 10 mal 15 cm</h2>
      <p>Ein Fotoabzug soll 10 mal 15 cm groß sein. Legen Sie zuerst die kurze Kante an die
        Nullmarke und lesen Sie den Endpunkt ab. Zeigt die Skala 10 cm, stimmt die kurze Seite.
        Drehen Sie das Foto danach und prüfen Sie die lange Kante. Sie sollte 15 cm zeigen.</p>
      <p>Ein zweites Beispiel: Eine Briefmarke soll 44 mal 26 mm groß sein. Legen Sie zuerst die
        44-mm-Kante an die Nullmarke und lesen Sie den Endpunkt ab. Prüfen Sie danach die
        26-mm-Kante. Zeigt die Skala ungefähr 44 und 26 mm, passt das Format. Für einen
        drucktechnischen Beschnitt oder eine Echtheitsprüfung reicht eine Bildschirmmessung nicht
        aus. Dafür braucht es ein physisches Messgerät.</p>
      <h2>Welche Einheit eignet sich wofür?</h2>
      <p>Millimeter eignen sich für kleine Kanten, für Papier, für Etiketten und für
        Schraubenlängen. Zentimeter eignen sich für Karten, Fotos, Bastelteile und kurze
        Alltagsmaße. Zoll eignen sich für Bildschirmdiagonalen und für internationale
        Produktangaben. Für beliebige Umrechnungen ist der <Link
        to="/zoll-in-cm-rechner">Zoll-in-cm-Rechner</Link> geeigneter als das Ablesen einer Skala.</p>
      <p>Wechseln Sie die Einheit erst, nachdem Sie die Kalibrierung geprüft haben. Ein korrekt
        gelesener Wert mit falscher Einheit ist ebenso unbrauchbar wie eine falsche Ablesung. Auf
        dem Handy drehen Sie das Gerät für längere Strecken ins Querformat und kalibrieren danach
        neu. Die Anleitung <Link to="/blog/lineal-fuer-handy">Lineal für Handy</Link> erklärt die
        Schritte für das Smartphone.</p>
      <h2>Wann ein kostenloses Online-Lineal nicht genügt</h2>
      <p>Verwenden Sie ein physisches Werkzeug, wenn ein Maß sicherheitsrelevant ist, wenn eine
        Passung bestimmt wird oder wenn eine Toleranz von wenigen Zehntelmillimetern eingehalten
        werden muss. Auch gekrümmte und dreidimensionale Gegenstände lassen sich auf einer flachen
        Skala nur eingeschränkt prüfen. Der Ratgeber <Link to="/blog/ist-online-lineal-genau">Wie
        genau ist ein Online-Lineal?</Link> hilft bei der Entscheidung.</p>
      <p>Wenn Sie eine feste Skala in der Hand halten wollen, ist das <Link
        to="/lineal-drucken">Lineal zum Ausdrucken</Link> die bessere Wahl. Es lässt sich bewegen,
        anzeichnen und mehrfach verwenden. Einen Überblick über die Formate gibt die Seite <Link
        to="/papierformate">Papierformate</Link>.</p>
      <h2>Häufige Fehler bei der ersten Messung</h2>
      <ul>
        <li><strong>Ab Bildschirmrand gemessen:</strong> Die Skala beginnt an der Nullmarke, nicht
          am Rand des Bildschirms. Wer am Rand beginnt, misst zu viel.</li>
        <li><strong>Zoom nach der Kalibrierung verändert:</strong> Jede Änderung des Zooms oder der
          Anzeige-Skalierung macht eine neue Kalibrierung nötig.</li>
        <li><strong>Gegenstand schräg angelegt:</strong> Eine schräge Lage verlängert die scheinbar
          gemessene Strecke. Richten Sie die Kante parallel zur Skala aus.</li>
        <li><strong>Schräger Blickwinkel:</strong> Wer von der Seite schaut, liest den Endpunkt
          verschoben ab. Blicken Sie senkrecht von oben auf die Skala.</li>
        <li><strong>Feine Werte zu genau notiert:</strong> Auf einem Bildschirm lassen sich Werte
          auf etwa einen halben Millimeter ablesen. Notieren Sie gerundete Werte, zum Beispiel etwa
          24,7 mm statt 24,73 mm.</li>
      </ul>
      <h2>Häufige Fragen</h2>
      <h3>Brauche ich ein Konto, um das Lineal zu nutzen?</h3>
      <p>Nein. Das Lineal funktioniert ohne Anmeldung und ohne Konto. Sie öffnen die Seite im
        Browser, kalibrieren die Skala und messen sofort. Es werden keine Anmeldedaten abgefragt und
        kein Konto angelegt.</p>
      <h3>Kann ich das Lineal ohne Internet nutzen?</h3>
      <p>Nein. Die Seite muss zuerst im Browser geladen werden. Danach können Sie die Skala
        verwenden, solange die Seite geöffnet bleibt. Wenn Sie die Seite schließen und später ohne
        Verbindung erneut öffnen wollen, funktioniert das nicht. Für solche Fälle ist das <Link
        to="/lineal-drucken">Lineal zum Ausdrucken</Link> die bessere Wahl, weil es auf Papier
        unabhängig vom Bildschirm ist.</p>
      <h3>Ist die Kalibrierung auch kostenlos?</h3>
      <p>Ja. Die Kalibrierung gehört zur kostenlosen Nutzung dazu. Sie dauert weniger als eine
        Minute und wird nur lokal im Browser gespeichert. Sie wird nicht übertragen und nicht
        verkauft. Wenn Sie die Browserdaten löschen, müssen Sie sie wiederholen.</p>
      <h3>Warum ist das Lineal kostenlos, wenn andere Messwerkzeuge Geld kosten?</h3>
      <p>Weil es ein einfaches Werkzeug im Browser ist und kein geeichtes Messgerät. Es hilft bei
        schnellen Größenkontrollen und ersetzt kein physisches Lineal, wenn ein Maß stimmen muss.
        Der Betrieb soll künftig über Anzeigen finanziert werden, die erst nach einer Einwilligung
        geladen werden. Einzelheiten dazu stehen in der Datenschutzerklärung.</p>
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
      <h2>Wann eine 30-cm-Skala wirklich gebraucht wird</h2>
      <p>Ein 30-cm-Lineal ist das klassische Schullineal. In der Schule wird es für
        Geometrieaufgaben gebraucht: Geraden zeichnen, Winkel abtragen, Dreiecke vermessen. Im Büro
        dient es zum Prüfen von Ausdrucken und zum Anlegen an Skizzen. Ein Blatt im Format A4 misst
        29,7 cm in der Länge. Wer eine A4-Seite am Bildschirm prüfen will, braucht fast die volle
        30-cm-Skala.</p>
      <p>Im Alltag taucht die Länge ebenfalls oft auf. Ein Kochlöffel, eine Gardinenschiene oder
        eine Leiste sind zwischen 25 und 30 cm lang. Für solche Gegenstände reicht ein
        10-cm-Abschnitt nicht aus. Wer nur einen kurzen Abschnitt sieht, muss in Teilen messen und
        die Teilwerte addieren.</p>
      <h2>Schritt für Schritt: 30 cm in Abschnitten messen</h2>
      <p>Wenn die volle Skala nicht auf den Bildschirm passt, messen Sie in zwei Abschnitten.
        Voraussetzung: Die Skala ist kalibriert und der Browserzoom steht auf 100 Prozent.</p>
      <ol>
        <li>Legen Sie den Gegenstand gerade an die Nullmarke der Skala.</li>
        <li>Lesen Sie den ersten Abschnitt ab, zum Beispiel 15,0 cm, und markieren Sie den Endpunkt
          mit einem Bleistiftstrich auf einem darunterliegenden Blatt Papier.</li>
        <li>Verschieben Sie Gegenstand oder Papier so, dass die Markierung genau an der Nullmarke
          liegt. Verändern Sie dabei weder Browserzoom noch Fenstergröße.</li>
        <li>Lesen Sie den zweiten Abschnitt ab und addieren Sie beide Werte.</li>
        <li>Messen Sie danach in umgekehrter Richtung und prüfen Sie, ob die Summe wieder denselben
          Wert ergibt.</li>
      </ol>
      <p>Ein Beispiel: Eine Leiste soll 28,4 cm lang sein. Der erste Abschnitt endet bei 15,0 cm,
        der zweite bei 13,4 cm. Zusammen ergeben das 28,4 cm. Ergibt die Gegenmessung dagegen 28,1
        cm, ist an einer Übergangsstelle etwas verrutscht. Wiederholen Sie dann die Messung, statt
        einen Mittelwert zu nehmen.</p>
      <h2>Querformat und Fenstergröße richtig einstellen</h2>
      <p>Die nutzbare Breite hängt nicht nur vom Gerät ab, sondern auch vom Fenster. Ein
        Browserfenster, das nur einen Teil des Bildschirms einnimmt, zeigt weniger Skala als ein
        Fenster im Vollbild. Stellen Sie das Fenster auf die volle Bildschirmbreite.</p>
      <p>Das Querformat ist auf fast allen Geräten die bessere Wahl für lange Strecken. Drehen Sie
        ein Tablet in die waagerechte Ausrichtung, falls die Halterung das zulässt. Prüfen Sie nach
        dem Drehen die Kalibrierung erneut, denn manche Browser berechnen die Darstellung danach
        neu. Die genaue Breite Ihres Bildschirms können Sie mit dem <Link
        to="/bildschirmgroesse-rechner">Bildschirmgröße-Rechner</Link> bestimmen.</p>
      <h2>Häufige Fehler bei 30-cm-Messungen</h2>
      <p>Der häufigste Fehler ist das Ablesen ab der Außenkante statt ab der Nullmarke. Vor der Null
        liegt fast immer ein kleiner Rand. Wer dort beginnt, misst zu viel. Legen Sie die Kante des
        Gegenstands deshalb immer an den Strich mit der Zahl 0.</p>
      <p>Der zweite Fehler ist ein verrutschter Übergang bei der Abschnittsmessung. Die Markierung
        muss an der Null liegen. Ein Versatz von nur einem Millimeter bleibt in der Summe enthalten.
        Bei zwei Abschnitten kann der Fehler bis zu zwei Millimeter betragen.</p>
      <p>Der dritte Fehler betrifft das Smartphone. Auf einem kleinen Display ist eine 30-cm-Skala
        in vielen Abschnitten zu messen, und jeder Abschnitt fügt eine mögliche Abweichung hinzu.
        Für eine 30-cm-Strecke ist ein Smartphone deshalb eine Notlösung.</p>
      <p>Der vierte Fehler ist das Messen auf einem gebogenen Bildschirm oder aus einem schrägen
        Blickwinkel. Eine gewölbte Fläche verzerrt die Abstände am Rand.</p>
      <h2>Bildschirm oder Ausdruck?</h2>
      <p>Für eine spontane Kontrolle einer Papierkante genügt der Bildschirm. Die Skala öffnen Sie
        auf der <Link to="/">Startseite</Link>. Für eine Messung über 30 cm mit mehreren Abschnitten
        ist ein Ausdruck verlässlicher, weil die Vorlage bewegt und angezeichnet werden kann.
        Unterwegs ohne Drucker bleibt nur der Bildschirm.</p>
      <p>Für den Ausdruck gilt eine feste Regel: Drucken Sie ausschließlich mit 100 Prozent, also
        mit der Einstellung „Tatsächliche Größe“. Jede Anpassung an die Seite verändert den Maßstab
        und macht die Skala unbrauchbar. Die fertigen Vorlagen finden Sie auf der Seite <Link
        to="/lineal-drucken">Lineal 30 cm ausdrucken</Link>. Denken Sie daran: Ein Bildschirm-Lineal
        ersetzt kein geeichtes Messgerät.</p>
      <h2>Häufige Fragen</h2>
      <h3>Passt eine 30-cm-Skala auf ein Notebook?</h3>
      <p>Oft ja, aber nicht immer. Entscheidend ist die nutzbare Breite im Browser, nicht die
        Diagonale. Ein Notebook mit 13 Zoll Diagonale bietet im Querformat genug Breite, ein
        kleineres Gerät nicht.</p>
      <h3>Wie genau ist eine Abschnittsmessung?</h3>
      <p>Jeder Abschnitt für sich ist so genau wie die Kalibrierung. Der zusätzliche Fehler entsteht
        nur an den Übergängen. Wer sorgfältig markiert und in umgekehrter Richtung gegenmisst,
        erkennt einen verrutschten Übergang sofort.</p>
      <h3>Kann ich ein 30-cm-Lineal auf dem Smartphone anzeigen?</h3>
      <p>Die Skala lässt sich anzeigen, aber nur in kurzen Abschnitten. Für eine 30-cm-Strecke wären
        viele Übergänge nötig, und jeder Übergang kann den Wert verfälschen. Für kurze Strecken ist
        das Smartphone dagegen gut geeignet. Wie das Ablesen dort funktioniert, erklärt der Beitrag
        <Link to="/blog/lineal-fuer-handy">Lineal für Handy</Link>.</p>
      <h3>Muss ich nach dem Drehen des Bildschirms neu kalibrieren?</h3>
      <p>Prüfen Sie es in jedem Fall mit einer bekannten Länge. Manche Browser behalten den
        Abgleich, andere berechnen die Darstellung neu. Eine Kontrolle mit einer Bankkarte dauert
        nur wenige Sekunden. Wie die Kontrolle abläuft, steht in der Anleitung <Link
        to="/blog/bildschirm-kalibrieren">Bildschirm kalibrieren</Link>.</p>
      <p>Kurz gesagt: Eine 30-cm-Skala braucht 300 mm nutzbare Breite im Browser. Passt sie nicht
        auf einmal auf den Bildschirm, messen Sie in zwei Abschnitten und prüfen Sie die Summe durch
        eine Gegenmessung.</p>
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
      <h2>Wo Zoll im Alltag vorkommt</h2>
      <p>Zoll ist die Längeneinheit des angloamerikanischen Systems. In Deutschland begegnet sie
        überall dort, wo Produkte aus den Vereinigten Staaten oder aus Großbritannien stammen oder
        wo sich die Zoll-Angabe als Branchenstandard gehalten hat. Der bekannteste Fall ist der
        Bildschirm: Fernseher, Notebooks, Tablets und Smartphones werden fast immer in Zoll
        angegeben.</p>
      <p>Auch bei Fahrrädern ist Zoll üblich. Ein Fahrrad mit 26 Zoll hat einen Reifendurchmesser
        von etwa 66 cm, ein Fahrrad mit 28 Zoll einen von etwa 71 cm. Bei Autoreifen und Felgen
        steht die Zoll-Angabe für den Felgendurchmesser. Rohre, Schrauben und Wasseranschlüsse
        werden ebenfalls oft in Zoll angegeben. Wer ein Ersatzteil bestellen will, muss die Angabe
        erst in Millimeter umrechnen, sonst passt das Teil nicht.</p>
      <h2>Rechnen ohne Taschenrechner: Merkhilfen</h2>
      <p>Die genaue Formel lautet: Zollwert mal 2,54 ergibt Zentimeter. Für eine schnelle Schätzung
        im Kopf genügt der Faktor 2,5. Das Ergebnis liegt dann etwa 1,6 Prozent unter dem genauen
        Wert. Bei 10 Zoll ergibt die Schätzung 25 cm statt der genauen 25,4 cm. Der Unterschied von
        4 mm fällt bei einer groben Größenkontrolle kaum ins Gewicht. Bei einem Zuschnitt oder einer
        Bestellung rechnen Sie dagegen immer mit 2,54.</p>
      <p>Zwei weitere Merkhilfen helfen im Alltag. Erstens: 4 Zoll sind etwas mehr als 10 cm, genau
        10,16 cm. Zweitens: 20 Zoll sind etwas mehr als 50 cm, genau 50,8 cm. Wer sich diese beiden
        Werte merkt, kann viele Angaben im Kopf einordnen. Ein 40-Zoll-Fernseher liegt knapp über
        einem Meter, genau bei 101,6 cm.</p>
      <p>Achten Sie beim Rechnen auf die Richtung. Zoll in Zentimeter bedeutet mal 2,54. Zentimeter
        in Zoll bedeutet geteilt durch 2,54. Der häufigste Fehler ist die falsche Richtung: Wer 30
        cm mal 2,54 rechnet, erhält 76,2 und hält das fälschlich für Zoll. Richtig sind etwa 11,81
        Zoll. Für beliebige Werte steht der <Link to="/zoll-in-cm-rechner">Zoll-in-cm-Rechner</Link>
        bereit.</p>
      <h2>Beispiele mit Rechnung</h2>
      <p>Ein Notebook mit 13 Zoll Diagonale: 13 mal 2,54 ergibt 33,02 cm. Das ist die Diagonale,
        nicht die Breite des Geräts. Die Breite hängt vom Seitenverhältnis ab. Wie breit ein
        Bildschirm bei einer bestimmten Diagonale ist, zeigt der <Link
        to="/bildschirmgroesse-rechner">Bildschirmgröße-Rechner</Link>.</p>
      <p>Ein Smartphone mit 6 Zoll Diagonale: 6 mal 2,54 ergibt 15,24 cm. Auch hier gilt: Die Zahl
        beschreibt die Diagonale des Displays, nicht die Gehäusebreite.</p>
      <p>Ein Rohranschluss mit 3/4 Zoll: 0,75 mal 25,4 ergibt 19,05 mm. Bei Rohren und Schrauben
        wird fast immer in Millimetern gerechnet, weil die Unterschiede klein sind. Ein Anschluss
        mit 1/2 Zoll misst 12,7 mm. Der Unterschied von 6,35 mm entscheidet darüber, ob ein Teil
        passt.</p>
      <p>Ein Fernseher mit 55 Zoll Diagonale: 55 mal 2,54 ergibt 139,70 cm. Das ist die Diagonale.
        Die Breite liegt bei einem Seitenverhältnis von 16:9 bei etwa 121,7 cm. Wer einen Fernseher
        kaufen will, sollte deshalb nicht nur die Zoll-Angabe, sondern auch die Stellfläche messen.
        Wie eine Bildschirmdiagonale in Zoll abgelesen wird, erklärt der Beitrag <Link
        to="/blog/bildschirm-zoll-messen">Bildschirm in Zoll messen</Link>.</p>
      <h2>Häufige Fehler beim Umrechnen</h2>
      <p>Der erste Fehler ist die Verwechslung von Diagonale und Breite. Eine Angabe wie 27 Zoll
        beschreibt immer die Diagonale. Wer daraus die Breite ableiten will, braucht zusätzlich das
        Seitenverhältnis. Ohne diese Angabe ist jede Breitenangabe geraten.</p>
      <p>Der zweite Fehler ist die Verwechslung von Zoll und Fuß. Ein Fuß hat 12 Zoll und entspricht
        30,48 cm. Eine Angabe wie 5 Fuß und 8 Zoll sind also nicht 5,8 Zoll, sondern 68 Zoll, also
        172,72 cm. Bei Körpergrößen aus angloamerikanischen Quellen ist dieser Fehler besonders
        häufig.</p>
      <p>Der dritte Fehler ist das Runden auf zu viele Stellen. Ein Ergebnis wie 11,8110236 Zoll
        sieht genau aus, ist es aber nicht, wenn der Ausgangswert nur eine Dezimalstelle hatte.
        Runden Sie das Endergebnis auf eine Stelle, die zum Ausgangswert passt.</p>
      <p>Der vierte Fehler ist das Zollzeichen. In vielen Texten steht ein doppeltes
        Anführungszeichen für Zoll, also 10". Schreiben Sie in eigenen Notizen lieber „10 Zoll“ aus,
        damit keine Missverständnisse entstehen.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie rechne ich Zoll in cm um?</h3>
      <p>Multiplizieren Sie den Zollwert mit 2,54. Das Ergebnis ist der Wert in Zentimetern.
        Beispiel: 8 Zoll mal 2,54 ergibt 20,32 cm. Umgekehrt teilen Sie Zentimeter durch 2,54, um
        Zoll zu erhalten.</p>
      <h3>Wie viel sind 10 Zoll in cm?</h3>
      <p>10 Zoll sind 25,4 cm. Für eine grobe Schätzung im Kopf können Sie mit 25 cm rechnen. Der
        genaue Wert ist 25,4 cm. Bei einem Bildschirm bedeutet die Angabe die Diagonale, nicht die
        Breite.</p>
      <h3>Was ist der Unterschied zwischen Zoll und Fuß?</h3>
      <p>Ein Fuß hat 12 Zoll. Ein Zoll sind 2,54 cm, ein Fuß sind 30,48 cm. Die beiden Einheiten
        gehören zum selben System, dem <Link
        to="/blog/angloamerikanisches-system">angloamerikanischen System</Link>. Wie das metrische
        System aufgebaut ist, erklärt der Beitrag <Link to="/blog/metrisches-system">Metrisches
        System</Link>.</p>
      <h3>Warum werden Bildschirme in Zoll angegeben?</h3>
      <p>Die Zoll-Angabe für Bildschirme hat sich als Branchenstandard gehalten, auch in Ländern mit
        metrischem System. Sie beschreibt die Diagonale des sichtbaren Bereichs. Da fast alle
        Hersteller diese Angabe verwenden, lässt sie sich gut vergleichen. In Zentimeter umgerechnet
        sind 15 Zoll 38,1 cm und 17 Zoll 43,18 cm.</p>
      <p>Kurz gesagt: Zoll mal 2,54 ergibt Zentimeter, Zentimeter geteilt durch 2,54 ergibt Zoll.
        Achten Sie darauf, ob eine Angabe die Diagonale oder eine Kante beschreibt, und runden Sie
        erst das Endergebnis.</p>
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
      <h2>Warum der Bildschirm ohne Abgleich keine echte Länge zeigt</h2>
      <p>Ein Browser kennt nur Bildschirmpunkte. Er weiß, wie viele Punkte er darstellt, aber nicht,
        wie breit ein Punkt auf Ihrem Bildschirm wirklich ist. Zwei Bildschirme können dieselbe
        Anzahl von Punkten zeigen und trotzdem unterschiedlich groß sein. Dazu kommen der
        Browserzoom und die Skalierung des Betriebssystems. Beide verändern die dargestellte Größe,
        ohne dass die Anzahl der Punkte sich ändert.</p>
      <p>Deshalb kann ein Online-Lineal ohne Abgleich keine verlässliche Länge anzeigen. Die Skala
        sieht richtig aus, aber die Abstände zwischen den Strichen stimmen nicht mit Millimetern
        überein. Erst der Abgleich mit einer bekannten Länge legt fest, wie viele Bildschirmpunkte
        einem Millimeter entsprechen. Dieser Wert gilt nur für das eine Gerät, den einen Browser und
        die eine Einstellung.</p>
      <h2>Vorbereitung: Licht, sauberes Display und ruhiges Fenster</h2>
      <p>Bevor Sie kalibrieren, schaffen Sie gute Bedingungen. Wischen Sie das Display mit einem
        weichen Tuch ab. Vermeiden Sie starkes Gegenlicht und Spiegelungen.</p>
      <p>Stellen Sie Fenster und Browserzoom auf volle Breite und 100 Prozent. Legen Sie die
        Bankkarte ohne Hülle bereit. Eine verbogene Karte ist als Referenz unbrauchbar.</p>
      <h2>Kontrolle mit zwei Längen</h2>
      <p>Eine einzige Referenz kann täuschen. Wenn Sie nur eine kurze Strecke prüfen, fällt ein
        falscher Skalierungsfaktor kaum auf. Prüfen Sie deshalb immer zwei Längen: eine kurze und
        eine lange. Nehmen Sie zum Beispiel eine 1-Euro-Münze mit 23,25 mm Durchmesser für die kurze
        Strecke und die Bankkarte mit 85,60 mm Breite für die lange Strecke.</p>
      <p>Ein Beispiel zeigt, warum das wichtig ist. Angenommen, eine Strecke von 10 cm wird auf dem
        Bildschirm mit 102 mm angezeigt. Die Abweichung beträgt 2 Prozent. Bei einer kurzen Strecke
        von 2 cm wären das nur 0,4 mm und kaum zu sehen. Bei einer Strecke von 30 cm wären es
        dagegen 6 mm. Der Fehler wächst mit der Länge.</p>
      <p>So werten Sie die Kontrolle aus: Zeigt die 10-cm-Strecke 98 mm statt 100 mm, liegt die
        Anzeige 2 Prozent zu klein. Zeigt sie 102 mm, liegt sie 2 Prozent zu groß. Für eine grobe
        Größenkontrolle kann eine Abweichung von 1 bis 2 Prozent genügen. Für eine Passung oder
        einen Zuschnitt genügt sie nicht. In diesem Fall kalibrieren Sie erneut und prüfen danach
        mit einer dritten Länge, zum Beispiel mit einem physischen Lineal. Wie groß die Abweichung
        im Alltag sein darf, erklärt der Beitrag <Link to="/blog/ist-online-lineal-genau">Wie genau
        ist ein Online-Lineal?</Link>.</p>
      <h2>Auf jedem Gerät neu kalibrieren</h2>
      <p>Der Abgleich gilt nur für das Gerät, auf dem er gemacht wurde. Ein Smartphone, ein Tablet,
        ein Notebook und ein externer Monitor brauchen jeweils einen eigenen Abgleich. Die
        Einstellung wird nur lokal im Browser gespeichert. Wer den Browser wechselt oder die
        Browserdaten löscht, muss neu kalibrieren. Die Skala öffnen Sie auf der <Link
        to="/">Startseite</Link>.</p>
      <p>Das gilt für denselben Bildschirm mit unterschiedlichen Einstellungen. Wenn Sie einen
        externen Monitor anschließen, ändert sich die Darstellung. Wenn Sie die Skalierung des
        Betriebssystems von 100 auf 125 Prozent stellen, ändert sie sich ebenfalls. Beides sind
        Anlässe für eine neue Kontrolle. Vor einer wichtigen Messung prüfen Sie eine bekannte Länge.</p>
      <h2>Häufige Fehler beim Abgleich</h2>
      <p>Der erste Fehler ist die Karte in der Hülle. Eine Hülle verändert die Lage der Kante und
        verfälscht den Abgleich. Nehmen Sie die Karte immer aus der Hülle.</p>
      <p>Der zweite Fehler ist der schräge Blickwinkel. Wer von der Seite auf die Skala schaut,
        sieht die Kante an einer anderen Stelle als bei senkrechter Betrachtung. Blicken Sie
        senkrecht auf die Stelle, an der Sie ablesen.</p>
      <p>Der dritte Fehler ist ein veränderter Browserzoom während der Messung. Wer nach dem
        Abgleich den Zoom verändert, macht den Abgleich wertlos. Stellen Sie den Zoom vor dem
        Abgleich auf 100 Prozent und lassen Sie ihn danach unverändert. Auch eine Zwei-Finger-Geste
        auf einem berührungsempfindlichen Bildschirm kann den Zoom versehentlich ändern.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie oft muss ich den Bildschirm kalibrieren?</h3>
      <p>Einmal je Gerät, Browser und Einstellung genügt, solange sich nichts ändert. Neu
        kalibrieren müssen Sie nach einer Änderung des Browserzooms, der Betriebssystem-Skalierung,
        des Monitors oder der Ausrichtung und nach dem Löschen der Browserdaten.</p>
      <h3>Welche Referenz ist am besten?</h3>
      <p>Die Bankkarte im Format ID-1 mit 85,60 mm Breite ist die gebräuchlichste Referenz, weil
        fast jede Person eine besitzt. Die genauen Maße stehen im Beitrag <Link
        to="/blog/bankkartengroesse">Bankkartengröße</Link>. Für die Feinjustierung eignet sich
        zusätzlich eine 1-Euro-Münze mit 23,25 mm Durchmesser. Eine 10-cm-Strecke prüfen Sie mit dem
        <Link to="/blog/lineal-10-cm-originalgroesse">Lineal 10 cm in Originalgröße</Link>.</p>
      <h3>Warum zeigt mein Notebook einen anderen Wert als mein Smartphone?</h3>
      <p>Weil jedes Gerät eine eigene Pixeldichte und eine eigene Skalierung hat. Der Abgleich gilt
        nur für das Gerät, auf dem er gemacht wurde. Kalibrieren Sie jedes Gerät einzeln.</p>
      <h3>Reicht eine Kalibrierung für Millimeter?</h3>
      <p>Für eine grobe Kontrolle auf den Millimeter reicht ein sorgfältiger Abgleich oft aus. Für
        eine Aussage auf Zehntelmillimeter reicht er nicht. Ein Bildschirm-Lineal ist kein geeichtes
        Messgerät. Wie fein Sie ablesen dürfen, erklärt der Beitrag <Link
        to="/blog/mm-genau-messen">Millimeter genau messen</Link>.</p>
      <p>Kurz gesagt: Kalibrieren Sie jedes Gerät einzeln, prüfen Sie den Abgleich mit zwei
        verschiedenen Längen und wiederholen Sie die Kontrolle nach jeder Änderung an Zoom,
        Skalierung oder Monitor. Für enge Toleranzen, Passungen oder sicherheitsrelevante Bauteile
        verwenden Sie ein geeignetes physisches Werkzeug.</p>
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
      <h2>Welche Tablet-Größe eignet sich</h2>
      <p>Tablets gibt es in mehreren Größen. Kleine Geräte haben etwa 8 Zoll Diagonale, mittlere
        etwa 11 Zoll und große etwa 13 Zoll. Die Diagonale allein sagt aber nicht, wie viel Lineal
        im Browser sichtbar ist. Entscheidend ist die nutzbare Breite des Browserfensters. Ein
        großes Tablet im Hochformat kann weniger Skala zeigen als ein mittleres Tablet im
        Querformat.</p>
      <p>Als grobe Einordnung: Auf einem kleinen Tablet passen im Querformat oft 15 bis 18 cm Skala
        auf den Bildschirm. Auf einem mittleren Tablet sind es oft 20 bis 24 cm. Prüfen Sie, bis zu
        welcher Marke die Skala ohne Scrollen sichtbar ist.</p>
      <h2>Schritt für Schritt auf dem Tablet</h2>
      <p>Diese Anleitung setzt voraus, dass Sie die Skala auf der <Link to="/">Startseite</Link>
        geöffnet haben.</p>
      <ol>
        <li>Drehen Sie das Tablet in das Querformat, falls die Halterung das zulässt.</li>
        <li>Stellen Sie das Browserfenster auf die volle Bildschirmbreite und den Browserzoom auf
          100 Prozent.</li>
        <li>Kalibrieren Sie die Skala mit einer Bankkarte im Format ID-1. Die lange Kante misst
          85,60 mm. Legen Sie die Karte vorsichtig an die Referenzfläche und passen Sie die Anzeige
          an, bis Anfang und Ende übereinstimmen. Wie der Abgleich im Einzelnen abläuft, steht in
          der Anleitung <Link to="/blog/bildschirm-kalibrieren">Bildschirm kalibrieren</Link>.</li>
        <li>Prüfen Sie den Abgleich mit einer zweiten bekannten Länge, zum Beispiel mit einer
          1-Euro-Münze von 23,25 mm Durchmesser.</li>
        <li>Wählen Sie die Einheit: Zentimeter, Millimeter oder Zoll. Es gilt immer 1 cm = 10 mm.</li>
        <li>Legen Sie den Gegenstand gerade an die Nullmarke und lesen Sie den Wert senkrecht von
          oben ab.</li>
      </ol>
      <p>Nach dem Drehen des Tablets sollten Sie die Kalibrierung erneut prüfen. Manche Browser
        berechnen die Darstellung nach einem Wechsel der Ausrichtung neu.</p>
      <h2>Beispiele: Heft, Foto und Blatt</h2>
      <p>Ein Heft im Format A5 misst 21,0 cm in der Länge und 14,8 cm in der Breite. Legen Sie
        zuerst die lange Kante an die Nullmarke. Sie endet bei 21,0 cm. Drehen Sie das Heft danach
        und prüfen Sie die Breite von 14,8 cm. Weicht eine Richtung deutlich ab, obwohl das Heft
        normgerecht ist, kontrollieren Sie Zoom, Ausrichtung und Kalibrierung.</p>
      <p>Ein Foto im Format 10 × 15 cm ist ein gutes zweites Beispiel. Die lange Kante endet bei
        15,0 cm, die kurze bei 10,0 cm. Fotos haben oft einen schmalen weißen Rand. Entscheiden Sie
        vor der Messung, ob Sie die Bildfläche ohne Rand oder die Papiergröße mit Rand messen
        wollen.</p>
      <p>Ein Blatt im Format A4 misst 29,7 cm in der Länge. Diese Strecke passt auf den meisten
        Tablets nicht auf einmal auf den Bildschirm. Messen Sie in zwei Abschnitten: zuerst 15,0 cm,
        dann den Rest von 14,7 cm. Die Vorlagen für einen Ausdruck finden Sie auf der Seite <Link
        to="/lineal-drucken">Lineal zum Ausdrucken</Link>.</p>
      <h2>Stift, Finger und Display schützen</h2>
      <p>Berühren Sie das Display nur mit sauberen Händen oder mit einem Eingabestift mit weicher
        Spitze. Harte oder scharfkantige Gegenstände gehören nicht direkt auf das Glas. Legen Sie
        ein dünnes Blatt Papier zwischen Gegenstand und Bildschirm.</p>
      <p>Achten Sie auf Spiegelungen. Sonnenlicht oder eine helle Lampe kann die Skala überstrahlen.
        Drehen Sie das Tablet so, dass kein Licht direkt auf die Ablesestelle fällt.</p>
      <h2>Häufige Fehler auf dem Tablet</h2>
      <p>Der erste Fehler ist das versehentliche Zoomen. Zwei-Finger-Gesten können den Browserzoom
        verändern. Bedienen Sie Kalibrierung und Einheiten deshalb über die vorgesehenen
        Schaltflächen und prüfen Sie anschließend den Zoom.</p>
      <p>Der zweite Fehler ist das Messen nach dem Drehen ohne neue Kontrolle. Manche Browser
        behalten den Abgleich, andere berechnen die Darstellung neu. Prüfen Sie nach jedem Wechsel
        der Ausrichtung eine bekannte Länge, bevor Sie den Wert übernehmen.</p>
      <p>Der dritte Fehler ist das Ablesen ab der Außenkante statt ab der Nullmarke. Vor der Null
        liegt fast immer ein kleiner Rand. Wer dort beginnt, misst zu viel.</p>
      <p>Der vierte Fehler ist das Messen runder oder weicher Gegenstände. Stoff, Kabel und runde
        Gegenstände verschieben oder verformen sich zu leicht. Für solche Gegenstände ist ein
        flexibles Maßband geeigneter als ein Bildschirm-Lineal.</p>
      <h2>Häufige Fragen</h2>
      <h3>Brauche ich eine Anwendung, um auf dem Tablet zu messen?</h3>
      <p>Nein. Die Skala läuft in jedem modernen Browser. Eine Installation ist nicht nötig. Öffnen
        Sie die <Link to="/">Startseite</Link>, kalibrieren Sie die Skala und messen Sie.</p>
      <h3>Ist ein Tablet genauer als ein Smartphone?</h3>
      <p>Nicht von sich aus. Die Genauigkeit hängt von der Kalibrierung ab, nicht von der
        Gerätegröße. Ein Tablet zeigt aber mehr Strecke auf einmal. Dadurch sind weniger Abschnitte
        nötig, und jeder Abschnitt weniger bedeutet eine mögliche Fehlerquelle weniger. Wie das
        Ablesen auf dem kleineren Bildschirm funktioniert, erklärt der Beitrag <Link
        to="/blog/lineal-fuer-handy">Lineal für Handy</Link>.</p>
      <h3>Passt eine 20-cm-Strecke auf jedes Tablet?</h3>
      <p>Nein. Ob ein vollständiger 20-cm-Abschnitt sichtbar ist, hängt von Gerätegröße, Ausrichtung
        und nutzbarer Browserfläche ab. Im Querformat ist die Chance deutlich größer als im
        Hochformat. Für kurze Referenzen gibt es außerdem das <Link
        to="/blog/lineal-10-cm-originalgroesse">Lineal 10 cm in Originalgröße</Link>.</p>
      <h3>Was mache ich, wenn die Skala nach dem Drehen nicht mehr stimmt?</h3>
      <p>Kalibrieren Sie erneut. Stellen Sie zuerst den Browserzoom auf 100 Prozent und gleichen Sie
        die Skala danach wieder mit einer Bankkarte ab.</p>
      <p>Kurz gesagt: Ein Tablet zeigt mehr Skala als ein Smartphone, aber die Genauigkeit hängt von
        der Kalibrierung ab. Lesen Sie an der Nullmarke ab. Ein Bildschirm-Lineal ersetzt kein
        geeichtes Messgerät.</p>
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
      <h2>Was ein Millimeter bedeutet</h2>
      <p>Ein Millimeter ist der zehnte Teil eines Zentimeters. Auf einem Lineal sind die
        Millimeterstriche die feinste Teilung. Zwischen zwei Zentimeterstrichen liegen neun kurze
        Striche. Wer einen Wert auf den Millimeter abliest, nennt den letzten vollen
        Millimeterstrich, an dem die Kante endet.</p>
      <p>Im Alltag ist ein Millimeter sehr klein. Ein Unterschied von einem Millimeter ist mit
        bloßem Auge gerade noch zu sehen, wenn man hinschaut. Bei einer Papierkante oder einem
        Etikett kann ein Millimeter aber bereits entscheiden, ob ein Teil passt.</p>
      <h2>Schritt für Schritt: Millimeter ablesen</h2>
      <p>Diese Anleitung gilt für ein physisches Lineal und für ein kalibriertes Online-Lineal
        gleichermaßen.</p>
      <ol>
        <li>Legen Sie die Nullmarke genau an den Anfang der Kante. Der Strich mit der Zahl 0 ist der
          Startpunkt, nicht die Außenkante des Lineals oder des Bildschirms.</li>
        <li>Richten Sie Gegenstand und Skala parallel aus. Eine schräg liegende Kante verlängert die
          scheinbar gemessene Strecke.</li>
        <li>Lesen Sie zuerst die vollen Zentimeter ab und zählen Sie dann die Millimeterstriche
          dazu. Blicken Sie dabei senkrecht auf die Skala. Beispiel: Die Kante endet zwei Striche
          nach 8 cm. Der Wert ist dann 82 mm.</li>
        <li>Schätzen Sie halbe Millimeter nur, wenn die Skala das zulässt. Liegt die Kante genau
          zwischen zwei Strichen, können Sie 0,5 mm angeben.</li>
        <li>Messen Sie zweimal. Legen Sie das Lineal dafür neu an und lesen Sie erneut ab.</li>
      </ol>
      <h2>Beispiele mit Rechnung</h2>
      <p>Ein Dübel soll 6 mm Durchmesser haben. Zeigt die Skala 6 mm, passt der Dübel in eine
        6-mm-Bohrung. Zeigt sie 7 mm, brauchen Sie eine größere Bohrung oder einen kleineren Dübel.</p>
      <p>Eine Bohrung soll 8 mm tief und 8 mm breit sein. Die Breite messen Sie mit einem
        Messschieber, weil ein Lineal in eine enge Bohrung nicht hineinpasst. Die Tiefe messen Sie
        mit einem Tiefenmesser. Wie das geht, erklärt der Beitrag <Link
        to="/blog/tiefenmesser">Tiefenmesser richtig verwenden</Link>.</p>
      <p>Ein Ring soll einen Innendurchmesser von 18 mm haben. Der Innenumfang ergibt sich aus
        Durchmesser mal 3,14. Die Rechnung lautet: 18 mal 3,14 ergibt 56,52 mm, also etwa 56,5 mm.
        Messen Sie den Innendurchmesser mit einem Messschieber oder mit einem Ringmaß. Wie eine
        Ringmessung im Einzelnen abläuft, steht im Beitrag <Link to="/blog/ring-lineal-messen">Ring
        mit dem Lineal messen</Link>.</p>
      <p>Ein Etikett soll 86 mm breit sein. Legen Sie die linke Kante an die Nullmarke und lesen Sie
        rechts ab. Endet die Kante bei 86 mm, stimmt das Maß. Endet sie bei 85 mm, ist das Etikett
        einen Millimeter zu schmal.</p>
      <h2>Messschieber, Lineal oder Bildschirm: welches Werkzeug passt?</h2>
      <p>Für eine schnelle Vorprüfung reicht ein kalibriertes Online-Lineal. Es zeigt
        Millimeterstriche für eine Kontrolle am Bildschirm. Die Skala öffnen Sie auf der <Link
        to="/">Startseite</Link>. Für Papier, Etiketten und flache Kanten reicht oft ein physisches
        Lineal.</p>
      <p>Für Außendurchmesser, Innendurchmesser und Tiefen ist ein Messschieber das richtige
        Werkzeug. Seine parallelen Messflächen umschließen den Gegenstand und zeigen den Wert auf
        einer Skala oder einem Display an. Für sehr dünne Drähte oder Folien reicht selbst ein
        Messschieber nicht aus. Dort braucht es ein Mikrometer mit feinerer Auflösung.</p>
      <h2>Häufige Fehler beim Millimeter-Messen</h2>
      <p>Der erste Fehler ist der schräge Blickwinkel. Wer von der Seite schaut, liest einen
        falschen Wert ab. Blicken Sie senkrecht auf die Ablesestelle.</p>
      <p>Der zweite Fehler ist eine abgerundete Kante. Viele Gegenstände haben keine scharfe Kante,
        sondern eine Rundung. Wer die Rundung als Kante nimmt, misst zu viel oder zu wenig.</p>
      <p>Der dritte Fehler ist eine falsche Genauigkeit in der Angabe. Drei Ablesungen wie 29,9,
        30,1 und 30,0 mm ergeben als sinnvollen Wert 30 mm. Die Angabe 30,00 mm würde eine
        Sicherheit vortäuschen, die das Lineal nicht liefert.</p>
      <p>Der vierte Fehler ist das Messen von Innenmaßen auf dem Bildschirm. Eine Bohrung oder ein
        Ringinnenmaß lässt sich am Bildschirm nicht verlässlich ablesen, weil die runde Kante die
        Skala verdeckt. Verwenden Sie für Innenmaße einen Messschieber. Wie groß die Abweichung
        eines Bildschirm-Lineals im Alltag sein darf, erklärt der Beitrag <Link
        to="/blog/ist-online-lineal-genau">Wie genau ist ein Online-Lineal?</Link>.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie lese ich Millimeter richtig ab?</h3>
      <p>Legen Sie die Nullmarke an den Anfang der Kante und zählen Sie die Millimeterstriche ab der
        letzten vollen Zentimetermarke. Blicken Sie senkrecht auf die Ablesestelle. Messen Sie
        zweimal und nehmen Sie den Wert, der sich wiederholt.</p>
      <h3>Kann ich mit einem Online-Lineal millimetergenau messen?</h3>
      <p>Für eine grobe Kontrolle auf den Millimeter reicht ein sorgfältig kalibriertes
        Online-Lineal oft aus. Für eine Aussage auf Zehntelmillimeter reicht es nicht. Die Skala
        zeigt Millimeterstriche, aber Bildschirm, Zoom und Ablesung begrenzen die Genauigkeit.</p>
      <h3>Welches Werkzeug brauche ich für eine Schraube?</h3>
      <p>Für die Länge reicht ein Lineal oder ein kalibriertes Online-Lineal. Für den Durchmesser
        ist ein Messschieber besser. Wie Sie den richtigen Startpunkt an der Kopfform finden, zeigt
        der Beitrag <Link to="/blog/schraube-lineal-messen">Schrauben mit dem Lineal messen</Link>.</p>
      <h3>Warum weichen meine zwei Messungen um einen Millimeter ab?</h3>
      <p>Weil Nullpunkt, Blickwinkel oder Kante bei der zweiten Messung leicht anders lagen. Ein
        Millimeter Abweichung zwischen zwei Ablesungen ist bei einer Bildschirm- oder Linealmessung
        normal. Messen Sie ein drittes Mal. Zwei von drei gleichen Werten sind ein verlässlicher
        Anhaltspunkt.</p>
      <p>Kurz gesagt: Ein Millimeter ist der zehnte Teil eines Zentimeters. Lesen Sie ab der
        Nullmarke, blicken Sie senkrecht auf die Skala und messen Sie zweimal. Ein Bildschirm-Lineal
        ersetzt kein geeichtes Messgerät.</p>
    </>
  ),
  'ist-online-lineal-genau': (
    <>
      <h2>Kurze Antwort: Genau genug für was?</h2>
      <p>Ein Online-Lineal ist genau genug für Alltagsmessungen, bei denen ein oder zwei Millimeter
        keine Rolle spielen. Ein Etikett prüfen, eine Postkarte vermessen, eine Schraube grob
        einordnen, eine Schulaufgabe lösen: Für diese Aufgaben reicht eine kalibrierte Skala aus.</p>
      <p>Für enge Toleranzen reicht ein Bildschirm-Lineal nicht. Eine Passung, bei der ein Teil auf
        den Zehntelmillimeter sitzen muss, lässt sich am Bildschirm nicht prüfen. Dasselbe gilt für
        medizinische Anpassungen, für Bauarbeiten und für alle Entscheidungen, bei denen ein
        falscher Wert gefährlich werden kann. In diesen Fällen verwenden Sie ein geeignetes
        physisches Werkzeug. Die Frage ist also nicht, ob ein Online-Lineal genau ist, sondern ob es
        für Ihre Aufgabe ausreicht.</p>
      <h2>Woher die Abweichung kommt</h2>
      <p>Die Abweichung hat vier Quellen. Erstens der Skalierungsfaktor: Der Abgleich legt fest, wie
        viele Bildschirmpunkte einem Millimeter entsprechen. Ist dieser Wert nur wenig falsch,
        wächst der Fehler mit der Länge. Bei 10 cm sind es vielleicht 2 mm, bei 30 cm schon 6 mm.
        Zweitens der Nullpunkt: Wer die Kante nicht an den Strich mit der Zahl 0 legt, sondern an
        den Rand der angezeigten Fläche, misst von Anfang an falsch.</p>
      <p>Drittens der Blickwinkel: Wer von der Seite auf die Skala schaut, sieht die Kante an einer
        anderen Stelle als bei senkrechter Betrachtung. Diese Verschiebung kann einen oder mehrere
        Millimeter betragen. Viertens die Kante selbst: Abgerundete oder weiche Kanten lassen sich
        nicht auf den Millimeter anlegen.</p>
      <p>Sorgfältiges Kalibrieren, senkrechtes Ablesen und eine zweite Kontrollmessung bringen die
        Abweichung in einen Bereich, der für Alltagsmessungen ausreicht.</p>
      <h2>Selbsttest in drei Minuten</h2>
      <p>Für diesen Selbsttest brauchen Sie nur eine Bankkarte und eine Münze. Öffnen Sie dafür die
        <Link to="/">Startseite</Link>.</p>
      <ol>
        <li>Stellen Sie den Browserzoom auf 100 Prozent und öffnen Sie die Skala.</li>
        <li>Kalibrieren Sie die Skala mit der Bankkarte (85,60 mm lange Kante).</li>
        <li>Prüfen Sie danach eine 10-cm-Strecke mit einem physischen Lineal. Legen Sie das Lineal
          an die Anzeige und lesen Sie ab, wo die 10-cm-Marke der Bildschirmskala liegt.</li>
        <li>Notieren Sie die Abweichung. Zeigt die Bildschirmskala 98 mm statt 100 mm, liegt sie 2
          Prozent zu klein. Zeigt sie 102 mm, liegt sie 2 Prozent zu groß.</li>
        <li>Prüfen Sie zusätzlich eine kurze Strecke: Eine 1-Euro-Münze hat 23,25 mm Durchmesser.</li>
      </ol>
      <p>Rechnen Sie die Abweichung auf Ihre Aufgabe um. Bei 2 Prozent Fehler und einer Strecke von
        30 cm beträgt die Abweichung 6 mm. Bei einer Strecke von 5 cm beträgt sie nur 1 mm. Wie der
        Abgleich im Einzelnen abläuft, steht in der Anleitung <Link
        to="/blog/bildschirm-kalibrieren">Bildschirm kalibrieren</Link>.</p>
      <h2>Vergleich: Bildschirm, Ausdruck, Lineal und Messschieber</h2>
      <p>Der Bildschirm ist die schnellste Lösung. Er ist verfügbar und zeigt die Skala sofort.
        Seine Schwäche ist die Abhängigkeit von Kalibrierung, Zoom und Gerät.</p>
      <p>Der Ausdruck ist verlässlicher für wiederholte Messungen. Die Vorlage lässt sich bewegen,
        anzeichnen und aufbewahren. Ihre Schwäche ist der Drucker: Wer mit einer anderen Einstellung
        als 100 Prozent druckt, erhält eine falsche Skala. Die Vorlagen finden Sie auf der Seite
        <Link to="/lineal-drucken">Lineal zum Ausdrucken</Link>.</p>
      <p>Das physische Lineal ist die einfachste verlässliche Lösung für Papier und flache Kanten.
        Es braucht keine Kalibrierung und keine Stromversorgung. Seine Grenze liegt bei Innenmaßen
        und Tiefen. Dafür ist der Messschieber das richtige Werkzeug. Er zeigt Außendurchmesser,
        Innendurchmesser und Tiefen an.</p>
      <h2>Wann es nicht reicht</h2>
      <p>Ein Bildschirm-Lineal reicht nicht für Passungen. Wenn ein Teil mit weniger als einem
        Millimeter Spiel in eine Öffnung passen muss, ist die Abweichung der Bildschirmskala zu
        groß. Es reicht nicht für medizinische Anpassungen, etwa für eine Schiene oder eine Einlage,
        und nicht für Bauarbeiten, bei denen Maße stimmen müssen.</p>
      <p>Es reicht nicht für runde Innenmaße. Ein Ringinnenmaß oder eine Bohrung lässt sich am
        Bildschirm nicht verlässlich ablesen, weil die runde Kante die Skala verdeckt. Wie eine
        Ringmessung richtig abläuft, steht im Beitrag <Link to="/blog/ring-lineal-messen">Ring mit
        dem Lineal messen</Link>.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie groß ist die typische Abweichung?</h3>
      <p>Nach einem sorgfältigen Abgleich liegt die Abweichung bei einer groben Größenkontrolle bei
        1 bis 2 Prozent. Bei 10 cm sind das 1 bis 2 mm, bei 30 cm sind es 3 bis 6 mm. Ohne Abgleich
        kann die Abweichung größer sein. Eine 10-cm-Kontrolle zeigt den Fehler: <Link
        to="/blog/lineal-10-cm-originalgroesse">Lineal 10 cm in Originalgröße</Link>.</p>
      <h3>Kann ich damit einen Ring messen?</h3>
      <p>Den Außendurchmesser eines Rings können Sie grob prüfen. Den Innendurchmesser dagegen nicht
        verlässlich, weil die runde Innenkante die Skala verdeckt. Verwenden Sie für Innenmaße einen
        Messschieber oder ein Ringmaß.</p>
      <h3>Warum zeigt mein Smartphone einen anderen Wert als mein Notebook?</h3>
      <p>Weil jedes Gerät eine eigene Pixeldichte und eine eigene Skalierung hat. Der Abgleich gilt
        nur für das Gerät, auf dem er gemacht wurde. Kalibrieren Sie jedes Gerät einzeln.</p>
      <h3>Reicht ein Online-Lineal für Schulaufgaben?</h3>
      <p>Ja. Für Geometrieaufgaben, bei denen eine Strecke auf den Millimeter abgelesen werden soll,
        reicht eine kalibrierte Skala aus. Prüfen Sie vor der Aufgabe eine bekannte Länge, zum
        Beispiel eine 1-Euro-Münze mit 23,25 mm Durchmesser. Wie fein Sie ablesen dürfen, erklärt
        der Beitrag <Link to="/blog/mm-genau-messen">Millimeter genau messen</Link>.</p>
      <p>Kurz gesagt: Ein Online-Lineal ist genau genug für Alltagsmessungen, wenn es sorgfältig
        kalibriert wurde und wenn Sie seine Grenzen kennen. Prüfen Sie den Abgleich mit zwei Längen.
        Ein Bildschirm-Lineal ersetzt kein geeichtes Messgerät.</p>
    </>
  ),
  'zentimeter-online': (
    <>
      <h2>Warum Zentimeter am Bildschirm oft genügen — und wann nicht</h2>
      <p>Ein Zentimeter ist eine handliche Einheit. Er ist groß genug, um ihn auf dem Bildschirm gut
        zu erkennen, und klein genug, um kleine Gegenstände sinnvoll zu beschreiben. Wer wissen
        will, ob ein Etikett, ein Knopf, ein Schlüssel oder ein Stück Papier etwa 8 cm oder etwa 12
        cm lang ist, braucht dafür kein genaues Messgerät. Ein kalibriertes <Link
        to="/">Online-Lineal auf der Startseite</Link> gibt eine schnelle Antwort, wenn gerade kein
        physisches Lineal zur Hand ist.</p>
      <p>Für unkritische Größenvergleiche reicht das in der Regel aus. Anders sieht es aus, wenn ein
        Maß genau stimmen muss: bei einer Passung, bei einem Ersatzteil, bei einer Bohrung oder bei
        einer technischen Zeichnung. Dort entscheidet oft ein Millimeter. Ein Bildschirm-Lineal ist
        kein geeichtes Messgerät. Es zeigt eine Skala, die erst durch einen Abgleich mit einer
        bekannten Länge verlässlich wird. Wer das weiß, nutzt das Werkzeug richtig und überschätzt
        es nicht.</p>
      <p>Wichtig ist die Reihenfolge: zuerst kalibrieren, dann messen, dann das Ergebnis mit einer
        zweiten bekannten Länge prüfen. Erst danach ist der abgelesene Zentimeterwert eine
        brauchbare Angabe für den Alltag.</p>
      <h2>Zentimeter richtig ablesen: die Millimeterstriche helfen</h2>
      <p>Ein Zentimeter besteht aus zehn Millimetern. Diese kleine Einheit ist beim Ablesen die
        eigentliche Hilfe. Wer nur auf die Zentimeterzahlen schaut, rundet grob. Wer die
        Millimeterstriche mitliest, erkennt, ob ein Gegenstand 12,0 cm, 12,4 cm oder 12,8 cm lang
        ist.</p>
      <p>Ein Beispiel: Ein Etikett beginnt an der Nullmarke und endet vier Millimeter hinter der
        12-cm-Marke. Dann ist es 12,4 cm lang. In Millimetern sind das 124 mm. Ein zweites Beispiel:
        Eine kleine Schachtel endet acht Millimeter hinter der 7-cm-Marke. Sie ist 7,8 cm lang, also
        78 mm. Ein drittes Beispiel: Eine Münze mit 23,25 mm Durchmesser endet kurz hinter der
        2-cm-Marke und drei Millimeter dahinter. Das passt zu 2,3 cm.</p>
      <p>Dabei hilft eine einfache Regel: Notieren Sie den Wert immer mit einer Nachkommastelle,
        also 12,4 cm statt nur 12 cm. So bleibt sichtbar, wie genau abgelesen wurde. Wer dagegen
        12,43 cm notiert, täuscht eine Genauigkeit vor, die ein Bildschirm nicht hergibt. Eine
        Nachkommastelle ist ehrlich, zwei sind es in der Regel nicht.</p>
      <p>Achten Sie außerdem auf die Nullmarke. Der Anfang des Gegenstands muss genau an der Linie
        mit der Zahl 0 liegen, nicht an der Kante des Bildschirms und nicht am Rand der angezeigten
        Skala. Eine abgerundete Ecke kann den Startpunkt verschieben. Legen Sie dann den Punkt an,
        an dem die gerade Seite des Gegenstands beginnt.</p>
      <h2>Schritt für Schritt: Zentimeter am Bildschirm messen</h2>
      <p>Die folgenden Schritte ergänzen die kurze Anleitung, die bereits auf der Seite steht. Sie
        beschreiben, was zwischen den einzelnen Schritten zu beachten ist.</p>
      <ol>
        <li>Stellen Sie den Browserzoom auf 100 Prozent. Verändern Sie den Zoom während der Messung
          nicht mehr.</li>
        <li>Öffnen Sie das <Link to="/">Online-Lineal auf der Startseite</Link> und wählen Sie
          Zentimeter als Einheit.</li>
        <li>Kalibrieren Sie die Skala mit einer Bankkarte im ID-1-Format oder mit der bekannten
          Bildschirmdiagonale. Eine ausführliche Anleitung steht im Beitrag <Link
          to="/blog/bildschirm-kalibrieren">Bildschirm kalibrieren</Link>.</li>
        <li>Prüfen Sie die Kalibrierung mit einer zweiten bekannten Länge, zum Beispiel mit einer
          Strecke von 10 cm. Die <Link to="/blog/lineal-10-cm-originalgroesse">Anleitung zum Lineal
          in Originalgröße</Link> erklärt diese Prüfung im Detail.</li>
        <li>Legen Sie den Gegenstand gerade an die Nullmarke. Schauen Sie senkrecht von oben auf die
          Skala, nicht schräg von der Seite.</li>
        <li>Lesen Sie den Wert an den Millimeterstrichen ab und notieren Sie ihn sofort, zum
          Beispiel 8,6 cm.</li>
        <li>Wiederholen Sie die Messung ein zweites Mal. Weichen die beiden Werte um mehr als einen
          Millimeter voneinander ab, prüfen Sie die Kalibrierung erneut, bevor Sie dem Ergebnis
          vertrauen.</li>
      </ol>
      <h2>Fehlerquellen, die den Zentimeterwert verfälschen</h2>
      <p>Die meisten falschen Werte entstehen nicht durch die Skala selbst, sondern durch die Art,
        wie gemessen wird.</p>
      <p>Ein schräger Blick ist die häufigste Ursache. Wer von der Seite auf die Skala schaut, liest
        den Endpunkt an einer falschen Stelle ab. Dieser Fehler heißt Parallaxenfehler. Er lässt
        sich vermeiden, indem man senkrecht von oben auf den Bildschirm schaut und den Kopf dabei
        nicht bewegt.</p>
      <p>Eine dicke Hülle kann den Gegenstand von der Skala fernhalten. Dann liegt die Kante nicht
        mehr genau an der Nullmarke. Nehmen Sie die Hülle ab, wenn sie die Messung behindert.</p>
      <p>Ein veränderter Zoom ist die zweithäufigste Ursache. Schon ein kleiner Unterschied in der
        Vergrößerung verändert die angezeigte Länge. Stellen Sie den Zoom vor der Messung auf 100
        Prozent und lassen Sie ihn bis zum Ende der Messung unverändert.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie genau ist ein Zentimeter am Bildschirm?</h3>
      <p>Nach sorgfältiger Kalibrierung ist ein Zentimeterwert für schnelle Alltagsmessungen
        brauchbar. Eine feste Genauigkeit lässt sich nicht versprechen, weil Zoom, Pixeldichte,
        Blickwinkel und die Kante des Gegenstands das Ergebnis beeinflussen. Rechnen Sie mit einer
        Abweichung von etwa einem Millimeter und wiederholen Sie die Messung, bevor Sie sich auf den
        Wert verlassen.</p>
      <h3>Brauche ich für Zentimeter eine Kalibrierung?</h3>
      <p>Ja, wenn Sie eine Länge am Bildschirm messen wollen. Ohne Abgleich kennt der Browser nur
        Pixel, aber nicht die wirkliche Breite des Bildschirms. Zwei Bildschirme können gleich viele
        Pixel anzeigen, obwohl ihre Flächen verschieden groß sind. Erst die Kalibrierung stellt den
        Zusammenhang zwischen Pixeln und Millimetern her.</p>
      <h3>Warum zeigt mein Bildschirm 10 cm zu kurz oder zu lang an?</h3>
      <p>Meistens ist der Zoom nicht auf 100 Prozent eingestellt oder die Skalierung des
        Betriebssystems wurde nach einem Monitorwechsel nicht neu geprüft. Stellen Sie den Zoom
        zurück, kalibrieren Sie die Skala erneut und prüfen Sie das Ergebnis mit einer zweiten
        bekannten Länge. Bleibt der Fehler bestehen, löschen Sie die gespeicherte Kalibrierung und
        beginnen Sie von vorn.</p>
    </>
  ),
  'cm-in-mm': (
    <>
      <h2>Warum Millimeter oft die bessere Einheit sind</h2>
      <p>Zentimeter sind praktisch, wenn es um größere Längen geht. Millimeter sind genauer, wenn es
        um kleine Unterschiede geht. Der Unterschied zwischen 4 cm und 5 cm ist groß. Der
        Unterschied zwischen 41 mm und 45 mm ist dagegen deutlich sichtbar, sobald man ihn in
        Millimetern ausdrückt. Genau deshalb arbeiten viele Anleitungen, technische Zeichnungen und
        Bastelanleitungen mit Millimetern.</p>
      <p>Ein Beispiel aus dem Alltag: Eine Schraube ist 30 mm lang. In Zentimetern wären das 3,0 cm.
        Die Angabe in Millimetern ist klarer, weil sie keinen Dezimalwert braucht. Ein anderes
        Beispiel: Ein Ring hat einen Innendurchmesser von 18,2 mm. In Zentimetern wären das 1,82 cm.
        Auch hier ist die Angabe in Millimetern einfacher zu lesen und einfacher zu vergleichen.</p>
      <h2>Die Regel in einem Satz — und warum sie immer gilt</h2>
      <p>Die Regel lautet: Zentimeter mal 10 ergibt Millimeter. Sie gilt immer, weil das metrische
        System auf der Zahl 10 aufgebaut ist. Ein Zentimeter ist der zehnte Teil eines Dezimeters
        und das Zehnfache eines Millimeters. Diese feste Beziehung ändert sich nicht, egal ob man
        ein Lineal, ein Maßband oder ein <Link to="/">Online-Lineal auf der Startseite</Link>
        benutzt.</p>
      <p>Wichtig ist: Für die reine Umrechnung ist keine Bildschirmkalibrierung nötig. Die
        Umrechnung ist eine Rechenaufgabe, keine Messung. Nur ein zuvor gemessener Ausgangswert
        hängt vom verwendeten Messwerkzeug ab. Wer also 4,5 cm richtig gemessen hat, kann daraus
        ohne weitere Prüfung 45 mm berechnen. Wer den Ausgangswert falsch abgelesen hat, überträgt
        den Fehler in die Millimeterangabe.</p>
      <h2>Tabelle: Zentimeter in Millimeter</h2>
      <p>Die folgende Tabelle zeigt Werte, die im Alltag häufig vorkommen. Sie ergänzt die kurze
        Tabelle, die bereits auf der Seite steht.</p>
      <table>
        <thead><tr><th>Zentimeter</th><th>Millimeter</th></tr></thead>
        <tbody>
          <tr><td>0,1 cm</td><td>1 mm</td></tr>
          <tr><td>0,5 cm</td><td>5 mm</td></tr>
          <tr><td>1,0 cm</td><td>10 mm</td></tr>
          <tr><td>2,5 cm</td><td>25 mm</td></tr>
          <tr><td>3,7 cm</td><td>37 mm</td></tr>
          <tr><td>5,0 cm</td><td>50 mm</td></tr>
          <tr><td>7,3 cm</td><td>73 mm</td></tr>
          <tr><td>10,0 cm</td><td>100 mm</td></tr>
          <tr><td>12,4 cm</td><td>124 mm</td></tr>
          <tr><td>15,6 cm</td><td>156 mm</td></tr>
          <tr><td>21,0 cm</td><td>210 mm</td></tr>
        </tbody>
      </table>
      <p>Ein Blatt im Format A4 ist 21,0 cm breit. In Millimetern sind das 210 mm. Eine Strecke von
        15,6 cm entspricht 156 mm. Wer diese Werte einmal nachgerechnet hat, erkennt das Muster
        sofort: Die Ziffern bleiben gleich, nur das Komma verschwindet.</p>
      <p>Für Werte, die nicht in der Tabelle stehen, hilft die gleiche Rechnung. Ein Beispiel: 6,8
        cm mal 10 ergibt 68 mm. Ein anderes Beispiel: 9,2 cm mal 10 ergibt 92 mm. Wer unsicher ist,
        kann das Ergebnis durch die Rückrechnung prüfen. Dazu teilt man die Millimeterangabe durch
        10. Aus 68 mm werden wieder 6,8 cm.</p>
      <h2>Durchgerechnete Beispiele aus der Praxis</h2>
      <p>Drei Beispiele zeigen, wie die Umrechnung in echten Situationen aussieht.</p>
      <p>Erstes Beispiel, eine Schraube: Eine Schraube ist 3,0 cm lang. Das sind 30 mm. Eine zweite
        Schraube ist 2,5 cm lang, also 25 mm. Der Unterschied beträgt 5 mm. In Zentimetern wäre der
        Unterschied nur 0,5 cm. In Millimetern ist er sofort sichtbar. Wie man die Länge einer
        Schraube je nach Kopfform richtig misst, steht im Beitrag <Link
        to="/blog/schraube-lineal-messen">Schraube mit dem Lineal messen</Link>.</p>
      <p>Zweites Beispiel, ein Etikett: Ein Etikett ist 8,6 cm breit. Das sind 86 mm. Die Höhe
        beträgt 5,4 cm, also 54 mm. Wer diese Werte für einen Drucker oder für eine Vorlage braucht,
        gibt sie in Millimetern an, weil viele Druckeinstellungen Millimeter erwarten.</p>
      <h2>Dezimalstellen richtig lesen</h2>
      <p>Die meisten Fehler bei dieser Umrechnung entstehen beim Komma. Drei Fälle sind besonders
        häufig.</p>
      <p>Erstens: 0,5 cm wird falsch als 50 mm gelesen. Richtig sind 5 mm. Der Fehler entsteht, weil
        die Null vor dem Komma übersehen wird. Wer 0,5 cm mit 5 mm vergleicht, erkennt sofort, dass
        die Zahl klein bleiben muss.</p>
      <p>Zweitens: 0,05 cm wird mit 0,5 mm verwechselt. Richtig ist: 0,05 cm mal 10 ergibt 0,5 mm.
        Solche kleinen Werte kommen selten vor, aber sie zeigen, warum das Komma genau beachtet
        werden muss.</p>
      <p>Drittens: 10,5 cm wird als 105 mm richtig berechnet, aber danach als 10,5 mm notiert. Hier
        wurde die Einheit vergessen. Eine Zahl ohne Einheit ist keine Messung. Schreiben Sie deshalb
        immer dazu, ob es sich um Zentimeter oder um Millimeter handelt.</p>
      <h2>Häufige Fehler im Überblick</h2>
      <p>Die Fehler bei dieser Umrechnung lassen sich in vier Gruppen einteilen.</p>
      <p>Erstens das falsche Rechenzeichen: Wer durch 10 teilt statt zu multiplizieren, erhält einen
        viel zu kleinen Wert. Aus 5 cm werden dann 0,5 mm statt 50 mm. Die Richtung ist
        entscheidend: Von der größeren Einheit Zentimeter zur kleineren Einheit Millimeter wird
        multipliziert.</p>
      <p>Zweitens der Kommafehler: Wer das Komma um zwei Stellen statt um eine Stelle verschiebt,
        erhält einen Wert, der zehnmal zu groß oder zehnmal zu klein ist. Die Prüfung durch
        Rückrechnung deckt diesen Fehler auf.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie rechne ich 3,7 cm in Millimeter um?</h3>
      <p>Multiplizieren Sie 3,7 mit 10. Das Ergebnis ist 37 mm. Das Komma wandert dabei um eine
        Stelle nach rechts. Die Rückrechnung geht in die andere Richtung: 37 mm geteilt durch 10
        ergibt wieder 3,7 cm.</p>
      <h3>Warum sind 10 Millimeter genau ein Zentimeter?</h3>
      <p>Weil das metrische System auf der Zahl 10 aufgebaut ist. Ein Meter besteht aus 100
        Zentimetern und aus 1.000 Millimetern. Ein Zentimeter ist also der hundertste Teil eines
        Meters, ein Millimeter der tausendste Teil. Daraus ergibt sich die feste Beziehung: 1 cm
        gleich 10 mm. Sie gilt überall und zu jeder Zeit.</p>
      <h3>Muss ich das Ergebnis runden?</h3>
      <p>Wenn die Messung am Bildschirm erfolgte, runden Sie auf ganze Millimeter. Eine Angabe wie
        45,3 mm wäre genauer, als ein Bildschirm ablesen kann. Wenn die Umrechnung dagegen nur eine
        Rechenaufgabe ist, zum Beispiel 3,7 cm mal 10, ist das Ergebnis 37 mm exakt und muss nicht
        gerundet werden.</p>
      <h3>Wann brauche ich Millimeter statt Zentimeter?</h3>
      <p>Immer dann, wenn ein Millimeter schon einen Unterschied macht: bei Schraubenlängen, bei
        kleinen Bastelteilen, bei Ringen, bei Etiketten und bei technischen Zeichnungen. Für größere
        Längen, zum Beispiel für ein Zimmer oder ein Möbelstück, sind Zentimeter oder Meter die
        bessere Einheit. Mehr dazu steht im Beitrag <Link to="/blog/zentimeter-online">Zentimeter
        online messen</Link>.</p>
    </>
  ),
  'bildschirm-zoll-messen': (
    <>
      <h2>Was Zoll beim Bildschirm wirklich bedeutet</h2>
      <p>Wenn von einem Bildschirm in Zoll die Rede ist, ist fast immer die Diagonale gemeint. Sie
        wird von einer Ecke des sichtbaren Bildes zur gegenüberliegenden Ecke gemessen. Die Breite
        oder die Höhe allein ist nicht die Bildschirmgröße. Ein Bildschirm mit 15,6 Zoll ist also
        nicht 15,6 Zoll breit, sondern seine Diagonale misst 15,6 Zoll.</p>
      <p>Ein Zoll entspricht 2,54 cm. Eine Diagonale von 15,6 Zoll ist demnach 39,6 cm lang. Diese
        Umrechnung ist exakt, weil der Zoll in diesem Zusammenhang genau 2,54 cm entspricht. Wer die
        Diagonale in Zentimetern misst und durch 2,54 teilt, erhält den Wert in Zoll.</p>
      <h2>So messen Sie die Diagonale richtig</h2>
      <p>Für die Messung brauchen Sie ein physisches Messwerkzeug, zum Beispiel ein Maßband oder ein
        Lineal. Ein Bildschirm-Lineal kann die Diagonale nicht selbst messen, weil es erst
        kalibriert werden muss und weil die Diagonale dafür zu lang ist.</p>
      <ol>
        <li>Schalten Sie den Bildschirm ein und zeigen Sie ein helles Bild an, damit die Kanten der
          sichtbaren Fläche gut zu erkennen sind.</li>
        <li>Suchen Sie die Ecke oben links und die Ecke unten rechts der sichtbaren Fläche. Der
          Rahmen gehört nicht dazu.</li>
        <li>Legen Sie das Maßband an die eine Ecke und messen Sie bis zur gegenüberliegenden Ecke.
          Halten Sie das Maßband gerade und ohne Knick.</li>
        <li>Notieren Sie den Wert in Zentimetern, zum Beispiel 39,6 cm.</li>
        <li>Teilen Sie den Wert durch 2,54. Das Ergebnis ist die Diagonale in Zoll. Bei 39,6 cm sind
          das etwa 15,6 Zoll.</li>
        <li>Runden Sie das Ergebnis auf eine Nachkommastelle. Eine Angabe wie 15,59 Zoll ist
          genauer, als eine Messung mit dem Maßband hergibt.</li>
      </ol>
      <h2>Tabelle: Zentimeter in Zoll</h2>
      <p>Die folgende Tabelle zeigt Diagonale in Zentimetern und in Zoll. Sie hilft beim Vergleich
        und bei der Kalibrierung.</p>
      <table>
        <thead><tr><th>Zentimeter</th><th>Zoll</th></tr></thead>
        <tbody>
          <tr><td>28,0 cm</td><td>etwa 11,0 Zoll</td></tr>
          <tr><td>33,8 cm</td><td>etwa 13,3 Zoll</td></tr>
          <tr><td>35,6 cm</td><td>etwa 14,0 Zoll</td></tr>
          <tr><td>39,6 cm</td><td>etwa 15,6 Zoll</td></tr>
          <tr><td>43,2 cm</td><td>etwa 17,0 Zoll</td></tr>
          <tr><td>60,5 cm</td><td>etwa 23,8 Zoll</td></tr>
          <tr><td>68,6 cm</td><td>etwa 27,0 Zoll</td></tr>
        </tbody>
      </table>
      <p>Ein Beispiel zur Rechnung: 35,6 cm geteilt durch 2,54 ergibt etwa 14,02 Zoll, also gerundet
        14,0 Zoll. Ein anderes Beispiel: 68,6 cm geteilt durch 2,54 ergibt etwa 27,01 Zoll, also
        gerundet 27,0 Zoll. Wer die Rechnung einmal nachvollzogen hat, kann jeden Wert selbst
        umrechnen.</p>
      <p>Für die Kalibrierung des <Link to="/">Online-Lineals auf der Startseite</Link> ist die
        Diagonale nur eine von zwei Möglichkeiten. Die andere Möglichkeit ist der Abgleich mit einer
        Bankkarte. Welche Methode besser passt, hängt davon ab, welche Angabe Sie sicher kennen.
        Wenn Sie die Diagonale genau kennen, ist sie eine gute Referenz. Wenn Sie sie nur aus einer
        Verkaufsangabe kennen, ist die Bankkarte oft verlässlicher.</p>
      <h2>Warum der gemessene Wert von der Verkaufsangabe abweicht</h2>
      <p>Viele Nutzer messen eine Diagonale und wundern sich, dass der Wert nicht genau mit der
        Verkaufsangabe übereinstimmt. Dafür gibt es drei harmlose Gründe.</p>
      <p>Erstens wird die Verkaufsangabe gerundet. Ein Bildschirm, der als 15,6 Zoll verkauft wird,
        kann in Wirklichkeit eine Diagonale von 15,5 oder 15,7 Zoll haben. Die Angabe ist eine
        gerundete Größe, keine exakte Messung.</p>
      <p>Zweitens wird manchmal die gesamte Anzeigefläche genannt, manchmal nur ein Teil. Bei
        manchen Geräten ist die sichtbare Fläche kleiner als die Fläche, die in den Unterlagen
        steht. Dann misst man weniger, als die Angabe verspricht.</p>
      <h2>Häufige Fehler im Überblick</h2>
      <p>Der häufigste Fehler ist die Messung der Breite statt der Diagonale. Wer die Breite misst
        und durch 2,54 teilt, erhält einen zu kleinen Wert. Ein Bildschirm mit 15,6 Zoll Diagonale
        ist nur etwa 34,5 cm breit. Wer diesen Wert als Diagonale behandelt, kommt auf etwa 13,6
        Zoll und wundert sich über die Abweichung.</p>
      <p>Der zweithäufigste Fehler ist der mitgemessene Rahmen. Der Rahmen gehört nicht zur
        sichtbaren Fläche. Messen Sie nur den Teil, der wirklich ein Bild zeigt. Bei Geräten mit
        schmalem Rahmen ist der Fehler klein, bei Geräten mit breitem Rahmen ist er groß.</p>
      <p>Der dritte Fehler ist die gerundete Verkaufsangabe als exakte Größe zu behandeln. Eine
        Angabe wie 15,6 Zoll ist eine gerundete Größe. Wer sie als exakten Wert in das
        Kalibrierungsfeld einträgt, kann einen kleinen Fehler in die Kalibrierung übertragen. Prüfen
        Sie deshalb immer mit einer zweiten Länge nach.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie messe ich die Diagonale meines Bildschirms?</h3>
      <p>Messen Sie die sichtbare Fläche von einer Ecke zur gegenüberliegenden Ecke, ohne den
        Rahmen. Notieren Sie den Wert in Zentimetern und teilen Sie ihn durch 2,54. Das Ergebnis ist
        die Diagonale in Zoll. Ein Wert von 39,6 cm ergibt etwa 15,6 Zoll.</p>
      <h3>Warum ist mein Bildschirm kleiner als angegeben?</h3>
      <p>Meistens liegt es an der Rundung oder an der sichtbaren Fläche. Die Verkaufsangabe ist
        gerundet, und die sichtbare Fläche kann kleiner sein als die Fläche in den Unterlagen. Ein
        Unterschied von bis zu 0,3 Zoll ist in der Regel harmlos. Messen Sie die sichtbare Fläche
        noch einmal genau nach, bevor Sie von einem Fehler ausgehen.</p>
      <h3>Kann ich die Diagonale zur Kalibrierung nutzen?</h3>
      <p>Ja, wenn Sie die Diagonale sicher kennen. Tragen Sie den Wert in Zoll in das
        Kalibrierungsfeld ein. Das Verhältnis von Pixeln zu Millimetern wird dann automatisch
        berechnet. Prüfen Sie das Ergebnis danach mit einer zweiten bekannten Länge, zum Beispiel
        mit einer Bankkarte oder mit einer Strecke von 10 cm.</p>
      <h3>Was ist genauer: Diagonale oder Bankkarte?</h3>
      <p>Beide Methoden sind für eine grobe Kalibrierung geeignet. Die Bankkarte ist oft genauer,
        weil ihre lange Kante genau 85,60 mm misst und direkt auf dem Bildschirm verglichen werden
        kann. Die Diagonale ist praktisch, wenn Sie keine Karte zur Hand haben oder wenn Sie die
        Größe Ihres Bildschirms sicher kennen. Am besten prüfen Sie das Ergebnis der einen Methode
        mit der anderen.</p>
    </>
  ),
  'bankkartengroesse': (
    <>
      <h2>Warum gerade eine Bankkarte?</h2>
      <p>Eine Bankkarte ist eine gute Referenz, weil ihre Größe genormt ist. Karten im ID-1-Format
        sind 85,60 mm lang und 53,98 mm breit. Diese Maße gelten für viele Bankkarten, Kreditkarten
        und andere Karten in diesem Format. Wer eine solche Karte besitzt, hat also ein Messwerkzeug
        in der Tasche, ohne es zu wissen.</p>
      <p>Der Vorteil liegt in der Länge der Referenz. Eine Strecke von 85,60 mm ist lang genug, um
        sie auf dem Bildschirm gut zu erkennen, und kurz genug, um sie auf den meisten Bildschirmen
        vollständig anzuzeigen. Eine kürzere Referenz, zum Beispiel eine Münze, wäre schwerer
        abzulesen, weil ein kleiner Fehler dann einen größeren Anteil ausmacht. Eine längere
        Referenz wäre auf einem kleinen Smartphone oft zu lang.</p>
      <h2>Die lange Kante und die kurze Kante: zwei Prüfungen in einer Karte</h2>
      <p>Eine Bankkarte bietet zwei Referenzlängen in einem Gegenstand. Die lange Kante misst 85,60
        mm, die kurze Kante misst 53,98 mm. Das ist praktisch, weil man die Kalibrierung mit der
        einen Kante durchführen und mit der anderen Kante prüfen kann.</p>
      <p>Die lange Kante ist einfacher abzulesen. Sie ist länger, und ein kleiner Fehler beim
        Anlegen fällt weniger ins Gewicht. Deshalb beginnt die Kalibrierung in der Regel mit der
        langen Kante. Legen Sie die Karte so an, dass ihre lange Kante genau an der angezeigten
        Referenz liegt. Verändern Sie die Skala, bis beide Breiten übereinstimmen.</p>
      <h2>Schritt für Schritt: mit der Karte kalibrieren</h2>
      <p>Die folgenden Schritte ergänzen die kurze Anleitung, die bereits auf der Seite steht. Sie
        beschreiben, was bei jedem Schritt zu beachten ist.</p>
      <ol>
        <li>Nehmen Sie die Karte aus der Hülle. Eine Hülle verändert die Breite und verfälscht die
          Messung.</li>
        <li>Wählen Sie eine Karte, die gerade und unbeschädigt ist. Eine gebogene oder abgenutzte
          Karte ist keine verlässliche Referenz.</li>
        <li>Öffnen Sie das <Link to="/">Online-Lineal auf der Startseite</Link> und stellen Sie den
          Browserzoom auf 100 Prozent.</li>
        <li>Legen Sie die lange Kante der Karte vorsichtig an die angezeigte Referenz. Drücken Sie
          die Karte nicht fest auf den Bildschirm.</li>
        <li>Verändern Sie die Skala, bis die angezeigte Referenz genau so breit ist wie die lange
          Kante der Karte, also 85,60 mm.</li>
        <li>Drehen Sie die Karte und prüfen Sie die kurze Kante. Sie sollte etwa 53,98 mm zeigen.</li>
        <li>Prüfen Sie danach eine Strecke von 10 cm. Die <Link
          to="/blog/lineal-10-cm-originalgroesse">Anleitung zum Lineal in Originalgröße</Link>
          erklärt, wie diese Prüfung funktioniert.</li>
        <li>Verändern Sie nach der Kalibrierung weder den Zoom noch die Ausrichtung des Geräts, bis
          die Messung beendet ist.</li>
      </ol>
      <h2>Häufige Fehler bei der Kartenmessung## Grenzen der Kartenmethode</h2>
      <p>Die Kartenmethode ist eine praktische Hilfe, aber keine exakte Messung. Sie hängt davon ab,
        ob die Karte wirklich das ID-1-Format hat, ob sie gerade ist und ob sie richtig angelegt
        wurde. Eine Abweichung von einem Millimeter ist dabei normal und für Alltagsmessungen in der
        Regel unproblematisch.</p>
      <p>Für enge Toleranzen, für sicherheitsrelevante Bauteile oder für technische Zeichnungen ist
        die Kartenmethode nicht geeignet. Dort ist ein geeignetes physisches Messgerät nötig, zum
        Beispiel ein Messschieber. Ein Bildschirm-Lineal ist kein geeichtes Messgerät. Es zeigt eine
        Skala, die erst durch den Abgleich verlässlich wird.</p>
      <p>Auch nach einem Wechsel des Bildschirms, nach einer Änderung der Anzeigeeinstellungen oder
        nach dem Löschen der Browserdaten ist eine neue Kalibrierung nötig. Die gespeicherte
        Einstellung wird nur im Browser gespeichert und geht bei einem Gerätewechsel verloren.</p>
      <h2>Häufige Fehler bei der Kartenmessung</h2>
      <p>Der häufigste Fehler ist die Hülle. Wer die Karte in der Hülle lässt, misst die Hülle mit.
        Schon ein Millimeter mehr verändert die Kalibrierung. Nehmen Sie die Karte deshalb immer aus
        der Hülle, bevor Sie sie anlegen.</p>
      <p>Der zweite Fehler ist eine gebogene oder abgenutzte Karte. Eine Karte, die lange in der
        Geldbörse war, kann sich leicht verbiegen. Eine abgenutzte Kante ist nicht mehr gerade.
        Verwenden Sie in diesem Fall eine andere Karte oder eine der Alternativen aus dem vorherigen
        Abschnitt.</p>
      <p>Der dritte Fehler ist die Verwechslung der Seiten. Die lange Kante misst 85,60 mm, die
        kurze Kante 53,98 mm. Wer die kurze Kante für die lange hält, kalibriert die Skala falsch.
        Achten Sie deshalb darauf, welche Kante Sie gerade anlegen.</p>
      <p>Der vierte Fehler ist das schräge Anlegen. Wenn die Karte nicht parallel zur angezeigten
        Referenz liegt, erscheint sie länger als sie ist. Legen Sie die Karte gerade an und schauen
        Sie senkrecht von oben auf den Bildschirm.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie groß ist eine Bankkarte genau?</h3>
      <p>Eine Karte im ID-1-Format ist 85,60 mm lang und 53,98 mm breit. Diese Maße sind genormt.
        Sie gelten für viele Bankkarten und Kreditkarten in diesem Format. Karten, die deutlich
        kleiner oder anders geformt sind, haben nicht automatisch diese Maße und eignen sich nicht
        als Referenz.</p>
      <h3>Warum ist die lange Kante besser als die kurze Kante?</h3>
      <p>Weil ein kleiner Fehler beim Anlegen bei einer längeren Strecke weniger ins Gewicht fällt.
        Bei 85,60 mm ist ein Fehler von einem Millimeter ein kleiner Anteil. Bei 53,98 mm ist
        derselbe Fehler ein größerer Anteil. Deshalb beginnt die Kalibrierung mit der langen Kante.
        Die kurze Kante eignet sich danach gut als zweite Prüfung.</p>
      <h3>Kann ich auch eine andere Karte verwenden?</h3>
      <p>Ja, wenn sie dasselbe Format hat. Viele Bankkarten, Kreditkarten und Ausweise im
        ID-1-Format haben dieselben Maße. Wenn Sie unsicher sind, vergleichen Sie die Karte mit
        einer zweiten Karte desselben Formats. Karten, die gebogen, abgenutzt oder deutlich anders
        geformt sind, sollten Sie nicht verwenden.</p>
    </>
  ),
  'schraube-lineal-messen': (
    <>
      <h2>Welche Maße bei einer Schraube zählen</h2>
      <p>Eine Schraube wird durch drei Angaben beschrieben: Länge, Durchmesser und Kopfform. Dazu
        kommt das Gewinde, das sich mit einem Lineal nur grob beurteilen lässt. Wer eine
        Ersatzschraube sucht, braucht in der Regel die Länge und den Durchmesser. Wer eine Schraube
        in ein vorhandenes Loch einsetzen will, braucht zusätzlich die Kopfform.</p>
      <p>Die Länge ist die Strecke von einem Ende der Schraube bis zum anderen Ende, je nach
        Kopfform gemessen. Der Durchmesser ist die Breite des Gewindes, gemessen über die äußersten
        Gewindegänge. Die Kopfform bestimmt, wie die Schraube sitzt: ob der Kopf in das Material
        einsinkt, ob er aufliegt oder ob er übersteht.</p>
      <h2>Die Länge je nach Kopfform richtig messen</h2>
      <p>Die Kopfform entscheidet darüber, wo die Messung beginnt. Das ist der wichtigste Punkt bei
        der Längenmessung. Wer die Kopfform ignoriert, misst mehrere Millimeter falsch.</p>
      <p>Bei einer Senkkopfschraube wird die Länge in der Regel inklusive Kopf gemessen. Der Kopf
        sinkt in das Material ein und gehört zur Gesamtlänge. Eine Senkkopfschraube mit einer Länge
        von 30 mm ist also vom oberen Ende des Kopfes bis zur Spitze 30 mm lang.</p>
      <p>Bei einer Linsenkopfschraube, einer Rundkopfschraube und einer Zylinderkopfschraube wird
        die Länge in der Regel ab der Unterseite des Kopfes gemessen. Der Kopf liegt auf dem
        Material auf und gehört nicht zur Länge. Eine Linsenkopfschraube mit einer Länge von 25 mm
        ist also von der Unterseite des Kopfes bis zur Spitze 25 mm lang. Der Kopf selbst kommt noch
        dazu.</p>
      <p>Bei einer Sechskantschraube gilt dasselbe: Die Länge wird ab der Unterseite des Kopfes
        gemessen. Der sechseckige Kopf liegt auf und gehört nicht zur Länge.</p>
      <h2>Durchgerechnete Beispiele</h2>
      <p>Drei Beispiele zeigen, wie die Messung in der Praxis aussieht.</p>
      <p>Erstes Beispiel, eine Möbelschraube: Eine Schraube soll ein Brett von 18 mm Dicke mit einem
        zweiten Brett von 12 mm Dicke verbinden. Zusammen sind das 30 mm. Eine Schraube mit einer
        Länge von 30 mm reicht dafür in der Regel aus, wenn sie als Senkkopfschraube gemessen wird.
        Ist sie als Linsenkopfschraube gemessen, kommt der Kopf noch dazu. Prüfen Sie deshalb immer,
        welche Kopfform vorliegt, bevor Sie die Länge bewerten.</p>
      <p>Zweites Beispiel, eine kurze Schraube: Eine Schraube ist 16 mm lang und hat einen
        Durchmesser von etwa 4 mm. In Zentimetern sind das 1,6 cm Länge und 0,4 cm Durchmesser. Die
        Angabe in Millimetern ist klarer, weil sie keine Dezimalstellen braucht. Wie man Zentimeter
        in Millimeter umrechnet, steht im Beitrag <Link to="/blog/cm-in-mm">cm in mm
        umrechnen</Link>.</p>
      <h2>Durchmesser und Gewinde: was das Lineal kann und was nicht</h2>
      <p>Den Durchmesser kann man mit dem Lineal nur grob prüfen. Legen Sie die Schraube quer zur
        Skala und lesen Sie die Breite über die Gewindegänge ab. Das Ergebnis ist eine grobe Angabe,
        zum Beispiel etwa 4 mm oder etwa 5 mm. Für eine genaue Angabe ist der Messschieber nötig. Er
        misst den Durchmesser auf ein Zehntel Millimeter genau.</p>
      <p>Das Gewinde lässt sich mit dem Lineal noch schlechter beurteilen. Man kann zählen, wie
        viele Gewindegänge auf einer Strecke von 10 mm liegen. Ein Rechenbeispiel: Liegen auf 10 mm
        acht Gewindegänge, beträgt der Abstand zwischen zwei Gängen etwa 1,25 mm. Das ist eine grobe
        Schätzung, keine genaue Messung. Die Steigung des Gewindes, also der Abstand zwischen zwei
        Gängen, lässt sich mit einem Lineal nicht verlässlich bestimmen.</p>
      <h2>Häufige Fehler bei der Schraubenmessung</h2>
      <p>Der häufigste Fehler ist die ignorierte Kopfform. Wer eine Linsenkopfschraube ab der
        Oberseite des Kopfes misst, erhält einen zu großen Wert. Wer eine Senkkopfschraube ab der
        Unterseite des Kopfes misst, erhält einen zu kleinen Wert. Der Unterschied beträgt oft 2 bis
        3 mm. Das reicht aus, um eine falsche Ersatzschraube zu kaufen.</p>
      <p>Der zweite Fehler ist die rollende Schraube. Eine runde Schraube rollt leicht weg, wenn sie
        auf dem Bildschirm liegt. Sie verändert dabei ihre Lage und der abgelesene Wert stimmt nicht
        mehr. Legen Sie die Schraube auf eine ebene Fläche und halten Sie sie vorsichtig fest, ohne
        sie zu bewegen. Wenn sie den Bildschirm nicht berühren soll, legen Sie ein dünnes Blatt
        Papier dazwischen und übertragen Sie die Länge darauf.</p>
      <h2>Häufige Fragen</h2>
      <h3>Wie messe ich die Länge einer Schraube richtig?</h3>
      <p>Legen Sie die Schraube gerade an die Skala. Wählen Sie den Startpunkt je nach Kopfform: Bei
        einer Senkkopfschraube ab der Oberseite des Kopfes, bei einer Linsenkopfschraube, einer
        Rundkopfschraube und einer Zylinderkopfschraube ab der Unterseite des Kopfes. Lesen Sie den
        Wert an der Spitze ab und wiederholen Sie die Messung ein zweites Mal.</p>
      <h3>Kann ich den Durchmesser mit dem Lineal messen?</h3>
      <p>Nur grob. Legen Sie die Schraube quer zur Skala und lesen Sie die Breite über die
        Gewindegänge ab. Das Ergebnis ist eine Angabe auf ganze Millimeter gerundet, zum Beispiel
        etwa 4 mm. Für eine genaue Angabe ist ein Messschieber das bessere Werkzeug.</p>
      <h3>Was bedeutet die Bezeichnung M4 bei einer Schraube?</h3>
      <p>Die Zahl gibt den Durchmesser in Millimetern an. Eine Schraube mit der Bezeichnung M4 hat
        einen Durchmesser von etwa 4 mm. Die Länge wird zusätzlich angegeben, zum Beispiel M4 mal 30
        mm für eine Schraube mit 4 mm Durchmesser und 30 mm Länge.</p>
      <h3>Warum rollt die Schraube beim Messen weg?</h3>
      <p>Weil sie rund ist und auf einer glatten Fläche keinen Halt hat. Halten Sie die Schraube
        vorsichtig fest oder legen Sie sie in eine kleine Rille, damit sie nicht wegrollt. Wenn sie
        den Bildschirm nicht berühren soll, legen Sie ein dünnes Blatt Papier dazwischen und
        übertragen Sie die Länge darauf.</p>
    </>
  ),
};

export const LegacyArticleSupplement = ({ slug }: { slug: string }) => supplements[slug] || null;
