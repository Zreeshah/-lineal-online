import React from 'react';
import type { BlogPostData } from './blogPosts';

type Topic = {
  focusKeyword: string;
  slug: string;
  title: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  imageAlt: string;
  category: string;
  summary: string;
  intent: string;
  bestUse: string;
  example: string;
  calibrationTip: string;
  steps: string[];
  mistakes: string[];
  faqs: { q: string; a: string }[];
  related: { to: string; label: string }[];
};

const heroImages = [
  '/lovable-uploads/6f49caed-ebfe-4019-9c87-44395c2b5eef.jpg',
  '/lovable-uploads/regla-midiendo.jpg',
  '/lovable-uploads/77d87cd2-00a5-424e-bf36-dc75ce21996e.jpg',
  '/lovable-uploads/regla-dibujo.jpg',
  '/lovable-uploads/381e2e34-ef77-4b15-a19c-117866a61d42.jpg',
  '/lovable-uploads/6328a843-2738-47e0-a58d-69f6ab06586b.jpg',
];

const sourceLinks = [
  {
    href: 'https://www.bipm.org/en/publications/si-brochure',
    label: 'BIPM SI-Broschüre',
    note: 'definiert das Internationale Einheitensystem als metrologische Grundlage.',
  },
  {
    href: 'https://www.nist.gov/pml/owm/si-units-length',
    label: 'NIST SI Units - Length',
    note: 'erklärt Längeneinheiten und den exakten Zollwert von 25,4 mm.',
  },
  {
    href: 'https://www.iso.org/standard/31432.html',
    label: 'ISO/IEC 7810',
    note: 'nennt die ID-1 Kartengröße von 85,60 mm x 53,98 mm.',
  },
  {
    href: 'https://www.iso.org/standard/4165.html',
    label: 'ISO 261',
    note: 'ordnet metrische ISO-Schraubengewinde ein.',
  },
  {
    href: 'https://www.iso.org/standard/65408.html',
    label: 'ISO 8653',
    note: 'beschreibt Ringgrößen und Messung im Schmuckbereich.',
  },
  {
    href: 'https://support.apple.com/en-lamr/guide/iphone/iphd8ac2cfea/ios',
    label: 'Apple Support Measure',
    note: 'beschreibt Kameramessungen am iPhone als näherungsweise Messungen.',
  },
];

const defaultRelated = [
  { to: '/', label: 'Lineal online in Originalgröße' },
  { to: '/blog/online-lineal-kalibrieren', label: 'Online-Lineal kalibrieren' },
  { to: '/blog/ist-online-lineal-genau', label: 'Ist ein Online-Lineal genau?' },
  { to: '/blog/cm-in-mm', label: 'cm in mm umrechnen' },
];

const buildFaqs = (focusKeyword: string, useCase: string): Topic['faqs'] => [
  {
    q: `Was bedeutet ${focusKeyword}?`,
    a: `${focusKeyword} beschreibt eine Messmethode direkt im Browser. Die Skala wird auf dem Bildschirm angezeigt und nach der Kalibrierung in Zentimetern, Millimetern oder Zoll genutzt.`,
  },
  {
    q: `Ist ${focusKeyword} für genaue Messungen geeignet?`,
    a: `Ja, für Alltag, Schule, Basteln und schnelle Kontrollen ist ${focusKeyword} gut geeignet. Für sicherheitskritische oder technische Toleranzen sollte ein Messschieber oder ein geprüftes Lineal verwendet werden.`,
  },
  {
    q: 'Warum ist Kalibrierung wichtig?',
    a: 'Displays haben unterschiedliche Pixeldichten. Die Kalibrierung gleicht diese Unterschiede aus, damit ein angezeigter Zentimeter möglichst nah an einem echten Zentimeter liegt.',
  },
  {
    q: 'Welche Referenz eignet sich am besten?',
    a: 'Eine Bankkarte im ID-1 Format eignet sich gut, weil sie 85,60 mm breit ist. Alternativ funktioniert ein bekanntes physisches Lineal oder die echte Bildschirmdiagonale.',
  },
  {
    q: 'Funktioniert das auch ohne App?',
    a: 'Ja. Lineal.online läuft im mobilen und Desktop-Browser. Es muss nichts installiert werden, und die Messung kann sofort gestartet werden.',
  },
  {
    q: `Wann ist ${focusKeyword} besonders praktisch?`,
    a: `${focusKeyword} ist praktisch für ${useCase}. Der Vorteil liegt darin, dass das Werkzeug sofort verfügbar ist und zwischen cm, mm und Zoll wechseln kann.`,
  },
];

const topics: Topic[] = [
  {
    focusKeyword: 'Handy als Maßband',
    slug: 'handy-als-massband',
    title: 'Handy als Maßband: 7 praktische Tipps',
    metaDescription: 'Handy als Maßband nutzen: So messen Sie kleine Objekte in cm, mm und Zoll direkt im Browser ohne App.',
    ogTitle: 'Handy als Maßband nutzen',
    ogDescription: 'Praktische Anleitung für Messungen mit dem Smartphone, Kalibrierung und typische Fehler.',
    imageAlt: 'Handy als Maßband mit Online-Lineal in Zentimetern',
    category: 'Handy messen',
    summary: 'Das Smartphone wird zum schnellen Messwerkzeug für kleine Objekte, wenn die Skala sauber kalibriert ist.',
    intent: 'Nutzer wollen wissen, ob und wie ein Smartphone als Ersatz für ein Maßband taugt.',
    bestUse: 'kleine Alltagsgegenstände wie Karten, Schrauben, Schmuck, Notizbücher oder Verpackungen',
    example: 'Wer unterwegs eine Schraube, eine Karte oder ein Schmuckstück prüfen möchte, legt das Objekt an die Bildschirmkante und liest die Länge direkt ab.',
    calibrationTip: 'Am verlässlichsten ist eine Kalibrierung mit einer Bankkarte, weil ihre Breite international standardisiert ist.',
    steps: ['Online-Lineal auf dem Smartphone öffnen.', 'Browserzoom auf 100 Prozent lassen.', 'Bankkarte anlegen und Skala kalibrieren.', 'Objekt an die Nullmarke legen.', 'Wert in cm oder mm ablesen.'],
    mistakes: ['Hülle oder Displayschutz erzeugt Abstand.', 'Der Blick trifft schräg auf die Skala.', 'Die Nullmarke wird mit dem Gehäuserand verwechselt.'],
    faqs: buildFaqs('Handy als Maßband', 'schnelle Messungen unterwegs'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Maßband im Handy',
    slug: 'massband-im-handy',
    title: 'Maßband im Handy: 6 klare Vorteile',
    metaDescription: 'Maßband im Handy verwenden: Browser-Lineal, Kalibrierung, Genauigkeit und Tipps für mobile Messungen.',
    ogTitle: 'Maßband im Handy richtig verwenden',
    ogDescription: 'So wird das Smartphone zum kalibrierten Maßband in cm und mm.',
    imageAlt: 'Maßband im Handy mit kalibrierter Zentimeter-Skala',
    category: 'Handy messen',
    summary: 'Ein Maßband im Handy ersetzt kein WerkstattmessGerät, hilft aber bei schnellen, wiederholbaren Messungen.',
    intent: 'Nutzer suchen eine sofort nutzbare Messfunktion auf dem Smartphone.',
    bestUse: 'kurze Längen, Bastelmaterial, Etiketten, Fotos, Karten und Verpackungen',
    example: 'Ein Paketetikett passt nur, wenn die kurze Seite unter 10 cm bleibt. Das Handy-Maßband zeigt sofort, ob die Größe reicht.',
    calibrationTip: 'Nach dem Wechsel zwischen Hoch- und Querformat sollte die Anzeige kurz geprüft werden.',
    steps: ['Lineal.online öffnen.', 'Einheit cm oder mm wählen.', 'Referenzkarte anlegen.', 'Skala anpassen.', 'Messobjekt flach an den Bildschirm halten.'],
    mistakes: ['Automatische Display-Skalierung bleibt unbemerkt.', 'Das Objekt liegt nicht parallel zur Skala.', 'Die Messung wird bei aktiviertem Seitenzoom wiederholt.'],
    faqs: buildFaqs('Maßband im Handy', 'kleine Messungen auf dem Smartphone'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Lineal im Handy',
    slug: 'lineal-im-handy',
    title: 'Lineal im Handy: 5 Schritte zum Messen',
    metaDescription: 'Lineal im Handy nutzen: Online messen in cm und mm, kalibrieren und typische Fehler vermeiden.',
    ogTitle: 'Lineal im Handy ohne App',
    ogDescription: 'Eine einfache Anleitung für ein kalibriertes Smartphone-Lineal.',
    imageAlt: 'Lineal im Handy mit Millimeter-Teilung',
    category: 'Handy messen',
    summary: 'Das Lineal im Handy ist besonders nützlich, wenn kein physisches Lineal griffbereit ist.',
    intent: 'Nutzer wollen eine Handy-Lineal-Anleitung mit Genauigkeitscheck.',
    bestUse: 'Schule, Büro, Basteln, kleine Ersatzteile und schnelle Größenschätzungen',
    example: 'Beim Kauf eines kleinen Ersatzteils kann ein Handy-Lineal die Breite in Millimetern prüfen, bevor bestellt wird.',
    calibrationTip: 'Eine einmal geprüfte Kalibrierung sollte vor wichtigen Messungen erneut mit einer Karte kontrolliert werden.',
    steps: ['Smartphone auf eine feste Unterlage legen.', 'Online-Lineal starten.', 'Kalibrierung prüfen.', 'Objekt an die Null legen.', 'Wert senkrecht von oben ablesen.'],
    mistakes: ['Das Objekt wird in der Hand gehalten.', 'Die Skala wird durch Finger verdeckt.', 'Der Startpunkt liegt nicht bei 0.'],
    faqs: buildFaqs('Lineal im Handy', 'Messungen ohne physisches Lineal'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Lineal online',
    slug: 'lineal-online-blog',
    title: 'Lineal online: 9 nützliche Messideen',
    metaDescription: 'Lineal online nutzen: So messen Sie direkt im Browser in cm, mm und Zoll mit sauberer Kalibrierung.',
    ogTitle: 'Lineal online in Originalgröße',
    ogDescription: 'Der komplette Einstieg für Browsermessungen mit einem Online-Lineal.',
    imageAlt: 'Lineal online in Originalgröße auf einem Bildschirm',
    category: 'Online-Lineal',
    summary: 'Ein Lineal online zeigt eine digitale Skala im Browser und wird durch Kalibrierung zur praktischen Messhilfe.',
    intent: 'Nutzer suchen ein kostenloses, sofort nutzbares Online-Lineal.',
    bestUse: 'kurze Objekte, schnelle Kontrollen und Umrechnungen zwischen cm, mm und Zoll',
    example: 'Ein Lineal online hilft, wenn ein Objekt fotografiert, verpackt oder verglichen werden soll und kein Werkzeug auf dem Tisch liegt.',
    calibrationTip: 'Die Genauigkeit steigt, wenn vor der ersten Messung eine echte Referenz angelegt wird.',
    steps: ['Startseite öffnen.', 'Gewuenschte Einheit wählen.', 'Bildschirm kalibrieren.', 'Objekt anlegen.', 'Messwert notieren.'],
    mistakes: ['Online-Lineal ohne Kalibrierung verwenden.', 'Browserzoom verändern.', 'Display schräg betrachten.'],
    faqs: buildFaqs('Lineal online', 'Browsermessungen auf Handy, Tablet und PC'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Lineal online 20 cm',
    slug: 'lineal-online-20-cm',
    title: 'Lineal online 20 cm: 5 Mess-Tipps',
    metaDescription: 'Lineal online 20 cm anzeigen und richtig kalibrieren. Tipps für Handy, Tablet und Desktop.',
    ogTitle: 'Lineal online 20 cm anzeigen',
    ogDescription: 'Wann 20 cm auf dem Bildschirm funktionieren und wie die Skala genau bleibt.',
    imageAlt: 'Lineal online 20 cm in Originalgröße',
    category: 'Online-Lineal',
    summary: 'Ein 20-cm-Lineal online funktioniert besonders gut auf Tablets, Laptops und breiteren Smartphone-Ansichten.',
    intent: 'Nutzer wollen eine 20-cm-Skala online anzeigen.',
    bestUse: 'Notizbücher, kleine Pakete, Bastelmaterial, Stoffstücke und Tablet-Messungen',
    example: 'Auf einem Tablet kann eine 20-cm-Skala reichen, um eine Kartenhuelle oder ein Heft direkt am Bildschirm zu prüfen.',
    calibrationTip: 'Querformat bietet oft mehr sichtbare Skala und reduziert Scrollen.',
    steps: ['Gerät ins Querformat drehen.', '20-cm-Bereich sichtbar machen.', 'Kalibrierung mit Karte prüfen.', 'Objekt parallel anlegen.', 'Endpunkt bei 20 cm kontrollieren.'],
    mistakes: ['20 cm auf kleinem Display erzwingen.', 'Scrollposition während der Messung verändern.', 'Ende der Skala mit Displayrand verwechseln.'],
    faqs: buildFaqs('Lineal online 20 cm', 'Messungen bis etwa 20 cm'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Vertikales Lineal online',
    slug: 'vertikales-lineal-online',
    title: 'Vertikales Lineal online: 6 Einsatzfälle',
    metaDescription: 'Vertikales Lineal online nutzen: Hochformat-Skala, Kalibrierung und Tipps für Handy und Desktop.',
    ogTitle: 'Vertikales Lineal online verwenden',
    ogDescription: 'So messen Sie Höhen und Längen im Hochformat direkt am Bildschirm.',
    imageAlt: 'Vertikales Lineal online auf Smartphone und Desktop',
    category: 'Online-Lineal',
    summary: 'Ein vertikales Online-Lineal ist ideal, wenn das Objekt besser von oben nach unten angelegt wird.',
    intent: 'Nutzer suchen eine vertikale digitale Skala.',
    bestUse: 'Höhen, Etiketten, Schmuck, Schraubenlängen und mobile Hochformat-Messungen',
    example: 'Eine Schraube lässt sich am vertikalen Lineal gut mit dem Kopf oben und dem Gewinde nach unten ausrichten.',
    calibrationTip: 'Bei vertikaler Messung sollte die Nullmarke oben oder unten klar festgelegt werden.',
    steps: ['Vertikale Ausrichtung wählen.', 'Skala kalibrieren.', 'Objekt gerade anlegen.', 'Nullmarke prüfen.', 'Länge am Endpunkt ablesen.'],
    mistakes: ['Objekt kippt seitlich weg.', 'Der Bildschirm wird während der Messung gescrollt.', 'Die Zahlenrichtung wird falsch gelesen.'],
    faqs: buildFaqs('Vertikales Lineal online', 'Höhenmessungen und Smartphone-Hochformat'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Lineal zum Ausdrucken',
    slug: 'lineal-zum-ausdrucken-blog',
    title: 'Lineal zum Ausdrucken: 8 Druckregeln',
    metaDescription: 'Lineal zum Ausdrucken korrekt nutzen: A4, 100 Prozent Skalierung, Kontrollmessung und kostenlose Vorlage.',
    ogTitle: 'Lineal zum Ausdrucken in Originalgröße',
    ogDescription: 'So drucken Sie eine cm- und mm-Skala ohne Skalierungsfehler.',
    imageAlt: 'Lineal zum Ausdrucken in Zentimetern und Millimetern',
    category: 'Drucken',
    summary: 'Ein gedrucktes Lineal ist nur genau, wenn Papierformat, Skalierung und Kontrollmessung stimmen.',
    intent: 'Nutzer wollen ein druckbares Lineal und Hilfe zur korrekten Ausgabe.',
    bestUse: 'Schule, Werkstatt, Büro, Bastelprojekte und Offline-Messungen',
    example: 'Wer eine A4-Vorlage mit 100 Prozent druckt und mit einer Bankkarte prüft, kann kleine Gegenstände auch ohne Bildschirm messen.',
    calibrationTip: 'Nach dem Druck sollte die 10-cm-Strecke mit einem echten Lineal oder einer Karte geprüft werden.',
    steps: ['Druckseite öffnen.', 'A4 auswählen.', 'Skalierung auf 100 Prozent stellen.', 'Vorlage drucken.', '10 cm Kontrollstrecke nachmessen.'],
    mistakes: ['Drucker skaliert auf Seitenbreite.', 'PDF wird im Vorschaumodus verkleinert.', 'Papier dehnt sich durch Feuchtigkeit leicht.'],
    faqs: buildFaqs('Lineal zum Ausdrucken', 'Offline-Messungen nach dem Druck'),
    related: [
      { to: '/lineal-drucken', label: 'Kostenloses Lineal drucken' },
      { to: '/blog/lineal-online-20-cm', label: 'Lineal online 20 cm' },
      { to: '/blog/ist-online-lineal-genau', label: 'Genauigkeit prüfen' },
      { to: '/blog/bankkartengroesse', label: 'Bankkartengröße als Referenz' },
    ],
  },
  {
    focusKeyword: 'Online-Lineal kalibrieren',
    slug: 'online-lineal-kalibrieren',
    title: 'Online-Lineal kalibrieren: 6 sichere Wege',
    metaDescription: 'Online-Lineal kalibrieren: Bildschirm, Bankkarte, 10-cm-Test und Tipps für genaue Messungen.',
    ogTitle: 'Online-Lineal richtig kalibrieren',
    ogDescription: 'Kalibrierung per Karte, Bildschirmdiagonale oder Kontrollstrecke einfach erklärt.',
    imageAlt: 'Online-Lineal kalibrieren mit Bankkarte',
    category: 'Kalibrierung',
    summary: 'Kalibrierung ist der wichtigste Schritt, damit digitale Zentimeter echte Zentimeter werden.',
    intent: 'Nutzer wollen die Online-Lineal-Skala exakt einstellen.',
    bestUse: 'alle Messungen, bei denen ein Millimeter Unterschied sichtbar sein kann',
    example: 'Eine Bankkarte wird an die Skala gelegt. Passt die Breite von 85,60 mm, sind auch 10 cm deutlich verlässlicher.',
    calibrationTip: 'Die Bankkarte ist oft einfacher als die Bildschirmdiagonale, weil sie direkt an der Skala geprüft wird.',
    steps: ['Referenzobjekt bereitlegen.', 'Einheit Millimeter wählen.', 'Referenz an die Skala legen.', 'Skala anpassen.', '10 cm Kontrollmessung wiederholen.'],
    mistakes: ['Falsche Kartenseite messen.', 'Browserzoom ignorieren.', 'Kalibrierung auf einem anderen Gerät übernehmen.'],
    faqs: buildFaqs('Online-Lineal kalibrieren', 'genauere Messungen mit digitaler Skala'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Ist ein Online-Lineal genau',
    slug: 'ist-online-lineal-genau',
    title: 'Ist ein Online-Lineal genau? 7 Fakten',
    metaDescription: 'Ist ein Online-Lineal genau? Erfahren Sie, wann es reicht, wann nicht und wie Kalibrierung hilft.',
    ogTitle: 'Ist ein Online-Lineal genau?',
    ogDescription: 'Eine ehrliche Einordnung zur Genauigkeit von Browser-Linealen.',
    imageAlt: 'Ist ein Online-Lineal genau bei Messungen in mm',
    category: 'Genauigkeit',
    summary: 'Ein Online-Lineal kann genau genug sein, wenn Bildschirm, Zoom und Referenz sauber eingestellt sind.',
    intent: 'Nutzer wollen die Verlässlichkeit digitaler Lineale einschätzen.',
    bestUse: 'Alltagsmessungen, Vorabkontrollen, Schule, Basteln und nicht-kritische Vergleiche',
    example: 'Für eine 45-mm-Schraube reicht ein kalibriertes Online-Lineal oft aus. Für ein Passungsteil mit Toleranzen nicht.',
    calibrationTip: 'Nach jeder Aenderung von Zoom, Displaymodus oder Gerät sollte erneut geprüft werden.',
    steps: ['Kalibrierung mit Referenz durchführen.', '10 cm Kontrollstrecke prüfen.', 'Objekt gerade anlegen.', 'Messwert zweimal ablesen.', 'Bei kritischen Werten physisch nachmessen.'],
    mistakes: ['Genauigkeit mit Werkstattpräzision verwechseln.', 'Displaykrümmung ignorieren.', 'Sehr kleine Innenmasse am Bildschirm messen.'],
    faqs: buildFaqs('Ist ein Online-Lineal genau', 'Alltagsmessungen mit realistischem Genauigkeitsanspruch'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Maßband online in cm',
    slug: 'massband-online-cm',
    title: 'Maßband online in cm: 6 schnelle Tipps',
    metaDescription: 'Maßband online in cm nutzen: Zentimeter, Millimeter, Kalibrierung und Beispiele direkt im Browser.',
    ogTitle: 'Maßband online in cm verwenden',
    ogDescription: 'So messen Sie Zentimeterwerte online ohne App.',
    imageAlt: 'Maßband online in cm auf einem Bildschirm',
    category: 'Einheiten',
    summary: 'Ein Online-Maßband in cm eignet sich für schnelle Längenvergleiche und klare Zentimeterwerte.',
    intent: 'Nutzer wollen in Zentimetern online messen.',
    bestUse: 'Gegenstände zwischen 1 und 30 cm, Bastelmaterial, Karten, Verpackungen und Papier',
    example: 'Ein Umschlag soll 16 cm breit sein. Das Online-Maßband zeigt sofort, ob das Format passt.',
    calibrationTip: 'Wer in cm misst, sollte trotzdem die Millimeterteilung zur Kontrolle nutzen.',
    steps: ['cm-Einheit wählen.', 'Skala kalibrieren.', 'Nullpunkt festlegen.', 'Objekt anlegen.', 'Zentimeterwert ablesen und bei Bedarf mm addieren.'],
    mistakes: ['Nur volle Zentimeter ablesen.', 'Zwischen cm und mm nicht unterscheiden.', 'Objekt nicht flach halten.'],
    faqs: buildFaqs('Maßband online in cm', 'Zentimeter-Messungen im Browser'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Zentimeter online',
    slug: 'zentimeter-online',
    title: 'Zentimeter online: 5 einfache Methoden',
    metaDescription: 'Zentimeter online messen und umrechnen: Online-Lineal, Kalibrierung, 10-cm-Test und Alltagstipps.',
    ogTitle: 'Zentimeter online messen',
    ogDescription: 'So werden Zentimeter am Bildschirm nachvollziehbar und praktisch.',
    imageAlt: 'Zentimeter online mit digitalem Lineal messen',
    category: 'Einheiten',
    summary: 'Zentimeter online sind besonders hilfreich, wenn eine grobe Länge schnell sichtbar werden soll.',
    intent: 'Nutzer suchen eine digitale Zentimeter-Skala oder Umrechnung.',
    bestUse: 'Längenangaben in Schule, Alltag, Versand, Design und Handwerk',
    example: 'Wer wissen will, ob ein Objekt 12 oder 13 cm lang ist, bekommt am kalibrierten Bildschirm eine schnelle Antwort.',
    calibrationTip: 'Ein Zentimeter besteht aus 10 Millimetern. Die mm-Striche zeigen, ob die Skala plausibel ist.',
    steps: ['Online-Lineal öffnen.', 'Zentimeter anzeigen.', 'Kalibrierung prüfen.', 'Objekt anlegen.', 'Wert in cm notieren.'],
    mistakes: ['Zentimeter und Zoll verwechseln.', 'Dezimalstellen falsch lesen.', 'Messung ohne Referenz starten.'],
    faqs: buildFaqs('Zentimeter online', 'schnelle Zentimeterwerte am Bildschirm'),
    related: defaultRelated,
  },
  {
    focusKeyword: '10 cm online messen',
    slug: '10-cm-online-messen',
    title: '10 cm online messen: 5 sichere Checks',
    metaDescription: '10 cm online messen: So zeigen Sie eine echte 10-cm-Strecke an und prüfen die Genauigkeit.',
    ogTitle: '10 cm online messen',
    ogDescription: 'Die 10-cm-Kontrollstrecke für Smartphone, Tablet und Desktop.',
    imageAlt: '10 cm online messen mit kalibriertem Lineal',
    category: 'Online-Lineal',
    summary: '10 cm sind die ideale Kontrollstrecke, weil sie lang genug für Genauigkeit und kurz genug für fast jedes Display ist.',
    intent: 'Nutzer wollen 10 cm in Originalgröße anzeigen.',
    bestUse: 'Kontrollmessungen, Schmuck, Karten, Basteln, kleine Verpackungen und Bildschirmkalibrierung',
    example: 'Nach der Kalibrierung wird die 10-cm-Strecke mit einer physischen Referenz geprüft. So fallen Skalierungsfehler schnell auf.',
    calibrationTip: 'Wenn 10 cm stimmen, sind kleinere Werte meist ebenfalls verlässlicher.',
    steps: ['10-cm-Bereich anzeigen.', 'Einheit cm wählen.', 'Referenz anlegen.', 'Null und 10-cm-Marke prüfen.', 'Objekt innerhalb der Strecke messen.'],
    mistakes: ['10 cm ohne Kalibrierung als echt annehmen.', 'Die Skala durch Scrollen verschieben.', 'Volle Bildschirmbreite statt 10-cm-Marke nutzen.'],
    faqs: buildFaqs('10 cm online messen', 'Kontrollstrecken und kurze Messungen'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'cm in mm',
    slug: 'cm-in-mm',
    title: 'cm in mm: 10 Werte einfach erklärt',
    metaDescription: 'cm in mm umrechnen: Formel, Tabelle, Beispiele und Online-Lineal für Zentimeter und Millimeter.',
    ogTitle: 'cm in mm umrechnen',
    ogDescription: 'Die einfache Regel: Zentimeter mal 10 ergibt Millimeter.',
    imageAlt: 'cm in mm Umrechnung mit Lineal',
    category: 'Umrechnung',
    summary: 'cm in mm ist eine einfache Multiplikation: 1 cm entspricht 10 mm.',
    intent: 'Nutzer wollen Zentimeter in Millimeter umrechnen.',
    bestUse: 'Schule, technische Zeichnungen, Basteln, Schraubenlängen und kleine Objektmaße',
    example: 'Eine Länge von 4,5 cm entspricht 45 mm. Auf dem Online-Lineal sind das vier volle Zentimeter plus fünf Millimeter.',
    calibrationTip: 'Wer mm genau messen will, sollte die Skala zuerst mit 10 cm prüfen.',
    steps: ['Zentimeterwert notieren.', 'Mit 10 multiplizieren.', 'Ergebnis in mm schreiben.', 'Bei Dezimalwerten Komma mitnehmen.', 'Wert am Lineal prüfen.'],
    mistakes: ['Durch 10 teilen statt multiplizieren.', 'Kommafehler bei 0,5 cm.', 'cm und mm in Tabellen vermischen.'],
    faqs: buildFaqs('cm in mm', 'Umrechnungen von Zentimetern in Millimeter'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'mm in cm',
    slug: 'mm-in-cm',
    title: 'mm in cm: 10 Beispiele für den Alltag',
    metaDescription: 'mm in cm umrechnen: Millimeter durch 10 teilen, Tabelle nutzen und Werte am Online-Lineal prüfen.',
    ogTitle: 'mm in cm umrechnen',
    ogDescription: 'Die einfache Regel für Millimeter zu Zentimeter.',
    imageAlt: 'mm in cm Umrechnung am digitalen Lineal',
    category: 'Umrechnung',
    summary: 'mm in cm funktioniert durch Teilen durch 10: 25 mm sind 2,5 cm.',
    intent: 'Nutzer wollen Millimeter in Zentimeter umrechnen.',
    bestUse: 'Produktmaße, Schrauben, Schmuck, Modellbau, Papierformate und kleine Längen',
    example: 'Eine Schraube mit 30 mm Länge ist 3 cm lang. Das lässt sich am Lineal sofort kontrollieren.',
    calibrationTip: 'Die Millimeterteilung sollte nach Kalibrierung gleichmäßig sichtbar sein.',
    steps: ['Millimeterwert notieren.', 'Durch 10 teilen.', 'Komma eine Stelle nach links setzen.', 'cm-Einheit prüfen.', 'Bei Bedarf wieder in mm gegenchecken.'],
    mistakes: ['Komma in die falsche Richtung setzen.', '30 mm als 30 cm lesen.', 'Angaben aus Produktbildern ungeprüft übernehmen.'],
    faqs: buildFaqs('mm in cm', 'Umrechnungen von Millimetern in Zentimeter'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'cm in Zoll',
    slug: 'cm-in-zoll',
    title: 'cm in Zoll: 8 Werte schnell umrechnen',
    metaDescription: 'cm in Zoll umrechnen: Formel, Tabelle und Beispiele. 1 Zoll sind exakt 2,54 cm.',
    ogTitle: 'cm in Zoll umrechnen',
    ogDescription: 'Zentimeter in Zoll umwandeln mit Formel, Tabelle und Online-Lineal.',
    imageAlt: 'cm in Zoll Umrechnung mit Online-Lineal',
    category: 'Umrechnung',
    summary: 'cm in Zoll wird berechnet, indem Zentimeter durch 2,54 geteilt werden.',
    intent: 'Nutzer wollen Zentimeter in Inch/Zoll umrechnen.',
    bestUse: 'Bildschirmgrößen, Werkzeugangaben, Versandmasse, DIY und internationale Produktdaten',
    example: '20 cm entsprechen rund 7,87 Zoll. Das hilft, wenn Produktangaben in Zoll und eigene Messwerte in cm vorliegen.',
    calibrationTip: 'Bei Zollwerten lohnt sich ein zweiter Blick, weil Dezimalzoll und Bruchzoll unterschiedlich notiert werden.',
    steps: ['cm-Wert notieren.', 'Durch 2,54 teilen.', 'Ergebnis runden.', 'Zoll-Einheit am Online-Lineal prüfen.', 'Bei Bedarf in mm zurueckrechnen.'],
    mistakes: ['2,54 multiplizieren statt teilen.', 'Zollzeichen mit Minutenzeichen verwechseln.', 'Zu stark runden.'],
    faqs: buildFaqs('cm in Zoll', 'Umrechnungen zwischen metrischen und angloamerikanischen Angaben'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Bildschirm in Zoll messen',
    slug: 'bildschirm-zoll-messen',
    title: 'Bildschirm in Zoll messen: 4 Methoden',
    metaDescription: 'Bildschirm in Zoll messen: Diagonale bestimmen, cm in Zoll umrechnen und Online-Lineal kalibrieren.',
    ogTitle: 'Bildschirm in Zoll messen',
    ogDescription: 'So bestimmen Sie die Bildschirmdiagonale für Kalibrierung und Vergleich.',
    imageAlt: 'Bildschirm in Zoll messen mit Diagonale',
    category: 'Kalibrierung',
    summary: 'Die Bildschirmgröße in Zoll meint die Diagonale, nicht Breite oder Höhe.',
    intent: 'Nutzer wollen die Displaydiagonale bestimmen.',
    bestUse: 'Kalibrierung, Gerätevergleich, Monitorkauf und Smartphone-Erkennung',
    example: 'Eine Diagonale von 39,6 cm entspricht etwa 15,6 Zoll. Dieser Wert kann zur Bildschirmkalibrierung genutzt werden.',
    calibrationTip: 'Gemessen wird nur die sichtbare Displayfläche, nicht der Rahmen.',
    steps: ['Sichtbare Diagonale messen.', 'Wert in cm notieren.', 'Durch 2,54 teilen.', 'Zollwert runden.', 'Wert im Kalibrierungsfeld eintragen.'],
    mistakes: ['Breite statt Diagonale messen.', 'Gehäuserand mitmessen.', 'Gerundeten Marketingwert als exakte Größe behandeln.'],
    faqs: buildFaqs('Bildschirm in Zoll messen', 'Displaykalibrierung und Gerätevergleich'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Bankkartengröße',
    slug: 'bankkartengroesse',
    title: 'Bankkartengröße: 85,60 mm richtig nutzen',
    metaDescription: 'Bankkartengröße als Referenz: 85,60 x 53,98 mm für Online-Lineal, Kalibrierung und Messcheck.',
    ogTitle: 'Bankkartengröße als Messreferenz',
    ogDescription: 'Warum Karten im ID-1 Format ideal für die Kalibrierung sind.',
    imageAlt: 'Bankkartengröße 85,60 mm für Online-Lineal',
    category: 'Kalibrierung',
    summary: 'Die Bankkartengröße im ID-1 Format beträgt 85,60 mm x 53,98 mm und eignet sich als Kalibrierreferenz.',
    intent: 'Nutzer suchen die Maße einer Bankkarte oder Kreditkarte.',
    bestUse: 'Kalibrierung, Größenvergleich, Wallets, Kartenhalter und Online-Lineal-Pruefung',
    example: 'Wer eine Karte an die Skala legt und 85,60 mm Breite trifft, hat einen starken Hinweis auf eine passende Lineal-Skalierung.',
    calibrationTip: 'Die lange Kante ist einfacher abzulesen als die kurze Kante.',
    steps: ['Bankkarte bereitlegen.', 'Lange Kante wählen.', 'Millimeter-Skala anzeigen.', '85,60 mm anpassen.', 'Mit 10 cm Strecke gegenprüfen.'],
    mistakes: ['Abgenutzte oder gebogene Karte nutzen.', 'Kurze und lange Seite verwechseln.', 'Kartenhuelle mitmessen.'],
    faqs: buildFaqs('Bankkartengröße', 'Kalibrierung und Referenzmessungen'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Ring mit Lineal messen',
    slug: 'ring-lineal-messen',
    title: 'Ring mit Lineal messen: 6 wichtige Tipps',
    metaDescription: 'Ring mit Lineal messen: Innendurchmesser, mm-Wert, Ringgröße und Grenzen der Methode einfach erklärt.',
    ogTitle: 'Ring mit Lineal messen',
    ogDescription: 'So messen Sie einen Ring vorsichtig mit Lineal oder Online-Lineal.',
    imageAlt: 'Ring mit Lineal messen und Innendurchmesser ablesen',
    category: 'Praxis',
    summary: 'Ein Ring kann mit einem Lineal grob über den Innendurchmesser gemessen werden; für Schmuckkauf ist ein Ringmaß genauer.',
    intent: 'Nutzer wollen die Ringgröße mit einem Lineal bestimmen.',
    bestUse: 'grobe Ringgrößen-Pruefung, vorhandene Ringe, Geschenkvorbereitung und Schmuckvergleich',
    example: 'Ein Ring mit 18 mm Innendurchmesser liegt etwa im Bereich gängiger mittlerer Größen. Vor dem Kauf sollte der Wert professionell geprüft werden.',
    calibrationTip: 'Beim Online-Lineal muss der Ring flach liegen und der innere Rand exakt sichtbar sein.',
    steps: ['Ring flach auflegen.', 'Innendurchmesser wählen.', 'Null an inneren Rand setzen.', 'Gegenüberliegenden inneren Rand ablesen.', 'Wert in mm notieren.'],
    mistakes: ['Außendurchmesser messen.', 'Ring schräg halten.', 'Breite Ringschiene ignorieren.'],
    faqs: buildFaqs('Ring mit Lineal messen', 'grobe Schmuck- und Ringgrößenmessungen'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Schraube mit Lineal messen',
    slug: 'schraube-lineal-messen',
    title: 'Schraube mit Lineal messen: 7 Regeln',
    metaDescription: 'Schraube mit Lineal messen: Länge, Durchmesser, Gewinde und Grenzen der Lineal-Methode erklärt.',
    ogTitle: 'Schraube mit Lineal messen',
    ogDescription: 'So messen Sie Schraubenlänge und grobe Maße mit Lineal oder Online-Lineal.',
    imageAlt: 'Schraube mit Lineal messen in Millimetern',
    category: 'Praxis',
    summary: 'Eine Schraube lässt sich mit dem Lineal grob messen; Durchmesser und Gewinde sind mit Messschieber verlässlicher.',
    intent: 'Nutzer wollen Schraubenmasse mit einem Lineal bestimmen.',
    bestUse: 'Ersatzschrauben, DIY, Möbelmontage, Vorabkontrolle und Längenvergleich',
    example: 'Eine Senkkopfschraube wird meist inklusive Kopflänge gemessen, eine Linsenkopfschraube häufig ab Unterseite des Kopfes.',
    calibrationTip: 'Millimeteranzeige ist bei Schrauben wichtiger als volle Zentimeter.',
    steps: ['Schraube gerade ausrichten.', 'Passenden Startpunkt je nach Kopf wählen.', 'Länge bis zur Spitze messen.', 'Durchmesser nur grob prüfen.', 'Bei Gewinde den Messschieber nutzen.'],
    mistakes: ['Kopfform bei Längenmessung ignorieren.', 'Gewindedurchmesser mit Lineal zu exakt bewerten.', 'Schraube rollt während der Messung.'],
    faqs: buildFaqs('Schraube mit Lineal messen', 'Ersatzteil- und DIY-Messungen'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Lineal-App vs Online-Lineal',
    slug: 'lineal-app-vs-online',
    title: 'Lineal-App vs Online-Lineal: 7 Unterschiede',
    metaDescription: 'Lineal-App vs Online-Lineal: Vorteile, Datenschutz, Genauigkeit, Installation und beste Einsatzfälle.',
    ogTitle: 'Lineal-App vs Online-Lineal',
    ogDescription: 'Welche Lösung passt besser für schnelle Messungen?',
    imageAlt: 'Lineal-App vs Online-Lineal Vergleich',
    category: 'Vergleich',
    summary: 'Eine Lineal-App kann Zusatzfunktionen bieten, während ein Online-Lineal sofort ohne Installation funktioniert.',
    intent: 'Nutzer vergleichen App und Browser-Lösung.',
    bestUse: 'Entscheidung zwischen Installation, Browsermessung, Datenschutz und Zusatzfunktionen',
    example: 'Wer nur eine Karte oder Schraube messen will, ist mit dem Online-Lineal schneller. Wer AR-Funktionen braucht, prüft eine App.',
    calibrationTip: 'Beide Varianten muessen geprüft werden, weil Kamera-AR und Bildschirmskala unterschiedliche Fehlerquellen haben.',
    steps: ['Messziel klären.', 'Datenschutzbedarf prüfen.', 'Online-Lineal für kurze Skalen testen.', 'App nur bei AR-Bedarf installieren.', 'Messwerte mit Referenz vergleichen.'],
    mistakes: ['App automatisch für genauer halten.', 'Berechtigungen nicht prüfen.', 'AR-Messung für Millimeterwerte verwenden.'],
    faqs: buildFaqs('Lineal-App vs Online-Lineal', 'die Wahl zwischen App und Browser-Werkzeug'),
    related: defaultRelated,
  },
];

const conversionRows = [
  ['1 cm', '10 mm', '0,39 Zoll'],
  ['5 cm', '50 mm', '1,97 Zoll'],
  ['10 cm', '100 mm', '3,94 Zoll'],
  ['20 cm', '200 mm', '7,87 Zoll'],
  ['30 cm', '300 mm', '11,81 Zoll'],
];

const ArticleShell = ({ topic }: { topic: Topic }) => {
  const selectedSources = sourceLinks;

  return (
    <article
      className="
        prose prose-sm sm:prose lg:prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
        prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-purple-100
        prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-purple-900
        prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-700 prose-a:font-medium hover:prose-a:text-purple-900
        prose-strong:text-gray-900 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-li:marker:text-purple-500
        prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm prose-th:bg-purple-50 prose-th:text-purple-900
      "
    >
      <p className="lead text-lg sm:text-xl text-gray-600 leading-relaxed border-l-4 border-purple-400 pl-4 italic">
        {topic.focusKeyword} funktioniert am besten, wenn die Bildschirmskala vor der Messung kalibriert wird.
        Die Methode eignet sich für schnelle Messungen in cm, mm und Zoll, ersetzt aber kein geeichtes
        Messwerkzeug für technische Toleranzen.
      </p>

      <table>
        <thead>
          <tr>
            <th>Bereich</th>
            <th>Empfehlung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Suchintention</td>
            <td>{topic.intent}</td>
          </tr>
          <tr>
            <td>Beste Nutzung</td>
            <td>{topic.bestUse}</td>
          </tr>
          <tr>
            <td>Genauigkeitscheck</td>
            <td>{topic.calibrationTip}</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Takeaways zu {topic.focusKeyword}</h2>
      <ul>
        <li>{topic.summary}</li>
        <li>1 cm sind 10 mm, und 1 Zoll entspricht exakt 25,4 mm.</li>
        <li>Eine Bankkarte mit 85,60 mm Breite ist eine praktische Referenz für die Kalibrierung.</li>
        <li>Für Schmuck, Schrauben oder kleine Ersatzteile ist die Millimeter-Skala wichtiger als volle Zentimeter.</li>
      </ul>

      <h2>Was ist {topic.focusKeyword}?</h2>
      <p>
        {topic.focusKeyword} ist eine praktische Art, eine sichtbare Skala auf dem Bildschirm zu nutzen. Die
        Messung passiert nicht durch Schätzen, sondern durch eine kalibrierte Pixel-Skala. Dadurch wird aus einem
        Display ein digitales Lineal. Je besser die Kalibrierung, desto näher liegt der angezeigte Wert am echten
        Maß.
      </p>
      <p>
        Der wichtigste Punkt ist die Beziehung zwischen Display, Einheit und Referenz. Ein Browser kennt die
        physische Größe eines Bildschirms nicht immer sicher. Deshalb rechnet Lineal.online die Skala nach einer
        Referenz. Das kann eine Bankkarte, ein bekanntes Lineal oder die Bildschirmdiagonale in Zoll sein. Dadurch
        wird {topic.focusKeyword} deutlich verlässlicher als eine nicht geprüfte Bildschirmgrafik.
      </p>
      <p>
        Im Alltag reicht diese Methode oft aus. Sie hilft beim Vergleichen, Vorbereiten und Kontrollieren. Wer
        jedoch Bauteile mit engen Toleranzen misst, sollte den Wert mit einem Messschieber oder einem geprüften
        Werkzeug bestätigen. Diese klare Grenze macht das Online-Lineal nicht schlechter; sie macht die Messung
        ehrlich.
      </p>

      <h2>So funktioniert {topic.focusKeyword} Schritt für Schritt</h2>
      <ol>
        {topic.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p>
        Für die meisten Nutzer ist die Reihenfolge wichtiger als die Technik dahinter. Erst wird die Skala
        vorbereitet, dann wird das Objekt angelegt, danach wird abgelesen. Wer diesen Ablauf beibehält, vermeidet
        typische Fehler. Besonders hilfreich ist eine ruhige Unterlage, weil das Objekt sonst leicht verrutscht.
      </p>
      <p>
        {topic.example} Bei solchen Messungen sollte die Kante des Objekts exakt an der Nullmarke liegen. Wenn die
        Kante rund oder weich ist, wird der Wert eher als Näherung gelesen. Bei harten, geraden Kanten ist das
        Ergebnis leichter wiederholbar.
      </p>

      <h2>Kalibrierung, Einheiten und Genauigkeit</h2>
      <p>
        Kalibrierung bedeutet, dass die angezeigte Skala mit einem realen Maß abgeglichen wird. Die
        <a href="https://www.iso.org/standard/31432.html"> ISO/IEC 7810</a> beschreibt für ID-1 Karten eine
        Breite von 85,60 mm und eine Höhe von 53,98 mm. Genau deshalb ist eine Bankkarte ein nützlicher
        Alltagsstandard. Sie liegt fast immer griffbereit und ist lang genug, um kleine Skalierungsfehler sichtbar
        zu machen.
      </p>
      <p>
        Für Einheiten gilt eine einfache Regel. Das Internationale Einheitensystem beschreibt den Meter als
        Basiseinheit für Länge. Zentimeter und Millimeter sind daraus abgeleitet. Nach
        <a href="https://www.nist.gov/pml/owm/si-units-length"> NIST</a> ist ein Zoll seit 1959 exakt 25,4 mm.
        Daraus folgt: 1 cm sind 10 mm, und 1 cm sind etwa 0,3937 Zoll.
      </p>
      <table>
        <thead>
          <tr>
            <th>Zentimeter</th>
            <th>Millimeter</th>
            <th>Zoll</th>
          </tr>
        </thead>
        <tbody>
          {conversionRows.map(([cm, mm, inch]) => (
            <tr key={cm}>
              <td>{cm}</td>
              <td>{mm}</td>
              <td>{inch}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Wann ist die Methode sinnvoll?</h2>
      <p>
        {topic.focusKeyword} ist sinnvoll, wenn ein schneller Messwert mehr hilft als eine perfekte Laborangabe.
        Typische Beispiele sind Etiketten, Verpackungen, Bastelmaterial, kleine Werkzeuge, Papier, Schmuck und
        Ersatzteile. Außerdem eignet sich die Methode gut für Unterricht und Erklärungen, weil die Skala sofort
        sichtbar ist.
      </p>
      <p>
        Weniger geeignet ist die Methode für sicherheitsrelevante Bauteile, medizinische Anpassungen oder
        Fertigungstoleranzen. Dort zählen reproduzierbare Messbedingungen, definierte Messkraft und geprüfte
        Instrumente. Ein Online-Lineal kann in solchen Fällen eine Vorprüfung liefern, aber nicht die
        Endentscheidung.
      </p>

      <h2>Praktische Checkliste vor der Messung</h2>
      <p>
        Eine gute Messung beginnt vor dem Ablesen. Zuerst sollte das Gerät ruhig liegen. Danach sollte der
        Browserzoom bei 100 Prozent bleiben. Anschließend wird geprüft, ob die Skala an einer bekannten Referenz
        stimmt. Diese Reihenfolge klingt einfach, verhindert aber die meisten Abweichungen. Besonders bei
        Smartphone-Messungen lohnt sich dieser kurze Ablauf, weil kleine Bewegungen den Endpunkt schnell um einen
        Millimeter verschieben können.
      </p>
      <ul>
        <li>Display reinigen, damit Kanten und Skalenstriche klar sichtbar bleiben.</li>
        <li>Objekt flach anlegen und nicht in der Luft halten.</li>
        <li>Nullmarke bewusst wählen und nicht den Displayrand als Startpunkt nutzen.</li>
        <li>Wert zweimal ablesen, einmal in cm und einmal in mm.</li>
        <li>Bei Unsicherheit eine zweite Referenz oder ein physisches Lineal nutzen.</li>
      </ul>
      <p>
        Diese Checkliste ist auch hilfreich, wenn mehrere Personen denselben Gegenstand messen. Alle nutzen dann
        denselben Startpunkt, dieselbe Einheit und dieselbe Referenz. Dadurch werden Ergebnisse besser
        vergleichbar. Genau das ist bei kleinen Objekten wichtig, weil schon ein leicht anderer Blickwinkel den
        Messwert verändern kann.
      </p>

      <h2>Beispiel: vom schnellen Check zum belastbaren Wert</h2>
      <p>
        Ein typischer Ablauf beginnt mit einer einfachen Frage: Passt das Objekt in einen bestimmten Bereich?
        Dafür reicht oft ein schneller Check mit {topic.focusKeyword}. Wenn der Messwert weit von der Grenze
        entfernt ist, kann die Entscheidung sofort fallen. Liegt der Wert jedoch direkt an der Grenze, sollte die
        Messung wiederholt werden. Danach wird mit einer Bankkarte, einem gedruckten Lineal oder einem Messschieber
        kontrolliert.
      </p>
      <p>
        Dieses Vorgehen spart Zeit, ohne Genauigkeit vorzutäuschen. Das Online-Lineal übernimmt die schnelle
        Orientierung. Die Referenzmessung übernimmt die Absicherung. Für Schule, Büro, Versand, Basteln und viele
        Haushaltsmessungen reicht die erste Stufe oft aus. Für Ersatzteile, Schmuckgrößen oder Schrauben sollte
        die zweite Stufe folgen, weil kleine Unterschiede dort stärker ins Gewicht fallen.
      </p>

      <h2>Entscheidungstabelle für {topic.focusKeyword}</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Empfohlene Methode</th>
            <th>Warum das passt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Schneller Größenvergleich</td>
            <td>Online-Lineal nach kurzer Kalibrierung</td>
            <td>Schnell, kostenlos und ohne Installation.</td>
          </tr>
          <tr>
            <td>Wert liegt nah an einer Grenze</td>
            <td>Online messen und mit Referenz wiederholen</td>
            <td>Zwei Messungen reduzieren Ablesefehler.</td>
          </tr>
          <tr>
            <td>Technisches Ersatzteil</td>
            <td>Messschieber oder geprüftes physisches Werkzeug</td>
            <td>Durchmesser, Tiefe und Gewinde brauchen mehr Präzision.</td>
          </tr>
          <tr>
            <td>Unterricht oder Erklärung</td>
            <td>Online-Lineal plus Umrechnungstabelle</td>
            <td>Skala, cm, mm und Zoll werden direkt sichtbar.</td>
          </tr>
        </tbody>
      </table>

      <h2>Interne Orientierung: passende Hilfen</h2>
      <p>
        Wer direkt messen möchte, startet am besten mit dem
        <a href="/"> Lineal online in Originalgröße</a>. Für längere Skalen hilft der Artikel
        <a href="/blog/lineal-online-20-cm"> Lineal online 20 cm</a>. Wenn die Skala nicht stimmt, erklärt
        <a href="/blog/online-lineal-kalibrieren"> Online-Lineal kalibrieren</a> den sauberen Abgleich. Für
        Umrechnungen zwischen kleinen Einheiten ist
        <a href="/blog/cm-in-mm"> cm in mm</a> die beste Ergänzung.
      </p>
      <p>
        Diese internen Wege sind bewusst nah am Messprozess aufgebaut. Erst kommt die Skala, dann die Kalibrierung,
        danach die Einheit. So bleibt der Ablauf klar und Nutzer verlieren sich nicht in theoretischen Details.
      </p>

      <h2>Häufige Fehler bei {topic.focusKeyword}</h2>
      <ul>
        {topic.mistakes.map((mistake) => (
          <li key={mistake}>{mistake}</li>
        ))}
        <li>Der Messwert wird zu stark gerundet, obwohl Millimeter sichtbar sind.</li>
        <li>Das Ergebnis wird nicht mit einer zweiten Referenz geprüft.</li>
      </ul>
      <p>
        Die meisten Fehler entstehen nicht durch das Online-Lineal selbst, sondern durch die Messsituation. Ein
        schräges Objekt, ein veränderter Zoom oder eine unklare Nullmarke reichen aus, um den Wert zu
        verschieben. Deshalb lohnt sich vor jeder wichtigen Messung ein kurzer Kontrollblick auf die Referenz.
      </p>

      <h2>Quellen und Standards</h2>
      <p>
        Für die fachliche Einordnung stützt sich dieser Ratgeber auf etablierte Normen und Metrologiequellen.
        Die <a href="https://www.bipm.org/en/publications/si-brochure">BIPM SI-Broschüre</a> ist die zentrale
        Referenz für SI-Einheiten. NIST erklärt Längeneinheiten und den exakten Zollwert. ISO/IEC 7810 ist
        hilfreich für die Bankkarte als Referenz. Je nach Anwendung sind auch ISO 261 für metrische Schrauben
        und ISO 8653 für Ringgrößen relevant.
      </p>
      <ul>
        {selectedSources.map((source) => (
          <li key={source.href}>
            <a href={source.href}>{source.label}</a>: {source.note}
          </li>
        ))}
      </ul>

      <h2>FAQs zu {topic.focusKeyword}</h2>
      {topic.faqs.map((faq) => (
        <React.Fragment key={faq.q}>
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </React.Fragment>
      ))}

      <h2>Fazit zu {topic.focusKeyword}</h2>
      <p>
        {topic.focusKeyword} ist eine einfache, schnelle und nützliche Messmethode, wenn sie bewusst eingesetzt
        wird. Der wichtigste Erfolgsfaktor ist die Kalibrierung. Danach helfen klare Nullmarke, gerader Blick und
        passende Einheit. Für Alltag, Schule, Basteln und Vorabkontrollen ist das mehr als genug. Für
        technische Grenzwerte bleibt ein physisches Präzisionswerkzeug die bessere Wahl.
      </p>
    </article>
  );
};

export const measurementArticleLinks = topics.map((topic) => ({
  url: `/blog/${topic.slug}`,
  title: topic.title.replace(/:.*$/, ''),
  keywords: [topic.focusKeyword.toLowerCase(), topic.category.toLowerCase(), 'lineal online'],
}));

export const measurementBlogPosts: BlogPostData[] = topics.map((topic, index) => ({
  slug: topic.slug,
  title: topic.title,
  metaDescription: topic.metaDescription,
  keywords: [
    topic.focusKeyword,
    'lineal online',
    'online lineal',
    'maßband online',
    'cm',
    'mm',
    'zoll',
  ].join(', '),
  publishedAt: '2026-07-28',
  heroImage: heroImages[index % heroImages.length],
  heroAlt: topic.imageAlt,
  ogTitle: topic.ogTitle,
  ogDescription: topic.ogDescription,
  category: topic.category,
  summary: topic.summary,
  skipBlogExtras: true,
  content: <ArticleShell topic={topic} />,
}));
