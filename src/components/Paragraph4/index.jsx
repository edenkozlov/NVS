import img1 from '../../assets/images/nvs.png';
//import img1 from '../../assets/images/nas.png';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para4() {
    useEffect(() => {
        let clutter = '';
        const para = document.querySelector(".textpara4");
        const characters = para.textContent.split("");

        // Wrap each character in a span element
        characters.forEach((e) => {
            clutter += `<span>${e}</span>`;
        });

        // Set the inner HTML with the new span-wrapped content
        para.innerHTML = clutter;

        // Set initial opacity for animation
        gsap.set(".textpara4 span", { opacity: 0.1 });

        // GSAP scroll-triggered animation
        gsap.to(".textpara4 span", {
            scrollTrigger: {
                trigger: ".para4",  // Ensure it's using the unique trigger class
                start: "top 70%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1,
            stagger: 0.03,
        });
    }, []);

    return (
        <div id="team4" data-color="white" className="para4 section w-full flex items-center mt-32 px-8 justify-center -translate-y-1/5">
            <div className="text sm:w-[80%] flex flex-col items-center sm:items-end justify-between">
                <div className="hidden w-[40%] sm:flex items-center justify-center mb-12">
                    <hr className="bg-zinc-400 w-[20%] h-[.3vh]" />
                </div>
                <h3 className="textpara4 sm:w-[40%] text-green-600 font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium text-center leading-[5vh] mb-10">
                NVS is a strategic software partner, enhancing project management capabilities across our collaborative projects. Their expertise in organizing workflows, tracking progress, and optimizing resource allocation enables our team to achieve seamless project execution, ensuring every milestone is met efficiently.
                </h3>
                <div className="pers w-[40%] flex flex-col items-center justify-center gap-2">
                    <div className="image w-24 h-24 overflow-hidden rounded-full">
                        <img src={img1} alt="Alex" />
                    </div>
                    <h1 className="text-[2.8vh] sm:text-[3.8vh] font-medium">Collaborator</h1>
                    <h3 className="text-zinc-500 text-[2.4vh] whitespace-nowrap">NVS</h3>
                </div>
            </div>
        </div>
    );
}

export default Para4;
