import { Minus, Plus, Target } from 'lucide-react';

export default function CalorieSummary({ goal, consumed, onAdd, onRemove }) {
  const percentage = Math.round((consumed / goal) * 100);
  const progress = Math.min(percentage, 100);
  const remaining = goal - consumed;
  const isOverGoal = remaining < 0;

  return (
    <section className="summary-panel" aria-labelledby="summary-title">
      <div className="panel-heading">
        <div>
          <div className="section-label">TU RESUMEN DIARIO</div>
          <h2 id="summary-title">Balance de calorías</h2>
        </div>
        <span className="live-badge"><span className="status-dot" /> En curso</span>
      </div>

      <div className="summary-content">
        <div className="progress-wrap">
          <div
            className="progress-ring"
            role="img"
            aria-label={`${percentage}% de la meta diaria consumida`}
            style={{ '--progress': `${progress}%` }}
          >
            <div className="progress-center">
              <span className="progress-number">{percentage}<span>%</span></span>
              <span className="progress-caption">de tu meta</span>
            </div>
          </div>
          <div className="ring-legend"><span /> Consumo de hoy</div>
        </div>

        <div className="metrics">
          <div className="metric metric-consumed">
            <span className="metric-label">Consumido hoy</span>
            <strong className="metric-value">{consumed.toLocaleString('es-CO')} <span>kcal</span></strong>
          </div>
          <div className="metric-row">
            <div className="metric">
              <span className="metric-label"><Target size={14} /> Meta diaria</span>
              <strong className="metric-value metric-value-small">{goal.toLocaleString('es-CO')} <span>kcal</span></strong>
            </div>
            <div className="metric metric-remaining">
              <span className="metric-label">{isOverGoal ? 'Sobre la meta' : 'Te quedan'}</span>
              <strong className="metric-value metric-value-small">{Math.abs(remaining).toLocaleString('es-CO')} <span>kcal</span></strong>
            </div>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Progreso de la meta diaria"
            aria-valuemin="0"
            aria-valuemax={goal}
            aria-valuenow={Math.min(consumed, goal)}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="progress-footnote">
            <span>{consumed.toLocaleString('es-CO')} kcal</span>
            <span>{goal.toLocaleString('es-CO')} kcal</span>
          </div>
          <div className="quick-actions" aria-label="Ajustar consumo de hoy">
            <span className="quick-actions-label">Ajuste rápido</span>
            <button type="button" className="adjust-button" onClick={onRemove} aria-label="Restar 100 kcal">
              <Minus size={16} />
            </button>
            <span className="adjust-amount">100 kcal</span>
            <button type="button" className="adjust-button adjust-button-add" onClick={onAdd} aria-label="Sumar 100 kcal">
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}