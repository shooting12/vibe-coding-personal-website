import React, { useState } from 'react';
import { Play } from 'lucide-react';
import './Media.css';

export default function Media() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section" id="media">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Featured Media</span></h2>

        <div className="media-grid">
          <div className="glass-panel media-card focus-card">
            <div className="video-responsive">
              {!isPlaying ? (
                <div className="video-thumbnail-container" onClick={() => setIsPlaying(true)}>
                  <img
                    src="https://img.youtube.com/vi/GJLwgeU9Dho/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="play-button-overlay">
                    <div className="play-button-circle">
                      <Play fill="white" stroke="white" strokeWidth={0} size={28} className="play-icon" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/GJLwgeU9Dho?rel=0&modestbranding=1&autoplay=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Featured Video"
                />
              )}
            </div>
            <div className="media-info">
              <h3>Must see Paintings and Calligraphies Interactive Table</h3>
              <p className="text-secondary">Exhibited at <em>Taiwan National Palace Museum</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
