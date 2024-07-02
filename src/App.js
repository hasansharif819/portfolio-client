import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
// import Skill from './components/Skill';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Menubar from './components/Menubar';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App bg-black">
      <Menubar/>
      <Home />
      {/* <Skill /> */}
      <Skills />
      <Projects />
      <Blogs></Blogs>
      <About />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
