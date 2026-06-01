import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SystemMetrycznyBlogPost: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Układ Metryczny: Kompletny Przewodnik | Linijka-Online.pl</title>
        <meta name="description" content="Poznaj układ metryczny: długość, masa, pojemność, powierzchnia i objętość. Zawiera tabele konwersji i praktyczne przykłady." />
        <meta name="keywords" content="układ metryczny, system metryczny, jednostki metryczne, konwersja jednostek, metr, kilogram, litr, linijka, centymetr online" />
        <link rel="canonical" href="https://linijka-online.pl/blog/system-metryczny" />
        <meta property="og:title" content="Układ Metryczny: Kompletny Przewodnik | Linijka-Online.pl" />
        <meta property="og:description" content="Naucz się przeliczać jednostki długości, masy, pojemności, powierzchni i objętości z tabelami i praktycznymi przykładami." />
        <meta property="og:url" content="https://linijka-online.pl/blog/system-metryczny" />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container py-8">
          <Link to="/" className="inline-flex items-center text-ruler-primary mb-6 hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Powrót do strony głównej
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                alt="Układ Metryczny" 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md" 
                src="/lovable-uploads/79ba06b7-f526-4c13-8eda-7f0f2ac9be8f.jpg" 
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Układ Metryczny: Kompletny Przewodnik po Długości, Masie, Pojemności, Powierzchni i Objętości
            </h1>
            
            <p className="text-lg mb-6">
              Chcesz opanować <strong>układ metryczny</strong>? Ten przewodnik wyjaśnia wszystko o <strong>systemie metrycznym</strong>, 
              od podstawowych jednostek po korzystanie z <strong>tabeli równoważności układu metrycznego</strong> do przeliczania 
              miar długości, masy, pojemności, powierzchni i objętości. Z <strong>tabelami układu metrycznego</strong>, 
              praktycznymi przykładami i jasnymi wskazówkami nauczysz się obsługiwać ten system w prosty sposób. 
              Odkryj, jak stosować <strong>układ metryczny</strong> z pewnością!
            </p>
            
            <h2 id="czym-jest-uklad-metryczny" className="text-2xl font-bold mt-10 mb-4">
              Czym jest Układ Metryczny?
            </h2>
            
            <p>
              <strong>Układ metryczny</strong> to znormalizowany system jednostek, który wykorzystuje wielokrotności i podwielokrotności 
              10 do mierzenia wielkości takich jak długość, masa, pojemność, powierzchnia i objętość. Jest to system 
              najczęściej używany na całym świecie ze względu na jego prostotę i uniwersalność.
            </p>
            
            <p>
              Na przykład w <strong>układzie metrycznym</strong> metr mierzy długość, gram mierzy masę, a litr pojemność. 
              W przeciwieństwie do tradycyjnych systemów (jak anglosaski, z calami i funtami), system metryczny ułatwia konwersje 
              dzięki oparciu na potęgach 10.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Zalety układu metrycznego:</h3>
              <ul className="list-disc pl-6">
                <li>Szybkie i logiczne konwersje.</li>
                <li>Globalne zastosowanie, idealne dla nauki, handlu i edukacji.</li>
                <li>Standaryzacja unikająca nieporozumień.</li>
              </ul>
            </div>
            
            <div className="my-8">
              <img 
                alt="Zalety Układu Metrycznego" 
                src="/lovable-uploads/sistema-metrico-ventajas.jpg" 
                className="w-full h-48 md:h-64 rounded-lg shadow-md object-contain" 
              />
            </div>
            
            <h2 id="jednostki-ukladu-metrycznego" className="text-2xl font-bold mt-10 mb-4">
              Jednostki Układu Metrycznego
            </h2>
            
            <p>
              Poniżej przedstawiamy główne jednostki <strong>układu metrycznego</strong> dla każdego typu pomiaru, 
              z jasnymi i szczegółowymi <strong>tabelami układu metrycznego</strong>.
            </p>
            
            <h3 id="miary-dlugosci" className="text-xl font-semibold mt-8 mb-4">
              Miary Długości
            </h3>
            
            <p>
              Podstawową jednostką długości jest <strong>metr (m)</strong>. Pozostałe jednostki są wielokrotnościami lub podwielokrotnościami, jak 
              pokazano w tej <strong>tabeli układu metrycznego</strong>:
            </p>
            
            <div className="my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nazwa</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Równoważność</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Kilometr</TableCell>
                    <TableCell>km</TableCell>
                    <TableCell>1 000 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hektometr</TableCell>
                    <TableCell>hm</TableCell>
                    <TableCell>100 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dekametr</TableCell>
                    <TableCell>dam</TableCell>
                    <TableCell>10 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Metr</TableCell>
                    <TableCell className="font-medium">m</TableCell>
                    <TableCell className="font-medium">1 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Decymetr</TableCell>
                    <TableCell>dm</TableCell>
                    <TableCell>0,1 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Centymetr</TableCell>
                    <TableCell>cm</TableCell>
                    <TableCell>0,01 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Milimetr</TableCell>
                    <TableCell>mm</TableCell>
                    <TableCell>0,001 m</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p>
              Pamiętaj: <strong>1 cm ile mm</strong>? Odpowiedź to 10 mm! To jedna z najczęściej używanych konwersji.
            </p>
            
            <h3 id="miary-masy" className="text-xl font-semibold mt-8 mb-4">
              Miary Masy
            </h3>
            
            <p>
              Podstawową jednostką masy jest <strong>gram (g)</strong>. Oto <strong>tabela równoważności układu metrycznego</strong> dla masy:
            </p>
            
            <div className="my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nazwa</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Równoważność</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Kilogram</TableCell>
                    <TableCell>kg</TableCell>
                    <TableCell>1 000 g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hektogram</TableCell>
                    <TableCell>hg</TableCell>
                    <TableCell>100 g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dekagram</TableCell>
                    <TableCell>dag</TableCell>
                    <TableCell>10 g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gram</TableCell>
                    <TableCell className="font-medium">g</TableCell>
                    <TableCell className="font-medium">1 g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Decygram</TableCell>
                    <TableCell>dg</TableCell>
                    <TableCell>0,1 g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Centygram</TableCell>
                    <TableCell>cg</TableCell>
                    <TableCell>0,01 g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Miligram</TableCell>
                    <TableCell>mg</TableCell>
                    <TableCell>0,001 g</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <h3 id="miary-pojemnosci" className="text-xl font-semibold mt-8 mb-4">
              Miary Pojemności
            </h3>
            
            <p>
              <strong>Litr (l)</strong> jest podstawową jednostką do mierzenia pojemności. Ta tabela pokazuje równoważności:
            </p>
            
            <div className="my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nazwa</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Równoważność</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Kilolitr</TableCell>
                    <TableCell>kl</TableCell>
                    <TableCell>1 000 l</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hektolitr</TableCell>
                    <TableCell>hl</TableCell>
                    <TableCell>100 l</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dekalittr</TableCell>
                    <TableCell>dal</TableCell>
                    <TableCell>10 l</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Litr</TableCell>
                    <TableCell className="font-medium">l</TableCell>
                    <TableCell className="font-medium">1 l</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Decylitr</TableCell>
                    <TableCell>dl</TableCell>
                    <TableCell>0,1 l</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Centylitr</TableCell>
                    <TableCell>cl</TableCell>
                    <TableCell>0,01 l</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mililitr</TableCell>
                    <TableCell>ml</TableCell>
                    <TableCell>0,001 l</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="text-sm italic">
              <strong>Uwaga</strong>: 1 litr wody (w temperaturze 4°C) odpowiada w przybliżeniu 1 kilogramowi - przydatna relacja w konwersjach.
            </p>
            
            <h2 id="jak-przeliczac" className="text-2xl font-bold mt-10 mb-4">
              Jak Przeliczać Jednostki Metryczne
            </h2>
            
            <p>
              Przeliczanie w <strong>układzie metrycznym</strong> jest proste dzięki systemowi dziesiątnemu:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Aby przejść do mniejszej jednostki</strong>: Pomnóż przez 10 za każdy poziom w dół.</li>
              <li><strong>Aby przejść do większej jednostki</strong>: Podziel przez 10 za każdy poziom w górę.</li>
            </ul>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Przykład:</h3>
              <p>Przeliczyć 5 metrów na centymetry:</p>
              <ul className="list-disc pl-6">
                <li>Metr → decymetr: 5 × 10 = 50 dm</li>
                <li>Decymetr → centymetr: 50 × 10 = 500 cm</li>
              </ul>
              <p className="mt-2">Więc 5 m = 500 cm</p>
            </div>
            
            <h2 id="podsumowanie" className="text-2xl font-bold mt-10 mb-4">
              Podsumowanie
            </h2>
            
            <p>
              <strong>Układ metryczny</strong> to uniwersalny i prosty system do wykonywania pomiarów i konwersji. 
              Dzięki przedstawionym tutaj tabelom możesz szybko przeliczać między jednostkami długości, masy, 
              pojemności, powierzchni i objętości.
            </p>
            
            <p>
              Jeśli potrzebujesz narzędzia do mierzenia, wypróbuj naszą <a href="/" className="text-ruler-primary hover:underline">linijkę online</a>, 
              która pozwala na precyzyjne pomiary w centymetrach i milimetrach bezpośrednio z ekranu.
            </p>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SystemMetrycznyBlogPost;
