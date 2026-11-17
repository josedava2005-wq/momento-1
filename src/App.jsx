import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Leaf, Sparkles } from 'lucide-react';
import CalorieSummary from './components/CalorieSummary.jsx';
import dailySummary from './data/daily-summary.json';

export default function App() {
  const [consumed, setConsumed] = useState(dailySummary.consumedKcal);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Sazón, inicio">
          <span className="brand-mark"><Leaf size={19} strokeWidth={2.2} /></span>
          <span>sazón<span className="brand-period">.</span></span>
        </a>
        <div className="topbar-note"><span className="status-dot" /> Tu espacio de bienestar</div>
      </header>

      <main id="inicio" className="page-content">
        <section className="intro" aria-labelledby="page-title">
          <div className="eyebrow"><Sparkles size={14} /> {dailySummary.dateLabel}</div>
          <h1 id="page-title">Tu día, <span>en balance.</span></h1>
          <p>Un paso a la vez. Así va tu meta de hoy.</p>
        </section>

        <CalorieSummary
          goal={dailySummary.goalKcal}
          consumed={consumed}
          onAdd={() => setConsumed((value) => value + 100)}
          onRemove={() => setConsumed((value) => Math.max(0, value - 100))}
        />

        <section className="note-strip" aria-label="Mensaje del día">
          <span className="note-icon"><ArrowUpRight size={17} /></span>
          <p><strong>Vas a tu ritmo.</strong> Cada elección cuenta; el balance se construye durante todo el día.</p>
          <ArrowDownRight className="note-arrow" size={18} aria-hidden="true" />
        </section>
      </main>
      <footer className="page-footer">Sazón <span>·</span> Un hábito que se disfruta</footer>
    </div>
  );
}