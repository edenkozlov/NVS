import Button from "../Button";
import { useRef } from 'react';
import cap1 from '../../assets/images/cap1.png';
import cap2 from '../../assets/images/cap2.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { Power4 } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

function Capsule() {
  const container = useRef(null);

  // Email handler for "Book Now" button
  const handleBookNowClick = () => {
    window.location.href = "mailto:abc@gmail.com"; // opens email client with abc@gmail.com
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".capsules",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 0.5,
      }
    });
    tl.to(".capsule:nth-child(2)", {
      y: 0,
      marginTop: 32,
      ease: Power4
    });
    tl.to(".capsule:nth-child(1)", {
      marginTop: 32,
      ease: Power4
    });
  }, container);

  return (
    <div
      data-color="white"
      ref={container}
      className="capsules section w-full sm:h-[115vh] sm:overflow-hidden mb-32 sm:flex items-start sm:justify-between mt-32 sm:mt-60 px-8 gap-40"
    >
      <div className="left sm:w-1/3 h-full flex flex-col sm:justify-between py-10 items-start">
        <h1 className="w-2/3 font-[Sansita] text-[2.8vh] leading-[4vh] font-medium">
          From vision to execution: unlock your software potential with NVS.
        </h1>
        <div className="heading">
          <h1 className="font-[SansitaReg] text-[5vh] leading-[6.5vh] sm:text-[8vh] py-5 sm:leading-[9vh]">
            Book a <br /> Consultation
          </h1>
          <Button bgColor="bg-[#f5f19c]" text="Book Now" onClick={handleBookNowClick} />
        </div>
      </div>
      <div className="right font-[SansitaReg] mt-10 sm:w-2/3 space-y-10 h-full sm:flex items-start justify-start sm:gap-20">
        {/* 1st capsule */}
        <div
          className="capsule flex flex-col items-center gap-4 p-6 sm:-rotate-[16deg] sm:translate-y-10 rounded-full border-[1px] border-black"
        >
          <div className="image w-[74vw] h-[74vw] sm:w-[40vh] sm:h-[40vh] rounded-full overflow-hidden">
            <img className="h-full w-full object-cover" src={cap1} />
          </div>
          <div className="text text-center text-[6vw] sm:text-[3.2vh] font-semibold mt-10 leading-[4.8vh]">
            <h3>
              Discover Tailored <br />
              Solutions for Your <br /> Tech Needs with Our
              <br />
              Expert Team of <br /> Consultants.
            </h3>
          </div>
          <button className="bg-[#fffff] text-white px-4 rounded-full text-medium py-3 mb-10 mt-10 font-semibold">
            Thought Leadership
          </button>
        </div>
        {/* 2nd capsule */}
        <div
          className="capsule flex flex-col items-center gap-4 p-6 sm:-rotate-[16deg] sm:translate-y-40 rounded-full border-[1px] border-black"
        >
          <button className="bg-[#fffff] text-white px-4 rounded-full text-medium py-3 mb-6 mt-10 font-semibold">
            Thought Leadership
          </button>
          <div className="text text-center text-[3.2vh] flex flex-col gap-6 mb-6 font-semibold leading-[4.8vh]">
            <h3>
              Streamline Operations <br />
              and Drive Growth <br />
              with Expert Guidance <br />
              from Our Team
            </h3>
            <h4 className="font-[Sansita] text-[1.9vh] font-medium leading-[2.8vh] text-zinc-500">
              Book a consultation to explore customized
              <br />
              software strategies that enhance your <br />
              operations and achieve your business goals
            </h4>
          </div>
          <div className="image w-[74vw] h-[74vw] sm:w-[40vh] sm:h-[40vh] rounded-full overflow-hidden">
            <img className="h-full w-full object-cover" src={cap2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capsule;
