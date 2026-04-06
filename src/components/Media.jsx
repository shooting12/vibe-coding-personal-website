import React from 'react';
import { Play } from 'lucide-react';
import './Media.css';

export default function Media() {
  return (
    <section className="section" id="media">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Featured Media</span></h2>
        
        <div className="media-grid animate-reveal delay-300">
          <div className="glass-panel media-card focus-card">
            <div className="media-image-wrapper">
              <img src="/assets/horizon.png" alt="Horizon OS visualization" className="media-image" />
              <div className="play-overlay">
                <Play fill="white" size={64} className="play-icon" />
              </div>
            </div>
            <div className="media-info">
              <h3>Next-Gen Platform Development</h3>
              <p className="text-secondary">A visual representation of the advanced OS architecture and systems I work on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
