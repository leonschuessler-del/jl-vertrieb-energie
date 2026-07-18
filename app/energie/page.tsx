import EnergyCheck from "./EnergyCheck";

export default function Energie() {
  const faq = [
    ["Kostet der Energie-Check etwas?", "Nein. Die Prüfung ist kostenlos und unverbindlich."],
    ["Muss ich danach wechseln?", "Nein. Du bekommst eine Rückmeldung und entscheidest selbst."],
    ["Netto oder brutto – was trage ich ein?", "Wähle genau die Angabe, die neben dem Preis auf deiner Abrechnung steht. Wenn du unsicher bist, kannst du das ebenfalls auswählen."],
    ["Kann ich stattdessen meine Abrechnung senden?", "Ja. Wähle am Start des Checks die WhatsApp-Option und sende ein Foto oder PDF der vollständigen Abrechnung."],
  ];
  return <main className="energyPage">
    <header className="nav"><a className="brand" href="/"><i>JL</i><b>ENERGIE-CHECK</b></a><nav><a href="#energie-start">Check starten</a><a href="#ablauf">So geht&apos;s</a><a href="#faq">FAQ</a><a href="/">Vertrieb</a></nav><a className="navCta" href="#energie-start">Check starten ↘</a></header>
    <section className="energyHero"><div className="energyPortrait" aria-hidden="true"><img src="/media/energy-calm.jpg" alt=""/></div><div className="grid"/><small>KOSTENLOS · UNVERBINDLICH · PERSÖNLICH</small><h1>Deine Abrechnung.<br/><em>Ein klarer Check.</em><br/>Null Aufwand.</h1><p>Trage deine Tarifdaten online ein oder sende uns deine Abrechnung. Wir prüfen die wichtigsten Werte und antworten dir persönlich per E-Mail.</p><div className="energyActions"><a className="btn lime" href="#energie-start">Energie-Check starten ↘</a><a className="btn ghost" href="#ablauf">So funktioniert es ↓</a></div><div className="metrics"><span><b>0 €</b>Kosten</span><span><b>4 Schritte</b>online ausfüllen</span><span><b>100%</b>unverbindlich</span></div></section>
    <EnergyCheck/>
    <section className="personalCheck"><div><img src="/media/energy-personal.jpg" alt="Persönliche Prüfung und Rückmeldung zum Energie-Check"/></div><article><small>PERSÖNLICH STATT ANONYM</small><h2>Deine Daten landen<br/><em>nicht im Nirgendwo.</em></h2><p>Nach dem Absenden erhalten wir deine Angaben direkt. Wir schauen uns Verbrauch, Arbeits- und Grundpreis an und melden uns persönlich bei dir – verständlich und ohne Wechselzwang.</p><ul><li>Klare Rückmeldung per E-Mail</li><li>Keine pauschale Ersparnisbehauptung</li><li>Du entscheidest immer selbst</li></ul></article></section>
    <section className="energySteps" id="ablauf"><div className="sectionHead"><span>SO EINFACH GEHT&apos;S</span><span>3 SCHRITTE · KLARER ABLAUF</span></div><div>{[["01","Weg auswählen","Online eintragen oder Abrechnung per WhatsApp senden."],["02","Wir prüfen","Verbrauch, Grundpreis, Arbeitspreis und Liefergebiet einordnen."],["03","Persönliche Antwort","Du erhältst eine Rückmeldung per E-Mail und entscheidest selbst."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
    <section className="energyTrust"><small>WARUM JL ENERGIE-CHECK?</small><h2>Kein Druck.<br/><em>Keine leeren Versprechen.</em></h2><p>Wir versprechen keine pauschale Ersparnis, bevor wir deine Daten gesehen haben. Erst prüfen, dann transparent erklären.</p></section>
    <section className="faq" id="faq"><small>HÄUFIGE FRAGEN</small><h2>Alles, was du vorher<br/>wissen solltest.</h2>{faq.map(x=><details key={x[0]}><summary>{x[0]}<i>+</i></summary><p>{x[1]}</p></details>)}</section>
    <section className="final"><small>BEREIT FÜR KLARHEIT?</small><h2>Vier Schritte bis<br/>zu deinem Energie-Check.</h2><a className="btn lime" href="#energie-start">Jetzt online starten ↗</a></section>
    <footer><a className="brand" href="/"><i>JL</i><b>ENERGIE-CHECK</b></a><div><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></div><p>Keine pauschale Ersparnis- oder Abschlussgarantie.</p><span>© 2026 JL VERTRIEB</span></footer>
  </main>;
}
