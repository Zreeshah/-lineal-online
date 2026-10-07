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
import calibrationGuide from '@/assets/calibration-guide.webp';
import onlineLinealImage from '@/assets/online-lineal.jpg';
import linealMeasurementImage from '@/assets/lineal-messung.jpg';
import HomeContent from '@/components/HomeContent';
import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import RulerSizesTable from '@/components/RulerSizesTable';
import HomepageMeasurementGuide from '@/components/HomepageMeasurementGuide';

const Index = () => {
  const { t } = useLanguage();
  const { orientation } = useCalibration();
  const [contentTopMargin, setContentTopMargin] = useState('320px');
  const isMobile = useIsMobile();

  const featuredArticles = blogArticles.filter((article) => article.url !== '/').slice(0, 3);
  const featuredDescriptions: Record<string, string> = {
    '/blog/wie-benutzt-man-ein-lineal': 'Nullpunkt, Blickwinkel und Millimeterteilung richtig verwenden.',
    '/blog/lineal-10-cm-originalgroesse': 'Eine 10-cm-Strecke anzeigen und mit einer Referenz kontrollieren.',
    '/blog/lineal-fuer-handy': 'Kleine Gegenstände auf dem Smartphone messen und typische Fehler vermeiden.',
  };

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
      { '@type': 'Question', name: t('faqQuestion4'), acceptedAnswer: { '@type': 'Answer', text: t('faqAnswer4') } },
      { '@type': 'Question', name: t('faqQuestion5'), acceptedAnswer: { '@type': 'Answer', text: t('faqAnswer5') } },
      { '@type': 'Question', name: t('faqQuestion6'), acceptedAnswer: { '@type': 'Answer', text: t('faqAnswer6') } },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lineal.online',
    url: 'https://www.lineal.onl/',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lineal.online',
    url: 'https://www.lineal.onl/',
    inLanguage: 'de-DE',
    publisher: {
      '@type': 'Organization',
      name: 'Lineal.online',
      url: 'https://www.lineal.onl/',
    },
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
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
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
                      <p className="text-sm text-gray-600 mb-3">
                        {featuredDescriptions[article.url] || 'Praktische Hinweise für Messungen und Umrechnungen.'}
                      </p>
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
                  width={986}
                  height={796}
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
                      jederzeit über das Lineal-Menü wechseln. <strong>1 cm = 10 mm</strong> gilt in jeder Ansicht.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Bildschirm kalibrieren</h3>
                    <p className="text-gray-700 mb-3">
                      Damit das Lineal echte Maße anzeigt, kalibrieren Sie kurz Ihren Bildschirm:
                    </p>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2 text-gray-800">Option A – Bankkarte im ID-1-Format:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Legen Sie die lange Kartenkante vorsichtig an die Referenzfläche.</li>
                        <li>Passen Sie die Anzeige an, bis die Kartenbreite 85,60 mm entspricht.</li>
                        <li>Prüfen Sie anschließend eine zweite bekannte Länge.</li>
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
                      src={onlineLinealImage}
                      alt="Digitales Online-Lineal auf dunkler Oberfläche zum Messen in Zentimetern und Millimetern"
                      className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                      loading="lazy"
                      decoding="async"
                      width={739}
                      height={439}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Lineal 10 cm anzeigen und messen</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Legen Sie die Kante Ihres Objekts an die 0 des virtuellen Lineals.</li>
                      <li>Lesen Sie das Maß in der gewünschten Einheit ab – z.B. <strong>Lineal 10 cm Originalgröße</strong>.</li>
                      <li>Bei längeren Objekten markieren Sie Teilstrecken, ohne den Browserzoom zu verändern.</li>
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
                <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Messung vorbereiten</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Das <strong>Lineal online</strong> ist eine kostenlose Messhilfe für kleine, unkritische
                  Größenkontrollen am Handy, Tablet oder PC. Vor dem Ablesen muss die Skala zum Bildschirm passen.
                </p>

                <div className="my-6">
                  <img
                    src={linealMeasurementImage}
                    alt="Person liest eine Millimeterskala für ein Designprojekt ab"
                    className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                    loading="lazy"
                    decoding="async"
                    width={409}
                    height={572}
                  />
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Ohne Installation nutzbar</h3>
                    <p className="text-gray-700">
                      Die Skala unterstützt Zentimeter, Millimeter und Zoll. Kontrollieren Sie die Kalibrierung nach
                      Änderungen an Zoom, Monitor oder Anzeige-Skalierung erneut.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">So legen Sie los</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>„Bildschirm kalibrieren" antippen.</li>
                      <li>Mit einer Bankkarte oder einer bekannten Länge abgleichen.</li>
                      <li>Ein kleines Objekt gerade an die Nullmarke legen und zweimal ablesen.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Ergebnis richtig einordnen</h3>
                    <p className="text-gray-700">
                      Für Schule, Büro, Basteln und einen schnellen Größenvergleich kann die Bildschirmskala
                      ausreichen. Enge Toleranzen prüfen Sie mit einem geeigneten physischen Messgerät.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <HomepageMeasurementGuide />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
