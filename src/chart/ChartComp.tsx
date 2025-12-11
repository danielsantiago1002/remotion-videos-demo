import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
import { loadFont } from '@remotion/google-fonts/Roboto';
import { Img, staticFile } from 'remotion';
import { BACKGROUND_COLOR_DARK, FONT_COLOR_LIGHT } from "./utils";
import { Title } from "./Title/Title";

export const ChartComp = () => {
  const frame = useCurrentFrame();
  const baseFilter: string = "invert(100%)";
  const selectionFilter = `${baseFilter} sepia(100%) saturate(500%) hue-rotate(350deg) brightness(100%) contrast(80%)`;

  const imageStyles: React.CSSProperties = {
    position: 'absolute',
    top: "53%",
    left: "53%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: "94%",
    filter: baseFilter
  };

  return (
    <>
      <Sequence durationInFrames={(30) * (5)}>
        <Title />
      </Sequence>

      <>
        <Sequence from={(30) * 5} >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              fontFamily: loadFont().fontFamily,
              backgroundColor: 'black',
            }}
          >
            {/* Demo */}
          </div>
          <AbsoluteFill>
            <Img
              id="axis-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/axis.png')}
            />
            <Img
              id="01B-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/01B.png')}
            />
            <Img
              id="02B-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/02B.png')}
            />
            <Img
              id="03B-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/03Bplatform_facilities.png')}
            />
            <Img
              id="04B-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/04Bpipeline.png')}
            />
            <Img
              id="06B-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/06Boperations.png')}
            />
            <Img
              id="05B-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/05Bdrilling.png')}
            />

            <Img
              id="01T-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/01Tdiscovery_well.png')}
            />
            <Img
              id="02T-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/02Tappraisal_well.png')}
            />
            <Img
              id="03T-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/03Tfirst_oil_build_up.png')}
            />

            <Img
              id="04T-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/04T_plateau.png')}
            />

            <Img
              id="05T-image"
              style={{
                ...imageStyles,
                filter: `${baseFilter}`,
              }}
              src={staticFile('reservoir-life-cycle/05Tdecline_abandoment.png')}
            />
          </AbsoluteFill>
        </Sequence>
      </>

    </>
  );
};