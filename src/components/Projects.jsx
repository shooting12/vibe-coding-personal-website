import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Weakly Supervised Object Localization System",
      description: "Implemented a weakly supervised convolutional neural network (CNN) for object detection and classification, specifically building a deep detection network that localizes objects within images without requiring traditional bounding box annotations.",
      tags: ["Computer Vision", "Machine Learning", "PyTorch"],
      link: "#"
    },
    {
      title: "NASA Moon Ranger Project",
      description: "Develop the mission control software for the MoonRanger lunar rover whenever it is on the moon for a future private lunar NASA mission. Gathered requirements, designed the software architecture, and devised executed the quality plan.",
      tags: ["React"],
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
