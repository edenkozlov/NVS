import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Capsule from './components/Capsule/Index';
import Craft from './components/Craft/Index';
import Home from './components/Home/Index';

import Team from './components/Team/Index';
import Footer from './components/Footer/Index';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';






function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const list = document.querySelectorAll('.section');
    list.forEach(function (e) {
      ScrollTrigger.create({
        trigger: e,
        start: 'top 90%',
        end: 'bottom 90%',
        onEnter: function () {
          document.body.setAttribute('theme', e.dataset.color);
        },
        onEnterBack: function () {
          document.body.setAttribute('theme', e.dataset.color);
        },
      });
    });
  });

  return (
    <>
      <Helmet>
        <meta property="og:title" content="NVS Technologies" />
        <meta property="og:description" content="NVS Technologies, your go-to solution for tech innovation." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://NVStechnologies.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NVS Technologies" />
        <meta name="twitter:description" content="NVS Technologies, your go-to solution for tech innovation." />
        <meta name="twitter:image" content="/preview.png" />
      </Helmet>
      
      <Router >
        <Routes>
          <Route
            path="/"
            element={
              <div className="section main w-full">
                <Home />
                <Craft />
                <Team />
                <Capsule />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
