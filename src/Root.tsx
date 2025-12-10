import { Composition } from "remotion";
import { NoiseComp } from "./noise-example/NoiseComp";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={NoiseComp}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        // schema={myCompSchema}
        defaultProps={{
          speed: 0.02,
          circleRadius: 8,
          maxOffset: 80,
        }}
      />
    </>
  );
};
