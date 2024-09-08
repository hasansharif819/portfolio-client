import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import Blogs from './Blogs';
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';

function MyHome() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Experiences />
      <Blogs></Blogs>
      <About />
      <Contact />
    </div>
  );
}

export default MyHome
