import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem 2.25rem' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span className="badge badge-accent">{project.category}</span>
              <span className="badge">{project.period}</span>
              {project.publishedOrShowcased && (
                <span
                  className="badge"
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: '#60a5fa',
                    borderColor: 'rgba(59, 130, 246, 0.25)',
                  }}
                >
                  {project.publishedOrShowcased}
                </span>
              )}
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {m.label}
                </div>
                {m.subtext && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.2rem', lineHeight: 1.4 }}>
                    {m.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Deep Dive Sections: Problem, Approach, Solution */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderLeft: '4px solid #ef4444',
            }}
          >
            <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f87171', marginBottom: '0.35rem' }}>
              THE PROBLEM & CLINICAL / TECHNICAL CONTEXT
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.problem}
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderLeft: '4px solid var(--accent-secondary)',
            }}
          >
            <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '0.35rem' }}>
              METHODOLOGICAL APPROACH & SYSTEM DESIGN
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.approach}
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderLeft: '4px solid var(--accent-primary)',
            }}
          >
            <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.35rem' }}>
              DEPLOYED OUTCOME & PRACTICAL VALUE
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Dataset Details */}
        {project.datasetInfo && (
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '2rem',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Dataset & Cohort Characteristics
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              {project.datasetInfo}
            </div>
          </div>
        )}

        {/* Technical Architecture Breakdown */}
        {project.architectureSteps && project.architectureSteps.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Architectural Execution Pipeline</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.architectureSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {step.step}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Candidate Contributions */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)' }} />
            <span>Direct Technical Contributions</span>
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.contributions.map((c, cIdx) => (
              <li
                key={cIdx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies List */}
        <div>
          <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Technologies & Frameworks
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((t, tIdx) => (
              <span key={tIdx} className="badge badge-accent">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
