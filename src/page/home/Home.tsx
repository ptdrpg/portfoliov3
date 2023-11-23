import { Canvas } from "@react-three/fiber"
import HeaderThree from "../../component/layout/3D/HeaderThree";
import About from "../about/About";
import Text from "../../component/text/Text";
import './home.scss'
import Button from "../../component/button/Button";
import { useEffect } from "react";
import gsap from "gsap";


function Home() {
  useEffect(() => {
    gsap.fromTo(".bigTittle", { x: -700 }, { x: 0, duration: 0.4 });
    gsap.fromTo(".subtittle", { x: -500 }, { x: 0, duration: 0.5, delay: 0.3 });
    gsap.fromTo(".headerDescription", { x: -600 }, { x: 0, duration: 0.2, delay: 1 });
    gsap.fromTo(".serviceButton", { opacity:0 }, { opacity: 1, duration: 1, delay: 1.5 });
    gsap.fromTo(".headerAnimated", { opacity:0 }, { opacity: 1, duration: 1, delay: 2.5 });
    gsap.fromTo(".nav", { y:-500 }, { y: 0, duration: 1, delay: 1 });
  })
  return (
    <>
      <section className="header">
        <div className="textBox">
          <Text tag='h1' children="I'm Andry Pagiela" classname="tittle bigTittle" />
          <div>
            <Text tag='h2' children="I'm FRONT-END Developper" classname="tittle subtittle" />
            <Text tag='p' children="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prê" classname="headerDescription"/>
          </div>
          <div className="headersbutton">
            <Button children='Contact me' classname='serviceButton' />
          </div>
        </div>
        <div className="headerAnimated">
          <Canvas>
            <HeaderThree />
          </Canvas>
        </div>
      </section>
      <section className='about' id="about">
        <About />
      </section>
    </>
  )
}

export default Home;