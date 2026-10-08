import React, { useState } from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Healthcare AI',
    'Agentic & RAG',
    'Mobile & On-Device AI',
    'Computer Vision',
    'NLP & Analytics',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Featured Engineering & Research</span>
          </div>
          <h2 className="section-title">
            Real-World <span className="gradient-accent">AI & Data Systems</span>
          </h2>
          <p className="section-subtitle">
            Every project below represents an implemented architecture with real data, empirical evaluation metrics, and verified engineering contributions.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const count = cat === 'All' ? projectsData.length : projectsData.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    opacity: isSelected ? 0.9 : 0.6,
                    marginLeft: '0.25rem',
                  }}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`card ${project.featured ? 'card-elevated' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: project.featured ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                transition: 'all var(--transition-normal)',
              }}
            >
              <div>
                {/* Meta Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge badge-accent">{project.category}</span>
                    {project.featured && (
                      <span
                        className="badge"
                        style={{
                          backgroundColor: 'rgba(234, 179, 8, 0.1)',
                          color: '#eab308',
                          borderColor: 'rgba(234, 179, 8, 0.25)',
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
                    {project.period}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '0.875rem', color: 'var(--accent-secondary)', fontWeight: 500, marginBottom: '0.85rem' }}>
                  {project.subtitle}
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.tagline}
                </p>

                {/* Headline Metrics Callout */}
                {project.metrics && project.metrics.length > 0 && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.75rem',
                      marginBottom: '1.5rem',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1875rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                        {project.metrics[0].value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: 1.3 }}>
                        {project.metrics[0].label}
                      </div>
                    </div>
                    {project.metrics[1] && (
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {project.metrics[1].value}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: 1.3 }}>
                          {project.metrics[1].label}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span key={tIdx} className="badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="badge" style={{ opacity: 0.7 }}>
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Explore Architecture & Results</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
