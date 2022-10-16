import React from "react"

const Row = ({ models, rotation, color, ...props }) => {
  return (
    <group {...props}>
      <models.SeatModel position={[-1.2, -0.45, 10.75]} color={color} />
      <models.SeatModel position={[-0.5, -0.45, 10.75]} color={color} />
      <models.SeatModel
        position={[-1.2, -0.45, 9.25]}
        rotation={[0, Math.PI, 0]}
        color={color}
      />
      <models.SeatModel
        position={[-0.5, -0.45, 9.25]}
        rotation={[0, Math.PI, 0]}
        color={color}
      />
    </group>
  )
}

export default Row
