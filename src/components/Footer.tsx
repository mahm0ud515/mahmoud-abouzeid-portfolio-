import React from 'react';
import { Download, Mail, ArrowUp, Cpu } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4.5rem 0 2.5rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand & Positioning */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                }}
              >
                <Cpu size={18} />
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {profileData.name}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              AI & Data Science Engineer focused on building robust clinical machine learning, edge computer vision, and agentic RAG architectures.
            </p>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
              {profileData.location}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="#about" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>About & Foundations</a></li>
              <li><a href="#skills" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Technical Skills</a></li>
              <li><a href="#research" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>DualRisk-AI Research</a></li>
              <li><a href="#projects" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Featured Projects</a></li>
              <li><a href="#experience" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Freelance Experience</a></li>
              <li><a href="#education" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Education & ITI Track</a></li>
              <li><a href="#contact" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div>
            <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Connect & Assets
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={`mailto:${profileData.email}`}
                style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Mail size={16} />
                <span>{profileData.email}</span>
              </a>

              <a
                href={profileData.resumePdfUrl}
                download="Mahmoud_Abouzeid_Resume.pdf"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', width: 'fit-content' }}
              >
                <Download size={14} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} Mahmoud Abouzeid. All rights reserved. Strictly verified against academic & industry records.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="btn btn-outline btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
