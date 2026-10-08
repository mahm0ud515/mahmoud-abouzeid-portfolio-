import React from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-grid-pattern"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow accents */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '400px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, var(--accent-glow-subtle) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--badge-bg)',
              border: '1px solid var(--badge-border)',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
                boxShadow: '0 0 10px var(--accent-primary)',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--badge-text)',
                letterSpacing: '0.02em',
              }}
            >
              {profileData.status}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              marginBottom: '1.25rem',
            }}
          >
            <span style={{ display: 'block' }}>{profileData.name}</span>
            <span className="gradient-accent" style={{ display: 'block', marginTop: '0.35rem' }}>
              AI & Data Science Engineer
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '780px',
              margin: '0 auto 2.25rem auto',
            }}
          >
            Developing end-to-end intelligent systems spanning{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Healthcare AI</strong>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Explainable Machine Learning (SHAP)</strong>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Computer Vision</strong>, and{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Agentic RAG Platforms</strong>. Focused on empirical external validation and real-world deployment.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '4rem',
            }}
          >
            <a href="#projects" className="btn btn-primary btn-lg">
              <span>View Projects & Research</span>
              <ArrowDown size={18} />
            </a>
            
            <a
              href={profileData.resumePdfUrl}
              download="Mahmoud_Abouzeid_Resume.pdf"
              className="btn btn-secondary btn-lg"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline btn-lg">
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Real Key Stats Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              textAlign: 'left',
            }}
          >
            {profileData.keyStats.map((stat, i) => (
              <div
                key={i}
                className="card card-glass"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '2px solid var(--accent-primary)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    lineHeight: 1.4,
                  }}
                >
                  {stat.helper}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
