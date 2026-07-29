import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ruler from '@/components/Ruler';
import MobileRuler from '@/components/MobileRuler';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Head as Helmet } from 'vite-react-ssg';
import { Card, CardContent } from '@/components/ui/card';
import { Ruler as RulerIcon, Maximize, Square, Pencil, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogArticles } from '@/utils/internalLinks';
import CanonicalLink from '@/components/CanonicalLink';
import calibrationGuide from '@/assets/calibration-guide.png';
import reglaOnline from '@/assets/regla-online.jpg';
import reglaPrecision from '@/assets/regla-precision.jpg';
import HomeContent from '@/components/HomeContent';
import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import FaqSection from '@/components/FaqSection';
import RulerSizesTable from '@/components/RulerSizesTable';

const Index = () => {
  const { t } = useLanguage();
  const { orientation } = useCalibration();
  const [contentTopMargin, setContentTopMargin] = useState('320px');
  const isMobile = useIsMobile();

  const featuredArticles = blogArticles.filter((article) => article.url !== '/').slice(0, 3);

  const metaTitle = 'Lineal online in Originalgröße | Lineal 10 cm anzeigen | Maßband für Handy';
  const metaDescription =
    'Lineal online in Originalgröße – kostenlos auf Handy, Tablet und PC. Online Lineal in cm, mm und Zoll. Lineal 10 cm anzeigen, 1 Zentimeter messen, Maßband online nutzen.';

  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Lineal.online',
    description: metaDescription,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    url: 'https://www.lineal.onl/',
    inLanguage: 'de-DE',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    featureList: [
      'Messen in Zentimetern, Millimetern und Zoll',
      'Lineal 10 cm in Originalgröße',
      'Maßband online für jedes Gerät',
      'Lineal für Handy, Tablet und PC',
      'Ohne Download, direkt im Browser',
      'Präzise Kalibrierung',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: t('faqQuestion1'), acceptedAnswer: { '@type': 'Answer', text: t('faqAnswer1') } },
      { '@type': 'Question', name: t('faqQuestion2'), acceptedAnswer: { '@type': 'Answer', text: t('faqAnswer2') } },
      { '@type': 'Question', name: t('faqQuestion3'), acceptedAnswer: { '@type': 'Answer', text: t('faqAnswer3') } },
    ],
  };

  useEffect(() => {
    if (isMobile) return;
    setContentTopMargin(orientation === 'vertical' ? '640px' : '320px');
  }, [orientation, isMobile]);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="lineal, lineal online, online lineal, lineal online handy, 1 centymetr, maßband online, lineal 10 cm anzeigen, lineal 10 cm originalgröße, lineal für handy"
        />
        <html lang="de" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://www.lineal.onl/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta name="theme-color" content="#9b87f5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json">{JSON.stringify(webApplicationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <CanonicalLink />

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        {!isMobile && (
          <div className="container text-center mt-8 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5] animate-fade-in">
              <strong>Lineal online in Originalgröße – Maßband &amp; Lineal für Handy</strong>
            </h1>
            <p className="text-lg text-gray-600 mt-2 animate-slide-in">
              Digitales <strong>Lineal online</strong> mit präziser Kalibrierung – Lineal 10 cm anzeigen, in cm, mm
              und Zoll messen, direkt auf jedem Bildschirm.
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
                Lineal online Handy – in Originalgröße messen
              </h1>
              <p className="text-sm text-gray-600">
                Digitales Lineal für Handy mit präziser Kalibrierung. Lineal 10 cm anzeigen und genaue Messungen
                in cm, mm und Zoll vornehmen.
              </p>
            </div>
          )}

          <div className="mb-6 md:mb-10">
            <Card className="bg-white p-4 md:p-6">
              <CardContent className="p-0">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#9b87f5] flex items-center">
                  <Book size={20} className="mr-2" />
                  Empfohlene Artikel
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
                      <p className="text-sm text-gray-600 mb-3">{article.keywords.slice(0, 3).join(', ')}</p>
                      <div className="flex items-center text-[#9b87f5] text-sm font-medium">
                        Weiterlesen
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
                  alt="Kalibrierungsanleitung: Lineal online an Kreditkartenbreite anpassen"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="eager"
                  fetchpriority="high"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <HowToUseSection />
            <WhyPerfectSection />
          </div>

          <FaqSection />

          <RulerSizesTable />

          <div className="mb-10">
            <Card className="bg-white p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">
                  So nutzen Sie das Lineal online richtig
                </h2>
                <p className="mb-6 text-gray-700">
                  Lernen Sie Schritt für Schritt, wie Sie das virtuelle Lineal kalibrieren und für genaue Messungen
                  einsetzen – egal ob als <strong>Lineal für Handy</strong>, Tablet oder PC.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Maßeinheit wählen</h3>
                    <p className="text-gray-700">
                      Wählen Sie die gewünschte Einheit: Millimeter (mm), Zentimeter (cm) oder Zoll. Sie können
                      jederzeit über das Lineal-Menü wechseln. <strong>1 centymetr</strong> entspricht dabei
                      genau 10&nbsp;mm.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Bildschirm kalibrieren</h3>
                    <p className="text-gray-700 mb-3">
                      Damit das Lineal echte Maße anzeigt, kalibrieren Sie kurz Ihren Bildschirm:
                    </p>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2 text-gray-800">Option A – Kreditkarte (empfohlen):</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Legen Sie eine Kredit- oder EC-Karte an den Bildschirm.</li>
                        <li>Verschieben Sie die Kalibrierung, bis die Karte auf dem Bildschirm 85,6 mm misst.</li>
                        <li>Speichern – fertig.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-gray-800">Option B – Bildschirmdiagonale:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Wenn Sie Ihre Bildschirmdiagonale in Zoll kennen, tragen Sie sie im Kalibrierungsfeld ein.</li>
                        <li>Das Verhältnis Pixel→mm wird automatisch berechnet.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="my-6">
                    <img
                      src={reglaOnline}
                      alt="Präzises digitales Lineal online auf dunkler Oberfläche – perfekt zum Messen in cm und mm"
                      className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={420}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Lineal 10 cm anzeigen und messen</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Legen Sie die Kante Ihres Objekts an die 0 des virtuellen Lineals.</li>
                      <li>Lesen Sie das Maß in der gewünschten Einheit ab – z.B. <strong>Lineal 10 cm Originalgröße</strong>.</li>
                      <li>Bei längeren Objekten verschieben Sie das Lineal oder zoomen Sie hinein.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">4. Tipps für mehr Genauigkeit</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Browserzoom auf 100% stellen.</li>
                      <li>Dickere Hüllen entfernen – sie verfälschen die Position.</li>
                      <li>Nach Geräte- oder Browser-Updates erneut kalibrieren.</li>
                      <li>Für kritische Messungen ein zertifiziertes physisches Messgerät nutzen.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10">
            <Card className="bg-white p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Jetzt mit dem Messen starten!</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Ihr Bildschirm wird zum kostenlosen, präzisen Messgerät. Mit unserem <strong>Lineal online</strong>{' '}
                  messen Sie Objekte direkt am Handy, Tablet oder PC – ohne Download.
                </p>

                <div className="my-6">
                  <img
                    src={reglaPrecision}
                    alt="Person nutzt ein präzises Lineal mit Millimeter-Genauigkeit – Maßband online für Designprojekte"
                    className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={420}
                  />
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">⚡ Schnell, einfach und kostenlos</h3>
                    <p className="text-gray-700">
                      Einmal kalibrieren – immer nutzen. Funktioniert mit Zentimetern, Millimetern und Zoll.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">✓ So legen Sie los</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>„Bildschirm kalibrieren" antippen.</li>
                      <li>Per Kreditkarte oder Bildschirmgröße abgleichen.</li>
                      <li>Sofort jedes Objekt messen, das Sie zur Hand haben.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">🎯 Worauf warten?</h3>
                    <p className="text-gray-700">
                      Messen, vergleichen und rechnen – sofort von jedem Gerät. Ideal für Schule, Design, Handwerk
                      und jeden, der schnell und zuverlässig messen möchte.
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
