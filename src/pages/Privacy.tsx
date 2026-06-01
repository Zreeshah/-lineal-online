
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  const { t } = useLanguage();
  
  const content = {
    title: "Polityka prywatności",
    intro: "Linijka-Online.pl prowadzi stronę internetową https://linijka-online.pl. Ta strona informuje o naszych zasadach dotyczących gromadzenia, wykorzystywania i ujawniania danych osobowych podczas korzystania z naszej Usługi.",
    intro2: "Wykorzystujemy Twoje dane do świadczenia i ulepszania Usługi. Korzystając z Usługi, wyrażasz zgodę na gromadzenie i wykorzystywanie informacji zgodnie z tą polityką.",
    collection: "Gromadzenie i wykorzystywanie informacji",
    collectionDetails: "Gromadzimy różne rodzaje informacji w różnych celach, aby świadczyć i ulepszać naszą Usługę.",
    dataTypes: "Rodzaje gromadzonych danych",
    personalData: "Dane osobowe",
    personalDataDetails: "Podczas korzystania z naszej Usługi możemy poprosić o podanie pewnych danych osobowych.",
    personalDataItems: ["Adres e-mail", "Pliki cookie i dane o użytkowaniu"],
    usageData: "Dane o użytkowaniu",
    usageDataDetails: "Możemy również gromadzić informacje o sposobie dostępu i korzystania z Usługi.",
    usageDataItems: ["Adres IP", "Typ i wersję przeglądarki", "Odwiedzane strony", "Data i godzina wizyty"],
    cookies: "Dane śledzenia i pliki cookie",
    cookiesDetails: "Używamy plików cookie i podobnych technologii do śledzenia aktywności w naszej Usłudze.",
    cookiesExamples: "Przykłady plików cookie:",
    cookiesItems: ["Pliki cookie sesji", "Pliki cookie preferencji", "Pliki cookie bezpieczeństwa"],
    usage: "Wykorzystanie danych",
    usageDetails: "Linijka-Online.pl wykorzystuje zebrane dane do:",
    usageItems: ["Świadczenia i utrzymania Usługi", "Powiadamiania o zmianach", "Zapewnienia obsługi klienta"],
    transfer: "Transfer danych",
    transferDetails: "Twoje dane mogą być przekazywane i przechowywane w systemach poza Twoim regionem.",
    disclosure: "Ujawnianie danych",
    legalRequirements: "Wymogi prawne",
    legalDetails: "Linijka-Online.pl może ujawniać Dane Osobowe w celu spełnienia zobowiązań prawnych.",
    legalItems: ["Spełnienia zobowiązań prawnych", "Ochrony własności", "Ochrony bezpieczeństwa użytkowników"],
    security: "Bezpieczeństwo danych",
    securityDetails: "Bezpieczeństwo jest dla nas ważne. Staramy się stosować odpowiednie środki ochrony Twoich danych.",
    providers: "Dostawcy usług",
    providersDetails: "Możemy zatrudniać strony trzecie do ułatwienia świadczenia Usługi.",
    providersItems: ["Ułatwienia świadczenia Usługi", "Przeprowadzania analiz"],
    providersNote: "Te strony trzecie mają dostęp do Danych Osobowych wyłącznie w celu wykonania tych zadań.",
    links: "Linki do innych stron",
    linksDetails: "Nasza Usługa może zawierać linki zewnętrzne. Nie ponosimy odpowiedzialności za politykę prywatności stron zewnętrznych.",
    ads: "Reklamy",
    adsDetails: "Nasza strona może wyświetlać reklamy stron trzecich.",
    children: "Prywatność dzieci",
    childrenDetails: "Nasza Usługa nie jest skierowana do osób poniżej 18 roku życia.",
    changes: "Zmiany w Polityce Prywatności",
    changesDetails: "Możemy aktualizować tę politykę. Zostaniesz powiadomiony przed wejściem zmian w życie.",
    contact: "Skontaktuj się z nami",
    contactDetails: "Jeśli masz pytania: Email: info@linijka-online.pl"
  };
  
  return (
    <>
      <Helmet>
        <title>{content.title} - Linijka-Online.pl</title>
        <meta name="description" content={content.intro} />
        <html lang="pl" />
        <link rel="canonical" href="https://linijka-online.pl/privacy" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-ruler-primary">{content.title}</h1>
            <p className="mb-4">{content.intro}</p>
            <p className="mb-6">{content.intro2}</p>
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">{content.collection}</h2>
            <p className="mb-6">{content.collectionDetails}</p>
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">{content.security}</h2>
            <p className="mb-6">{content.securityDetails}</p>
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">{content.contact}</h2>
            <p>{content.contactDetails}</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
