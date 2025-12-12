import { Title } from "./Title/Title";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { Chart } from "./Chart/Chart";
import { useVideoConfig, Html5Audio, staticFile } from "remotion";

export const ChartComp = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      <Html5Audio src={staticFile('reservoir-life-cycle/Pienso Viento - Casa Rosa.mp3')}
        volume={1}
      />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={(fps) * (6)}>
          <Title />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          timing={linearTiming({
            durationInFrames: 10,
          })}
          presentation={slide({
            direction: "from-right",
          })}
        />
        <>
          <TransitionSeries.Sequence durationInFrames={(fps) * (4 * 8)} >
            <Chart />
          </TransitionSeries.Sequence>
        </>
      </TransitionSeries>
    </>
  );
};