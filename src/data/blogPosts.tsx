import React from 'react';

export interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  publishedAt: string;
  ogImage?: string;
  heroImage?: string;
  heroAlt: string;
  content: React.ReactNode;
}

const Section = ({ children }: { children: React.ReactNode }) => (
  <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">{children}</article>
);

export const blogPosts: BlogPostData[] = [
  {
    slug: 'lineal-10-cm-originalgroesse',
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
];

export const blogPostSlugs = blogPosts.map((p) => p.slug);

export const getBlogPostBySlug = (slug: string | undefined) =>
  blogPosts.find((p) => p.slug === slug);
