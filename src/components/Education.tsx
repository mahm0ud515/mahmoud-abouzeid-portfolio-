import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { educationData, certificationsData } from '../data/education';
import { achievementsData } from '../data/achievements';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="section-title">
            Education, <span className="gradient-accent">Certifications & Honors</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in Artificial Intelligence and Data Science paired with accredited industry training and competitive grants.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Left Column: Degrees */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <GraduationCap size={22} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.375rem', fontWeight: 700 }}>Academic Degrees</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} className="card card-elevated" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h4>
                    <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                      {edu.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {edu.institution}
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {edu.summary}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Honors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Certifications */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <BookOpen size={22} style={{ color: 'var(--accent-secondary)' }} />
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700 }}>Professional Training</h3>
              </div>

              {certificationsData.map((cert, cIdx) => (
                <div key={cIdx} className="card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {cert.title}
                    </h4>
                    <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-secondary)' }}>
                      {cert.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    {cert.provider} ({cert.duration})
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.4rem' }}>
                      Core Curricular Coverage
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {cert.topics.map((top, tIdx) => (
                        <li key={tIdx} style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ color: 'var(--accent-secondary)' }}>›</span>
                          <span>{top}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.4rem' }}>
                      Course Project Deliverables
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {cert.projects.map((proj, pIdx) => (
                        <div key={pIdx} style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', backgroundColor: 'var(--bg-surface-elevated)', padding: '0.4rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>
                          {proj}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Honors & Key Milestones */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <Award size={22} style={{ color: '#eab308' }} />
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700 }}>Awards & Recognition</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {achievementsData.map((award, aIdx) => (
                  <div
                    key={aIdx}
                    className="card"
                    style={{
                      padding: '1.25rem 1.5rem',
                      backgroundColor: 'var(--bg-surface-elevated)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {award.title}
                      </h4>
                      {award.amountOrMetric && (
                        <span className="badge badge-accent" style={{ whiteSpace: 'nowrap' }}>
                          {award.amountOrMetric}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 500 }}>
                      {award.entity} ({award.date})
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
