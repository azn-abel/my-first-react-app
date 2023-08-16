import { useEffect } from 'react';
import './styles/index.css';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import {
  TransitionGroup,
  // CSSTransition
} from 'react-transition-group';

import Home from "./pages/home/Home.js"
import Navbar from './components/navbar/Navbar.js'
import Footer from "./Footer";

import AboutMe from './pages/aboutMe/AboutMe.js';
import Projects from './pages/projects/Projects.js'
import Resume from './pages/resume/Resume.js'
import Blog from './pages/blog/Blog.js'
import FAQ from './pages/faq/FAQ.js'
import ContactMe from './pages/contactMe/ContactMe.js'
import Error404 from './404.js'
import BlogArticleDisplay from "./pages/blog/BlogArticleDisplay";

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    let item;

    const handleResize = () => {
      try {

        const footerHeight = document.getElementById('footer').offsetHeight;
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const newHeight = item.getBoundingClientRect().height;
        const fitHeight = window.innerHeight - navbarHeight - footerHeight;

        if (newHeight >= fitHeight) {
          document.getElementById('content').style.height = newHeight + footerHeight + "px";
        } else {
          document.getElementById('content').style.height = fitHeight + footerHeight + "px";
        }
        
      } catch (e) {
        console.error("Failed to properly resize components.")
        console.log(e);
      }
    }

    const initialResize = () => {
      try {
        if (location.pathname === "" || location.pathname === "/") {
          item = document.getElementById("home");
        } else {
          item = document.getElementById(location.pathname.slice(1));
        }
        if (item == null) {
          item = document.getElementById("404");
        }
        handleResize();
      } catch {
        console.log("Failed to get current component.")
      }
    }
    initialResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('visibilitychange', handleResize);
    window.scrollTo({top: 0});

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('visibilitychange', handleResize);
    };

  }, [location])

  

  return (
    <TransitionGroup className="transition-group">
      {/*<CSSTransition*/}
      {/*  key={location.key}*/}
      {/*  classNames="fade"*/}
      {/*  timeout={1000}*/}
      {/*>*/}
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogArticleDisplay />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      {/*</CSSTransition>*/}
    </TransitionGroup>
  );
};

function App() {

  return (
    <div className="App">
      <div>
        <HashRouter>
            <Navbar/>
            <div className='content' id='content'>
              <AnimatedRoutes/>
              <Footer/>
            </div>
        </HashRouter>
      </div>

    </div>
  );
}

export default App;
