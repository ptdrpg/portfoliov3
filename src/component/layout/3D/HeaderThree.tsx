import { Stars  } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function HeaderThree() {
  const star:any = useRef();
  const strasRef: any = useRef();
  const boxRef: any = useRef();
  const sphere1: any = useRef();
  const sphere2: any = useRef();
  useFrame(({clock}) => {
    const t = clock.getElapsedTime();
    const x = 3 * Math.sin(t);
    const z = 3 * Math.cos(t);
    const y = 3 * Math.tan(t);
    strasRef.current.position.x = x;
    strasRef.current.position.z = y;
    sphere1.current.position.x = x;
    sphere1.current.position.z = -y;
    boxRef.current.position.x = y;
    boxRef.current.position.z = z;
    sphere2.current.position.x = -y;
    sphere2.current.position.z = z;
    star.current.rotation.x += 0.0005;
    star.current.rotation.y += 0.0005;
  })

    return (
    <>
      <Stars ref={star} />
        <mesh position={[0,-0.5,0]}>
          <sphereGeometry args={[0.7,60,60]} />
          <meshNormalMaterial />  
        </mesh>
        <mesh ref={strasRef} position={[-1, 1, -1.3]}>
          <sphereGeometry args={[0.5, 60, 60]} />
          <meshNormalMaterial />
        </mesh>
        <mesh ref={sphere1} position={[1, 1, 1]} >
          <sphereGeometry args={[0.5, 60, 60]} />
          <meshNormalMaterial />
        </mesh>
        <mesh ref={boxRef} position={[1, -1, 1.3]}>
          <sphereGeometry args={[0.5, 60, 60]} />
          <meshNormalMaterial />
        </mesh>
        <mesh ref={sphere2} position={[1, 1, -1]}>
          <sphereGeometry args={[0.5, 60, 60]} />
          <meshNormalMaterial />
        </mesh>
    </>
  )
}

export default HeaderThree;