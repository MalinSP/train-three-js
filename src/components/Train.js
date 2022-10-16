import React, { useMemo, useRef } from "react"
import { Merged, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Cabin from "./Cabin.js"

const Train = () => {
  const cabinModel = useGLTF("/models/cabin-transformed.glb")
  const seatModel = useGLTF("models/seat-transformed.glb")

  const trainRef = useRef()
  const scroll = useScroll()

  useFrame(() => {
    trainRef.current.position.z = scroll.offset * 120
  })

  const cabin = useMemo(
    () => ({
      Cabin: cabinModel.nodes.cabin_1,
      SeatModel: seatModel.nodes.seat,
    }),
    [cabinModel, seatModel]
  )

  return (
    <Merged meshes={cabin} castShadow receiveShadow>
      {models => (
        <group ref={trainRef}>
          <Cabin
            models={models}
            position={[0, 0, -6]}
            color="#252525"
            seatColor="sandybrown"
            name="1A"
          />
          <Cabin
            models={models}
            position={[0, 0, -32]}
            color="#252525"
            seatColor="gray"
            name="2B"
          />
          <Cabin
            models={models}
            position={[0, 0, -58]}
            color="#454545"
            seatColor="lightskyblue"
            name="3C"
          />
          <Cabin
            models={models}
            position={[0, 0, -84]}
            color="#454545"
            seatColor="orange"
            name="4D"
          />
          <Cabin
            models={models}
            position={[0, 0, -110]}
            color="#252525"
            seatColor="lightskyblue"
            name="5E"
          />
        </group>
      )}
    </Merged>
  )
}

export default Train
