import { OrbitControls, Stars  } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
// import { Text } from "@react-three/drei"
// import textureButton from '../../../image/Frame 50.jpg'
// import * as THREE from 'three'
// import { useNavigate } from "react-router-dom"

// type Props = {
//   setView: React.Dispatch<React.SetStateAction<boolean>>
// }

// const texture = new THREE.TextureLoader().load(textureButton);

function HeaderThree() {
  // const navigate = useNavigate();
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

  // const enter = () => {
  //   navigate('/about');
  //   setView(true);
  // }
    return (
    <>
      {/* <OrbitControls /> */}
      <Stars ref={star} />
      {/* <Text position={[0, 0.5, 0]} color={'#FAA937'} fontSize={0.5} >Welcome To my world</Text>
      <mesh position={[0, -1, -1]} onClick={enter} >
        <boxGeometry args={[2,1,1]} />
        <meshBasicMaterial map={texture} />
        </mesh> */}
        {/* <primitive object={gltf.scene} /> */}
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