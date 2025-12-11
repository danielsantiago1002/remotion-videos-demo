import { Composition } from "remotion";
import { ChartComp } from "./chart/ChartComp";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ChartComp"
        component={ChartComp}
        durationInFrames={(30) * (10)}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
