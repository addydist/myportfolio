import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTheme } from "../../theme/ThemeContext";
import { paletteFor } from "../../theme/palette";

/**
 * react-github-calendar 3.x paints an SVG and cannot read CSS variables, so
 * the intensity ramp is supplied explicitly per mode. Both ramps run from the
 * Doom 64 empty-cell surface up to the theme's primary red.
 */
const CALENDAR_THEMES = {
  dark: {
    level0: "#2a2a2a",
    level1: "#5c1f1e",
    level2: "#8c2b28",
    level3: "#bd3230",
    level4: "#e53935",
  },
  light: {
    level0: "#b8b8b8",
    level1: "#e8a9a9",
    level2: "#d16a6a",
    level3: "#c04040",
    level4: "#b71c1c",
  },
};

function Github() {
  const { theme } = useTheme();
  const palette = paletteFor(theme);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="section-heading" style={{ textAlign: "center" }}>
        <span className="terminal-prompt">$</span> git log{" "}
        <span className="purple">--graph --all</span>
      </h1>
      <GitHubCalendar
        username="addydist"
        blockSize={15}
        blockMargin={5}
        blockRadius={0}
        theme={CALENDAR_THEMES[theme] || CALENDAR_THEMES.dark}
        fontSize={16}
        style={{ color: palette.foreground }}
      />
    </Row>
  );
}

export default Github;
