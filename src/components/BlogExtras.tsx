import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, CheckCircle2, Smartphone, Tablet, Monitor, Lightbulb, HelpCircle, ArrowRight } from 'lucide-react';

interface BlogExtrasProps {
  title: string;
  keywords: string;
}

const BlogExtras: React.FC<BlogExtrasProps> = ({ title, keywords }) => {
  return (
    <section className="mt-12 space-y-8" aria-label="Weiterführende Informationen">
      {/* Key facts */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-100 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Lightbulb className="text-purple-600" size={22} />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">Kurz & wichtig</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: <Ruler size={18} />, text: '1 cm = 10 mm, 1 Zoll = 25,4 mm – sofort umgerechnet.' },
            { icon: <CheckCircle2 size={18} />, text: 'Kalibrierung mit EC-Karte (85,6 mm) für mm-genaue Messungen.' },
            { icon: <Smartphone size={18} />, text: 'Funktioniert als Lineal für Handy, Tablet und Desktop.' },
            { icon: <Monitor size={18} />, text: 'Originalgröße: 10 cm sind echte 10 cm auf dem Bildschirm.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/70 rounded-xl p-3 border border-purple-100/50">
              <span className="text-purple-600 mt-0.5">{item.icon}</span>
              <p className="text-sm sm:text-base text-gray-700 m-0 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Practical tips */}
      <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0 mb-4 flex items-center gap-2">
          <CheckCircle2 className="text-green-600" size={22} />
          So messen Sie mit dem Online-Lineal in 3 Schritten
        </h2>
        <ol className="space-y-4 list-none p-0 m-0">
          {[
            {
              t: 'Lineal öffnen',
              d: 'Starten Sie das kostenlose Online-Lineal direkt im Browser – ohne App, ohne Anmeldung.',
            },
            {
              t: 'Bildschirm kalibrieren',
              d: 'Legen Sie eine EC-/Kreditkarte (85,6 mm) an die Skala und passen Sie sie an. Einmal kalibriert – immer exakt.',
            },
            {
              t: 'Objekt anlegen & ablesen',
              d: 'Halten Sie Ihr Objekt an den Bildschirm. Ergebnis in cm, mm und Zoll direkt sichtbar.',
            },
          ].map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shadow">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 m-0 text-base sm:text-lg">{s.t}</h3>
                <p className="text-gray-600 mt-1 mb-0 text-sm sm:text-base leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Use cases */}
      <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-purple-900 text-white p-6 sm:p-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-0 mb-4">
          Wofür eignet sich ein Online-Lineal?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm sm:text-base">
          {[
            { icon: <Smartphone size={20} />, t: 'Handy & Smartphone', d: 'Schnell messen unterwegs – ideal als lineal online handy.' },
            { icon: <Tablet size={20} />, t: 'Tablet & iPad', d: 'Großes Display, perfekt für 20–25 cm Messungen.' },
            { icon: <Monitor size={20} />, t: 'PC & Laptop', d: 'Originalgröße bis 30 cm – ersetzt das klassische Schullineal.' },
          ].map((c, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-purple-300 mb-2">{c.icon}</div>
              <h3 className="font-semibold text-white text-base m-0">{c.t}</h3>
              <p className="text-purple-100/90 text-sm mt-1 mb-0 leading-snug">{c.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0 mb-5 flex items-center gap-2">
          <HelpCircle className="text-purple-600" size={22} />
          Häufig gestellte Fragen
        </h2>
        <div className="divide-y divide-gray-100">
          {[
            {
              q: 'Ist das Online-Lineal wirklich in Originalgröße?',
              a: 'Ja. Nach der einmaligen Kalibrierung mit einer EC- oder Kreditkarte zeigt unser Lineal die echten Maße in cm, mm und Zoll an.',
            },
            {
              q: 'Funktioniert das Lineal auch auf dem Handy?',
              a: 'Absolut. Unser lineal online handy läuft in jedem mobilen Browser auf Android und iPhone – ganz ohne App.',
            },
            {
              q: 'Kostet das Online-Lineal etwas?',
              a: 'Nein. Lineal.online ist 100 % kostenlos und ohne Anmeldung nutzbar.',
            },
            {
              q: 'Wie genau ist das maßband online?',
              a: 'Nach Kalibrierung erreichen Sie eine Genauigkeit von ca. 1 mm – ausreichend für Heimwerk, Bastel- und Alltagsmessungen.',
            },
          ].map((f, i) => (
            <details key={i} className="group py-3">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 font-semibold text-gray-900 hover:text-purple-700">
                <span>{f.q}</span>
                <span className="text-purple-500 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="text-gray-600 mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 sm:p-8 text-center shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-0 mb-2">
          Jetzt das Lineal online ausprobieren
        </h2>
        <p className="text-purple-100 max-w-xl mx-auto mb-5">
          Kostenlos, ohne Download – Ihr 1 cm, 10 cm oder 30 cm Lineal direkt im Browser, in Originalgröße.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:shadow-xl transition-shadow"
        >
          Online-Lineal öffnen <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default BlogExtras;
