import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          shape: {
            type: "char",
            character: {
              value: ["0", "1"],
              font: "JetBrains Mono",
              style: "",
              weight: "400",
              fill: true,
            },
          },
          color: {
            value: ["#39ff88", "#5ee6e0"],
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            direction: "bottom",
            straight: true,
            speed: 1,
            out_mode: "out",
          },
          size: {
            value: 14,
            random: true,
          },
          opacity: {
            value: 0.35,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
