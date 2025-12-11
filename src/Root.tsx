import { Composition } from "remotion";
// import { NoiseComp } from "./noise-example/NoiseComp";
import { Demo } from "./api-example/demo";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={Demo}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1350}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        // schema={myCompSchema}
        defaultProps={{
          title: "Petroleum Engineering",
          subtitle: "101"
        }}
      />
    </>
  );
};
