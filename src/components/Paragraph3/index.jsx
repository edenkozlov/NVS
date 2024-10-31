import img1 from '../../assets/images/shady.jpg';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para3() {
    useEffect(() => {
        var clutter = '';
        const para = document.querySelector(".textpara3");
        const characters = para.textContent.split("");
        
        // Construct the new content with span-wrapped characters
        characters.forEach((e) => {
            clutter += `<span>${e}</span>`;
        });

        // Set the new HTML content with span-wrapped characters
        para.innerHTML = clutter;

        // Initial GSAP settings for spans
        gsap.set(".textpara3 span", { opacity: 0.1 });

        // Apply GSAP scroll animation to spans
        gsap.to(".textpara3 span", {
            scrollTrigger: {
                trigger: ".para3",  // Ensure it targets the correct container class
                start: "top 70%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1,
            stagger: 0.03,
        });
    }, []);

    return (
        <div id="team" data-color="white" className="para3 section w-full flex items-center justify-center px-8">
            <div className="text sm:w-[80%] flex flex-col items-center sm:items-start justify-between">
                <div className='hidden w-[50%] sm:flex items-center justify-center mb-12'>
                    <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
                </div>
                <h3 className="textpara3 sm:w-[50%] text-blue-600 font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium text-center leading-[5vh] mb-10">
                Shady is a dynamic full-stack developer, bringing innovative ideas to life with clean, efficient code. He excels in working across different layers of the tech stack, ensuring that every part of an application performs at its best. Known for his collaborative spirit and passion for learning, Shady keeps our software at the cutting edge of technology.
                </h3>
                <div className="pers w-[50%] flex flex-col items-center justify-center gap-2">
                    <div className="image w-24 h-24 overflow-hidden rounded-full">
                        <img src={img1} alt="Shady Guindi" />
                    </div>
                    <h1 className="text-[2.8vh] sm:text-[3.8vh] font-medium">CEO</h1>
                    <h3 className="text-zinc-500 text-[2.4vh] whitespace-nowrap">Shady Guindi</h3>
                </div>
            </div>
        </div>
    );
}

export default Para3;
