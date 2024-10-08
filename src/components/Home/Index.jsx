// index.jsx
import video from '../../assets/video/1ENIoa5sjq.mp4';
import Row, { itemsGroup1, itemsGroup2, itemsGroup3, itemsGroup4 } from '../Row';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from "gsap";
import styles from './Style.module.css';
import { Power2, Power4 } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { BiMenu } from "react-icons/bi";
import Logo from '../../assets/images/KMG.png';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const container = useRef(null);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        gsap.set(".toptext span", { opacity: 0.1 });
        gsap.to(".toptext span", {
            scrollTrigger: {
                trigger: ".home",
                start: "top 50%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1,
            stagger: 0.03,
        });
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            }
        });
        tl.to(".vdodiv", { clipPath: 'circle(0% at 50% 50%)', ease: Power4 }, "start")
          .to(".slidesm", { scale: 1, ease: Power2 }, 'start')
          .to(".lft", { xPercent: -10, stagger: 0.03, ease: Power4, duration: 1 }, 'start')
          .to(".rgt", { xPercent: 10, stagger: 0.03, ease: Power4, duration: 1 }, 'start');
    }, container);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous);
    });

    return (
        <div ref={container} data-color="black" className="home section w-full h-[200vh] relative">
            <div className='w-full sticky top-0 left-0'>
                <motion.div
                    variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
                    animate={hidden ? "hidden" : "visible"}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9]"
                >
                    <div className="w-full flex sm:flex items-center justify-between">
                        <div className="logo w-[12vh] h-[12vh] sm:w-[16vh] sm:h-[10vh] cursor-pointer z-[9] mt-2">
                            <img src={Logo} alt='Logo' height={48} width={48} />
                        </div>
                        <BiMenu style={{ fontSize: "5.5vw" }} className='inline-block sm:hidden z-[9] cursor-pointer' />
                    </div>
                </motion.div>

                <div className='btmtext absolute z-[4] bottom-[4%] left-[25%] text-center sm:text-start sm:bottom-[7%] sm:left-8 w-48'>
                    <h1 className='sm:text-[2vh] font-semibold'>
                        Software with Purpose.
                        Real Solutions.
                        Designed to make a difference.
                    </h1>
                </div>

                <div className={`vdodiv w-full h-screen absolute z-[3] top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}>
                    <video className="absolute w-full h-screen object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" autoPlay loop muted src={video}></video>
                </div>

                <div className="marqueecontainer w-full h-screen relative overflow-hidden">
                    <div className='heading absolute top-[12%] sm:top-[7%] left-1/2 -translate-x-1/2 w-72'>
                        <h2 className='toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center'>
                            Crafting a new paradigm of technology, one that is
                        </h2>
                    </div>

                    <div className='slidesm absolute scale-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]'>
                        <Row translateClass="-translate-x-1/2" direction="lft" items={itemsGroup1} />
                        <Row translateClass="-translate-x-2/3" direction="rgt" items={itemsGroup2} />
                        <Row translateClass="-translate-x-1/4" direction="lft" items={itemsGroup3} />
                        <Row translateClass="-translate-x-1/3" direction="rgt" items={itemsGroup4} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
