import { Text } from "@react-three/drei"
import React from "react"
import Row from "./Row"

const Cabin = ({ models, color, seatColor, name, ...props }) => {
  return (
    <group {...props}>
      <Text
        fontSize={3}
        color="#ffffff"
        rotation-y={-Math.PI / 2}
        position={[0, 6, 4]}
      >
        {name}
      </Text>
      <models.Cabin color={color} />
      <Row models={models} position={[-0.2, 0, -0.2]} color={seatColor} />
      <Row models={models} position={[2, 0, -0.2]} color={seatColor} />
      <Row models={models} position={[-0.2, 0, -2.2]} color={seatColor} />
      <Row models={models} position={[2, 0, -2.2]} color={seatColor} />

      <Row models={models} position={[-0.2, 0, -6.8]} color={seatColor} />
      <Row models={models} position={[2, 0, -6.8]} color={seatColor} />
      <Row models={models} position={[-0.2, 0, -8.8]} color={seatColor} />
      <Row models={models} position={[2, 0, -8.8]} color={seatColor} />

      <Row models={models} position={[-0.2, 0, -11.2]} color={seatColor} />
      <Row models={models} position={[2, 0, -11.2]} color={seatColor} />
      <Row models={models} position={[-0.2, 0, -13.2]} color={seatColor} />
      <Row models={models} position={[2, 0, -13.2]} color={seatColor} />

      <Row models={models} position={[-0.2, 0, -18]} color={seatColor} />
      <Row models={models} position={[2, 0, -18]} color={seatColor} />
      <Row models={models} position={[2, 0, -20]} color={seatColor} />
      <Row models={models} position={[-0.2, 0, -20]} color={seatColor} />
    </group>
  )
}

export default Cabin
