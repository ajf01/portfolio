import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Exper from "./components/Exper/exper";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Exper></Exper>
      <Contact></Contact>
    </div>
  );
}

export default App;
