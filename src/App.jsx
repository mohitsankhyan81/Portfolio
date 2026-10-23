import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Project1 from "./Project/Project1.jsx";
import Project2 from "./Project/Project2.jsx";
import Project3 from "./Project/Project3.jsx";
import Project4 from "./Project/Project4.jsx";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} /> 
        <Route path="/projects/project3" element={<Project3 />} /> 
        <Route path="/projects/project4" element={<Project4 />} /> 
      </Routes>
  );
};

export default App;