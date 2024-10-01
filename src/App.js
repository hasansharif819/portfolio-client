import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Menubar from './components/Menubar';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import ProjectDetails from './components/ProjectDetails';
import { Routes, Route } from 'react-router-dom';
import MyHome from './components/MyHome';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App bg-black">
      <Menubar />
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
