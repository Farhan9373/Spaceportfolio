import Encryption from "./component/Encryption";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";

export default function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Encryption/>
     <Project/>
     <Footer/>
    </>
  )
}