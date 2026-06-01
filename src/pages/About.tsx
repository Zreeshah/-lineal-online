import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Ruler, Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>O Nas - Linijka-Online.pl</title>
        <meta name="description" content="Dowiedz się więcej o Linijka-Online.pl, najbardziej precyzyjnym i łatwym w użyciu narzędziu do pomiarów online." />
        <html lang="pl" />
        <link rel="canonical" href="https://linijka-online.pl/o-nas" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h1 className="text-3xl font-bold mb-6 text-ruler-primary">
                O Nas
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
                Witamy na Linijka-Online.pl, Twoim niezawodnym i precyzyjnym cyfrowym narzędziu pomiarowym. Stworzone z myślą o zapewnieniu praktycznego rozwiązania, gdy potrzebujesz zmierzyć przedmioty, a nie masz fizycznej linijki pod ręką.
              </p>

              <p className="text-gray-700 mb-6">
                W świecie coraz bardziej cyfrowym rozumiemy, że czasem tradycyjne narzędzia nie są dostępne, gdy ich potrzebujesz. Dlatego opracowaliśmy tę aplikację internetową, która zamienia Twój ekran w skalibrowaną linijkę, pozwalając na precyzyjne pomiary w dowolnym czasie i miejscu.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Target className="text-ruler-primary mr-3" size={32} />
                  <h2 className="text-xl font-semibold text-ruler-primary">
                    Nasza Misja
                  </h2>
                </div>
                <p className="text-gray-700">
                  Zapewnienie dostępnego, precyzyjnego i łatwego w użyciu narzędzia do pomiarów online dla wszystkich, niezależnie od miejsca i używanego urządzenia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Zap className="text-ruler-primary mr-3" size={32} />
                  <h2 className="text-xl font-semibold text-ruler-primary">
                    Nasza Wizja
                  </h2>
                </div>
                <p className="text-gray-700">
                  Być najbardziej niezawodnym i najczęściej używanym cyfrowym narzędziem pomiarowym w Polsce, pomagając milionom ludzi w ich codziennych potrzebach.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">
                Dlaczego wybrać Linijka-Online.pl?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Gwarantowana Precyzja</h3>
                    <p className="text-gray-700">Zaawansowany system kalibracji, który dostosowuje się do Twojego konkretnego ekranu dla dokładnych pomiarów.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">100% Za Darmo</h3>
                    <p className="text-gray-700">Bez rejestracji, bez subskrypcji, bez ukrytych kosztów. Zawsze będzie darmowa.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Łatwa w Użyciu</h3>
                    <p className="text-gray-700">Intuicyjny interfejs zaprojektowany tak, aby każdy mógł go używać bez komplikacji.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Kompatybilna ze Wszystkimi Urządzeniami</h3>
                    <p className="text-gray-700">Działa doskonale na komputerach, tabletach i smartfonach.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Prywatność Przede Wszystkim</h3>
                    <p className="text-gray-700">Wszystkie kalibracje są zapisywane lokalnie w przeglądarce. Nie zbieramy ani nie udostępniamy Twoich danych.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-ruler-primary">
                Nasze Zobowiązanie
              </h2>
              <p className="text-gray-700 mb-4">
                Zobowiązujemy się utrzymywać Linijka-Online.pl jako darmowe, dostępne i stale ulepszane narzędzie. Słuchamy naszej społeczności i ciągle pracujemy nad dodawaniem nowych funkcji i ulepszaniem doświadczenia użytkownika.
              </p>
              <p className="text-gray-700">
                Jeśli masz jakieś sugestie lub uwagi, nie wahaj się z nami skontaktować. Twoja opinia jest dla nas fundamentalna.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
