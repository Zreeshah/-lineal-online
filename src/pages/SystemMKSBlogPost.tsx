import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, Ruler, Scale, Clock, Zap, Atom } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SystemMKSBlogPost: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>System MKS: Czym Jest, Jednostki i Znaczenie w Pomiarach | Linijka-Online.pl</title>
        <meta name="description" content="Dowiedz się, czym jest system MKS, jego podstawowe i pochodne jednostki oraz jak jest stosowany w nauce i inżynierii. Kompletny przewodnik po pomiarach w systemie Metr-Kilogram-Sekunda." />
        <meta name="keywords" content="system MKS, co oznacza MKS, system jednostek MKS, długość MKS, moc w systemie MKS, System Międzynarodowy lub MKS, linijka, miarka" />
        <link rel="canonical" href="https://linijka-online.pl/blog/system-mks" />
      </Helmet>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-ruler-primary mb-6 hover:underline">
          <ArrowLeft size={16} className="mr-1" />
          Powrót do strony głównej
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img
              alt="System MKS - Metr, Kilogram, Sekunda"
              src="/lovable-uploads/3d520faf-c186-4486-92e5-9bcbb32657b4.jpg"
              className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px]"
              loading="lazy"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">System MKS: Czym Jest, Jednostki i Znaczenie w Pomiarach</h1>
          
          <p className="lead">
            Chcesz wiedzieć, <strong>czym jest system MKS</strong> lub <strong>co oznacza MKS</strong>? <strong>System jednostek MKS</strong> (Metr, Kilogram, Sekunda) jest podstawą współczesnego <strong>Międzynarodowego Układu Jednostek (SI)</strong> i fundamentalnym filarem pomiarów naukowych. W tym kompletnym przewodniku szczegółowo omówimy <strong>system MKS</strong>, jego jednostki, historię, zastosowania oraz powiązanie z takimi pojęciami jak <strong>moc w systemie MKS</strong> czy <strong>długość MKS</strong>.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Spis Treści</h2>
            <ul className="space-y-1">
              <li><a href="#czym-jest-system-mks" className="text-ruler-primary hover:underline">Czym jest System MKS?</a></li>
              <li><a href="#historia-systemu-mks" className="text-ruler-primary hover:underline">Historia Systemu MKS</a></li>
              <li><a href="#jednostki-podstawowe" className="text-ruler-primary hover:underline">Jednostki Podstawowe Systemu MKS</a></li>
              <li><a href="#jednostki-pochodne" className="text-ruler-primary hover:underline">Jednostki Pochodne Systemu MKS</a></li>
              <li><a href="#roznice" className="text-ruler-primary hover:underline">Różnice między MKS, SI i Innymi Systemami</a></li>
              <li><a href="#zastosowania" className="text-ruler-primary hover:underline">Zastosowania Systemu MKS</a></li>
              <li><a href="#podsumowanie" className="text-ruler-primary hover:underline">Podsumowanie</a></li>
            </ul>
          </div>

          <section id="czym-jest-system-mks">
            <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
              <Atom className="mr-2 text-ruler-primary" />
              Czym jest System MKS?
            </h2>
            
            <div className="md:flex md:items-center md:space-x-6 mb-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-ruler-primary/10 p-4 rounded-lg text-center">
                  <Ruler className="mx-auto mb-2 text-ruler-primary h-12 w-12" />
                  <p className="font-semibold">Metr (M)</p>
                  <p className="text-sm">Jednostka długości</p>
                </div>
              </div>
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-ruler-primary/10 p-4 rounded-lg text-center">
                  <Scale className="mx-auto mb-2 text-ruler-primary h-12 w-12" />
                  <p className="font-semibold">Kilogram (K)</p>
                  <p className="text-sm">Jednostka masy</p>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-ruler-primary/10 p-4 rounded-lg text-center">
                  <Clock className="mx-auto mb-2 text-ruler-primary h-12 w-12" />
                  <p className="font-semibold">Sekunda (S)</p>
                  <p className="text-sm">Jednostka czasu</p>
                </div>
              </div>
            </div>
            
            <p>
              <strong>System jednostek MKS</strong> to metoda pomiaru wykorzystująca <strong>metr</strong> dla <strong>długości MKS</strong>, <strong>kilogram</strong> dla masy i <strong>sekundę</strong> dla czasu. Nazwa <strong>MKS</strong> pochodzi od inicjałów tych trzech podstawowych jednostek. System ten był prekursorem współczesnego <strong>Systemu Międzynarodowego lub MKS</strong> (SI), przyjętego globalnie ze względu na jego logikę dziesiętną i precyzję.
            </p>
            
            <p>
              <strong>Co oznacza MKS?</strong> To standard, który ustandaryzował pomiary w nauce i inżynierii, eliminując niespójności systemów regionalnych. Wzorce metra i kilograma są przechowywane w <strong>Międzynarodowym Biurze Miar i Wag (BIPM)</strong>, podczas gdy sekunda była pierwotnie zdefiniowana jako 1/86 400 średniego dnia słonecznego, choć dziś opiera się na właściwościach atomowych dla większej dokładności.
            </p>
          </section>

          <section id="historia-systemu-mks">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Historia Systemu MKS
            </h2>
            
            <p>
              Historia <strong>systemu MKS</strong> odzwierciedla ewolucję ludzkich pomiarów w kierunku uniwersalnych standardów.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Początki Systemu Metrycznego</h3>
            
            <p>
              Od III wieku p.n.e. cywilizacje używały systemów miar opartych na fizycznych referencjach, takich jak przedramię czy ruch słońca. Na przykład:
            </p>
            
            <ul className="list-disc pl-5 mb-4">
              <li>W Egipcie długość mierzono łokciami lub palcami.</li>
              <li>W Babilonii czas obliczano cyklami księżycowymi.</li>
              <li>Pojemność szacowano licząc nasiona w pojemnikach.</li>
            </ul>
            
            <p>
              Te metody różniły się w zależności od regionu, powodując zamieszanie w handlu i budownictwie.
            </p>
          </section>

          <section id="jednostki-podstawowe">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Jednostki Podstawowe Systemu MKS
            </h2>
            
            <p>
              <strong>System MKS</strong> opiera się na trzech podstawowych jednostkach:
            </p>
            
            <Table className="my-6">
              <TableCaption>Podstawowe jednostki systemu MKS</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Jednostka</TableHead>
                  <TableHead>Wielkość</TableHead>
                  <TableHead>Obecna Definicja</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Metr</TableCell>
                  <TableCell>Długość</TableCell>
                  <TableCell>Odległość przebyta przez światło w 1/299 792 458 s.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Kilogram</TableCell>
                  <TableCell>Masa</TableCell>
                  <TableCell>Oparta na stałej Plancka od 2019.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sekunda</TableCell>
                  <TableCell>Czas</TableCell>
                  <TableCell>9 192 631 770 oscylacji atomu cezu-133.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <p>
              Te jednostki stanowią podstawę do mierzenia <strong>długości MKS</strong>, masy i czasu w każdym zastosowaniu naukowym.
            </p>
          </section>

          <section id="jednostki-pochodne">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Jednostki Pochodne Systemu MKS
            </h2>
            
            <p>
              Oprócz jednostek podstawowych <strong>system MKS</strong> zawiera jednostki pochodne, które łączą podstawowe do wyrażania innych wielkości. Kluczowe przykłady:
            </p>
            
            <Table className="my-6">
              <TableCaption>Jednostki pochodne w systemie MKS</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Wielkość</TableHead>
                  <TableHead>Jednostka</TableHead>
                  <TableHead>Równoważność w MKS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Prędkość</TableCell>
                  <TableCell>Metr/sekunda</TableCell>
                  <TableCell>m/s</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Przyspieszenie</TableCell>
                  <TableCell>Metr/sekunda²</TableCell>
                  <TableCell>m/s²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Siła</TableCell>
                  <TableCell>Niuton</TableCell>
                  <TableCell>kg·m/s²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Energia</TableCell>
                  <TableCell>Dżul</TableCell>
                  <TableCell>kg·m²/s²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Moc</TableCell>
                  <TableCell>Wat</TableCell>
                  <TableCell>kg·m²/s³ (J/s)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <p>
              Na przykład <strong>moc w systemie MKS</strong> mierzy się w <strong>watach</strong>, równoważnych jednemu dżulowi na sekundę, używanych w obliczeniach elektrycznych i mechanicznych.
            </p>
          </section>

          <section id="roznice">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Różnice między MKS, SI i Innymi Systemami
            </h2>
            
            <p>
              <strong>System MKS</strong> jest poprzednikiem <strong>Systemu Międzynarodowego (SI)</strong>, ale istnieją inne historyczne systemy. Oto porównanie:
            </p>
            
            <Table className="my-6">
              <TableCaption>Porównanie różnych systemów jednostek</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>System</TableHead>
                  <TableHead>Jednostki Podstawowe</TableHead>
                  <TableHead>Główne Zastosowanie</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">MKS</TableCell>
                  <TableCell>Metr, Kilogram, Sekunda</TableCell>
                  <TableCell>Nauka i inżynieria (prekursor SI)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">SI</TableCell>
                  <TableCell>Metr, Kilogram, Sekunda, Amper, Kelwin, Kandela, Mol</TableCell>
                  <TableCell>Obecny globalny standard</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">CGS</TableCell>
                  <TableCell>Centymetr, Gram, Sekunda</TableCell>
                  <TableCell>Fizyka teoretyczna (XIX wiek)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">FPS</TableCell>
                  <TableCell>Stopa, Funt, Sekunda</TableCell>
                  <TableCell>USA, Wielka Brytania (tradycyjny)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section id="zastosowania">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Zastosowania Systemu MKS
            </h2>
            
            <p>
              <strong>System MKS</strong> i jego ewolucja w <strong>SI</strong> mają zastosowanie w:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Atom className="text-ruler-primary mr-2" />
                  <h3 className="font-semibold">Fizyka</h3>
                </div>
                <p className="text-sm">Obliczanie sił, energii i <strong>mocy w systemie MKS</strong> (np. waty w silnikach).</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Zap className="text-ruler-primary mr-2" />
                  <h3 className="font-semibold">Inżynieria</h3>
                </div>
                <p className="text-sm">Projektowanie konstrukcji, maszyn i obwodów elektrycznych.</p>
              </div>
            </div>
          </section>

          <section id="podsumowanie">
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Podsumowanie
            </h2>
            
            <p>
              <strong>System MKS</strong> był fundamentalnym krokiem w kierunku globalnej standaryzacji pomiarów. Jego ewolucja do <strong>Systemu Międzynarodowego (SI)</strong> umożliwiła precyzyjną komunikację naukową i techniczną na całym świecie.
            </p>
            
            <p>
              Jeśli chcesz wykonać precyzyjne pomiary, wypróbuj naszą <a href="/" className="text-ruler-primary hover:underline">linijkę online</a>, która pozwala mierzyć w centymetrach, milimetrach i calach bezpośrednio z ekranu.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SystemMKSBlogPost;
