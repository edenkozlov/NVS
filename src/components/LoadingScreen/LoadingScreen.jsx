
import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small delay to let animation finish
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo">KMG</div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
