import React from 'react';
import { measurementBlogPosts } from './measurementBlogPosts';

export interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  publishedAt: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  heroImage?: string;
  heroAlt: string;
  category?: string;
  summary?: string;
  skipBlogExtras?: boolean;
  content: React.ReactNode;
}

const Section = ({ children }: { children: React.ReactNode }) => (
  <article
    className="
      prose prose-sm sm:prose lg:prose-lg max-w-none
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
      prose-h1:text-3xl sm:prose-h1:text-4xl lg:prose-h1:text-5xl prose-h1:leading-tight prose-h1:mb-6 prose-h1:mt-0
      [&>h1:first-child]:hidden
      [&_.lead:first-of-type]:mt-0
      prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-purple-100
      prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-purple-900
      prose-p:text-gray-700 prose-p:leading-relaxed
      prose-a:text-purple-700 prose-a:font-medium hover:prose-a:text-purple-900
      prose-strong:text-gray-900
      prose-ul:my-4 prose-ol:my-4 prose-li:my-1
      prose-li:marker:text-purple-500
      prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
      prose-th:bg-purple-50 prose-th:text-purple-900
      [&_.lead]:text-lg [&_.lead]:sm:text-xl [&_.lead]:text-gray-600 [&_.lead]:leading-relaxed [&_.lead]:font-normal [&_.lead]:mb-8 [&_.lead]:border-l-4 [&_.lead]:border-purple-400 [&_.lead]:pl-4 [&_.lead]:italic
    "
  >
    {children}
  </article>
);

export const blogPosts: BlogPostData[] = [
  {
    slug: 'lineal-10-cm-originalgroesse',
    heroImage: '/lovable-uploads/77d87cd2-00a5-424e-bf36-dc75ce21996e.jpg',
    title: 'Lineal 10 cm anzeigen – Lineal 10 cm Originalgröße online',
    metaDescription:
      'Lineal 10 cm anzeigen in Originalgröße – kostenlos online, ohne Download. Präzises Online-Lineal in cm und mm für Handy, Tablet und PC.',
    keywords: 'lineal 10 cm anzeigen, lineal 10 cm originalgröße, lineal online, online lineal, lineal',
    publishedAt: '2026-06-01',
    heroAlt: 'Lineal 10 cm in Originalgröße auf einem Bildschirm angezeigt',
    content: (
      <Section>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Lineal 10 cm anzeigen – die einfachste Methode in Originalgröße
        </h1>
        <p className="lead">
          Sie möchten ein <strong>Lineal 10 cm anzeigen</strong>, ohne ein physisches Lineal zur Hand zu haben? Mit{' '}
          <strong>Lineal.online</strong> bekommen Sie ein <strong>Lineal 10 cm Originalgröße</strong> direkt im
          Browser – auf dem Handy, Tablet oder PC.
        </p>

        <h2>Warum ein 10-cm-Lineal online?</h2>
        <p>
          Ein 10-cm-Lineal ist die am häufigsten gesuchte Größe für schnelle Messungen: Schmuck, Schrauben, kleine
          Werkstücke, Kleidung oder Bastelteile. Unser <strong>online lineal</strong> zeigt die echten 10 cm exakt
          so an, wie ein Lineal aus dem Federmäppchen.
        </p>

        <h2>So zeigen Sie ein Lineal 10 cm in Originalgröße</h2>
        <ol>
          <li>Öffnen Sie unsere <a href="/">Startseite</a>.</li>
          <li>Kalibrieren Sie das Lineal kurz mit einer Kreditkarte (85,6 mm Breite).</li>
          <li>Schon haben Sie ein präzises <strong>Lineal 10 cm Originalgröße</strong>.</li>
        </ol>

        <h2>Genauigkeit prüfen</h2>
        <p>
          Vergleichen Sie das angezeigte Lineal mit einem Gegenstand bekannter Größe – z.B. einer 1-Euro-Münze
          (23,25 mm). Stimmt die Anzeige, sind Ihre 10 cm exakt.
        </p>

        <h2>Vorteile gegenüber einem klassischen Lineal</h2>
        <ul>
          <li>Immer verfügbar – auch unterwegs.</li>
          <li>Kostenlos, ohne Installation.</li>
          <li>Mehrere Einheiten: cm, mm, Zoll.</li>
          <li>Funktioniert als <strong>Lineal für Handy</strong>, Tablet und PC.</li>
        </ul>

        <p>Probieren Sie es jetzt aus – Ihr <strong>Lineal 10 cm online</strong> wartet.</p>
      </Section>
    ),
  },
  {
    slug: 'lineal-fuer-handy',
    heroImage: '/lovable-uploads/6f49caed-ebfe-4019-9c87-44395c2b5eef.jpg',
    title: 'Lineal für Handy – Lineal online Handy in cm und mm',
    metaDescription:
      'Lineal für Handy kostenlos online – Lineal online Handy in cm, mm und Zoll. Messen direkt auf dem Smartphone, ohne App-Download.',
    keywords: 'lineal für handy, lineal online handy, lineal online, online lineal, maßband online',
    publishedAt: '2026-06-01',
    heroAlt: 'Lineal für Handy – Online-Lineal auf Smartphone-Bildschirm',
    content: (
      <Section>
        <h1>Lineal für Handy – kostenlos online messen</h1>
        <p className="lead">
          Ein <strong>Lineal für Handy</strong> ist die schnellste Möglichkeit, Dinge unterwegs zu messen. Unser{' '}
          <strong>lineal online handy</strong> verwandelt jedes Smartphone in ein präzises Messgerät – ganz ohne
          App.
        </p>

        <h2>Wie funktioniert das Handy-Lineal?</h2>
        <p>
          Smartphones haben unterschiedliche Pixeldichten. Damit das <strong>online lineal</strong> echte Maße
          anzeigt, kalibrieren Sie es einmal mit Ihrer EC- oder Kreditkarte (85,6 mm). Danach werden cm, mm und
          Zoll exakt angezeigt.
        </p>

        <h2>Vorteile eines Online-Lineals fürs Handy</h2>
        <ul>
          <li>Keine App, kein Download.</li>
          <li>Funktioniert auf Android und iPhone.</li>
          <li>Lineal 10 cm anzeigen mit einem Tippen.</li>
          <li>Messen im Hoch- oder Querformat.</li>
        </ul>

        <h2>Anwendungsfälle</h2>
        <p>
          Schrauben, Kleidergrößen, Bastelteile, Schmuckmaße, Werkstücke – alles, was kleiner ist als Ihre
          Bildschirmdiagonale, können Sie mit dem <strong>Lineal für Handy</strong> messen.
        </p>

        <p>
          Jetzt öffnen: <a href="/">Lineal.online</a> – Ihr <strong>Lineal online Handy</strong> in
          Originalgröße.
        </p>
      </Section>
    ),
  },
  {
    slug: 'massband-online',
    heroImage: '/lovable-uploads/regla-midiendo.jpg',
    title: 'Maßband online – kostenlos in cm und mm messen',
    metaDescription:
      'Maßband online kostenlos – messen Sie Längen in cm, mm und Zoll direkt im Browser. Präzises Online-Maßband für Handy, Tablet und PC.',
    keywords: 'maßband online, lineal online, online lineal, maßband, messen online',
    publishedAt: '2026-06-01',
    heroAlt: 'Maßband online – digitales Online-Maßband',
    content: (
      <Section>
        <h1>Maßband online – das kostenlose digitale Maßband</h1>
        <p className="lead">
          Ein <strong>maßband online</strong> ist ideal, wenn Sie schnell etwas messen müssen und kein klassisches
          Maßband zur Hand haben. Bei Lineal.online finden Sie ein präzises digitales Maßband direkt im Browser.
        </p>

        <h2>Wie unterscheidet sich das Maßband vom Lineal?</h2>
        <p>
          Ein Maßband ist flexibel und meist länger als ein Lineal. Online entfällt dieser Unterschied – beide
          messen Längen in cm, mm und Zoll. Unser Tool kombiniert beides: <strong>online lineal</strong> +{' '}
          <strong>maßband online</strong> in einer Anwendung.
        </p>

        <h2>Kalibrierung in 30 Sekunden</h2>
        <ol>
          <li>EC-Karte an den Bildschirm halten.</li>
          <li>Skala so verschieben, dass die Karte 85,6 mm misst.</li>
          <li>Speichern – fertig.</li>
        </ol>

        <h2>Wofür eignet sich ein Online-Maßband?</h2>
        <ul>
          <li>Bastel- und DIY-Projekte</li>
          <li>Schule und Unterricht</li>
          <li>Schmuck, Knöpfe, Kleinteile</li>
          <li>Designarbeit am Bildschirm</li>
        </ul>

        <p>
          Starten Sie jetzt mit dem kostenlosen <a href="/">Maßband online</a> – auch als{' '}
          <strong>Lineal für Handy</strong> nutzbar.
        </p>
      </Section>
    ),
  },
  {
    slug: '1-cm-in-mm',
    heroImage: '/lovable-uploads/regla-dibujo.jpg',
    title: '1 cm in mm – Umrechnung & 1 centymetr erklärt',
    metaDescription:
      '1 cm in mm einfach erklärt: 1 Zentimeter = 10 Millimeter. Umrechnungstabelle, Beispiele und ein kostenloses Online-Lineal zum direkten Messen.',
    keywords: '1 centymetr, 1 cm in mm, zentimeter, millimeter, einheiten umrechnen, lineal online',
    publishedAt: '2026-06-01',
    heroAlt: '1 cm in mm – Umrechnung zwischen Zentimeter und Millimeter',
    content: (
      <Section>
        <h1>1 cm in mm – wie viele Millimeter sind 1 Zentimeter?</h1>
        <p className="lead">
          Die Antwort ist einfach: <strong>1 cm = 10 mm</strong>. Ein <strong>1 centymetr</strong> entspricht
          exakt zehn Millimetern. Mit unserem <strong>lineal online</strong> sehen Sie diese 10 Striche sofort in
          Originalgröße.
        </p>

        <h2>Umrechnungstabelle Zentimeter ↔ Millimeter</h2>
        <table>
          <thead><tr><th>Zentimeter (cm)</th><th>Millimeter (mm)</th></tr></thead>
          <tbody>
            <tr><td>0,1 cm</td><td>1 mm</td></tr>
            <tr><td>0,5 cm</td><td>5 mm</td></tr>
            <tr><td>1 cm</td><td>10 mm</td></tr>
            <tr><td>5 cm</td><td>50 mm</td></tr>
            <tr><td>10 cm</td><td>100 mm</td></tr>
            <tr><td>30 cm</td><td>300 mm</td></tr>
          </tbody>
        </table>

        <h2>Warum die Umrechnung wichtig ist</h2>
        <p>
          In technischen Zeichnungen, Bauanleitungen und beim Heimwerken werden Maße häufig in mm angegeben. In
          der Schule und im Alltag dagegen in cm. Wer schnell umrechnen kann, vermeidet teure Fehler.
        </p>

        <h2>Direkt am Bildschirm messen</h2>
        <p>
          Sie wollen Ihr Maß sofort prüfen? Nutzen Sie unser <a href="/">Lineal online in Originalgröße</a> –
          ideal als <strong>Lineal für Handy</strong> oder PC.
        </p>
      </Section>
    ),
  },
  {
    slug: 'wie-benutzt-man-ein-lineal',
    heroImage: '/lovable-uploads/381e2e34-ef77-4b15-a19c-117866a61d42.jpg',
    title: 'Wie benutzt man ein Lineal richtig? Anleitung & Tipps',
    metaDescription:
      'Wie benutzt man ein Lineal richtig? Schritt-für-Schritt-Anleitung zum genauen Messen in cm, mm und Zoll – inkl. Online-Lineal in Originalgröße.',
    keywords: 'lineal benutzen, lineal richtig nutzen, lineal online, messen',
    publishedAt: '2026-06-01',
    heroAlt: 'Anleitung: Wie man ein Lineal richtig benutzt',
    content: (
      <Section>
        <h1>Wie benutzt man ein Lineal richtig?</h1>
        <p className="lead">
          Ein Lineal sieht einfach aus – kleine Anwendungsfehler führen aber zu großen Messabweichungen. Diese
          Anleitung zeigt Ihnen, wie Sie mit einem klassischen oder einem <strong>online lineal</strong> exakt
          messen.
        </p>

        <h2>1. Den Nullpunkt richtig anlegen</h2>
        <p>
          Bei vielen Linealen beginnt die Skala nicht an der Kante, sondern leicht versetzt. Achten Sie darauf,
          dass die Kante des Objekts exakt auf der Markierung „0" liegt – nicht am Linealende.
        </p>

        <h2>2. Augenposition korrekt halten</h2>
        <p>
          Blicken Sie senkrecht von oben auf die Skala. Schräges Ablesen (Parallaxenfehler) kann mehrere
          Millimeter ausmachen.
        </p>

        <h2>3. Messen in Millimetern statt Zentimetern</h2>
        <p>
          Für präzises Arbeiten lieber in mm ablesen. Tipp: <strong>1 cm = 10 mm</strong>.
        </p>

        <h2>4. Online-Lineal als Alternative</h2>
        <p>
          Kein physisches Lineal zur Hand? Unser <a href="/">Lineal online in Originalgröße</a> ist genauso genau,
          sobald Sie es einmal kalibriert haben – und immer dabei als <strong>Lineal für Handy</strong>.
        </p>
      </Section>
    ),
  },
  {
    slug: 'metrisches-system',
    heroImage: '/lovable-uploads/79ba06b7-f526-4c13-8eda-7f0f2ac9be8f.jpg',
    title: 'Das metrische System einfach erklärt',
    metaDescription:
      'Das metrische System: Geschichte, Einheiten und Vorteile. Meter, Zentimeter, Millimeter – alles auf einen Blick.',
    keywords: 'metrisches system, einheiten, meter, zentimeter, millimeter',
    publishedAt: '2026-06-01',
    heroAlt: 'Metrisches System – Einheiten von mm bis km',
    content: (
      <Section>
        <h1>Das metrische System – Grundlagen verständlich erklärt</h1>
        <p className="lead">
          Das metrische System ist ein dezimales Maßsystem, das in fast allen Ländern der Welt verwendet wird.
          Basiseinheit für Längen ist der <strong>Meter</strong>.
        </p>

        <h2>Wichtige Längeneinheiten</h2>
        <ul>
          <li>1 Kilometer (km) = 1.000 Meter</li>
          <li>1 Meter (m) = 100 Zentimeter</li>
          <li>1 Zentimeter (cm) = 10 Millimeter</li>
          <li>1 Millimeter (mm) = 1.000 Mikrometer</li>
        </ul>

        <h2>Warum dezimal?</h2>
        <p>
          Jede Einheit ist das Zehnfache der nächstkleineren. Das macht Umrechnungen kinderleicht – im
          Gegensatz zum angloamerikanischen System mit Inches, Feet und Yards.
        </p>

        <h2>Praxisbezug</h2>
        <p>
          Unser <a href="/">Lineal online</a> nutzt selbstverständlich das metrische System. Sie können jederzeit
          zwischen cm, mm und Zoll wechseln.
        </p>
      </Section>
    ),
  },
  {
    slug: 'mks-system',
    heroImage: '/lovable-uploads/3d520faf-c186-4486-92e5-9bcbb32657b4.jpg',
    title: 'MKS-System – Meter, Kilogramm, Sekunde',
    metaDescription:
      'Das MKS-System (Meter, Kilogramm, Sekunde) ist die Basis des SI-Systems. Definition, Geschichte und Anwendung verständlich erklärt.',
    keywords: 'mks system, si einheiten, meter, kilogramm, sekunde',
    publishedAt: '2026-06-01',
    heroAlt: 'MKS-System – Meter, Kilogramm, Sekunde',
    content: (
      <Section>
        <h1>Das MKS-System – Grundlage des SI</h1>
        <p className="lead">
          Das MKS-System verwendet drei Basiseinheiten: <strong>Meter</strong> (Länge), <strong>Kilogramm</strong>{' '}
          (Masse) und <strong>Sekunde</strong> (Zeit). Es ist die Grundlage des heute international gültigen
          SI-Systems.
        </p>

        <h2>Warum drei Basiseinheiten?</h2>
        <p>
          Mit Länge, Masse und Zeit lassen sich nahezu alle mechanischen Größen ableiten: Geschwindigkeit (m/s),
          Beschleunigung (m/s²), Kraft (kg·m/s² = Newton), Energie (Joule) und viele mehr.
        </p>

        <h2>Vom MKS zum SI</h2>
        <p>
          Das SI-System hat das MKS-System um vier weitere Basiseinheiten ergänzt: Ampere, Kelvin, Mol und
          Candela.
        </p>

        <p>
          Für Längenmessungen reicht das MKS bzw. unser <a href="/">Lineal online</a> in cm und mm vollkommen aus.
        </p>
      </Section>
    ),
  },
  {
    slug: 'angloamerikanisches-system',
    heroImage: '/lovable-uploads/2bfee74f-0a29-4825-ba3c-d22d5a01c53d.jpg',
    title: 'Das angloamerikanische Maßsystem – Zoll, Fuß, Yard',
    metaDescription:
      'Das angloamerikanische Maßsystem mit Inch, Foot, Yard und Mile – Definitionen, Umrechnung in cm und mm sowie praktische Beispiele.',
    keywords: 'angloamerikanisches system, zoll, inch, fuß, foot, yard',
    publishedAt: '2026-06-01',
    heroAlt: 'Angloamerikanisches Maßsystem – Zoll, Fuß, Yard',
    content: (
      <Section>
        <h1>Das angloamerikanische Maßsystem</h1>
        <p className="lead">
          In den USA und teilweise in Großbritannien ist das angloamerikanische Maßsystem noch verbreitet. Wichtige
          Einheiten sind Inch (Zoll), Foot (Fuß), Yard und Mile (Meile).
        </p>

        <h2>Umrechnung in das metrische System</h2>
        <ul>
          <li>1 Zoll (in) = 2,54 cm</li>
          <li>1 Fuß (ft) = 30,48 cm</li>
          <li>1 Yard (yd) = 91,44 cm</li>
          <li>1 Meile (mi) = 1,609 km</li>
        </ul>

        <h2>Warum kennen?</h2>
        <p>
          Bildschirmgrößen, Reifendurchmesser, Rohrgewinde und Maschinenteile werden oft in Zoll angegeben. Unser{' '}
          <a href="/">Lineal online</a> beherrscht beide Systeme – wechseln Sie per Klick zwischen cm und Zoll.
        </p>
      </Section>
    ),
  },
  {
    slug: 'natuerliches-einheitensystem',
    heroImage: '/lovable-uploads/6e30be3b-fb3c-45ac-9368-d0c966ceb463.jpg',
    title: 'Natürliches Einheitensystem in der Physik',
    metaDescription:
      'Das natürliche Einheitensystem nutzt fundamentale Naturkonstanten als Basis. Verständlich erklärt – mit Bezug zum Alltag.',
    keywords: 'natürliche einheiten, physik, planck einheiten',
    publishedAt: '2026-06-01',
    heroAlt: 'Natürliches Einheitensystem in der Physik',
    content: (
      <Section>
        <h1>Natürliches Einheitensystem</h1>
        <p className="lead">
          Anders als das metrische oder angloamerikanische System verwenden natürliche Einheiten fundamentale
          Naturkonstanten als Basis – z.B. die Lichtgeschwindigkeit c oder das Planck'sche Wirkungsquantum h.
        </p>

        <h2>Planck-Einheiten</h2>
        <p>
          Die bekannteste Form natürlicher Einheiten sind die Planck-Einheiten. Sie sind unabhängig von menschlich
          definierten Größen wie Meter oder Sekunde.
        </p>

        <h2>Praxis</h2>
        <p>
          Im Alltag spielen natürliche Einheiten keine Rolle – dort genügt ein <a href="/">Lineal online</a> in cm
          und mm. In der theoretischen Physik vereinfachen sie aber Gleichungen erheblich.
        </p>
      </Section>
    ),
  },
  {
    slug: 'klinometer',
    heroImage: '/lovable-uploads/65090091-5d64-4667-af28-509718c18951.jpg',
    title: 'Klinometer – was ist das und wie nutzt man es?',
    metaDescription:
      'Klinometer einfach erklärt: Was ist ein Klinometer, wie funktioniert es und wofür wird es eingesetzt? Inklusive moderner Smartphone-Anwendungen.',
    keywords: 'klinometer, winkel messen, neigung, gefälle',
    publishedAt: '2026-06-01',
    heroAlt: 'Klinometer zur Messung von Neigungswinkeln',
    content: (
      <Section>
        <h1>Klinometer – Neigungen genau messen</h1>
        <p className="lead">
          Ein <strong>Klinometer</strong> (auch Neigungsmesser) misst Winkel relativ zur Horizontalen. Es kommt in
          Geodäsie, Forstwirtschaft, Bauwesen und Sport zum Einsatz.
        </p>

        <h2>Funktionsweise</h2>
        <p>
          Klassische Klinometer arbeiten mit einer Pendelmechanik oder Wasserwaage. Moderne Geräte – auch viele
          Smartphone-Apps – nutzen MEMS-Beschleunigungssensoren.
        </p>

        <h2>Anwendungsbereiche</h2>
        <ul>
          <li>Baumhöhen messen (Forstwirtschaft)</li>
          <li>Gefälle von Dächern und Rampen prüfen</li>
          <li>Steigung von Skipisten</li>
          <li>Geologische Vermessungen</li>
        </ul>

        <h2>Lineal und Klinometer kombinieren</h2>
        <p>
          Längen messen Sie mit unserem <a href="/">Lineal online</a>, Winkel mit einem Klinometer-App. Beide
          Werkzeuge ergänzen sich perfekt.
        </p>
      </Section>
    ),
  },
  {
    slug: 'tiefenmesser',
    heroImage: '/lovable-uploads/418b6e62-05e8-4066-b239-ae9919d11840.jpg',
    title: 'Tiefenmesser – Funktion, Anwendung und Tipps',
    metaDescription:
      'Tiefenmesser: Was ist das, wie funktioniert er und wofür wird er eingesetzt? Übersicht über mechanische und digitale Tiefenmesser.',
    keywords: 'tiefenmesser, messen, tiefe, messschieber',
    publishedAt: '2026-06-01',
    heroAlt: 'Tiefenmesser zur Messung von Tiefen und Bohrungen',
    content: (
      <Section>
        <h1>Tiefenmesser – präzise Tiefenmessung im Detail</h1>
        <p className="lead">
          Ein <strong>Tiefenmesser</strong> misst die Tiefe von Bohrungen, Nuten oder Vertiefungen. Er ist in
          jeder Werkstatt unverzichtbar.
        </p>

        <h2>Bauarten</h2>
        <ul>
          <li>Mechanischer Tiefenmesser (Messuhr oder Nonius)</li>
          <li>Digitaler Tiefenmesser mit LCD-Anzeige</li>
          <li>Tiefenmessstab am Messschieber</li>
        </ul>

        <h2>So messen Sie korrekt</h2>
        <ol>
          <li>Werkstück sauber halten.</li>
          <li>Tiefenmesser senkrecht ansetzen.</li>
          <li>Messwert in mm ablesen.</li>
        </ol>

        <p>
          Für oberflächliche Längenmessungen genügt ein <a href="/">Lineal online</a> – Tiefenmessungen verlangen
          jedoch ein physisches Werkzeug.
        </p>
      </Section>
    ),
  },
  {
    slug: 'dimensionslose-zahlen',
    heroImage: '/lovable-uploads/numeros-adimensionales.jpg',
    title: 'Dimensionslose Zahlen – Bedeutung & Beispiele',
    metaDescription:
      'Was sind dimensionslose Zahlen? Reynolds-Zahl, Mach-Zahl und mehr – Definition, Beispiele und Bedeutung in der Physik.',
    keywords: 'dimensionslose zahlen, reynolds zahl, physik',
    publishedAt: '2026-06-01',
    heroAlt: 'Dimensionslose Zahlen in der Physik',
    content: (
      <Section>
        <h1>Dimensionslose Zahlen in der Physik</h1>
        <p className="lead">
          <strong>Dimensionslose Zahlen</strong> sind Größen ohne Maßeinheit. Sie sind in Physik und Technik
          besonders nützlich, weil sie Skalierungseffekte beschreiben.
        </p>

        <h2>Bekannte Beispiele</h2>
        <ul>
          <li><strong>Reynolds-Zahl</strong> – Strömungslehre</li>
          <li><strong>Mach-Zahl</strong> – Verhältnis zur Schallgeschwindigkeit</li>
          <li><strong>Pi (π)</strong> – Verhältnis Umfang zu Durchmesser</li>
          <li><strong>Feinstrukturkonstante</strong> – Quantenelektrodynamik</li>
        </ul>

        <h2>Warum wichtig?</h2>
        <p>
          Dimensionslose Kennzahlen erlauben es, Experimente zwischen Modell und Realität zu skalieren – etwa im
          Windkanal oder bei Schiffsmodellen.
        </p>

        <p>
          Klassische Längen messen Sie weiterhin mit unserem <a href="/">Lineal online</a> in cm und mm.
        </p>
      </Section>
    ),
  },
  {
    slug: 'online-lineal-genau-messen',
    heroImage: '/lovable-uploads/6328a843-2738-47e0-a58d-69f6ab06586b.jpg',
    title: 'Online Lineal – genau messen am Bildschirm',
    metaDescription:
      'Online Lineal kostenlos: messen Sie präzise in cm, mm und Zoll am Bildschirm. So nutzen Sie ein lineal online ohne Download.',
    keywords: 'online lineal, lineal online, lineal, messen am bildschirm',
    publishedAt: '2026-06-01',
    heroAlt: 'Online Lineal zur Messung am Bildschirm',
    content: (
      <Section>
        <h1>Online Lineal – präzise messen ohne Werkzeug</h1>
        <p className="lead">
          Ein <strong>online lineal</strong> ersetzt das physische Lineal überall dort, wo Sie spontan etwas
          ausmessen müssen. Auf <a href="/">Lineal.online</a> bekommen Sie ein vollwertiges{' '}
          <strong>lineal online</strong> in Originalgröße.
        </p>

        <h2>Drei Schritte zur exakten Messung</h2>
        <ol>
          <li>Seite öffnen und Lineal anzeigen lassen.</li>
          <li>Mit EC-Karte (85,6 mm) einmalig kalibrieren.</li>
          <li>Objekt an den Bildschirm halten und ablesen.</li>
        </ol>

        <h2>Wann lohnt ein Online-Lineal?</h2>
        <ul>
          <li>Schmuck, Knöpfe, Schrauben schnell messen</li>
          <li>Kleidung und Stoff zuschneiden</li>
          <li>DIY-Projekte am Schreibtisch</li>
          <li>Als <strong>Lineal für Handy</strong> unterwegs</li>
        </ul>

        <p>Einmal kalibriert, ist Ihr <strong>online lineal</strong> exakt wie ein Werkzeug aus der Werkstatt.</p>
      </Section>
    ),
  },
  {
    slug: 'lineal-online-kostenlos',
    heroImage: '/lovable-uploads/cb6e8a8e-753f-42a5-9096-0c85f9ac17d4.jpg',
    title: 'Lineal online kostenlos – ohne Anmeldung nutzen',
    metaDescription:
      'Lineal online kostenlos und ohne Anmeldung: cm, mm, Zoll direkt im Browser. Funktioniert auf Handy, Tablet und PC.',
    keywords: 'lineal online, online lineal, lineal kostenlos, lineal ohne anmeldung',
    publishedAt: '2026-06-01',
    heroAlt: 'Lineal online kostenlos im Browser',
    content: (
      <Section>
        <h1>Lineal online kostenlos – das beste Tool im Browser</h1>
        <p className="lead">
          <strong>Lineal online</strong> ohne Anmeldung, ohne Werbung im Weg, ohne Download: Lineal.online ist
          das schnellste Werkzeug für eine präzise Messung am Bildschirm.
        </p>

        <h2>Warum kostenlos?</h2>
        <p>
          Ein Lineal ist Grundausstattung – es sollte jederzeit verfügbar sein. Genau dafür gibt es unser
          kostenloses <strong>online lineal</strong>.
        </p>

        <h2>Was Sie damit machen können</h2>
        <ul>
          <li>Lineal 10 cm anzeigen in Originalgröße</li>
          <li>1 centymetr exakt sehen (= 10 mm)</li>
          <li>Längen auf Handy, Tablet oder PC messen</li>
          <li>Als <strong>maßband online</strong> nutzen</li>
        </ul>

        <p>Jetzt öffnen: <a href="/">Lineal.online</a>.</p>
      </Section>
    ),
  },
  {
    slug: 'lineal-30-cm-online',
    heroImage: '/lovable-uploads/ac043476-ab03-4ce6-b0b3-942cb4d79ac5.jpg',
    title: 'Lineal 30 cm online – das klassische Schullineal digital',
    metaDescription:
      'Lineal 30 cm online in Originalgröße – ideal als Schullineal am Bildschirm. Kostenlos, präzise und für Handy, Tablet und PC.',
    keywords: 'lineal 30 cm, lineal online, schullineal, online lineal',
    publishedAt: '2026-06-01',
    heroAlt: 'Lineal 30 cm online – Schullineal im Browser',
    content: (
      <Section>
        <h1>Lineal 30 cm online – das Schullineal digital</h1>
        <p className="lead">
          Das klassische 30-cm-Lineal ist Standard in Schule, Studium und Büro. Unser{' '}
          <strong>lineal online</strong> zeigt es direkt am Bildschirm – auf großen Monitoren in echter
          Originalgröße.
        </p>

        <h2>Voraussetzungen</h2>
        <p>
          Für ein vollständiges 30-cm-Lineal benötigen Sie einen Bildschirm mit mindestens 13 Zoll Diagonale.
          Auf dem Handy zeigen wir automatisch ein kürzeres Lineal, das aber genauso exakt skaliert.
        </p>

        <h2>Typische Einsätze</h2>
        <ul>
          <li>Schulaufgaben und Geometrie</li>
          <li>Skizzen und technische Zeichnungen</li>
          <li>Bastelarbeiten mit Papier</li>
        </ul>

        <p>Direkt nutzen: <a href="/">Lineal.online</a>.</p>
      </Section>
    ),
  },
  {
    slug: 'zoll-in-cm-umrechnen',
    heroImage: '/lovable-uploads/3aaf4fe4-39fa-4068-9fb3-a5d1decbbc8e.jpg',
    title: 'Zoll in cm umrechnen – Tabelle & Online-Lineal',
    metaDescription:
      'Zoll in cm umrechnen: 1 Zoll = 2,54 cm. Umrechnungstabelle, Beispiele und ein kostenloses Online-Lineal in cm und Zoll.',
    keywords: 'zoll in cm, inch in cm, umrechnung, lineal online',
    publishedAt: '2026-06-01',
    heroAlt: 'Zoll in cm umrechnen – Tabelle und Online-Lineal',
    content: (
      <Section>
        <h1>Zoll in cm – die schnelle Umrechnung</h1>
        <p className="lead">
          <strong>1 Zoll = 2,54 cm</strong>. Mit dieser einfachen Formel rechnen Sie jede angloamerikanische
          Größe ins metrische System um.
        </p>

        <h2>Umrechnungstabelle</h2>
        <table>
          <thead><tr><th>Zoll (in)</th><th>Zentimeter (cm)</th></tr></thead>
          <tbody>
            <tr><td>1"</td><td>2,54 cm</td></tr>
            <tr><td>5"</td><td>12,7 cm</td></tr>
            <tr><td>10"</td><td>25,4 cm</td></tr>
            <tr><td>15"</td><td>38,1 cm</td></tr>
            <tr><td>24"</td><td>60,96 cm</td></tr>
            <tr><td>32"</td><td>81,28 cm</td></tr>
          </tbody>
        </table>

        <h2>Wo brauchen Sie das?</h2>
        <p>
          Bildschirmgrößen, Fahrrad- und Autoreifen, Felgen, Rohre und viele Maschinenteile werden in Zoll
          angegeben. Mit unserem <a href="/">Lineal online</a> wechseln Sie per Klick zwischen cm und Zoll.
        </p>
      </Section>
    ),
  },
  {
    slug: 'bildschirm-kalibrieren',
    heroImage: '/lovable-uploads/c058baa5-0359-41f1-a81f-fdaeb13aa151.jpg',
    title: 'Bildschirm kalibrieren – so wird Ihr Lineal exakt',
    metaDescription:
      'Bildschirm kalibrieren für ein präzises Online-Lineal: Anleitung mit EC-Karte, Münze oder Maßband. Funktioniert auf Handy, Tablet und PC.',
    keywords: 'bildschirm kalibrieren, lineal kalibrieren, lineal online, online lineal',
    publishedAt: '2026-06-01',
    heroAlt: 'Bildschirm kalibrieren für exaktes Online-Lineal',
    content: (
      <Section>
        <h1>Bildschirm kalibrieren – exakte Maße am Display</h1>
        <p className="lead">
          Damit ein <strong>online lineal</strong> exakte Maße anzeigt, muss der Bildschirm kalibriert werden.
          Jedes Gerät hat eine andere Pixeldichte – ohne Kalibrierung gibt es Abweichungen.
        </p>

        <h2>Methode 1: EC-/Kreditkarte</h2>
        <p>
          Standardkarten haben exakt <strong>85,6 × 53,98 mm</strong>. Karte ans Display halten und die Skala
          unseres Lineals so verschieben, dass sie zur Karte passt.
        </p>

        <h2>Methode 2: Münze</h2>
        <p>
          Eine 1-Euro-Münze hat 23,25 mm Durchmesser, ein 2-Euro-Stück 25,75 mm. Ideal für die Feinjustierung.
        </p>

        <h2>Methode 3: Maßband</h2>
        <p>
          Wenn Sie ein klassisches Maßband zur Hand haben, vergleichen Sie damit eine 10-cm-Strecke. So wird Ihr{' '}
          <strong>maßband online</strong> deckungsgleich mit dem echten Werkzeug.
        </p>

        <p>Einmal kalibriert, bleibt die Einstellung für Ihr Gerät gespeichert.</p>
      </Section>
    ),
  },
  {
    slug: 'lineal-fuer-tablet',
    heroImage: '/lovable-uploads/7f2b24cb-d011-4b17-aeb8-901c4b6b5fef.jpg',
    title: 'Lineal für Tablet – iPad und Android kostenlos messen',
    metaDescription:
      'Lineal für Tablet kostenlos online: messen Sie auf iPad und Android-Tablets in cm, mm und Zoll. Größerer Bildschirm = längeres Lineal.',
    keywords: 'lineal tablet, lineal ipad, lineal online, online lineal',
    publishedAt: '2026-06-01',
    heroAlt: 'Lineal für Tablet – iPad und Android',
    content: (
      <Section>
        <h1>Lineal für Tablet – die ideale Bildschirmgröße</h1>
        <p className="lead">
          Tablets sind die perfekte Plattform für ein <strong>online lineal</strong>: groß genug für ein
          komplettes 20-cm-Lineal, mobil genug für jeden Einsatzort.
        </p>

        <h2>iPad, Galaxy Tab & Co.</h2>
        <p>
          Unser Tool funktioniert in jedem modernen Browser – Safari, Chrome, Firefox, Edge. Eine App-Installation
          ist nicht nötig.
        </p>

        <h2>Vorteile</h2>
        <ul>
          <li>Großes Display = langes Lineal (oft bis 25 cm)</li>
          <li>Touch-Bedienung für schnelle Kalibrierung</li>
          <li>Hoch- und Querformat unterstützt</li>
          <li>Auch als <strong>Lineal für Handy</strong> nutzbar</li>
        </ul>

        <p>Direkt loslegen: <a href="/">Lineal.online</a>.</p>
      </Section>
    ),
  },
  {
    slug: 'mm-genau-messen',
    heroImage: '/lovable-uploads/cfc618aa-7a76-41fd-b3e3-7680ab8f7538.jpg',
    title: 'Millimeter genau messen – Tipps & Online-Tools',
    metaDescription:
      'Millimeter genau messen: Anleitung für präzise mm-Messungen mit Lineal, Messschieber und Online-Lineal in Originalgröße.',
    keywords: 'millimeter messen, mm messen, lineal online, präzise messen',
    publishedAt: '2026-06-01',
    heroAlt: 'Millimeter genau messen mit Lineal und Messschieber',
    content: (
      <Section>
        <h1>Millimeter genau messen – so geht's richtig</h1>
        <p className="lead">
          Bei Heimwerken, Modellbau oder Schmuck zählt jeder Millimeter. Mit den richtigen Techniken und einem
          präzisen <strong>online lineal</strong> erreichen Sie professionelle Genauigkeit.
        </p>

        <h2>Tipps für mm-genaue Messungen</h2>
        <ul>
          <li>Senkrecht auf die Skala blicken (Parallaxenfehler vermeiden)</li>
          <li>Nullpunkt sauber anlegen</li>
          <li>Lineal mit feiner mm-Teilung verwenden</li>
          <li>Bei sehr kleinen Maßen Messschieber benutzen</li>
        </ul>

        <h2>Umrechnungen</h2>
        <p>
          <strong>1 cm = 10 mm</strong>, <strong>1 Zoll = 25,4 mm</strong>. Unser Tool zeigt alle drei Einheiten
          gleichzeitig.
        </p>

        <h2>Online-Lineal mit mm-Skala</h2>
        <p>
          Unser <a href="/">Lineal online</a> zeigt jede Millimeter-Markierung deutlich – ideal für präzise
          Arbeiten am Bildschirm.
        </p>
      </Section>
    ),
  },
  ...measurementBlogPosts,
];

export const blogPostSlugs = blogPosts.map((p) => p.slug);

export const getBlogPostBySlug = (slug: string | undefined) =>
  blogPosts.find((p) => p.slug === slug);
