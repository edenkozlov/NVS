
import img1 from '../assets/images/Imm.png';
import img2 from '../assets/images/BTM.png';
import img3 from '../assets/images/SM.png';
import img4 from '../assets/images/LS.png';
import img5 from '../assets/images/AP.png';
import img6 from '../assets/images/Boost.png';
import img7 from '../assets/images/TNF.png';

import {useEffect} from 'react';
import { gsap } from "gsap";
import { Power4} from 'gsap/gsap-core';

const data = [
    {key: 1, title: "Immpact", role: "Immigration CRM", img: img1, link: "https://immpact-as.ca/landing"},
    {key: 2, title: "Blockchain Technology Management", role: "Crypto ATM Protocol", img: img2, link: "https://btmtech.ca/"},
    {key: 3, title: "Boost", role: "Solana Token Launchpad", img: img6, link: "https://boost.fun"},
    {key: 4, title: "Shark Media", role: "Media Software", img: img3, link: "https://sharkmedia.pro"},
    {key: 5, title: "Luna Studios", role: "Web3 Studio", img: img4, link: "https://0x-luna-studios.com"},
    {key: 6, title: "Armoire Privee", role: "Web3 Designer Marketplace", img: img5, link: "https://armoireprivee.com"},
    {key: 7, title: "The National Fix", role: "Maintenence Management CRM", img: img7, link: "https://www.thenationalfix.com/"},
    //{key: 8, title: "Cy Serrano", role: "VP of Product", img: img8},
    //{key: 9, title: "Lenya McGrath", role: "VP of Partnerships", img: img9},
]


function List() {

  
  useEffect(() => {
    var rotate = 0;
    var diffrot = 0;
    const list = document.querySelectorAll('.listelem')

    list.forEach((el) => {  
      el.addEventListener('mousemove', function(dets) {
        
        var diff = dets.clientY - el.getBoundingClientRect()
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(this.querySelector(".picture"), {
          opacity: 1,
          ease: Power4,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        })
      })
      el.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector(".picture"), {opacity: 0, ease: Power4, duration: .5})
      })
      el.addEventListener('mousemove', function() {
        gsap.to(this.querySelector(".bluelayer"), {
          height: '100%', 
          ease: Power4,
          duration: .1
        })
      })
      el.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector(".bluelayer"), {
          height: '0%',  
          ease: Power4, 
          duration: .1})
      })
    })
  })

  return (
    <div className="list-container">
      {data.map((item, index) => {
        return (
          <a 
            key={index} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="listelem w-full py-[3vh] sm:px-[4vh] sm:py-[6vh] 
            flex justify-between items-center
            border-b-2 border-black sm:relative"
          >
            <div 
              className="relative w-full sm:flex 
              sm:items-center justify-between z-[3]"
            >
              <div className="left sm:flex items-center gap-14 sm:text-5xl">
                <h3 className="hidden sm:inline-block opacity-25">0{item.key}</h3>
                <h1 className="text-blue-600 text-3xl sm:text-black sm:text-[6vh]">{item.title}</h1>
              </div>
              <h3 className="font-[Sansita] text-[3vh] sm:text-[2.4vh] font-medium tracking-tight">
                {item.role}
              </h3>   
            </div>
            <div 
              className='picture w-[14vh] h-[14vh] opacity-100 right-0 
              sm:opacity-0 sm:absolute z-[4] sm:top-1/2 
              sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[15rem] sm:h-[15rem] 
              overflow-hidden rounded-full'
            >
              <img src={item.img} className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className="hidden sm:inline-block bluelayer sm:absolute top-0 left-0 z-[2] w-full h-0 bg-[#f5f19c]"></div>
          </a>
        )
      })}
    </div>
  )
}

export default List
