import React from "react";
import "./index.css";
import home from "./routes/home";
import project from "./routes/project";
import about from "./routes/about";
import contact from "./routes/contact";


import { Routes,Route} from "react-router";


function App() {
  return (
  <>
  <Routes>
    <Route path="/" Component={home} /> 
    <Route path="/project" Component={project}/>
    <Route path="/about" Component={about}/>
    <Route path="/contact" Component={contact}/>

  </Routes>
  </>
  );
}

export default App;
