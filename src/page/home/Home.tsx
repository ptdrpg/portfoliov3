import { Canvas } from "@react-three/fiber"
import HeaderThree from "../../component/layout/3D/HeaderThree";
// import { useLayoutEffect } from "react";

// type Props = {
//   setView: React.Dispatch<React.SetStateAction<boolean>>
// }

function Home() {
  // useLayoutEffect(() => {
  //   setView(false);
  // })
  return (
    <>
      <section className="header">
        {/* <div></div> */}
        <div className="headerAnimated">
          <Canvas>
            <HeaderThree />
          </Canvas>
        </div>
      </section>
    </>
  )
}

export default Home;