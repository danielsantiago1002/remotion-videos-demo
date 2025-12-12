import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from '@remotion/google-fonts/Roboto';
import { FONT_COLOR_LIGHT } from "../utils";

export const Chart = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const baseFilter: string = "invert(100%)";
  const selectionFilter = `${baseFilter} sepia(100%) saturate(500%) hue-rotate(350deg) brightness(100%) contrast(80%)`;

  const getIntervalSeconds = (seconds: number, intervalDuration = 4) => {
    return (seconds * intervalDuration) * fps;
  };

  const firstInterval = getIntervalSeconds(1);
  const secondInterval = getIntervalSeconds(2);
  const thirdInterval = getIntervalSeconds(3);
  const fourthInterval = getIntervalSeconds(4);
  const fifthInterval = getIntervalSeconds(5);

  const displayProperty = (startFrame: number) => {
    return !!frame && frame < startFrame ? 'none' : undefined;
  };

  const defineHideDisplayProperty = (startFrame: number) => {
    return !!frame && frame > (startFrame + (fps * 4)) ? 'none' : undefined;
  };

  const defineFilter = (startFrame: number) => {
    return !!frame && frame >= startFrame && frame <= (startFrame + (fps * 4)) ? selectionFilter : baseFilter;
  };

  const imageStyles: React.CSSProperties = {
    position: 'absolute',
    top: "56%",
    left: "51.5%",
    transform: "translate(-50%, -50%) scale(1.02)",
    height: "auto",
    width: "94%",
    filter: baseFilter,
  };

  return (<>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontFamily: loadFont().fontFamily,
        backgroundColor: 'black',
        color: FONT_COLOR_LIGHT,
        fontSize: 60,
      }}
    >
      <div
        style={{
          height: "20%",
          textAlign: "center",
          alignSelf: "flex-start",
          width: "100%",
          paddingTop: 100,
          paddingInline: 80
        }}
      >
        <div
          style={{
            display: defineHideDisplayProperty(0),
          }}
        >
          {`1) asdasd asdasd asdasd asdasd  asdasd asdasd`}
        </div>
      </div>
    </div>
    <AbsoluteFill>
      <Img
        id="axis-image"
        style={{
          ...imageStyles,
          filter: defineFilter(0),
        }}
        src={staticFile('reservoir-life-cycle/axis.png')}
      />
      <Img
        id="01B-image"
        style={{
          ...imageStyles,
          filter: defineFilter(firstInterval),
          display: displayProperty(firstInterval),
        }}
        src={staticFile('reservoir-life-cycle/01B.png')}
      />

      <Img
        id="01T-image"
        style={{
          ...imageStyles,
          filter: defineFilter(firstInterval),
          display: displayProperty(firstInterval),
        }}
        src={staticFile('reservoir-life-cycle/01Tdiscovery_well.png')}
      />

      <Img
        id="02B-image"
        style={{
          ...imageStyles,
          filter: defineFilter(secondInterval),
          display: displayProperty(secondInterval),
        }}
        src={staticFile('reservoir-life-cycle/02B.png')}
      />

      <Img
        id="02T-image"
        style={{
          ...imageStyles,
          filter: defineFilter(secondInterval),
          display: displayProperty(secondInterval),
        }}
        src={staticFile('reservoir-life-cycle/02Tappraisal_well.png')}
      />


      <Img
        id="03B-image"
        style={{
          ...imageStyles,
          filter: defineFilter(thirdInterval),
          display: displayProperty(thirdInterval),
        }}
        src={staticFile('reservoir-life-cycle/03Bplatform_facilities.png')}
      />

      <Img
        id="03T-image"
        style={{
          ...imageStyles,
          filter: defineFilter(thirdInterval),
          display: displayProperty(thirdInterval),
        }}
        src={staticFile('reservoir-life-cycle/03Tfirst_oil_build_up.png')}
      />


      <Img
        id="04B-image"
        style={{
          ...imageStyles,
          filter: defineFilter(fourthInterval),
          display: displayProperty(fourthInterval),
        }}
        src={staticFile('reservoir-life-cycle/04Bpipeline.png')}
      />


      <Img
        id="04T-image"
        style={{
          ...imageStyles,
          filter: defineFilter(fourthInterval),
          display: displayProperty(fourthInterval),
        }}
        src={staticFile('reservoir-life-cycle/04T_plateau.png')}
      />

      <Img
        id="06B-image"
        style={{
          ...imageStyles,
          filter: defineFilter(fifthInterval),
          display: displayProperty(fifthInterval),
        }}
        src={staticFile('reservoir-life-cycle/06Boperations.png')}
      />

      <Img
        id="05B-image"
        style={{
          ...imageStyles,
          filter: defineFilter(fourthInterval),
          display: displayProperty(fourthInterval),
        }}
        src={staticFile('reservoir-life-cycle/05Bdrilling.png')}
      />

      <Img
        id="05T-image"
        style={{
          ...imageStyles,
          filter: defineFilter(fifthInterval),
          display: displayProperty(fifthInterval),
        }}
        src={staticFile('reservoir-life-cycle/05Tdecline_abandoment.png')}
      />

    </AbsoluteFill>
  </>
  );
};