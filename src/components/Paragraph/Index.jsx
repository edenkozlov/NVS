import img1 from '../../assets/images/KMG.png';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara");
        const characters = para.textContent.split("");
        characters.forEach(function(e) {
            clutter += `<span>${e}</span>`;
        });
        para.innerHTML = clutter;   
        gsap.set(".textpara span", { opacity: .1 });
        gsap.to(".textpara span", {
            scrollTrigger: {
                trigger: ".para",
                start: "top 50%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,
        });
    }, []);

  return (
    <div data-color="white" className="para section w-full flex flex-col items-center justify-center px-8 mt-24 text-center">
        <div className="text sm:w-[80%] flex flex-col items-center justify-between">
            <div className='hidden w-[50%] sm:flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h1 className='text-[2.8vh] sm:text-[3.8vh] font-medium'>Software Solutions Collaborator</h1>
                <h3 className='text-zinc-500 text-[2.4vh] whitespace-nowrap'>KMG Technologies</h3>
                <a href="https://kmgtechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-[#EF9D71] mt-4 underline mb-4">Visit their website</a>
            <h3 className='textpara sm:w-[50%] text-[#EF9D71] font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium leading-[5vh] mb-10'>KMG is a strategic software partner, enhancing project management capabilities across our collaborative projects. Their expertise in organizing workflows, tracking progress, and optimizing resource allocation enables our team to achieve seamless project execution, ensuring every milestone is met efficiently.</h3>
            <div className="pers w-[80%] flex flex-col items-center justify-center gap-4">
            <div className="image w-24 h-24 overflow-hidden rounded-full ">
                    <img src={img1} />
                </div>
            </div>
        </div>  
    </div>
  );
}

export default Para;
