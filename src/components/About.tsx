import { Activity, BrainCircuit, Eye, Layers, CheckCircle2, Award, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Activity: <Activity size={24} className="accent-icon" />,
    BrainCircuit: <BrainCircuit size={24} className="accent-icon" />,
    Eye: <Eye size={24} className="accent-icon" />,
    Layers: <Layers size={24} className="accent-icon" />,
  };

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">
            Engineering Rigor Meets <span className="gradient-accent">Applied Intelligence</span>
          </h2>
          <p className="section-subtitle">
            An analytical approach grounded in statistical validation, explainable machine learning, and practical production systems.
          </p>
        </div>

        {/* Narrative & Engineering Principles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: Background & Philosophy */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              Turning Complex Data into Deployable, Trustworthy Solutions
            </h3>
            <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: 1.7 }}>
              {profileData.summary}
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
              My work emphasizes empirical integrity over superficial metrics. In clinical risk estimation, this meant subjecting models to temporal external validation on thousands of post-pandemic patients without retraining. In edge vision, this meant compressing 87,000-sample CNNs into offline TFLite packages for zero-latency mobile execution.
            </p>

            {/* Core Working Principles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Rigorous Validation:</strong> Zero data leakage, stratified splitting, and temporal external validation cohorts.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Explainability First:</strong> Leveraging SHAP (SHapley Additive exPlanations) to validate biomarker attributions against medical consensus.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>End-to-End Delivery:</strong> Seamless orchestration between data wrangling, model training, FastAPI backends, and Flutter/web clients.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Credentials Card */}
          <div className="card card-elevated" style={{ padding: '2.25rem', borderLeft: '4px solid var(--accent-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--badge-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                }}
              >
                <Award size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.125rem' }}>Verified Technical Highlights</h4>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>Primary Source: Documented Thesis & Projects</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                  ACADEMIC FOUNDATION
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  B.Sc. in Artificial Intelligence & Data Science
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Arab Academy for Science, Technology, and Maritime Transport (AAST)
                </div>
              </div>

              <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                  PROJECT LEADERSHIP & FUNDING
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  52,250 EGP Graduation Grant Winner
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Led 5-member engineering team developing the ARAGbMR Mixed-Reality AI platform.
                </div>
              </div>

              <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                  PROFESSIONAL CERTIFICATION
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  60-Hour Machine Learning Track (ITI)
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Information Technology Institute, Egypt — Supervised & Unsupervised Modeling.
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                  RESEARCH OUTCOMES
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  Informatics in Medicine Unlocked (Elsevier) Candidate
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  0.9173 & 0.9521 External ROC-AUC on 8,153 unseen adult clinical records.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Specialization Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {profileData.specializations.map((spec, index) => (
            <div
              key={index}
              className="card card-glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--badge-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {iconMap[spec.icon] || <Activity size={22} />}
                </div>

                <h4 style={{ fontSize: '1.1875rem', marginBottom: '0.75rem', letterSpacing: '-0.015em' }}>
                  {spec.title}
                </h4>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {spec.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {spec.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="badge badge-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
