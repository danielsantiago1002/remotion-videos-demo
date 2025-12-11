import { BACKGROUND_COLOR_DARK, FONT_COLOR_LIGHT } from "../utils";
import { loadFont } from '@remotion/google-fonts/Roboto';
import { interpolate, useCurrentFrame } from "remotion";

export const Title = () => {
  const frame = useCurrentFrame();

  const opacityTitle = interpolate(frame, [0, (30 * 0.5)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const twoSecondsInFrames = 30 * 2.5;

  return (
    <div style={{
      display: "flex",
      height: "100%",
      width: "100%",
      backgroundColor: BACKGROUND_COLOR_DARK,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: FONT_COLOR_LIGHT,
      fontSize: 90,
      fontFamily: loadFont().fontFamily,
    }} >
      <div>

      </div>
      <div style={{
        flexBasis: "auto",
        display: frame <= twoSecondsInFrames ? undefined : "none",
        opacity: opacityTitle,
      }} >
        <div
          style={{
            fontWeight: "500",
          }}
        >
          Petroleum Engineering
        </div>
        <div
          style={{
            borderBottom: `5px solid ${FONT_COLOR_LIGHT}`,
            justifySelf: "center",
          }}
        >
          101
        </div>
      </div>
      <div
        style={{
          display: frame <= twoSecondsInFrames ? "none" : undefined,
        }}
      >
        <div
          style={{
            fontWeight: "500"
          }}
        >
          Today:
        </div>
        <div
          style={{
            fontStyle: "italic"
          }}
        >
          Reservoir Life Cycle
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};