import { Composition } from "remotion";
import { ChartComp } from "./chart/ChartComp";
const fps = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ChartComp"
        component={ChartComp}
        durationInFrames={(fps) * (37)}
        fps={fps}
        width={1080}
        height={1080}
      />
    </>
  );
};
