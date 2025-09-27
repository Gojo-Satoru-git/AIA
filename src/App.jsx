import React, { useState, useEffect } from 'react';
import NetworkBackground from './Components/NetworkBackground';

export default function App() {
  const [color, setColor] = useState('#00ffff');
  const isDark = false;
  useEffect(() => {
    const colors = isDark
      ? ['#220336', '#0a5552', '#0f0f04']
      : ['#00ffff', '#b5d533', '#ffff00'];
    let i = 0;
    const interval = setInterval(() => {
      setColor(colors[i % colors.length]);
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NetworkBackground />
    </>
  );
}
