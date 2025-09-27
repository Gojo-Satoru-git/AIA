import React, { useState, useEffect } from "react";
import NetworkBackground from "./NetworkBackground";

export default function App() {
  const [color, setColor] = useState("#00ffff");
  const isDark = true;
  useEffect(() => {
    const colors = isDark? ["#220336", "#0a5552", "#0f0f04"] : ["#00ffff", "#b5d533", "#ffff00"];
    let i = 0;
    const interval = setInterval(() => {
      setColor(colors[i % colors.length]);
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NetworkBackground
        speed={0.8}
        density={50}
        color={color}
        glow={0.6}
        particleSize={2}
      />
      <h1 style={{ position: "relative", color: "#060202", textAlign: "center" }}>Welcome</h1>
    </>
  );
}
