"use client";
export const SceneLighting = () => {
     return (
          <>
               <ambientLight intensity={0.4} />
               <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    color="#6366f1"
               />
               <pointLight
                    position={[-3, -3, -3]}
                    intensity={0.8}
                    color="#06b6d4"
               />
               <spotLight
                    position={[0, 0, 3]}
                    intensity={0.5}
                    angle={0.8}
                    penumbra={0.5}
                    color="#8b5cf6"
               />
          </>
     );
};