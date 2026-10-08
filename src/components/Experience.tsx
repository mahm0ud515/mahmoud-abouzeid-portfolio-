import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Professional History</span>
          </div>
          <h2 className="section-title">
            Industry & <span className="gradient-accent">Freelance Experience</span>
          </h2>
          <p className="section-subtitle">
            Delivering data-driven solutions and full-stack software tailored to real client requirements.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="card card-elevated"
              style={{
                padding: '2.25rem',
                borderLeft: '4px solid var(--accent-primary)',
                position: 'relative',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.role}
                  </h3>
                  <div style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                    {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
                    <MapPin size={14} />
                    <span>{item.location} ({item.employmentType})</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {item.overview}
              </p>

              {/* Responsibilities */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                  Key Contributions & Deliverables
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', marginTop: '0.25rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                  Utilized Tooling
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
