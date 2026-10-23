
import Nav from "../component/Nav";
import Achievements from "../Home/Achivments";
import Footer from "../Home/Footer";
import Hero from "../Home/Hero";
import Projects from "../Home/Projects";
import TechStack from "../Home/TechStack";

export default function HomeBackground() {
  return (
    <>
    <Nav/>
    <Hero/> 
    <TechStack/>
    <Projects/>
    <Achievements/>
    <Footer/>
    </>
  );
}
