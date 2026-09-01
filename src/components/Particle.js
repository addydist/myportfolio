import React from "react";
import Particles from "react-tsparticles";
import { useTheme } from "../theme/ThemeContext";
import { paletteFor } from "../theme/palette";

function Particle() {
  const { theme, isDark } = useTheme();
  const palette = paletteFor(theme);

  return (
    <Particles
      /* tsparticles reads params once on mount, so remount on theme change. */
      key={theme}
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
              font: "Source Code Pro",
              style: "",
              weight: "400",
              fill: true,
            },
          },
          color: {
            value: [palette.primary, palette.accent],
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
            /* Light mode needs more weight to stay visible on the grey ground. */
            value: isDark ? 0.35 : 0.45,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: isDark ? 0.05 : 0.12,
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
