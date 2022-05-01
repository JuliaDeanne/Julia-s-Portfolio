import './styles/AboutMe.css';
import './styles/Resume.css';
import './styles/Projects.css';
import './styles/Contact.css';
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';


//Router DOM
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
 
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route path="/" element={<AboutMe />}/>
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
       </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App