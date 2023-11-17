import { Canvas } from "@react-three/fiber"
import HeaderThree from "../../component/layout/3D/HeaderThree";
import About from "../about/About";


function Home() {

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
      <section className='about'>
        <About />
      </section>
    </>
  )
}

export default Home;