import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Capsule from './components/Capsule/Index';
import Craft from './components/Craft/Index';
import Home from './components/Home/Index';
import Para from './components/Paragraph/Index';
import Para2 from './components/Paragraph2/Index';
import Para3 from './components/Paragraph3';
import Real from './components/Real/Index';
import Team from './components/Team/Index';
import Footer from './components/Footer/Index';
import Advisory from './components/Advisory/Advisory';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';
import Form from './components/Form/Form';





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
        <meta property="og:title" content="KMG Technologies" />
        <meta property="og:description" content="KMG Technologies, your go-to solution for tech innovation." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kmgtechnologies.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KMG Technologies" />
        <meta name="twitter:description" content="KMG Technologies, your go-to solution for tech innovation." />
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
                <Real />
                <Team />
                <Para3 />
                <Para2 />
                <Para />
                <Capsule />
                <Footer />
              </div>
            }
          />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
