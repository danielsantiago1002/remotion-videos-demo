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
  const sixthInterval = getIntervalSeconds(6);
  const seventhInterval = getIntervalSeconds(7);

  const displayProperty = (startFrame: number) => {
    return !!frame && frame < startFrame ? 'none' : undefined;
  };

  const defineHideDisplayProperty = (startFrame: number) => {
    return !!frame && frame >= startFrame && frame < (startFrame + (fps * 4)) ? undefined : 'none';
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

  const baseContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontFamily: loadFont().fontFamily,
    backgroundColor: 'black',
    color: FONT_COLOR_LIGHT,
    fontSize: 60,
  }

  return (<>
    <div
      style={{
        ...baseContainerStyle,
      }}
    >
      <div
        style={{
          height: "20%",
          textAlign: "center",
          alignSelf: "flex-start",
          width: "100%",
          paddingTop: 100,
          paddingInline: 80,
          display: seventhInterval <= frame ? 'none' : undefined,
        }}
      >
        <div
          style={{
            display: defineHideDisplayProperty(0),
          }}
        >
          {`We can represent the Life Cycle of an Oil/Gas Reservoir in phases`}
        </div>

        <div
          style={{
            display: defineHideDisplayProperty(firstInterval),
          }}
        >
          {`1) Exploration & Appraisal: Information is collected`}
        </div>

        <div
          style={{
            display: defineHideDisplayProperty(secondInterval)
          }}
        >
          {`An appraisal Well is drilled to determine reservoir properties`}
        </div>

        <div
          style={{
            display: defineHideDisplayProperty(thirdInterval)
          }}>
          {`2) Development: Facilities are built, the first oil is produced`}
        </div>

        <div
          style={{
            display: defineHideDisplayProperty(fourthInterval)
          }}
        >
          {`3) Production: Oil is extracted, transported, and managed`}
        </div>

        <div
          style={{
            display: defineHideDisplayProperty(fifthInterval)
          }}
        >
          {`4) Abandonment: Operations continue until the field is no longer economical`}
        </div>

        <div
          style={{
            display: defineHideDisplayProperty(sixthInterval)
          }}
        >
          {`Knowing these phases helps optimize reservoir management and maximize recovery.`}
        </div>
      </div>

      <div
        style={{
          display: seventhInterval > frame ? 'none' : undefined,
          textAlign: "center",
          width: "100%",
          fontSize: 70,
        }}
      >
        <div>
          Thanks for watching! 😊
        </div>

        <div
          style={{
            paddingTop: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "50px",
          }}
        >
          <Img
            id="linkedin"
            style={{
              width: 80,
            }}
            src={staticFile('reservoir-life-cycle/linkedin-svgrepo-com.svg')}
          />
          linkedin.com/in/danielavila1002
        </div>

        <div
          style={{
            paddingTop: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "50px",
          }}
        >
          <Img
            id="github"
            style={{
              width: 80,
            }}
            src={staticFile('reservoir-life-cycle/github-svgrepo-com.svg')}
          />
          github.com/danielsantiago1002
        </div>
      </div>
    </div>

    <AbsoluteFill
      style={{
        display: seventhInterval <= frame ? 'none' : undefined,
      }}
    >
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