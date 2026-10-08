import React, { useState } from 'react';
import {
  Activity,
  Eye,
  BrainCircuit,
  Code2,
  Database,
  Smartphone,
  BarChart3,
  Cpu,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'ml-datascience': <Activity size={18} />,
    'deeplearning-cv': <Eye size={18} />,
    'nlp-genai': <BrainCircuit size={18} />,
    languages: <Code2 size={18} />,
    'backend-databases': <Database size={18} />,
    'mobile-ar': <Smartphone size={18} />,
    visualization: <BarChart3 size={18} />,
    'tools-workflow': <Cpu size={18} />,
  };

  const filteredGroups = skillsData
    .map((group) => {
      const matchesCategory = activeCategory === 'all' || group.id === activeCategory;
      const filteredSkills = group.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...group,
        isShown: matchesCategory && (searchTerm === '' || filteredSkills.length > 0),
        displayedSkills: searchTerm === '' ? group.skills : filteredSkills,
      };
    })
    .filter((group) => group.isShown);

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Domain Expertise & <span className="gradient-accent">Technical Stack</span>
          </h2>
          <p className="section-subtitle">
            Every technology listed below is supported by direct implementation across clinical modeling, edge vision, RAG agents, and mobile deployments.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto 2.5rem auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* Search Input */}
          <div
            style={{
              position: 'relative',
              width: '100%',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-tertiary)',
              }}
            />
            <input
              type="text"
              placeholder="Filter by technology (e.g. PyTorch, SHAP, FastAPI, Flutter, LangChain)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 2.85rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-primary)',
                fontSize: '0.9375rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                transition: 'border-color var(--transition-fast)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-tertiary)',
                  cursor: 'pointer',
                  fontSize: '0.8125rem',
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`btn btn-sm ${activeCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All Categories ({skillsData.length})
            </button>
            {skillsData.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveCategory(group.id)}
                className={`btn btn-sm ${activeCategory === group.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                {categoryIcons[group.id]}
                <span>{group.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform var(--transition-normal), border-color var(--transition-normal)',
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--badge-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)',
                      flexShrink: 0,
                    }}
                  >
                    {categoryIcons[group.id]}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>{group.category}</h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5,
                  }}
                >
                  {group.description}
                </p>
              </div>

              {/* Badges List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.displayedSkills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`badge ${skill.highlight ? 'badge-accent' : ''}`}
                    style={{
                      padding: '0.35rem 0.65rem',
                      fontSize: '0.8125rem',
                      cursor: 'default',
                    }}
                  >
                    {skill.highlight && (
                      <CheckCircle2 size={12} style={{ color: 'var(--accent-primary)' }} />
                    )}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: 'var(--text-secondary)',
            }}
          >
            <p>No technologies matched your search term "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Credibility Note */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.25rem 1.75rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle2 size={20} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Skills are grouped by demonstrated technical application rather than unverified percentage scores.
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
            }}
          >
            Verified via Thesis, Code Repositories & ITI Training
          </span>
        </div>
      </div>
    </section>
  );
};
