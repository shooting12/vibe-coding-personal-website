import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
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
                <span className="timeline-date"><Calendar size={16} /> Present</span>
              </div>
              <h4 className="timeline-subtitle text-gradient">Meta</h4>
              <p className="timeline-text text-secondary">
                Specializing in Horizon OS platform development. Leading technical initiatives to improve platform 
                performance and building robust systems for the next generation of computing.
              </p>
              <div className="skills-wrap">
                <span className="badge">Horizon OS</span>
                <span className="badge">Platform Engineering</span>
                <span className="badge">C++</span>
                <span className="badge">React</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="timeline-item">
            <div className="timeline-icon"><GraduationCap size={24} /></div>
            <div className="glass-panel timeline-content">
              <div className="timeline-header">
                <h3>Master of Software Engineering</h3>
                <span className="timeline-date"><Calendar size={16} /> 2022</span>
              </div>
              <h4 className="timeline-subtitle text-gradient">Carnegie Mellon University</h4>
              <p className="timeline-text text-secondary">
                Focused on software architecture, scalable systems, and engineering management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
