"use client";
import createGlobe from "cobe";
import React, { useEffect, useRef } from "react";
import { useSpring } from "react-spring";

const Earth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // initialize ref as HTMLCanvasElement
  const pointerInteracting = useRef<number | null>(null); // initialize ref as number | null
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () =>
      // add null check for canvasRef.current
      canvasRef.current && (width = canvasRef.current.offsetWidth);

    window.addEventListener("resize", onResize);
    onResize();

    // add null check for canvasRef.current
    const globe =
      canvasRef.current &&
      createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 30000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [0.1, 0.8, 1], // Customize marker color here
        glowColor: [1, 1, 1],
        opacity: 0.85,
        offset: [0, 0],
        markers: [
          // 18.0685 55.6099
          { location: [18.0685, 59.3293], size: 0.03 },
        ],
        onRender: (state) => {
          // This prevents rotation while dragging
          if (!pointerInteracting.current) {
            // Called on every animation frame.
            // `state` will be an empty object, return updated params.
            phi += 0.0008;
          }
          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });

    setTimeout(() => {
      // add null check for canvasRef.current
      canvasRef.current && (canvasRef.current.style.opacity = "1");
    }, 1000);

    return () => {
      globe && globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          // add null check for canvasRef.current
          canvasRef.current && (canvasRef.current.style.cursor = "grabbing");
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          // add null check for canvasRef.current
          canvasRef.current && (canvasRef.current.style.cursor = "grab");
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          // add null check for canvasRef.current
          canvasRef.current && (canvasRef.current.style.cursor = "grab");
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (
            pointerInteracting.current !== null &&
            e.touches &&
            e.touches[0] // add check for e.touches
          ) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};

export default Earth;
