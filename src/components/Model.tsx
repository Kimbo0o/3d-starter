import { useGLTF } from "@react-three/drei";
import { useLayoutEffect } from "react";

const Model = () => {
  const { scene } = useGLTF("/model.glb");
  console.log("scene", scene);
  useLayoutEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return <primitive castShadow receiveShadow object={scene} />;
};

export default Model;
