import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Center,
  Stage,
} from "@react-three/drei";
import { useControls } from "leva";

import Model from "./Model";

const Experience = () => {
  const { x, y, z } = useControls("camera", {
    x: { value: 0.1, min: 0, max: 10, step: 0.01 },
    y: { value: 1.51, min: 0, max: 10, step: 0.01 },
    z: { value: -0.135, min: -5, max: 10, step: 0.01 },
  });

  return (
    <>
      <Canvas shadows gl={{ preserveDrawingBuffer: true }} className="z-0">
        {/* <PerspectiveCamera
          fov={25}
          near={0.1}
          far={100}
          position={[5, 5, 5]}
          makeDefault
        /> */}
        {/* <OrbitControls makeDefault target={[0, 1.5, 0]} /> */}

        <OrbitControls />

        <Environment preset="apartment" />

        <color args={["#fff"]} attach="background" />

        <Center>
          <Model />
        </Center>
      </Canvas>
    </>
  );
};

export default Experience;
