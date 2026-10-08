import React, { useState } from 'react';
import { Activity, FileText, Maximize2, X } from 'lucide-react';
import { projectsData } from '../data/projects';

export const DualRiskDeepDive: React.FC = () => {
  const dualRisk = projectsData.find((p) => p.id === 'dualrisk-ai')!;
  const [selectedFigureIndex, setSelectedFigureIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const figures = dualRisk.images || [];

  return (
    <section id="research" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Activity size={14} />
            <span>Headline Clinical Research</span>
          </div>
          <h2 className="section-title">
            DualRisk-AI: <span className="gradient-accent">Explainable Healthcare Pipeline</span>
          </h2>
          <p className="section-subtitle">
            An end-to-end clinical machine learning framework combining multi-cycle NHANES epidemiological data, SHAP biomarker explainability, and zero-retraining temporal external validation.
          </p>
        </div>

        {/* Main Grid: Research Overview & Interactive Figure Viewer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '3.5rem',
          }}
        >
          {/* Left Column: Clinical Research Specs & Methodology */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-primary)',
                backgroundColor: 'var(--badge-bg)',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1rem',
              }}
            >
              <FileText size={14} />
              <span>Target: Informatics in Medicine Unlocked (Elsevier)</span>
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Rigorous Temporal Generalization Without Retraining
            </h3>

            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Most predictive models in digital health fail catastrophically when applied to patients from subsequent years due to temporal cohort shift. DualRisk-AI resolves this by training on <strong>21,798 NHANES adults</strong> (2013-2020) and validating against <strong>8,153 unseen post-pandemic adults</strong> (August 2021 - August 2023) completely untouched by training.
            </p>

            {/* Performance Callout Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <div
                className="card card-elevated"
                style={{ padding: '1.25rem', borderLeft: '3px solid var(--accent-primary)' }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  0.9173
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  External ROC-AUC
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.2rem' }}>
                  Diabetes (Random Forest, 8,153 adults)
                </div>
              </div>

              <div
                className="card card-elevated"
                style={{ padding: '1.25rem', borderLeft: '3px solid var(--accent-secondary)' }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  0.9521
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  External ROC-AUC
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.2rem' }}>
                  Cardiovascular (PyTorch CNN+Attention)
                </div>
              </div>
            </div>

            {/* 5-Phase Methodology Accordion / List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>
                5-Phase Implementation Architecture
              </div>
              {dualRisk.architectureSteps?.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      backgroundColor: 'var(--badge-bg)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      flexShrink: 0,
                    }}
                  >
                    P{idx + 1}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {item.step}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Research Figure Showcase */}
          <div className="card card-elevated" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                  Manuscript Figures & Empirical Validation
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
                  Actual figures prepared for journal submission
                </p>
              </div>

              {figures.length > 0 && (
                <button
                  onClick={() => setZoomImage(figures[selectedFigureIndex]?.url)}
                  className="btn btn-outline btn-sm"
                  title="Expand Full Resolution"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Maximize2 size={14} />
                  <span>Expand</span>
                </button>
              )}
            </div>

            {/* Main Active Figure View */}
            {figures.length > 0 && (
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#0a0f1d',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-medium)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  marginBottom: '1rem',
                  minHeight: '320px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setZoomImage(figures[selectedFigureIndex]?.url)}
              >
                <img
                  src={figures[selectedFigureIndex]?.url}
                  alt={figures[selectedFigureIndex]?.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform var(--transition-normal)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(8, 12, 20, 0.85)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  Click to inspect full view
                </div>
              </div>
            )}

            {/* Caption */}
            {figures[selectedFigureIndex] && (
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {figures[selectedFigureIndex].caption}
                </div>
              </div>
            )}

            {/* Thumbnails Navigator */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
              {figures.map((fig, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFigureIndex(idx)}
                  style={{
                    padding: '0.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: selectedFigureIndex === idx ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-surface)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: selectedFigureIndex === idx ? 1 : 0.65,
                    transition: 'all var(--transition-fast)',
                  }}
                  title={fig.caption}
                >
                  <img
                    src={fig.url}
                    alt={fig.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Expanded Figure View */}
      {zoomImage && (
        <div className="modal-overlay" onClick={() => setZoomImage(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: '1050px', padding: '1.5rem', backgroundColor: '#090d16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {figures[selectedFigureIndex]?.caption}
              </div>
              <button
                onClick={() => setZoomImage(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
              <img
                src={zoomImage}
                alt="Expanded Research Figure"
                style={{ maxWidth: '100%', maxHeight: '78vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
