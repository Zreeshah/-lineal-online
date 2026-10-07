import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

// All UI strings in German for lineal.onl
const translations = {
  de: {
    title: 'Lineal online in Originalgröße – kostenlos messen',
    subtitle: 'Digitales Lineal und Maßband online mit präziser Kalibrierung zum Messen echter Objekte auf dem Bildschirm',
    calibrationTitle: 'Kalibrierung',
    screenSize: 'Bildschirmgröße',
    inches: 'Zoll',
    creditCard: 'Kreditkarte',
    manual: 'Manuell',
    unitTitle: 'Einheiten',
    cm: 'Zentimeter',
    mm: 'Millimeter',
    inch: 'Zoll',
    orientation: 'Ausrichtung',
    horizontal: 'Horizontal',
    vertical: 'Vertikal',
    printRuler: 'Lineal drucken',
    howToUse: 'So benutzen Sie das Online-Lineal',
    whyPerfect: 'Worauf es bei der Bildschirmmessung ankommt',
    faq: 'Häufig gestellte Fragen',
    adjustUp: 'Nach oben anpassen',
    adjustDown: 'Nach unten anpassen',
    dragInfo: 'Ziehen, um das Lineal zu verschieben',
    calibrationInstructions: 'Legen Sie einen Gegenstand bekannter Größe an das Lineal',
    creditCardSize: 'Eine Standard-Kreditkarte misst 85,6 mm x 53,98 mm',
    howToUseStep1: '1. Kalibrieren Sie das Online-Lineal mit einer der verfügbaren Methoden',
    howToUseStep2: '2. Wählen Sie Ihre bevorzugte Maßeinheit (cm, mm oder Zoll)',
    howToUseStep3: '3. Ändern Sie die Ausrichtung des digitalen Lineals nach Bedarf',
    howToUseStep4: '4. Bewegen Sie das Lineal in Originalgröße per Drag & Drop über den Bildschirm',
    whyPerfectItem1: 'Referenzabgleich: Die Skala wird an den verwendeten Bildschirm angepasst',
    whyPerfectItem2: 'Gerätewechsel: Auf jedem neuen Display ist eine eigene Kontrolle nötig',
    whyPerfectItem3: 'Ablesung: Objektkante, Nullmarke und Blickwinkel müssen übereinstimmen',
    whyPerfectItem4: 'Einheiten: Zentimeter, Millimeter und Zoll lassen sich direkt vergleichen',
    whyPerfectItem5: 'Grenzen: Für enge Toleranzen ist ein physisches Präzisionswerkzeug geeigneter',
    faqQuestion1: 'Wie kalibriere ich das Lineal online?',
    faqAnswer1: 'Sie können das digitale Lineal kalibrieren, indem Sie Ihre Bildschirmgröße angeben, eine Kreditkarte als Referenz verwenden oder es manuell an einen Gegenstand bekannter Größe anpassen.',
    faqQuestion2: 'Kann ich dieses Lineal in Originalgröße auf dem Handy verwenden?',
    faqAnswer2: 'Ja. Das Online-Lineal kann auf Smartphones, Tablets und Computern verwendet werden. Kalibrieren Sie es auf jedem Gerät neu, weil Displaygröße und Skalierung unterschiedlich sein können.',
    faqQuestion3: 'Wie genau ist das Online-Lineal?',
    faqAnswer3: 'Nach einer sorgfältigen Kalibrierung eignet es sich für schnelle Alltagsmessungen. Die tatsächliche Abweichung hängt von Bildschirm, Zoom, Skalierung und Ablesung ab. Für enge Toleranzen verwenden Sie einen Messschieber.',
    faqQuestion4: 'Warum stimmt die Skala nach dem Zoomen nicht mehr?',
    faqAnswer4: 'Der Browserzoom verändert die Größe der dargestellten Pixel. Stellen Sie ihn auf 100 Prozent zurück und kalibrieren Sie erneut, bevor Sie weitere Gegenstände messen.',
    faqQuestion5: 'Welche Bankkarte eignet sich für die Kalibrierung?',
    faqAnswer5: 'Verwenden Sie eine Karte im üblichen ID-1-Format mit 85,60 × 53,98 mm. Legen Sie sie nur vorsichtig an den Bildschirm und gleichen Sie die lange Kante mit der Referenzfläche ab.',
    faqQuestion6: 'Bleibt die Kalibrierung auf meinem Gerät gespeichert?',
    faqAnswer6: 'Ja. Die Einstellung wird ausschließlich im lokalen Speicher Ihres Browsers hinterlegt. Nach dem Löschen der Browserdaten, einem Gerätewechsel oder einer Änderung der Anzeigeeinstellungen ist eine neue Kalibrierung nötig.',
    learnMore: 'Mehr erfahren',
    privacy: 'Datenschutz',
    disclaimer: 'Impressum',
    copyright: '© 2026 Lineal Online. Alle Rechte vorbehalten.',
    autoCalibrate: 'Automatisch kalibrieren',
    move: 'Verschieben',
    deviceInfo: 'Geräteinformationen',
    detectedDevice: 'Erkanntes Gerät',
    screenSizeDetected: 'Erkannte Bildschirmgröße',
    diagonal: 'Diagonale',
    screenSizeNote: 'Wenn die erkannte Bildschirmgröße nicht exakt ist, können Sie sie in den Kalibrierungsoptionen manuell anpassen.',
    show: 'Anzeigen',
    hide: 'Ausblenden',
    commonRulerSizes: 'Gängige Linealgrößen',
    smallRulers: 'Kleine Lineale',
    largeRulers: 'Große Lineale',
    rulerOf: 'Lineal',
    rulerDescription: 'Nutzen Sie das Lineal online nach der Kalibrierung für schnelle Größenkontrollen am Bildschirm. Die Skala kann Zentimeter (cm), Millimeter (mm) und Zoll darstellen.',
    moreInfo: 'Mehr über virtuelle Lineale',
    measurementTools: 'Online-Messwerkzeuge',
    contentIntro: 'Ein Bildschirm-Lineal ist eine praktische Ergänzung, wenn kein physisches Messwerkzeug zur Hand ist. Wie verlässlich die Anzeige ist, hängt von Kalibrierung, Zoom, Display-Skalierung und sauberer Ablesung ab.',
    useCase1: 'Grafik- und Webdesign',
    useCase2: 'Messungen für Bastelarbeiten',
    useCase3: 'Bildungsanwendungen',
    useCase4: 'Schnelle Messungen ohne physische Werkzeuge',
    useCase1Description: 'Vergleichen Sie Bildschirmabstände oder kontrollieren Sie eine ungefähre Elementgröße.',
    useCase2Description: 'Prüfen Sie Papier, Etiketten und kleine Bastelteile vor der weiteren Bearbeitung.',
    useCase3Description: 'Zeigen Sie anschaulich, wie Zentimeter und Millimeter auf einer Skala zusammenhängen.',
    useCase4Description: 'Führen Sie eine schnelle Größenkontrolle durch, wenn kein Lineal griffbereit ist.',
    relatedArticles: 'Verwandte Artikel',
    backToHome: 'Zurück zur Startseite',
    publishedOn: 'Veröffentlicht am',
    share: 'Teilen',
    readMore: 'Weiterlesen',
    home: 'Startseite',
    blog: 'Blog',
    more: 'Mehr',
    aboutUs: 'Über uns',
    contact: 'Kontakt',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations.de[key as keyof typeof translations.de] || key;
  };

  return <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
