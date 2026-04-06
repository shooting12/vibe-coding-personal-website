import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Experience & Education</span></h2>

        <div className="timeline animate-reveal delay-200">
          {/* Work Experience */}
          <div className="timeline-item">
            <div className="timeline-icon"><Briefcase size={24} /></div>
            <div className="glass-panel timeline-content">
              <div className="timeline-header">
                <h3>Senior Software Engineer</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <span className="timeline-date"><MapPin size={16} /> Burlingame, CA</span>
                  <span className="timeline-date"><Calendar size={16} /> Nov 2023 - Present</span>
                </div>
              </div>
              <h4 className="timeline-subtitle text-gradient">Meta</h4>
              <h5 className="timeline-team" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem', marginTop: '-0.25rem', fontWeight: 500 }}>
                Reality Labs — Spatial Extensions
              </h5>
              <p className="timeline-text text-secondary">
                Specializing in Horizon OS platform development. Leading technical initiatives to improve platform
                performance and building robust systems for the next generation of computing.
              </p>
              <div className="skills-wrap">
                <span className="badge">Horizon OS</span>
                <span className="badge">Platform Engineering</span>
                <span className="badge">C++</span>
                <span className="badge">Java</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="timeline-item">
            <div className="timeline-icon"><Briefcase size={24} /></div>
            <div className="glass-panel timeline-content">
              <div className="timeline-header">
                <h3>Software Engineer</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <span className="timeline-date"><MapPin size={16} /> Mountain View, CA</span>
                  <span className="timeline-date"><Calendar size={16} /> Mar 2023 - Oct 2023</span>
                </div>
              </div>
              <h4 className="timeline-subtitle text-gradient">Aurora</h4>
              <h5 className="timeline-team" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem', marginTop: '-0.25rem', fontWeight: 500 }}>
                Perception Simulation
              </h5>
              <p className="timeline-text text-secondary" style={{ marginBottom: "1rem" }}>
                Optimized perception simulation by developing outlier detection for vehicle trajectories, significantly
                boosting path prediction robustness. Also engineered 3D scene projection pipelines from simulated LiDAR/Radar data, enabling high-fidelity environmental modeling to validate safety-critical autonomous routing.
              </p>
              <div className="skills-wrap">
                <span className="badge">Perception</span>
                <span className="badge">Simulation</span>
                <span className="badge">LiDAR / Radar</span>
                <span className="badge">Algorithms</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="timeline-item">
            <div className="timeline-icon"><GraduationCap size={24} /></div>
            <div className="glass-panel timeline-content">
              <div className="timeline-header">
                <h3>Master of Software Engineering</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <span className="timeline-date"><MapPin size={16} /> Pittsburgh, PA</span>
                  <span className="timeline-date"><Calendar size={16} /> Aug 2021 - Dec 2022</span>
                </div>
              </div>
              <h4 className="timeline-subtitle text-gradient">Carnegie Mellon University</h4>
              <h5 className="timeline-team" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem', marginTop: '-0.25rem', fontWeight: 500 }}>
                School of Computer Science
              </h5>
              <p className="timeline-text text-secondary">
                Focused on software architecture, scalable systems, and engineering management.
              </p>
              <div className="skills-wrap">
                <span className="badge">Machine Learning</span>
                <span className="badge">Visual Learning</span>
                <span className="badge">Architecture Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
