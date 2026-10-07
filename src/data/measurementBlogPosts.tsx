import React from 'react';
import type { BlogPostData } from './blogPosts';
import { retiredBlogPostSlugs } from './blogRouting';

type Topic = {
  kind?: 'measurement' | 'conversion' | 'comparison';
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
  '/lovable-uploads/online-lineal-messen.jpg',
  '/lovable-uploads/digitales-lineal.jpg',
  '/lovable-uploads/381e2e34-ef77-4b15-a19c-117866a61d42.jpg',
  '/lovable-uploads/79ba06b7-f526-4c13-8eda-7f0f2ac9be8f.jpg',
  '/lovable-uploads/3d520faf-c186-4486-92e5-9bcbb32657b4.jpg',
  '/lovable-uploads/6e30be3b-fb3c-45ac-9368-d0c966ceb463.jpg',
];

const defaultRelated = [
  { to: '/', label: 'Lineal online in Originalgröße' },
  { to: '/blog/bildschirm-kalibrieren', label: 'Bildschirm kalibrieren' },
  { to: '/blog/ist-online-lineal-genau', label: 'Ist ein Online-Lineal genau?' },
  { to: '/blog/cm-in-mm', label: 'cm in mm umrechnen' },
];

const buildFaqs = (focusKeyword: string, useCase: string): Topic['faqs'] => [
  {
    q: `Was ist mit dem Suchbegriff „${focusKeyword}“ gemeint?`,
    a: `Das Thema „${focusKeyword}“ bezeichnet hier eine browserbasierte Mess- oder Umrechnungshilfe. Welche Schritte nötig sind, hängt davon ab, ob eine reale Länge abgelesen oder nur ein Zahlenwert umgerechnet wird.`,
  },
  {
    q: `Wann ist die Methode beim Thema „${focusKeyword}“ sinnvoll?`,
    a: `Die beschriebene Methode ist vor allem für ${useCase} sinnvoll. Liegt ein Wert nahe an einer wichtigen Grenze, sollte er mit einem geeigneten physischen Werkzeug kontrolliert werden.`,
  },
  {
    q: `Ist beim Thema „${focusKeyword}“ eine Kalibrierung nötig?`,
    a: `Eine beim Thema „${focusKeyword}“ verwendete Bildschirmskala muss kalibriert werden, weil Pixel keine feste physische Größe besitzen. Für eine reine Einheitenumrechnung ist dagegen kein Bildschirmabgleich nötig.`,
  },
  {
    q: `Welche Referenz passt zum Thema „${focusKeyword}“?`,
    a: `Beim Thema „${focusKeyword}“ kann für eine physische Bildschirmmessung eine Bankkarte im ID-1-Format mit 85,60 mm Breite verwendet werden. Eine zweite bekannte Länge hilft, die Skalierung zu kontrollieren.`,
  },
  {
    q: `Lässt sich die Hilfe zu „${focusKeyword}“ ohne App nutzen?`,
    a: `Ja. Die für „${focusKeyword}“ beschriebenen Funktionen laufen im mobilen oder Desktop-Browser. Vor einer physischen Messung sollte die Skala trotzdem auf dem jeweiligen Gerät geprüft werden.`,
  },
  {
    q: `Welche Grenzen gelten beim Thema „${focusKeyword}“?`,
    a: `Beim Thema „${focusKeyword}“ ersetzt die Methode kein geprüftes Messgerät bei Fertigungstoleranzen, medizinischen Anpassungen oder sicherheitsrelevanten Entscheidungen. Runde oder schwer zugängliche Kanten erhöhen die Unsicherheit.`,
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
    steps: ['Startseite öffnen.', 'Gewünschte Einheit wählen.', 'Bildschirm kalibrieren.', 'Objekt anlegen.', 'Messwert notieren.'],
    mistakes: ['Online-Lineal ohne Kalibrierung verwenden.', 'Browserzoom verändern.', 'Display schräg betrachten.'],
    faqs: buildFaqs('Lineal online', 'Browsermessungen auf Handy, Tablet und PC'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Lineal online 20 cm',
    slug: 'lineal-online-20-cm',
    title: 'Lineal online 20 cm richtig anzeigen',
    metaDescription: 'Lineal online 20 cm anzeigen und richtig kalibrieren. Tipps für Handy, Tablet und Desktop.',
    ogTitle: 'Lineal online 20 cm anzeigen',
    ogDescription: 'Wann 20 cm auf dem Bildschirm funktionieren und wie die Skala genau bleibt.',
    imageAlt: 'Lineal online 20 cm in Originalgröße',
    category: 'Online-Lineal',
    summary: 'Ein 20-cm-Lineal online funktioniert besonders gut auf Tablets, Laptops und breiteren Smartphone-Ansichten.',
    intent: 'Nutzer wollen eine 20-cm-Skala online anzeigen.',
    bestUse: 'Notizbücher, kleine Pakete, Bastelmaterial, Stoffstücke und Tablet-Messungen',
    example: 'Auf einem Tablet kann eine 20-cm-Skala reichen, um eine Kartenhülle oder ein Heft direkt am Bildschirm zu prüfen.',
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
    title: 'Ist ein Online-Lineal genau?',
    metaDescription: 'Ist ein Online-Lineal genau? Erfahren Sie, wann es reicht, wann nicht und wie Kalibrierung hilft.',
    ogTitle: 'Ist ein Online-Lineal genau?',
    ogDescription: 'Eine ehrliche Einordnung zur Genauigkeit von Browser-Linealen.',
    imageAlt: 'Ist ein Online-Lineal genau bei Messungen in mm',
    category: 'Genauigkeit',
    summary: 'Ein Online-Lineal kann genau genug sein, wenn Bildschirm, Zoom und Referenz sauber eingestellt sind.',
    intent: 'Nutzer wollen die Verlässlichkeit digitaler Lineale einschätzen.',
    bestUse: 'Alltagsmessungen, Vorabkontrollen, Schule, Basteln und nicht-kritische Vergleiche',
    example: 'Für eine 45-mm-Schraube reicht ein kalibriertes Online-Lineal oft aus. Für ein Passungsteil mit Toleranzen nicht.',
    calibrationTip: 'Nach jeder Änderung von Zoom, Displaymodus oder Gerät sollte erneut geprüft werden.',
    steps: ['Kalibrierung mit Referenz durchführen.', '10 cm Kontrollstrecke prüfen.', 'Objekt gerade anlegen.', 'Messwert zweimal ablesen.', 'Bei kritischen Werten physisch nachmessen.'],
    mistakes: ['Genauigkeit mit Werkstattpräzision verwechseln.', 'Displaykrümmung ignorieren.', 'Sehr kleine Innenmaße am Bildschirm messen.'],
    faqs: buildFaqs('Ist ein Online-Lineal genau', 'Alltagsmessungen mit realistischem Genauigkeitsanspruch'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Maßband online in cm',
    slug: 'massband-online-cm',
    title: 'Maßband online in cm richtig verwenden',
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
    title: 'Zentimeter online messen und umrechnen',
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
    kind: 'conversion',
    focusKeyword: 'cm in mm',
    slug: 'cm-in-mm',
    title: 'cm in mm: Formel, Tabelle und Beispiele',
    metaDescription: 'cm in mm umrechnen: Formel, Tabelle, Beispiele und Online-Lineal für Zentimeter und Millimeter.',
    ogTitle: 'cm in mm umrechnen',
    ogDescription: 'Die einfache Regel: Zentimeter mal 10 ergibt Millimeter.',
    imageAlt: 'cm in mm Umrechnung mit Lineal',
    category: 'Umrechnung',
    summary: 'cm in mm ist eine einfache Multiplikation: 1 cm entspricht 10 mm.',
    intent: 'Nutzer wollen Zentimeter in Millimeter umrechnen.',
    bestUse: 'Schule, technische Zeichnungen, Basteln, Schraubenlängen und kleine Objektmaße',
    example: 'Eine Länge von 4,5 cm entspricht 45 mm. Auf dem Online-Lineal sind das vier volle Zentimeter plus fünf Millimeter.',
    calibrationTip: 'Für die reine Umrechnung ist keine Bildschirmkalibrierung nötig. Nur ein zuvor gemessener Ausgangswert hängt vom verwendeten Messwerkzeug ab.',
    steps: ['Zentimeterwert notieren.', 'Mit 10 multiplizieren.', 'Ergebnis in mm schreiben.', 'Bei Dezimalwerten das Komma mitnehmen.', 'Das Ergebnis durch Rückrechnung prüfen.'],
    mistakes: ['Durch 10 teilen statt multiplizieren.', 'Kommafehler bei 0,5 cm.', 'cm und mm in Tabellen vermischen.'],
    faqs: [
      { q: 'Wie rechnet man cm in mm um?', a: 'Multiplizieren Sie den Zentimeterwert mit 10. Aus 4,5 cm werden damit 45 mm.' },
      { q: 'Wie viele Millimeter sind 1 cm?', a: 'Ein Zentimeter entspricht genau 10 Millimetern.' },
      { q: 'Wie werden Dezimalwerte umgerechnet?', a: 'Die Rechenregel bleibt gleich: 0,8 cm × 10 = 8 mm und 12,35 cm × 10 = 123,5 mm.' },
      { q: 'Braucht die Umrechnung eine Kalibrierung?', a: 'Nein. Die mathematische Umrechnung ist unabhängig vom Bildschirm. Eine Kalibrierung ist nur nötig, wenn eine reale Länge am Display gemessen wird.' },
    ],
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
    bestUse: 'Bildschirmgrößen, Werkzeugangaben, Versandmaße, DIY und internationale Produktdaten',
    example: '20 cm entsprechen rund 7,87 Zoll. Das hilft, wenn Produktangaben in Zoll und eigene Messwerte in cm vorliegen.',
    calibrationTip: 'Bei Zollwerten lohnt sich ein zweiter Blick, weil Dezimalzoll und Bruchzoll unterschiedlich notiert werden.',
    steps: ['cm-Wert notieren.', 'Durch 2,54 teilen.', 'Ergebnis runden.', 'Zoll-Einheit am Online-Lineal prüfen.', 'Bei Bedarf in mm zurückrechnen.'],
    mistakes: ['2,54 multiplizieren statt teilen.', 'Zollzeichen mit Minutenzeichen verwechseln.', 'Zu stark runden.'],
    faqs: buildFaqs('cm in Zoll', 'Umrechnungen zwischen metrischen und angloamerikanischen Angaben'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Bildschirm in Zoll messen',
    slug: 'bildschirm-zoll-messen',
    title: 'Bildschirm in Zoll messen',
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
    related: [
      { to: '/bildschirmgroesse-rechner', label: 'Bildschirmgröße mit Seitenverhältnis berechnen' },
      { to: '/zoll-in-cm-rechner', label: 'Zoll, Zentimeter und Millimeter umrechnen' },
      ...defaultRelated.slice(0, 2),
    ],
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
    bestUse: 'Kalibrierung, Größenvergleich, Wallets, Kartenhalter und Online-Lineal-Prüfung',
    example: 'Wer eine Karte an die Skala legt und 85,60 mm Breite trifft, hat einen starken Hinweis auf eine passende Lineal-Skalierung.',
    calibrationTip: 'Die lange Kante ist einfacher abzulesen als die kurze Kante.',
    steps: ['Bankkarte bereitlegen.', 'Lange Kante wählen.', 'Millimeter-Skala anzeigen.', '85,60 mm anpassen.', 'Mit 10 cm Strecke gegenprüfen.'],
    mistakes: ['Abgenutzte oder gebogene Karte nutzen.', 'Kurze und lange Seite verwechseln.', 'Kartenhülle mitmessen.'],
    faqs: buildFaqs('Bankkartengröße', 'Kalibrierung und Referenzmessungen'),
    related: defaultRelated,
  },
  {
    focusKeyword: 'Ring mit Lineal messen',
    slug: 'ring-lineal-messen',
    title: 'Ring mit Lineal messen: Größe richtig bestimmen',
    metaDescription: 'Ring mit Lineal messen: Innendurchmesser, mm-Wert, Ringgröße und Grenzen der Methode einfach erklärt.',
    ogTitle: 'Ring mit Lineal messen',
    ogDescription: 'So messen Sie einen Ring vorsichtig mit Lineal oder Online-Lineal.',
    imageAlt: 'Ring mit Lineal messen und Innendurchmesser ablesen',
    category: 'Praxis',
    summary: 'Ein Ring kann mit einem Lineal grob über den Innendurchmesser gemessen werden; für Schmuckkauf ist ein Ringmaß genauer.',
    intent: 'Nutzer wollen die Ringgröße mit einem Lineal bestimmen.',
    bestUse: 'grobe Ringgrößen-Prüfung, vorhandene Ringe, Geschenkvorbereitung und Schmuckvergleich',
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
    title: 'Schraube mit Lineal messen: Länge bestimmen',
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
    kind: 'comparison',
    focusKeyword: 'Lineal-App vs Online-Lineal',
    slug: 'lineal-app-vs-online',
    title: 'Lineal-App vs. Online-Lineal',
    metaDescription: 'Lineal-App vs Online-Lineal: Vorteile, Datenschutz, Genauigkeit, Installation und beste Einsatzfälle.',
    ogTitle: 'Lineal-App vs Online-Lineal',
    ogDescription: 'Welche Lösung passt besser für schnelle Messungen?',
    imageAlt: 'Lineal-App vs Online-Lineal Vergleich',
    category: 'Vergleich',
    summary: 'Eine Lineal-App kann Zusatzfunktionen bieten, während ein Online-Lineal sofort ohne Installation funktioniert.',
    intent: 'Nutzer vergleichen App und Browser-Lösung.',
    bestUse: 'Entscheidung zwischen Installation, Browsermessung, Datenschutz und Zusatzfunktionen',
    example: 'Wer nur eine Karte oder Schraube messen will, ist mit dem Online-Lineal schneller. Wer AR-Funktionen braucht, prüft eine App.',
    calibrationTip: 'Beide Varianten müssen geprüft werden, weil Kamera-AR und Bildschirmskala unterschiedliche Fehlerquellen haben.',
    steps: ['Messziel klären.', 'Datenschutzbedarf prüfen.', 'Online-Lineal für kurze Skalen testen.', 'App nur bei AR-Bedarf installieren.', 'Messwerte mit Referenz vergleichen.'],
    mistakes: ['App automatisch für genauer halten.', 'Berechtigungen nicht prüfen.', 'AR-Messung für Millimeterwerte verwenden.'],
    faqs: [
      { q: 'Was ist schneller einsatzbereit?', a: 'Ein Online-Lineal startet direkt im Browser. Eine App muss zuerst installiert und je nach Funktion eingerichtet werden.' },
      { q: 'Ist eine Lineal-App automatisch genauer?', a: 'Nein. Bildschirmskalen müssen in beiden Varianten kalibriert werden. Kamera- oder AR-Funktionen haben andere Fehlerquellen und sollten mit einer bekannten Länge geprüft werden.' },
      { q: 'Wann lohnt sich eine App?', a: 'Eine App kann sinnvoll sein, wenn Sie häufig offline messen oder Funktionen wie Kamera-AR und gespeicherte Messungen benötigen.' },
      { q: 'Wann reicht ein Online-Lineal?', a: 'Für kurze, gerade Alltagsmessungen ist die Browserlösung oft ausreichend, sofern die Skala auf dem aktuellen Gerät kontrolliert wurde.' },
    ],
    related: defaultRelated,
  },
];

const activeTopics = topics.filter((topic) => !retiredBlogPostSlugs.has(topic.slug));

const conversionRows = [
  ['1 cm', '10 mm', '0,39 Zoll'],
  ['5 cm', '50 mm', '1,97 Zoll'],
  ['10 cm', '100 mm', '3,94 Zoll'],
  ['20 cm', '200 mm', '7,87 Zoll'],
  ['30 cm', '300 mm', '11,81 Zoll'],
];

const articleClassName = `
  prose prose-sm sm:prose lg:prose-lg max-w-none
  prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
  prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-purple-100
  prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-purple-900
  prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-700 prose-a:font-medium hover:prose-a:text-purple-900
  prose-strong:text-gray-900 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-li:marker:text-purple-500
  prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm prose-th:bg-purple-50 prose-th:text-purple-900
`;

// eslint-disable-next-line react-refresh/only-export-components
const ConversionArticleShell = ({ topic }: { topic: Topic }) => (
  <article className={articleClassName}>
    <p className="lead border-l-4 border-purple-400 pl-4 text-lg leading-relaxed text-gray-600 italic sm:text-xl">
      {topic.summary} Die Umrechnung ist mathematisch eindeutig und benötigt weder ein Online-Lineal noch eine
      Kalibrierung.
    </p>

    <h2>Die Formel für Zentimeter und Millimeter</h2>
    <p>
      Ein Zentimeter besteht aus zehn Millimetern. Für die Richtung <strong>cm in mm</strong> wird deshalb mit 10
      multipliziert: <strong>Millimeter = Zentimeter × 10</strong>. In der Gegenrichtung teilen Sie den
      Millimeterwert durch 10.
    </p>
    <p>
      Die Einheiten gehören beide zum metrischen System. Dadurch verschiebt sich beim Umrechnen lediglich das
      Dezimalkomma um eine Stelle. Die Anzahl der Nachkommastellen sagt dabei nichts darüber aus, wie genau der
      ursprüngliche Wert gemessen wurde.
    </p>

    <h2>Schritt für Schritt umrechnen</h2>
    <ol>
      {topic.steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
    <p>
      Ein schneller Gegencheck verhindert Richtungsfehler: Teilen Sie das Ergebnis durch 10. Wenn wieder der
      ursprüngliche Zentimeterwert entsteht, stimmt die Umrechnung.
    </p>

    <h2>Beispiele mit ganzen Zahlen und Dezimalwerten</h2>
    <p>{topic.example}</p>
    <ul>
      <li><strong>8 cm × 10 = 80 mm</strong></li>
      <li><strong>0,8 cm × 10 = 8 mm</strong></li>
      <li><strong>12,35 cm × 10 = 123,5 mm</strong></li>
      <li><strong>250 mm ÷ 10 = 25 cm</strong> als Rückrechnung</li>
    </ul>
    <p>
      Bei 0,8 cm wird aus der führenden Null kein zusätzlicher Zentimeter. Das Ergebnis sind 8 mm, nicht 80 mm.
      Gerade bei Produktmaßen lohnt es sich, Einheit und Dezimalkomma gemeinsam zu notieren.
    </p>

    <h2>Umrechnungstabelle cm in mm</h2>
    <table>
      <thead>
        <tr><th>Zentimeter</th><th>Millimeter</th><th>Zoll, gerundet</th></tr>
      </thead>
      <tbody>
        {conversionRows.map(([cm, mm, inch]) => (
          <tr key={cm}><td>{cm}</td><td>{mm}</td><td>{inch}</td></tr>
        ))}
      </tbody>
    </table>
    <p>
      Die Zollwerte dienen nur als zusätzliche Orientierung. Für beliebige Eingaben können Sie den{' '}
      <a href="/zoll-in-cm-rechner">Zoll-, Zentimeter- und Millimeter-Rechner</a> verwenden.
    </p>

    <h2>Wann braucht man trotzdem ein Lineal?</h2>
    <p>
      {topic.calibrationTip} Wenn ein vorhandener Zentimeterwert lediglich in Millimeter umgeschrieben wird, ist das
      Ergebnis exakt. Wird die Ausgangslänge dagegen erst an einem Bildschirm abgelesen, hängt ihre Verlässlichkeit
      von Kalibrierung, Zoom, Objektkante und Blickwinkel ab.
    </p>
    <p>
      Zum Erfassen einer realen Länge können Sie das <a href="/">Online-Lineal in Originalgröße</a> verwenden. Für
      kleine Bauteile oder enge Toleranzen ist ein Messschieber geeigneter; der Ratgeber zum{' '}
      <a href="/blog/mm-genau-messen">Messen in Millimetern</a> erklärt die Unterschiede.
    </p>

    <h2>Häufige Fehler</h2>
    <ul>
      {topic.mistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}
      <li>Das Einheitenzeichen wird weggelassen und der Zahlenwert dadurch missverständlich.</li>
      <li>Ein gerundeter Messwert wird durch zusätzliche Nachkommastellen scheinbar genauer gemacht.</li>
    </ul>

    <h2>Fragen und Antworten</h2>
    {topic.faqs.map((faq) => (
      <React.Fragment key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></React.Fragment>
    ))}

    <h2>Fazit</h2>
    <p>
      Für <strong>cm in mm</strong> genügt eine feste Regel: Zentimeter mal 10. Schreiben Sie die Einheit zum Wert
      und prüfen Sie Dezimalzahlen kurz durch die Rückrechnung.
    </p>
  </article>
);

// eslint-disable-next-line react-refresh/only-export-components
const ComparisonArticleShell = ({ topic }: { topic: Topic }) => (
  <article className={articleClassName}>
    <p className="lead border-l-4 border-purple-400 pl-4 text-lg leading-relaxed text-gray-600 italic sm:text-xl">
      {topic.summary} Entscheidend sind Messaufgabe, gewünschte Zusatzfunktionen und der Umgang mit Berechtigungen.
    </p>

    <h2>Der Unterschied in einem Satz</h2>
    <p>
      Ein <a href="/">Online-Lineal</a> läuft direkt im Browser und zeigt eine kalibrierbare Skala. Eine Lineal-App
      wird installiert und kann je nach Anbieter zusätzliche Funktionen wie Kamera-AR, Messwertspeicherung oder
      Offline-Nutzung enthalten. Keine der beiden Varianten ist allein durch ihre Form automatisch genauer.
    </p>

    <h2>Lineal-App und Online-Lineal im Vergleich</h2>
    <table>
      <thead><tr><th>Kriterium</th><th>Online-Lineal</th><th>Lineal-App</th></tr></thead>
      <tbody>
        <tr><td>Start</td><td>Direkt im Browser</td><td>Installation erforderlich</td></tr>
        <tr><td>Kurze Bildschirmskala</td><td>Ja, nach Kalibrierung</td><td>Ja, nach Kalibrierung</td></tr>
        <tr><td>Kamera oder AR</td><td>Meist nicht nötig</td><td>Je nach App verfügbar</td></tr>
        <tr><td>Offline-Nutzung</td><td>Nur nach vollständigem Laden möglich</td><td>Je nach App möglich</td></tr>
        <tr><td>Berechtigungen</td><td>Für die Skala keine Kamera nötig</td><td>Bei AR oft Kamera nötig</td></tr>
        <tr><td>Updates</td><td>Webseite liefert aktuelle Version</td><td>Über den App-Store</td></tr>
      </tbody>
    </table>

    <h2>So treffen Sie die passende Wahl</h2>
    <ol>
      {topic.steps.map((step) => <li key={step}>{step}</li>)}
    </ol>
    <p>
      Vergleichen Sie beide Lösungen mit derselben bekannten Länge. Für eine Bildschirmskala eignet sich etwa die
      lange Kante einer Karte im ID-1-Format mit 85,60 mm. Ändern Sie Zoom oder Anzeige-Skalierung danach nicht,
      ohne erneut zu kontrollieren.
    </p>

    <h2>Beispiel aus dem Alltag</h2>
    <p>{topic.example}</p>
    <p>
      Für eine gerade Schraube oder Karte liefert eine kalibrierte Skala meist schneller eine brauchbare
      Vorabkontrolle. Bei einem Tisch, Raum oder unregelmäßigen Objekt kann eine Kamera-App bequemer sein, doch auch
      dort sollte ein wichtiger Messwert mit einem physischen Werkzeug bestätigt werden.
    </p>

    <h2>Genauigkeit fair vergleichen</h2>
    <p>{topic.calibrationTip}</p>
    <p>
      Eine Bildschirmmessung hängt von Pixeldichte, Zoom und sauberem Anlegen ab. Eine AR-Messung hängt zusätzlich
      von Kamera, Abstand, Licht, erkannten Flächen und der Bewegung des Geräts ab. Der Beitrag{' '}
      <a href="/blog/ist-online-lineal-genau">Wie genau ist ein Online-Lineal?</a> ordnet diese Grenzen ein; die{' '}
      <a href="/blog/bildschirm-kalibrieren">Anleitung zur Bildschirmkalibrierung</a> zeigt den Referenzabgleich.
    </p>

    <h2>Datenschutz und Berechtigungen prüfen</h2>
    <p>
      Eine einfache Browserskala benötigt weder Kamera noch Fotobibliothek. Apps mit AR-Funktion brauchen häufig
      Kamerazugriff. Prüfen Sie vor der Installation die Berechtigungen, die Datenschutzerklärung und ob Messdaten
      lokal oder in einem Benutzerkonto gespeichert werden. Das unterscheidet sich von Anbieter zu Anbieter.
    </p>

    <h2>Häufige Fehler</h2>
    <ul>
      {topic.mistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}
      <li>Zusatzfunktionen werden mit höherer Messgenauigkeit gleichgesetzt.</li>
      <li>Ein einzelner Testwert wird ohne zweite Referenz übernommen.</li>
    </ul>

    <h2>Fragen und Antworten</h2>
    {topic.faqs.map((faq) => (
      <React.Fragment key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></React.Fragment>
    ))}

    <h2>Fazit</h2>
    <p>
      Für kurze, gerade Messungen ist ein Online-Lineal meist der schnellere Einstieg. Eine App lohnt sich vor allem
      für benötigte Zusatzfunktionen; wichtige Maße sollten unabhängig von der Variante kontrolliert werden.
    </p>
  </article>
);

// eslint-disable-next-line react-refresh/only-export-components
const MeasurementArticleShell = ({ topic }: { topic: Topic }) => (
  <article className={articleClassName}>
    <p className="lead border-l-4 border-purple-400 pl-4 text-lg leading-relaxed text-gray-600 italic sm:text-xl">
      {topic.summary} Für technische Grenzwerte, medizinische Anwendungen oder sicherheitsrelevante Entscheidungen
      ist ein dafür vorgesehenes physisches Messgerät erforderlich.
    </p>

    <h2>Die Frage hinter dem Suchbegriff</h2>
    <p>{topic.intent} Konkret eignet sich das Thema für {topic.bestUse}.</p>
    <p>
      Beim Thema „{topic.focusKeyword}“ ist wichtig: Bei einer echten Bildschirmmessung muss die sichtbare Skala zuerst zum Gerät passen. Ein Browser kennt die
      reale Breite eines Pixels nicht in jeder Kombination aus Display, Zoom und Betriebssystem-Skalierung. Eine
      reine Umrechnung zwischen cm, mm und Zoll benötigt dagegen keine Kalibrierung, weil sie mit festen Faktoren
      arbeitet.
    </p>
    <p>
      Beim Thema „{topic.focusKeyword}“ gilt deshalb zunächst: Klären Sie, ob eine physische Länge gemessen oder nur eine Einheit
      umgerechnet werden soll. Diese Unterscheidung verhindert, dass ein korrekt berechneter Zahlenwert mit einer
      ungeprüften Bildschirmanzeige verwechselt wird.
    </p>

    <h2>Schritt für Schritt vorgehen</h2>
    <ol>
      {topic.steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
    <p>
      Arbeiten Sie die Schritte für „{topic.focusKeyword}“ in dieser Reihenfolge ab und verändern Sie den Browserzoom danach nicht mehr. Bei
      einer Messung sollte das Gerät ruhig liegen, die Objektkante klar erkennbar sein und der Startpunkt auf der
      Nullmarke liegen. Runde oder weiche Kanten liefern eher einen Näherungswert als eine eindeutig ablesbare Länge.
    </p>

    <h2>Durchgerechnetes oder praktisches Beispiel</h2>
    <p>{topic.example}</p>
    <p>
      Beim Thema „{topic.focusKeyword}“ gilt: Liegt das Ergebnis deutlich innerhalb des erwarteten Bereichs, genügt
      die Kontrolle häufig für eine erste Entscheidung. Liegt es direkt an einer Größen-, Kauf- oder Passgrenze,
      wiederholen Sie die Messung und nutzen Sie eine zweite Referenz. So bleibt die beschriebene Vorgehensweise eine
      Orientierungshilfe und wird nicht mit einer technischen Endprüfung verwechselt.
    </p>

    <h2>Kalibrierung und Einheiten richtig einordnen</h2>
    <p>
      {topic.calibrationTip} Für einen Kartenabgleich beschreibt die{' '}
      <a href="https://www.iso.org/standard/31432.html">ISO/IEC 7810</a> das ID-1-Format mit 85,60 mm Breite und
      53,98 mm Höhe. Verwenden Sie die lange Kante und kontrollieren Sie das Resultat möglichst mit einer zweiten
      bekannten Strecke.
    </p>
    <p>
      Für „{topic.focusKeyword}“ gilt bei den zugehörigen Umrechnungen: 1 cm sind 10 mm. Nach{' '}
      <a href="https://www.nist.gov/pml/owm/si-units-length">NIST</a> entspricht 1 Zoll genau 25,4 mm. Die Rechnung
      kann exakt sein, obwohl ein zuvor abgelesener Messwert nur begrenzt genau war. Runden Sie deshalb passend zum
      verwendeten Werkzeug und nicht passend zur Anzahl der Rechnerstellen.
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

    <h2>Wann reicht die Methode aus?</h2>
    <p>
      Für {topic.bestUse} kann die Methode eine schnelle und nachvollziehbare Antwort liefern. Sie ist besonders
      nützlich, wenn ein ungefährer Größenbereich genügt oder zwei Werte miteinander verglichen werden sollen. Eine
      wiederholte Ablesung zeigt außerdem, ob der Wert stabil bleibt.
    </p>
    <p>
      Beim Thema „{topic.focusKeyword}“ reicht die Methode nicht aus, wenn Bruchteile eines Millimeters über Sicherheit, Funktion oder
      Passung entscheiden. Innenmaße, Gewinde, Tiefe und gekrümmte Flächen lassen sich mit einem Messschieber oder
      einem spezialisierten Werkzeug besser erfassen. Auch ein sauber kalibrierter Bildschirm ist kein geeichtes
      Messgerät.
    </p>

    <h2>Kontrollliste vor dem Ablesen</h2>
    <ul>
      <li>Browserzoom auf 100 Prozent stellen und während der Messung nicht verändern.</li>
      <li>Skala auf demselben Gerät und in derselben Ausrichtung kalibrieren.</li>
      <li>Objekt flach, parallel und ohne schützende Hülle anlegen.</li>
      <li>Nullmarke und tatsächliche Messkante bewusst unterscheiden.</li>
      <li>Ergebnis wiederholen und bei wichtigen Entscheidungen physisch kontrollieren.</li>
    </ul>
    <p>
      Diese Kontrolle ist beim Thema „{topic.focusKeyword}“ wichtiger als zusätzliche Nachkommastellen. Wenn zwei
      Wiederholungen unterschiedliche Ergebnisse liefern, sollte nicht gemittelt werden, bevor die Ursache geklärt
      ist. Häufig sind Zoom, Ausrichtung, eine verrutschte Kante oder eine ungeeignete Referenz verantwortlich.
    </p>

    <h2>Häufige Fehler</h2>
    <ul>
      {topic.mistakes.map((mistake) => (
        <li key={mistake}>{mistake}</li>
      ))}
      <li>Das Resultat wird genauer angegeben, als Skala und Objektkante es erlauben.</li>
      <li>Eine einzelne Messung wird ohne Plausibilitätskontrolle übernommen.</li>
    </ul>

    <h2>Fragen und Antworten</h2>
    {topic.faqs.map((faq) => (
      <React.Fragment key={faq.q}>
        <h3>{faq.q}</h3>
        <p>{faq.a}</p>
      </React.Fragment>
    ))}

    <h2>Fazit</h2>
    <p>
      Die Informationen zu „{topic.focusKeyword}“ sind dann hilfreich, wenn Methode und Anspruch zusammenpassen. Nutzen Sie die
      für dieses Thema beschriebenen Schritte, prüfen Sie die Skala bei physischen Messungen und wechseln Sie bei engen
      Toleranzen zu einem geeigneten Messgerät.
    </p>
  </article>
);

// eslint-disable-next-line react-refresh/only-export-components
const ArticleShell = ({ topic }: { topic: Topic }) => {
  if (topic.kind === 'conversion') return <ConversionArticleShell topic={topic} />;
  if (topic.kind === 'comparison') return <ComparisonArticleShell topic={topic} />;
  return <MeasurementArticleShell topic={topic} />;
};

export const measurementArticleLinks = activeTopics.map((topic) => ({
  url: `/blog/${topic.slug}`,
  title: topic.title.replace(/:.*$/, ''),
  keywords: [topic.focusKeyword.toLowerCase(), topic.category.toLowerCase(), 'lineal online'],
}));

export const measurementBlogPosts: BlogPostData[] = activeTopics.map((topic, index) => ({
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
