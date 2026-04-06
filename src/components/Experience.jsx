import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Experience.css';
import auroraLogoImg from '../assets/aurora_logo.png';
import cmuLogoImg from '../assets/cmu_logo.png';

const MetaIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="28" height="28" fill="#0668E1" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/>
  </svg>
);

const AuroraIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
    <img src={auroraLogoImg} alt="Aurora Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
  </div>
);

const CmuIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
    <img src={cmuLogoImg} alt="CMU Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
  </div>
);

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Experience & Education</span></h2>

        <div className="timeline">
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
              <div className="company-org-group">
                <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>Meta</h4>
                <MetaIcon />
                <h5 className="timeline-team" style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
                  Reality Labs — Spatial Extensions
                </h5>
              </div>
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
              <div className="company-org-group">
                <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>Aurora</h4>
                <AuroraIcon />
                <h5 className="timeline-team" style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
                  Perception Simulation
                </h5>
              </div>
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
              <div className="company-org-group">
                <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>Carnegie Mellon University</h4>
                <CmuIcon />
                <h5 className="timeline-team" style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
                  School of Computer Science
                </h5>
              </div>
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
