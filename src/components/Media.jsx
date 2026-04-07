import React, { useState } from 'react';
import { Play } from 'lucide-react';
import './Media.css';

const videos = [
  {
    id: 'GJLwgeU9Dho',
    title: 'Paintings and Calligraphies Interactive Table',
    location: 'Taiwan National Palace Museum'
  },
  {
    id: 'mok0lmBNsfk',
    title: 'Interactive Multimedia Showcase',
    location: 'TBD Exhibition'
  },
  {
    id: 'GgK5vxKdQcA',
    title: 'Digital Arts & Heritage Project',
    location: 'TBD Exhibition'
  }
];

export default function Media() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo = videos[activeIndex];

  const handleVideoSwitch = (index) => {
    setActiveIndex(index);
    setIsPlaying(false); // Reset to thumbnail when switching
  };

  return (
    <section className="section" id="media">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Featured Media</span></h2>

        <div className="media-gallery">
          <div className="glass-panel media-card focus-card">
            <div className="video-responsive">
              {!isPlaying ? (
                <div className="video-thumbnail-container" onClick={() => setIsPlaying(true)}>
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                    alt={activeVideo.title}
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
                  src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1&autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={activeVideo.title}
                />
              )}
            </div>
            <div className="media-info">
              <h3>{activeVideo.title}</h3>
              <p className="text-secondary">Exhibited at <em>{activeVideo.location}</em></p>
            </div>
          </div>

          <div className="video-switcher">
            {videos.map((video, index) => (
              <button
                key={video.id}
                className={`switcher-thumb ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleVideoSwitch(index)}
                aria-label={`Switch to ${video.title}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                />
                <div className="thumb-overlay"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
