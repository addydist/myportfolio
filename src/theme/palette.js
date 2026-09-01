/**
 * Doom 64 colours as sRGB hex.
 *
 * The stylesheet is the source of truth and uses oklch, but a few libraries
 * paint to <canvas>/<svg> and cannot parse an oklch string or a CSS variable
 * (react-tsparticles, react-github-calendar). These are the exact sRGB
 * conversions of the oklch tokens in src/theme.css — keep them in sync.
 */
export const DOOM64 = {
  light: {
    background: "#cccccc",
    foreground: "#1f1f1f",
    card: "#b0b0b0",
    primary: "#b71c1c",
    secondary: "#556b2f",
    accent: "#4682b4",
    destructive: "#ff6f00",
    muted: "#b8b8b8",
    mutedForeground: "#4a4a4a",
    border: "#505050",
  },
  dark: {
    background: "#1a1a1a",
    foreground: "#e0e0e0",
    card: "#2a2a2a",
    primary: "#e53935",
    secondary: "#689f38",
    accent: "#64b5f6",
    destructive: "#ffa000",
    muted: "#252525",
    mutedForeground: "#a0a0a0",
    border: "#4a4a4a",
  },
};

export const paletteFor = (theme) => DOOM64[theme] || DOOM64.dark;
