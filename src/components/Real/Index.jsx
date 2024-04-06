
import img1 from '../../assets/images/real4.jpg'
import img2 from '../../assets/images/real2.jpg'
import img3 from '../../assets/images/real3.jpg'
import img4 from '../../assets/images/real1.jpg'
import img5 from '../../assets/images/real5.jpg'
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import img6 from '../../assets/images/real6.jpg'
import img7 from '../../assets/images/real7.jpg'
import img8 from '../../assets/images/real8.jpg'
import img9 from '../../assets/images/real9.jpg'
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2,} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {

    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            }
         });
         tl.to(".slide", {
            xPercent: -300,
            ease: Power2
         })
         tl.to(".image7", {
            opacity: 0,
         })              
    }, container );


  return (
    <div  
        data-color="salmon" 
        ref={container} 
        className="real section w-full"
    >
      <div 
        className="cont h-[400vh] relative"
    >
        <div  
            className="slides w-full h-[130vh] 
            overflow-hidden sticky top-0 left-0 flex"
        >
            {/* 1st slide */}
            <div 
                className="slide w-full flex items-center 
                justify-center h-screen flex-shrink-0 "
            >
                
                <div 
                    className="text1 font-[SansitaReg] 
                    text-[15vh] leading-[18vh]"
                >
                    <h1 className="">
                        Real Talk,    
                    </h1>
                    <h1 className="">
                        Real Impact
                    </h1>
                </div>
                <div 
                    className="image absolute w-[45vh] h-[45vh] 
                    top-1/2 -translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img1}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            {/* 2nd slide */}
            <div   
                className="slide w-full h-screen flex items-center 
                justify-center flex-shrink-0 relative "
            >
                <div 
                    className="image absolute  w-[40vh] h-[40vh] 
                    top-10 -translate-y-1/2 right-1/6"
                >
                    <img 
                        src={img2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 className='font-[Sansita] w-1/3 text-left font-semibold tracking-tight text-[2.2vh] absolute top-0 left-0 z-[3] -translate-y-1/2 -translate-x-1/3'>
                        We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.
                        </h3>
                    <h1 className=' font-semibold text-[20vh] leading-none text-white '>
                        20.4M
                    </h1>
                    <h3 className='text-[5vh] font-semibold leading-[7vh]'>
                        Real people — real lives — we have built products and solutions for.
                    </h3>    
                </div>
                <div 
                        className="image absolute w-[20vh] h-[20vh] 
                        top-2/3 left-1/4 -translate-x-1/2
                        "
                    >
                    <img 
                        src={img4}
                        className="w-full h-full object-contain rounded-full"
                    />
                    </div>
                <div 
                    className="image absolute  w-[45vh] h-[45vh] bottom-0 right-1/6 
                    translate-y-[20vh]"
                >
                    <img 
                        src={img3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[45vh] h-[45vh] top-1/2 -translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img5}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            
            {/* 3rd slide */}
            <div 
                className="slide w-full h-screen flex items-center justify-center 
                flex-shrink-0  relative">
                    <div 
                        className="image absolute w-[45vh] h-[45vh]  top-20 -translate-x-1/5
                        -translate-y-1/2 right-1/6
                        "
                    >
                    <img 
                        src={icon2}
                        className="w-full h-full object-contain rounded-full"
                    />
                    </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 
                    className='font-[Sansita] w-1/3 text-left font-semibold tracking-tight 
                    text-[2.5vh] absolute top-0 left-0 z-[3] -translate-y-1/2 -translate-x-1/3'
                    >
                        Our team is global and diverse, because our individual experiences make us stronger.
                    </h3>
                    <h1 className=' font-semibold text-[20vh] leading-none text-white '>49%</h1>
                    <h3 className='text-[6vh] font-semibold leading-[6vh]'>
                        Expert Women in Tech.
                    </h3>    
                </div>
                <div 
                    className="image absolute w-[60vh] h-[60vh] bottom-10 right-2/4 
                    translate-y-1/3 -translate-x-1/5"
                >
                    <img 
                        src={icon1}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[50vh] h-[50vh] top-1/2 -translate-y-1/4 translate-x-1/3
                    right-0 "
                >
                    <img 
                        src={icon3}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>

            {/* 4th slide */}
            <div 
                className="slide w-full h-screen  flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div 
                    className="image absolute w-[40vh] h-[40vh] top-10 translate-x-1/2
                    -translate-y-1/2 right-2/3"
                >
                    <img 
                        src={img6}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>                   
                    <h1 className=' font-semibold text-[20vh] leading-none text-white '>13</h1>
                    <h3 className='text-[6vh] font-semibold leading-[8vh]'>
                        Nationalities Represented on Our <br/> Team.
                    </h3>    
                </div>
                <div 
                    className="image7 absolute w-[45vh] h-[45vh] bottom-0 right-2/4 
                    translate-y-1/2 -translate-x-1/2"
                >
                    <img 
                        src={img7}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[45vh] h-[45vh] top-0 translate-y-1/5
                    translate-x-2/3  right-0 "
                >
                    <img 
                        src={img9}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5
                    -translate-x-1/3  right-1/4 "
                >
                    <img 
                        src={img8}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Real
