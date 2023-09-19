import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Exper from "./components/Exper/exper";
import Contact from "./components/Contact/contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Exper></Exper>
      <Contact></Contact>
      {/*<Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/exper" element={<Exper />} />
          <Route path="/clients" element={<Contact />} />
          <Route path='*' element={<Navigate to='/intro' replace />} />
        </Routes>
      </Router>*/}
    </div>
  );
}

export default App;
