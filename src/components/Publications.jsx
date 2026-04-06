import React from 'react';
import { BookOpen } from 'lucide-react';
import './Publications.css';

export default function Publications() {
  const pubs = [
    {
      title: "Finger Detection for Multi-Touch Tabletop Display System",
      venue: "National Taiwan University Thesis",
      year: "2010",
      authors: "Shooting Chuang, et al."
    },
    {
      title: "Non-Photorealistic Rendering Of Stylish, Distinctive Faces",
      venue: "IPPR Conference on Computer Vision, Graphics, and Image Processing",
      year: "2009",
      authors: "Shooting Chuang, et al."
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
