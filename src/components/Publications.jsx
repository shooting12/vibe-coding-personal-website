import React from 'react';
import { BookOpen } from 'lucide-react';
import './Publications.css';

export default function Publications() {
  const pubs = [
    {
      title: "Optimizing Resource Allocation in AR/VR Operating Systems",
      venue: "ACM Symposium on Operating Systems Principles (SOSP)",
      year: "2024",
      authors: "Shooting Chuang, et al."
    },
    {
      title: "Scalable Architectures for Modern Web Applications",
      venue: "IEEE International Conference on Software Architecture",
      year: "2023",
      authors: "Shooting Chuang, J. Doe"
    }
  ];

  return (
    <section className="section" id="publications">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Publications</span></h2>
        
        <div className="pub-list">
          {pubs.map((pub, idx) => (
            <div key={idx} className="glass-panel pub-card">
              <div className="pub-icon"><BookOpen size={28} /></div>
              <div className="pub-content">
                <h3>{pub.title}</h3>
                <p className="pub-authors text-secondary">{pub.authors}</p>
                <div className="pub-meta">
                  <span className="pub-venue">{pub.venue}</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
