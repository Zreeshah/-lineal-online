import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import reglaImage from '@/assets/Regla para Imprimir.png';

const DrukujLinijke: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Linijka do Druku - Darmowa Linijka do Wydrukowania | Linijka-Online.pl</title>
        <meta name="description" content="Wydrukuj linijkę 30 cm lub 12 cali za darmo. Linijka do druku w rzeczywistym rozmiarze, skalibrowana i gotowa do użycia w domu lub szkole." />
        <meta name="keywords" content="linijka do druku, drukuj linijkę, linijka do wydrukowania, linijka 30 cm, linijka 12 cali" />
        <link rel="canonical" href="https://linijka-online.pl/drukuj" />
        <html lang="pl" />
      </Helmet>

      <Layout>
        <div className="container mx-auto px-4 py-8 print:py-0">
          <div className="print:hidden">
            <div className="max-w-6xl mx-auto mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Linijka do Druku – Darmowa Linijka do Wydrukowania Online
              </h1>

              <p className="text-lg text-gray-700 mb-6">
                Potrzebujesz prawdziwej linijki do mierzenia przedmiotów, a nie masz jej pod ręką? Z naszym narzędziem możesz łatwo wydrukować linijkę w rzeczywistym rozmiarze, do 29,7 cm lub 11,7 cala, bezpośrednio z przeglądarki.
              </p>

              <div className="mb-8">
                <Button
                  onClick={handlePrint}
                  className="bg-ruler-primary hover:bg-ruler-secondary text-white"
                >
                  <Printer className="mr-2 h-4 w-4" />
                  Drukuj Linijkę
                </Button>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="lg:w-auto flex-shrink-0 flex justify-center lg:justify-start">
                  <img
                    src={reglaImage}
                    alt="Linijka do druku"
                    className="h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[800px] w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 space-y-8">

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Jak Prawidłowo Wydrukować Linijkę
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Postępuj zgodnie z tymi krokami, aby upewnić się, że wydrukowana linijka ma dokładny rozmiar:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Kliknij przycisk "Drukuj Linijkę" na górze strony.</li>
                      <li>W oknie drukowania wybierz rozmiar papieru A4 (210 x 297 mm).</li>
                      <li>Upewnij się, że skala jest ustawiona na 100% (bez dopasowania lub "rzeczywisty rozmiar").</li>
                      <li>Drukuj w orientacji poziomej lub pionowej, według preferencji.</li>
                      <li>Po wydrukowaniu sprawdź fizyczną linijką, czy pomiar jest prawidłowy.</li>
                    </ol>
                    <p className="text-gray-700 mt-4">
                      W ten sposób otrzymasz idealnie skalibrowaną linijkę 29,7 cm lub 11,7 cala.
                    </p>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Rodzaje Linijek do Wydrukowania
                    </h2>
                    <p className="text-gray-700 mb-3">
                      Na naszej stronie znajdziesz różne modele linijek do druku:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Linijka 30 cm do druku (centymetry i milimetry)</li>
                      <li>Linijka 12 cali do druku</li>
                      <li>Linijka metryczna i calowa połączona</li>
                      <li>Linijka do druku w PDF (idealna do zapisania i wielokrotnego użycia)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Wszystkie linijki są zaprojektowane z precyzyjnymi wymiarami i wyraźnymi liniami, idealne do domu, szkoły lub pracy.
                    </p>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Przydatne Wskazówki
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Użyj grubszego papieru lub kartonu, jeśli chcesz mieć bardziej wytrzymałą linijkę.</li>
                      <li>Jeśli drukarka nieznacznie zmienia skalę, możesz ręcznie dostosować zoom, aż będzie odpowiadać obiektowi o znanym rozmiarze.</li>
                      <li>Możesz zalaminować wydrukowaną linijkę, aby przedłużyć jej trwałość.</li>
                    </ul>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Zalety Drukowania Własnej Linijki
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Nie musisz kupować fizycznej linijki.</li>
                      <li>Dostępna o każdej porze i w każdym miejscu.</li>
                      <li>Całkowicie darmowa i dokładna.</li>
                      <li>Możesz ją dostosować w centymetrach, calach lub obu.</li>
                    </ul>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Pobierz lub Wydrukuj Swoją Linijkę
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Kliknij poniższy przycisk, aby wydrukować linijkę bezpośrednio lub pobrać ją w formacie PDF.
                      Idealna do mierzenia projektów rękodzielniczych, szycia, rysunku technicznego lub użytku szkolnego.
                    </p>
                    <Button
                      onClick={handlePrint}
                      className="bg-ruler-primary hover:bg-ruler-secondary text-white"
                    >
                      <Printer className="mr-2 h-4 w-4" />
                      Drukuj Linijkę Teraz
                    </Button>
                  </section>

                  <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Jeszcze Jedna Rzecz
                    </h2>
                    <p className="text-gray-700">
                      Pamiętaj, aby zawsze sprawdzić, czy wydruk jest w skali 100%, aby zapewnić dokładność.
                      Na Linijka-Online.pl chcemy, abyś zawsze miał niezawodną, praktyczną i darmową linijkę do druku na wyciągnięcie ręki.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden print:block print:m-0 print:p-0">
            <img
              src={reglaImage}
              alt="Linijka do druku"
              className="w-auto h-auto max-w-none"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </Layout>

      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          body, html {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
          }

          header, footer, nav {
            display: none !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:block {
            display: block !important;
          }

          .print\\:m-0 {
            margin: 0 !important;
          }

          .print\\:p-0 {
            padding: 0 !important;
          }

          img {
            max-width: none !important;
            width: auto !important;
            height: auto !important;
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default DrukujLinijke;
