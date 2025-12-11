import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BACKGROUND_COLOR_DARK, FONT_COLOR_LIGHT } from "../utils";
import { loadFont } from "@remotion/google-fonts/Roboto";

const { fontFamily } = loadFont();

type props = {
  title: string;
  subtitle?: string;
};

export const Demo: React.FC<props> = ({
  title,
  subtitle
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return <AbsoluteFill>
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 90,
        backgroundColor: BACKGROUND_COLOR_DARK,
        color: FONT_COLOR_LIGHT,
        fontFamily: fontFamily
      }}
    >
      <div
        style={{
          fontWeight: 700,
          textShadow: "0 0 10px rgba(0,0,0,0.5)",
          opacity
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontWeight: 500,
          opacity
        }}
      >
        {subtitle}
      </div>
    </div>
  </AbsoluteFill>;
};