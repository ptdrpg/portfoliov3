import { OrbitControls  } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function HeaderThree() {
  // const star:any = useRef();
  const strasRef: any = useRef();
  const boxRef: any = useRef();
  const sphere1: any = useRef();
  const sphere2: any = useRef();
  useFrame(({clock}) => {
    const t = clock.getElapsedTime();
    const x = 1.5 * Math.sin(-t);
    const z = 1 * Math.cos(t);
    strasRef.current.position.x = z;
    strasRef.current.position.z = x;
    strasRef.current.position.y = x;
    sphere1.current.position.x = x;
    sphere1.current.position.z = -z;
    sphere1.current.position.y = z;
    boxRef.current.position.x = -z;
    boxRef.current.position.z = x;
    boxRef.current.position.y = x+0.5;
    sphere2.current.position.x = x;
    sphere2.current.position.z = z;
    sphere2.current.position.y = -1;
    // star.current.rotation.x += 0.0005;
    // star.current.rotation.y += 0.0005;
  })

    return (
      <>
        <OrbitControls />
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