import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Exper from "./components/Exper/exper";
import Contact from "./components/Contact/contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Navigate
} from "react-router-dom";
import React, { useEffect } from 'react';

function App() {
  {/* useEffect(() => {
    return () =>{
      if (String(window.performance.getEntriesByType("navigation")[0].type) === "reload") {
        console.log("HEere");
        window.location.replace("https://ajf01.github.io/portfolio");
      }
    }
  }, []); */}

  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Exper></Exper>
      <Contact></Contact> */}
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/exper" element={<Exper />} />
          <Route path="/clients" element={<Contact />} />
          <Route path='*' element={<Navigate to='/intro' replace />} />
          {/*<Route path='*' element={<meta http-equiv="refresh" content="2;url=https://ajf01.github.io/portfolio" />} />*/}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
