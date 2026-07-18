"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";

const flow = ["Kennenlernen", "Persönliches Onboarding", "Exklusive Akademie", "Führung im Alltag", "Dein Vertriebsweg", "Umsetzen & verdienen"];
const flowText = [
  "Wir sprechen über dich, deine Ziele und prüfen, ob es menschlich passt.",
  "Wir richten deinen Start gemeinsam ein – persönlich und ohne offene Fragen.",
  "Lerne Gesprächsführung, Energie-Grundlagen, Einwände, Struktur und Mindset.",
  "Ein Teamleiter begleitet dich im Cold Calling oder Door-to-Door mit echtem Feedback.",
  "Remote, am Telefon oder draußen im Feld: Wir bauen das System um deine Stärken.",
  "Du bringst Disziplin. Wir liefern Struktur, Ansprechpartner und transparente Provisionen.",
];

export default function Home() {
  const [y, setY] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const storyRef = useRef<HTMLElement>(null);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (!ticking) requestAnimationFrame(() => {
        setY(scrollY);
        const el = storyRef.current;
        if (el) {
          const r = el.getBoundingClientRect();
          setStoryProgress(Math.max(0, Math.min(1, -r.top / Math.max(1, el.offsetHeight - innerHeight))));
        }
        ticking = false;
      });
      ticking = true;
    };
    update(); addEventListener("scroll", update, { passive: true }); addEventListener("resize", update);
    return () => { removeEventListener("scroll", update); removeEventListener("resize", update); };
  }, []);
  const activeStep = Math.min(flow.length - 1, Math.floor(storyProgress * flow.length));
  return <main>
    <header className="nav"><a className="brand" href="#top"><Logo/><b>VERTRIEB</b></a><nav><a href="#ueber-uns">Über uns</a><a href="#system">System</a><a href="#wege">Dein Weg</a><a href="/energie">Energie-Check</a></nav><a className="navCta" href="/bewerbung">Potenzial prüfen ↗</a></header>
    <section className="hero" id="top"><div className="heroPortrait" aria-hidden="true"><img src="/media/city-evening.jpg" alt=""/></div><div className="grid"/><div className="glow g1" style={{transform:`translateY(${y*.1}px)`}}/><div className="glow g2" style={{transform:`translateY(${-y*.06}px)`}}/><span className="eyebrow">● VERTRIEB, DER DICH NICHT ALLEIN LÄSST</span><h1><span>Du brauchst keinen</span><span className="dim">perfekten Lebenslauf.</span><em>Du brauchst Drive.</em></h1><div className="heroSide"><p>Wir geben motivierten Menschen ein klares System, echte Ansprechpartner und die Chance, sich im Strom- und Gasvertrieb etwas Eigenes aufzubauen.</p><div><a className="btn lime" href="/bewerbung">Vertriebspartner werden ↗</a><a className="btn ghost" href="/energie">ϟ Kostenloser Energie-Check</a></div></div><div className="metrics"><span><b>100%</b> kostenloser Einstieg</span><span><b>1:1</b> Ansprechpartner</span><span><b>∞</b> Entwicklung</span></div></section>
    <section className="statement"><small>KEIN STANDARD-VERTRIEB</small><h2>Motivation bringt dich rein.<br/><em>Ein System bringt dich weiter.</em></h2><p>Du sollst nicht einfach irgendeinen Link bekommen und dann klarkommen. Bei uns weißt du vom ersten Gespräch bis zum ersten Abschluss, was als Nächstes zählt.</p></section>
    <section className="aboutUs" id="ueber-uns"><div className="aboutVisual"><img src="/media/leon-work.jpg" alt="Junger Vertriebspartner arbeitet konzentriert am Laptop"/><span>ECHTER ALLTAG · ECHTER AUFBAU</span></div><div className="aboutCopy"><small>WER HINTER JL VERTRIEB STEHT</small><h2>20 Jahre alt.<br/><em>Mehrere Jahre Vertrieb.</em></h2><p>Wir sind Leon und Justin, beide 20 Jahre alt. Trotz unseres jungen Alters haben wir bereits mehrere Jahre Erfahrung im Vertrieb gesammelt und unterschiedliche Vertriebsmodelle in der Praxis kennengelernt.</p><p>Heute konzentrieren wir uns auf Strom und Gas, weil wir hier langfristig das größte Potenzial sehen: ein verständliches Produkt, echte Nachfrage und starke Möglichkeiten im B2C- und B2B-Vertrieb.</p><blockquote>„Wir suchen Menschen, die genauso motiviert sind wie wir – die durchziehen, Feedback annehmen und sich wirklich etwas aufbauen wollen.“</blockquote><div className="aboutFacts"><span><b>20</b>Jahre alt</span><span><b>B2C + B2B</b>Strom & Gas</span><span><b>Praxis</b>statt Theorie</span></div></div></section>
    <section className="scrollStory" id="system" ref={storyRef}><div className="storySticky"><div className="storyHead"><small>DEIN WEG · SCHRITT 0{activeStep+1} VON 06</small><h2>Vom ersten Gespräch<br/>zur <em>Umsetzung.</em></h2><p>Jeder Scroll-Abschnitt öffnet den nächsten Schritt – vom Kennenlernen bis zum ersten eigenständigen Vertrieb.</p><div className="storyDots">{flow.map((_,i)=><i key={i} className={i<=activeStep?"done":""}/>)}</div></div><div className="storyStage"><div className="orbit" style={{"--progress":`${storyProgress*360}deg`} as React.CSSProperties}><i>{String(activeStep+1).padStart(2,"0")}</i><b/></div>{flow.map((x,i)=><article key={x} className={i===activeStep?"active":i<activeStep?"past":""}><span>0{i+1}</span><div><h3>{x}</h3><p>{flowText[i]}</p></div></article>)}</div></div></section>
    <section className="routes" id="wege"><div className="routeIntro"><small>DREI WEGE · EIN SYSTEM</small><h2>Arbeite so,<br/>wie du <em>stark</em> bist.</h2><p>Privatkunden vor Ort, Gewerbekunden am Telefon oder später die eigene Struktur: Wähle den Bereich, der zu deinen Stärken und deiner Erfahrung passt.</p></div><div className="routeCards"><a href="/cold-calling"><small>01 · B2B / REMOTE</small><div><h3>Cold Calling</h3><p>Gewerbekunden telefonisch ansprechen, Bedarf qualifizieren und attraktive, leistungsabhängige Provisionen verdienen.</p></div><b>MEHR ERFAHREN ↗</b></a><a href="/door-to-door"><small>02 · B2C / DEUTSCHLANDWEIT</small><div><h3>Door-to-Door</h3><p>Privathaushalte persönlich beraten, im direkten Kundenkontakt lernen und deutschlandweit arbeiten.</p></div><b>MEHR ERFAHREN ↗</b></a><a href="/teamaufbau"><small>03 · SKALIERUNG</small><div><h3>Teamaufbau</h3><p>Nach eigener Erfahrung Partner einarbeiten, führen und über vertraglich geregelte Differenzprovisionen mitwachsen.</p></div><b>MEHR ERFAHREN ↗</b></a></div></section>
    <section className="photoStory"><figure><img src="/media/atmosphere.jpg" alt="Inspirierende Umgebung für Austausch und neue Ideen"/><figcaption><b>NETZWERK</b><span>Neue Menschen kennenlernen. Horizonte erweitern.</span></figcaption></figure><figure><img src="/media/city-breakfast.jpg" alt="Arbeitsreise mit Blick über die Stadt"/><figcaption><b>FOKUS</b><span>Eigenverantwortlich arbeiten – mit einem Team im Rücken.</span></figcaption></figure><figure><img src="/media/leon-vision.jpg" alt="Blick auf eine moderne Stadtkulisse"/><figcaption><b>VISION</b><span>Nicht nur starten. Etwas Dauerhaftes aufbauen.</span></figcaption></figure><p>Persönliche Momentaufnahmen – keine Einkommens- oder Erfolgsgarantie.</p></section>
    <section className="honesty"><div className="core"><Logo large/><span className="f1">MOTIVATION</span><span className="f2">DISZIPLIN</span><span className="f3">FEEDBACK</span></div><div><small>DIE EHRLICHE ANTWORT</small><h2>Ist das für<br/>jeden? <em>Nein.</em></h2><p>Der Einstieg kostet dich kein Geld. Aber er kostet Fokus. Wir suchen Menschen, die lernen, Feedback annehmen und wirklich umsetzen wollen.</p><ul><li>Du hältst Absprachen ein.</li><li>Du bist offen dafür, Neues zu lernen.</li><li>Du willst Leistung bringen statt nur darüber zu reden.</li></ul><a className="textLink" href="/bewerbung">In 60 Sekunden Potenzial prüfen <b>→</b></a></div></section>
    <section className="energyTeaser"><div className="glow"/><small>FÜR PRIVAT- & GEWERBEKUNDEN</small><h2>Vielleicht willst du nicht verkaufen.<br/><em>Vielleicht willst du einfach weniger zahlen.</em></h2><p>Schick uns deine letzte Strom- oder Gasabrechnung. Wir prüfen sie kostenlos und unverbindlich und zeigen transparent, ob ein besseres Angebot möglich ist.</p><a href="/energie">ENERGIE-CHECK STARTEN <b>→</b></a></section>
    <section className="final"><small>BEREIT, ES ERNST ZU MEINEN?</small><h2>Dein nächster Schritt<br/>dauert 60 Sekunden.</h2><a className="btn lime" href="/bewerbung">Jetzt Potenzial prüfen ↗</a></section>
    <footer><a className="brand" href="/"><Logo/><b>VERTRIEB</b></a><div><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></div><p>Selbstständige Tätigkeit auf Provisionsbasis. Keine Einkommensgarantie.</p><span>© 2026 JL VERTRIEB</span></footer>
  </main>;
}
