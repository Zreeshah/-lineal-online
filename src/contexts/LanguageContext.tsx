
import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  pl: {
    title: "Linijka Online w Rzeczywistym Rozmiarze - Precyzyjne Pomiary na Ekranie",
    subtitle: "Cyfrowa linijka i miarka online z precyzyjną kalibracją do mierzenia rzeczywistych przedmiotów na ekranie",
    calibrationTitle: "Kalibracja",
    screenSize: "Rozmiar Ekranu",
    inches: "cale",
    creditCard: "Karta Kredytowa",
    manual: "Ręcznie",
    unitTitle: "Jednostki",
    cm: "Centymetry",
    mm: "Milimetry",
    inch: "Cale",
    orientation: "Orientacja",
    horizontal: "Pozioma",
    vertical: "Pionowa",
    printRuler: "Drukuj Linijkę",
    howToUse: "Jak Używać Linijki Online",
    whyPerfect: "Dlaczego Nasza Linijka w Rzeczywistym Rozmiarze Jest Idealna",
    faq: "Często Zadawane Pytania",
    adjustUp: "Reguluj w górę",
    adjustDown: "Reguluj w dół",
    dragInfo: "Przeciągnij, aby przesunąć linijkę",
    calibrationInstructions: "Dopasuj przedmiot o znanym rozmiarze do linijki",
    creditCardSize: "Standardowa karta kredytowa ma wymiary 85,6mm x 53,98mm",
    howToUseStep1: "1. Skalibruj linijkę online używając jednej z dostępnych metod",
    howToUseStep2: "2. Wybierz preferowane jednostki miary (cm, mm lub cale)",
    howToUseStep3: "3. Zmień orientację cyfrowej linijki według potrzeb",
    howToUseStep4: "4. Przesuń linijkę w rzeczywistym rozmiarze przeciągając ją po ekranie",
    whyPerfectItem1: "Precyzja: Linijka online jest skalibrowana dla Twojego konkretnego ekranu",
    whyPerfectItem2: "Wszechstronność: Miarka online działa na każdym urządzeniu",
    whyPerfectItem3: "Łatwość: Intuicyjny interfejs i proste sterowanie wirtualną linijką",
    faqQuestion1: "Jak skalibrować linijkę online?",
    faqAnswer1: "Możesz skalibrować cyfrową linijkę podając rozmiar ekranu, używając karty kredytowej jako odniesienia lub ręcznie dopasowując do przedmiotu o znanym rozmiarze.",
    faqQuestion2: "Czy mogę używać tej linijki w rzeczywistym rozmiarze na telefonie?",
    faqAnswer2: "Tak, nasza linijka online działa doskonale na telefonach, tabletach i komputerach.",
    faqQuestion3: "Jak dokładna jest linijka online?",
    faqAnswer3: "Nasza wirtualna linijka może być bardzo dokładna przy prawidłowej kalibracji, ale końcowa precyzja zależy od rozdzielczości ekranu i prawidłowej kalibracji.",
    learnMore: "Dowiedz się więcej",
    privacy: "Polityka Prywatności",
    disclaimer: "Zastrzeżenia Prawne",
    copyright: "© 2024 Linijka Online. Wszystkie prawa zastrzeżone.",
    autoCalibrate: "Automatyczna Kalibracja",
    move: "Przesuń",
    deviceInfo: "Informacje o urządzeniu",
    detectedDevice: "Wykryte urządzenie",
    screenSizeDetected: "Wykryty rozmiar ekranu",
    diagonal: "przekątna",
    screenSizeNote: "Jeśli wykryty rozmiar ekranu nie jest dokładny, możesz go ręcznie dostosować w opcjach kalibracji.",
    show: "Pokaż",
    hide: "Ukryj",
    commonRulerSizes: "Najczęstsze Rozmiary Linijek",
    smallRulers: "Małe linijki",
    largeRulers: "Duże linijki",
    rulerOf: "Linijka",
    rulerDescription: "Użyj naszej linijki online w rzeczywistym rozmiarze do precyzyjnego mierzenia przedmiotów na ekranie. Cyfrowa linijka i miarka online pozwala wykonywać pomiary w centymetrach (cm), milimetrach (mm) i calach.",
    moreInfo: "Więcej informacji o wirtualnych linijkach",
    measurementTools: "Narzędzia pomiarowe online",
    contentIntro: "Linijka online w rzeczywistym rozmiarze to niezbędne narzędzie do wykonywania precyzyjnych pomiarów na ekranie. Niezależnie czy potrzebujesz mierzyć w centymetrach, milimetrach czy calach, nasza cyfrowa linijka oferuje praktyczne rozwiązanie.",
    useCase1: "Projektowanie graficzne i webowe",
    useCase2: "Pomiary do prac ręcznych",
    useCase3: "Zastosowanie edukacyjne",
    useCase4: "Szybkie pomiary bez fizycznych narzędzi",
    useCase1Description: "Cyfrowa linijka idealna dla projektantów potrzebujących precyzyjnego mierzenia elementów wizualnych.",
    useCase2Description: "Miarka online idealna do dokładnych pomiarów w projektach rękodzielniczych.",
    useCase3Description: "Linijka w rzeczywistym rozmiarze idealna do nauki pomiarów dla uczniów w sposób interaktywny.",
    useCase4Description: "Linijka online cm pozwalająca na precyzyjne pomiary bez potrzeby fizycznych narzędzi."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations.pl[key as keyof typeof translations.pl] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
