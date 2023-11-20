import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Nav from "./page/nav/Nav";
import './assets/App.scss'
import About from "./page/about/About";
import Footer from "./page/footer/Footer";

function App() {
	// const [view, setView] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
