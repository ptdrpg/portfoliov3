import { Canvas } from "@react-three/fiber"
import HeaderThree from "../../component/layout/3D/HeaderThree";
import About from "../about/About";
import Text from "../../component/text/Text";
import './home.scss'
import Button from "../../component/button/Button";


function Home() {

  return (
    <>
      <section className="header">
        <div className="textBox">
          <Text tag='h1' children="I'm Andry Pagiela" classname="tittle" />
          <div>
            <Text tag='h2' children="I'm FRONT-END Developper" classname="tittle" />
            <Text tag='p' children="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prê"/>
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