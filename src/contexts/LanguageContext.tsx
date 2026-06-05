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
    whyPerfect: 'Warum unser Lineal in Originalgröße perfekt ist',
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
    whyPerfectItem1: 'Präzision: Das Online-Lineal wird genau auf Ihren Bildschirm kalibriert',
    whyPerfectItem2: 'Vielseitig: Das Maßband online funktioniert auf jedem Gerät',
    whyPerfectItem3: 'Einfach: Intuitive Oberfläche und einfache Bedienung des virtuellen Lineals',
    whyPerfectItem4: 'Digitales Lineal mit mehreren Einheiten (cm, mm, Zoll)',
    whyPerfectItem5: 'Lineal in Originalgröße mit Kalibrierung für exakte Messungen',
    faqQuestion1: 'Wie kalibriere ich das Lineal online?',
    faqAnswer1: 'Sie können das digitale Lineal kalibrieren, indem Sie Ihre Bildschirmgröße angeben, eine Kreditkarte als Referenz verwenden oder es manuell an einen Gegenstand bekannter Größe anpassen.',
    faqQuestion2: 'Kann ich dieses Lineal in Originalgröße auf dem Handy verwenden?',
    faqAnswer2: 'Ja, unser Lineal online Handy funktioniert hervorragend auf Smartphones, Tablets und Computern.',
    faqQuestion3: 'Wie genau ist das Online-Lineal?',
    faqAnswer3: 'Bei korrekter Kalibrierung ist unser virtuelles Lineal sehr genau – die Endpräzision hängt von Bildschirmauflösung und sauberer Kalibrierung ab.',
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
    rulerDescription: 'Nutzen Sie unser Lineal online in Originalgröße, um Objekte präzise auf dem Bildschirm zu messen. Das digitale Lineal und Maßband online erlaubt Messungen in Zentimetern (cm), Millimetern (mm) und Zoll.',
    moreInfo: 'Mehr über virtuelle Lineale',
    measurementTools: 'Online-Messwerkzeuge',
    contentIntro: 'Ein Lineal online in Originalgröße ist ein unverzichtbares Werkzeug für präzise Messungen auf dem Bildschirm. Ob Sie in Zentimetern, Millimetern oder Zoll messen möchten – unser digitales Lineal liefert eine praktische Lösung.',
    useCase1: 'Grafik- und Webdesign',
    useCase2: 'Messungen für Bastelarbeiten',
    useCase3: 'Bildungsanwendungen',
    useCase4: 'Schnelle Messungen ohne physische Werkzeuge',
    useCase1Description: 'Das digitale Lineal ist ideal für Designer, die visuelle Elemente präzise vermessen.',
    useCase2Description: 'Das Maßband online ist perfekt für exakte Messungen bei DIY- und Handarbeitsprojekten.',
    useCase3Description: 'Das Lineal in Originalgröße eignet sich hervorragend, um Schülern das Messen interaktiv beizubringen.',
    useCase4Description: 'Lineal online cm – präzise Messungen ohne physische Werkzeuge, jederzeit verfügbar.',
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
