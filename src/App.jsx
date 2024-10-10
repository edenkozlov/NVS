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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="section main w-full">
              <Home />
              <div style={{ marginTop: 'sm:-mt-96 lg:-mt-[480px]' }}> {/* Adjust the negative margin as needed */}
    <Craft />
  </div>
              <Real />
              <Team />
              <Para />
              <Para2 />
              <Para3 />
              <Capsule />
              <Footer />
            </div>
          }
        />
        <Route path="/Advisory" element={<Advisory />} />
      </Routes>
    </Router>
  );
}

export default App;
