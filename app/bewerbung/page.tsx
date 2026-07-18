"use client";

import { useState } from "react";
import Logo from "../logo";

const qs = [
  ["Wie ernst meinst du es gerade?", "Wähle die Aussage, die wirklich zu dir passt.", [["Ich will jetzt etwas aufbauen und ziehe durch", 2], ["Ich bin motiviert, wenn ich einen klaren Plan habe", 1], ["Lieber feiern – verändern will ich gerade nichts", -2]]],
  ["Wie viel Zeit kannst du realistisch investieren?", "Ehrlichkeit ist wichtiger als die größte Zahl.", [["10 Stunden oder mehr pro Woche", 2], ["5–10 Stunden pro Woche", 1], ["Unter 2 Stunden und nur wenn ich Lust habe", -2]]],
  ["Welche Vertriebserfahrung bringst du mit?", "Keine Erfahrung ist kein Ausschlusskriterium.", [["Keine – aber ich bin bereit zu lernen", 2], ["Ich habe bereits Vertriebserfahrung", 2], ["Keine – Feedback brauche ich aber auch nicht", -2]]],
  ["Wie gehst du mit einem Nein um?", "Im Vertrieb entscheidet deine Reaktion.", [["Analysieren, verbessern, weitermachen", 2], ["Kurz sammeln und mit Feedback neu starten", 1], ["Dann höre ich wahrscheinlich direkt auf", -2]]],
  ["Wo möchtest du starten?", "Wir richten das System passend zu dir aus.", [["Cold Calling von zuhause", 1], ["Door-to-Door im direkten Kontakt", 1], ["Ich bin offen und will es gemeinsam herausfinden", 2]]],
  ["Was erwartest du von uns?", "Die letzte Frage – dann kommt dein Ergebnis.", [["Einarbeitung, Führung und ehrliches Feedback", 2], ["Ein System, das ich konsequent nutze", 2], ["Schnelles Geld ohne Einsatz", -3]]],
] as const;

export default function Bewerbung() {
  const [s, setS] = useState(0);
  const [score, setScore] = useState(0);
  const done = s === qs.length;
  const fit = score >= 7;

  return <main className="quizPage">
    <header className="quizNav"><a className="brand" href="/"><Logo/><b>VERTRIEB</b></a><span>KOSTENLOS · CA. 60 SEKUNDEN</span></header>
    {!done ? <section className="quiz">
      <div className="progress"><i style={{width: `${(s + 1) / qs.length * 100}%`}}/></div>
      <div className="quizMeta"><button onClick={() => setS(Math.max(0, s - 1))} disabled={!s}>← ZURÜCK</button><span>FRAGE 0{s + 1} / 0{qs.length}</span></div>
      <h1>{qs[s][0]}</h1><p>{qs[s][1]}</p>
      <div className="answers">{qs[s][2].map((a, i) => <button key={a[0]} onClick={() => { setScore(score + a[1]); setS(s + 1); }}><i>{String.fromCharCode(65 + i)}</i><b>{a[0]}</b><span>→</span></button>)}</div>
      <small>Antworte ehrlich – wir suchen Potenzial, keine Fassade.</small>
    </section> : <section className="result">
      <div>{fit ? "✓" : "×"}</div><small>{fit ? "DEIN PROFIL PASST" : "NOCH NICHT DER RICHTIGE ZEITPUNKT"}</small>
      <h1>{fit ? <>Du bringst die richtige<br/><em>Einstellung</em> mit.</> : <>Ehrlich gesagt:<br/><em>So wird es schwierig.</em></>}</h1>
      <p>{fit ? "Der nächste Schritt ist ein kurzes, unverbindliches Kennenlernen. Schreib uns jetzt bei WhatsApp – die Nachricht ist vorbereitet." : "Uns sind Ehrlichkeit, Disziplin und Verbindlichkeit wichtig. Wenn du wirklich Zeit und Energie investieren willst, kannst du den Check erneut machen."}</p>
      {fit ? <a className="btn lime" href="https://wa.me/4915122232625?text=Vertrieb">Kennenlernen über WhatsApp ↗</a> : <button className="btn lime" onClick={() => { setS(0); setScore(0); }}>Antworten neu prüfen</button>}
      <a className="backHome" href="/">Zurück zur Startseite</a>
    </section>}
  </main>;
}
