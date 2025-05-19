import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Skills from './components/Skills';
import Reachme from './components/Reachme'


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='w-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Education />
            <Contact />
          <Reachme />
          </>
        } />
        <Route 
        path="/services" 
        element={<Services />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reachme" element={<Reachme />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;