import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Distributed Task Scheduler",
      description: "A highly resilient distributed scheduler built with C++ and Go. Handles millions of background jobs per day with minimal latency.",
      tags: ["C++", "Go", "Distributed Systems"],
      link: "#"
    },
    {
      title: "Real-time Metrics Dashboard",
      description: "React-based visualization platform for monitoring large scale infra. Features live glowing charts and 3D data representations.",
      tags: ["React", "WebGL", "TypeScript"],
      link: "#"
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Selected Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-panel project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.link}><Code size={20} /></a>
                  <a href={project.link}><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="project-desc text-secondary">{project.description}</p>
              <div className="skills-wrap">
                {project.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
