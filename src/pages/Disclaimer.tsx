
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  const { t } = useLanguage();
  
  const content = {
    title: "Zastrzeżenia prawne Linijka-Online.pl",
    intro: "Jeśli potrzebujesz więcej informacji lub masz pytania dotyczące zastrzeżeń prawnych naszej strony, skontaktuj się z nami mailowo pod adresem admin@linijka-online.pl.",
    mainTitle: "Zastrzeżenia prawne Linijka-Online.pl",
    mainText: "Wszystkie informacje na tej stronie (https://linijka-online.pl) są publikowane w dobrej wierze i wyłącznie w celach informacyjnych. Linijka-Online.pl nie oferuje żadnych gwarancji dotyczących kompletności, niezawodności i dokładności tych informacji. Wszelkie działania podejmowane na podstawie informacji znalezionych na tej stronie (Linijka-Online.pl) są podejmowane na własne ryzyko. Linijka-Online.pl nie ponosi odpowiedzialności za straty lub szkody związane z korzystaniem z naszej strony.",
    externalLinks: "Z naszej strony możesz odwiedzać inne strony za pośrednictwem zewnętrznych linków. Chociaż staramy się zapewniać tylko linki do przydatnych i etycznych stron, nie mamy kontroli nad treścią ani charakterem tych stron. Te linki do innych stron nie oznaczają rekomendacji całej zawartości znajdującej się na nich. Właściciele i treść stron mogą się zmienić bez uprzedzenia, nawet zanim zdążymy usunąć link, który przestał działać. Należy pamiętać, że po opuszczeniu naszej strony inne strony mogą mieć inne polityki prywatności i warunki, które są poza naszą kontrolą. Upewnij się, że zapoznałeś się z polityką prywatności i warunkami korzystania z takich stron przed dokonaniem jakiejkolwiek transakcji lub przesłaniem informacji.",
    consentTitle: "Zgoda",
    consentText: "Korzystając z naszej strony, akceptujesz niniejsze zastrzeżenia prawne i ich warunki.",
    updateTitle: "Aktualizacja",
    updateText: "W przypadku aktualizacji, modyfikacji lub wprowadzenia jakichkolwiek zmian w tym dokumencie, zmiany te zostaną opublikowane tutaj w widoczny sposób."
  };
  
  return (
    <>
      <Helmet>
        <title>{content.title} - Linijka-Online.pl</title>
        <meta name="description" content={content.mainText.substring(0, 160)} />
        <html lang="pl" />
        <link rel="canonical" href="https://linijka-online.pl/disclaimer" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-ruler-primary">
              {content.title}
            </h1>
            
            <p className="mb-6">
              {content.intro}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.mainTitle}
            </h2>
            <p className="mb-6">
              {content.mainText}
            </p>
            
            <p className="mb-6">
              {content.externalLinks}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.consentTitle}
            </h2>
            <p className="mb-6">
              {content.consentText}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.updateTitle}
            </h2>
            <p>
              {content.updateText}
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
