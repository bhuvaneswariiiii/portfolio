import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Import the new styles

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Preloader visible for 5 seconds for better effect

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <h1 className="typing-text">Bhuvaneswari K👑</h1>
        <div className="dots-bouncing"></div> {/* Updated spinner class */}
      </div>
    </div>
  );
};

export default Preloader;
