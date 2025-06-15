
import React, { useRef, useEffect } from "react";

const LovableBackground3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = containerRef.current;
    if (!outer) return;
    // Allow pointer events for iframe mouse drag 
    const iframe = outer.querySelector("iframe");
    if (iframe) {
      iframe.style.pointerEvents = "auto";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        overflow: "hidden",
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          transform: "scale(2.1)", // 2.1 = original + 40% + 10% = 50% more zoom
          transformOrigin: "center center",
        }}
      >
        <iframe
          src="https://my.spline.design/particlenebula-kjgZUD8hSBdyuijGw67RUCxf/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{
            width: "100vw",
            height: "100vh",
            border: "none",
            pointerEvents: "auto", // Interactivity for mouse drag/move
          }}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LovableBackground3D;
