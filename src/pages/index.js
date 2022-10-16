import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import "reset-css"
import "../css/main.css"
import Plane from "../components/Plane"
import Train from "../components/Train"
import { Environment, ScrollControls, Stats } from "@react-three/drei"
import { useControls, Leva } from "leva"
import presets from "../utils/preset.js"

export default function Home() {
  const { ambientLight, directionalLight, fogColor, bgColor, environment } =
    useControls({
      ambientLight: { value: 0.3, min: 0.1, max: 5, step: 0.1 },
      directionalLight: { value: 2, min: 1, max: 10, step: 0.1 },
      fogColor: "#17171b",
      bgColor: "#17171b",
      environment: { options: Object.keys(presets) },
    })

  return (
    <div className="canvas-container">
      <Canvas
        shadows
        camera={{ position: [-25, 15, 25], fov: 35 }}
        gl={{
          antialias: false,
          // physicallyCorrectLights: true
        }}
      >
        <ambientLight intensity={ambientLight} />
        <directionalLight
          castShadow
          intensity={directionalLight}
          position={[10, 6, 6]}
        />
        <fog attach="fog" args={[fogColor, 30, 50]} />
        <color attach="background" args={[bgColor]} />
        <orthographicCamera left={-120} right={20} top={20} bottom={-20} />
        <Suspense fallback={null}>
          <ScrollControls>
            <Train />
          </ScrollControls>
          <Plane />
          <Environment preset={environment} />
        </Suspense>
        <Stats />
      </Canvas>
      <Leva />
    </div>
  )
}
