import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ruler from '@/components/Ruler';
import MobileRuler from '@/components/MobileRuler';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Ruler as RulerIcon, Maximize, Square, Pencil, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogArticles } from '@/utils/internalLinks';
import CanonicalLink from '@/components/CanonicalLink';
import calibrationGuide from '@/assets/calibration-guide.png';
import reglaOnline from '@/assets/regla-online.jpg';
import reglaPrecision from '@/assets/regla-precision.jpg';
import HomeContent from '@/components/HomeContent';

const HowToUseSection = lazy(() => import('@/components/HowToUseSection'));
const WhyPerfectSection = lazy(() => import('@/components/WhyPerfectSection'));
const FaqSection = lazy(() => import('@/components/FaqSection'));
const RulerSizesTable = lazy(() => import('@/components/RulerSizesTable'));

const Index = () => {
  const { t } = useLanguage();
  const { orientation } = useCalibration();
  const [contentTopMargin, setContentTopMargin] = useState("320px");
  const isMobile = useIsMobile();
  
  const featuredArticles = blogArticles.filter(article => article.url !== "/").slice(0, 3);
  
  const metaDescription = "Linijka online z precyzyjną kalibracją do mierzenia w cm, mm i calach na ekranie. Centymetr online, miarka online i miarka cm w telefonie. Idealna do dokładnych pomiarów.";
  
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Linijka Online",
    "description": metaDescription,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "url": "https://linijka-online.pl",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PLN"
    },
    "featureList": [
      "Pomiary w centymetrach i calach",
      "Regulowany rzeczywisty rozmiar",
      "Kompatybilna ze wszystkimi urządzeniami",
      "Bez pobierania",
      "Precyzyjna kalibracja"
    ]
  };
  
  useEffect(() => {
    if (isMobile) return;
    
    if (orientation === 'vertical') {
      setContentTopMargin("640px");
    } else {
      setContentTopMargin("320px");
    }
  }, [orientation, isMobile]);
  
  return (
    <>
      <Helmet>
        <title>Linijka Online w Rzeczywistym Rozmiarze | Centymetr Online | Miarka Online</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="linijka, centymetr online, miarka online, miarka, miarka cm, miarka cm w telefonie, 1 cm ile mm" />
        <html lang="pl" />
        <link rel="canonical" href="https://linijka-online.pl/" />
        <meta property="og:url" content="https://linijka-online.pl/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#9b87f5" />
        
        <script type="application/ld+json">
          {JSON.stringify(webApplicationSchema)}
        </script>
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "${t('faqQuestion1')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t('faqAnswer1')}"
                  }
                },
                {
                  "@type": "Question",
                  "name": "${t('faqQuestion2')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t('faqAnswer2')}"
                  }
                },
                {
                  "@type": "Question",
                  "name": "${t('faqQuestion3')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t('faqAnswer3')}"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <CanonicalLink />
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        {!isMobile && (
          <div className="container text-center mt-8 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5] animate-fade-in">
              <strong>Linijka Online w Rzeczywistym Rozmiarze</strong>
            </h1>
            <p className="text-lg text-gray-600 mt-2 animate-slide-in">
              Cyfrowa linijka i miarka online z precyzyjną kalibracją do mierzenia rzeczywistych przedmiotów na ekranie
            </p>
          </div>
        )}
        
        {isMobile ? (
          <MobileRuler />
        ) : (
          <div className="w-full overflow-hidden mt-4">
            <Ruler className="mb-4" />
          </div>
        )}
        
        <main 
          className={`container flex-1 relative pb-6 ${isMobile ? 'mt-4' : ''}`}
          style={!isMobile ? { marginTop: contentTopMargin } : {}}
        >
              {isMobile && (
                <div className="mb-6 text-center">
                  <h1 className="text-2xl font-bold text-[#9b87f5] mb-2">
                    Linijka Online w Rzeczywistym Rozmiarze
                  </h1>
                  <p className="text-sm text-gray-600">
                    Cyfrowa linijka z precyzyjną kalibracją do mierzenia rzeczywistych przedmiotów
                  </p>
                </div>
              )}
              
              <div className="mb-6 md:mb-10">
                <Card className="bg-white p-4 md:p-6">
                  <CardContent className="p-0">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#9b87f5] flex items-center">
                      <Book size={20} className="mr-2" />
                      Polecane Artykuły
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {featuredArticles.map((article, index) => (
                        <Link 
                          key={index} 
                          to={article.url}
                          className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-[#9b87f5]">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {article.keywords.slice(0, 3).join(', ')}
                          </p>
                          <div className="flex items-center text-[#9b87f5] text-sm font-medium">
                            Czytaj więcej
                            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-6 md:mb-10">
                <Card className="bg-white p-4 md:p-6">
                  <CardContent className="p-0">
                    <img 
                      src={calibrationGuide} 
                      alt="Przewodnik kalibracji: Dopasuj do szerokości karty plastikowej" 
                      className="w-full h-auto rounded-lg object-cover"
                      loading="eager"
                      fetchPriority="high"
                      width={1200}
                      height={630}
                      decoding="async"
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <HomeContent />
                  </CardContent>
                </Card>
              </div>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <div className="mb-10">
                  <Card className="bg-white p-6">
                    <CardContent className="p-0">
                      <p className="mb-4">{t('rulerDescription')}</p>
                      <p className="mb-4">{t('contentIntro')}</p>
                      
                      <h2 className="text-xl font-bold mb-3 text-[#9b87f5]">{t('moreInfo')}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <RulerIcon className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase1')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase1Description')}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <Pencil className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase2')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase2Description')}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <Square className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase3')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase3Description')}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <Maximize className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase4')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase4Description')}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <HowToUseSection />
                  <WhyPerfectSection />
                </div>
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <FaqSection />
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <RulerSizesTable />
              </Suspense>

              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Jak prawidłowo używać linijki online?</h2>
                    <p className="mb-6 text-gray-700">
                      Naucz się krok po kroku kalibrować i używać wirtualnej linijki na swoim urządzeniu, aby uzyskać jak najdokładniejsze pomiary.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Wybierz jednostkę miary</h3>
                        <p className="text-gray-700">
                          Wybierz potrzebną jednostkę: milimetry (mm), centymetry (cm) lub cale (in). Możesz ją zmienić w dowolnym momencie z menu linijki.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Skalibruj ekran (zalecana metoda)</h3>
                        <p className="text-gray-700 mb-3">
                          Aby linijka pokazywała rzeczywiste wymiary, wykonaj szybką kalibrację:
                        </p>
                        
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold mb-2 text-gray-800">Opcja A — Kalibracja standardową kartą (zalecana):</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Umieść kartę kredytową lub debetową na ekranie.</li>
                            <li>Dostosuj kontrolę kalibracji, aż długość karty na ekranie będzie odpowiadać 85,6 mm (standardowy rozmiar).</li>
                            <li>Zapisz kalibrację.</li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-gray-800">Opcja B — Kalibracja przekątną ekranu:</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Jeśli znasz przekątną ekranu w calach, wpisz ją w polu kalibracji.</li>
                            <li>Strona automatycznie obliczy stosunek piksele→mm.</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Przygotuj urządzenie i przedmiot do pomiaru</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Umieść urządzenie (telefon/tablet/komputer) na płaskiej i stabilnej powierzchni.</li>
                          <li>Upewnij się, że ekran jest czysty i bez odbić utrudniających odczyt.</li>
                          <li>Umieść mierzony przedmiot jak najbardziej równolegle do linijki na ekranie.</li>
                        </ul>
                      </div>

                      <div className="my-6">
                        <img
                          src={reglaOnline}
                          alt="Precyzyjny cyfrowy instrument kalibracyjny na ciemnej powierzchni do dokładnych pomiarów"
                          className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={420}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">4. Mierz prawidłowo</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Ustaw krawędź przedmiotu w punkcie 0 wirtualnej linijki.</li>
                          <li>Odczytaj pomiar w wybranej jednostce.</li>
                          <li>Jeśli przedmiot jest dłuższy niż linijka na ekranie, zanotuj widoczny pomiar i przesuń przedmiot, aby zmierzyć resztę (lub użyj funkcji przesuwania/powiększenia, jeśli jest dostępna).</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">5. Wskazówki dla większej precyzji</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Sprawdź, czy skala przeglądarki jest ustawiona na 100% (bez powiększenia).</li>
                          <li>Unikaj mierzenia przez grube etui lub ochraniacze, które mogą zmienić pozycję przedmiotu.</li>
                          <li>Ponownie skalibruj po zmianie urządzenia lub aktualizacji przeglądarki.</li>
                          <li>Do krytycznych pomiarów (inżynieria, budownictwo) używaj certyfikowanych instrumentów fizycznych.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">6. Częste problemy i szybkie rozwiązania</h3>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>Nieprawidłowe pomiary:</strong> Ponownie skalibruj za pomocą standardowej karty.</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>Linijka wygląda na zniekształconą:</strong> Upewnij się, że na stronie ani w ustawieniach dostępności nie ma powiększenia.</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>Nie działa w mojej przeglądarce:</strong> Zaktualizuj przeglądarkę lub wypróbuj Chrome/Firefox/Safari w najnowszej wersji.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Zacznij mierzyć teraz!</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Twój ekran może stać się precyzyjnym i darmowym narzędziem pomiarowym. Z naszą linijką online możesz mierzyć przedmioty bezpośrednio z telefonu, tabletu lub komputera bez konieczności pobierania czegokolwiek.
                    </p>

                    <div className="my-6">
                      <img
                        src={reglaPrecision}
                        alt="Osoba używająca profesjonalnej linijki pomiarowej na papierze z milimetrową precyzją w pracy projektowej"
                        className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={420}
                      />
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">⚡ Szybko, łatwo i za darmo</h3>
                        <p className="text-gray-700">
                          Skalibruj tylko raz, a wirtualną linijkę będziesz mógł używać zawsze, gdy jej potrzebujesz. Działa doskonale z najpopularniejszymi jednostkami: centymetrami, milimetrami i calami.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">✓ Gotowy do rozpoczęcia</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Naciśnij przycisk "Kalibruj ekran".</li>
                          <li>Dostosuj linijkę do rozmiaru ekranu lub za pomocą standardowej karty.</li>
                          <li>Zacznij od razu mierzyć każdy przedmiot, który masz pod ręką!</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">🎯 Po co czekać?</h3>
                        <p className="text-gray-700">
                          Mierz, porównuj i obliczaj natychmiast z dowolnego urządzenia. Idealna dla studentów, projektantów, rzemieślników i każdego, kto potrzebuje szybkiego i niezawodnego pomiaru.
                        </p>
                      </div>
                    </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
