import React, { useRef, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import heroImg from '../../assets/heroImg.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Hero = () => {
    let text = `Front-End Developer |`
    text = text.split('').map((el, index) => {
        return (
            <span className='tracking-[0.15vw]' key={index}>{el}</span>
        )
    })
    const forntend = useRef(text)

    useGSAP(() => {
        gsap.from('.headLine h1', {
            y: 30,
            delay: 1.7,
            stagger: 0.1,
            opacity: 0
        })
        gsap.from('.SubheadLine span', {
            y: 30,
            delay: 2.1,
            stagger: 0.06,
            opacity: 0
        })
        gsap.from('.deatails', {
            delay: 2,
            opacity: 0,
            duration: 1,
            x: 50
        })
    });

    // Gola part start
    let gola = useRef(null)

    function mouseOver(e) {
        gola.current.style.display = `block`
    }

    function mouseMove(e) {
        gola.current.style.display = `block`
        gsap.from('.golaDiv', {
            top: e.pageY - 50,
            left: e.pageX - 50
        })
    }
    function mouseLeave(e) {
        gola.current.style.display = `none`
    }

    // Gola part end

    useGSAP(() => {
        gsap.from('.bennarImg', {
            delay: 1.8,
            scale: 0,
            transtion: `1s`,
            y: `100%`
        })
    })

    // common Hover function start
    function commonHover() {
        gola.current.style.scale = `0.2`
        gola.current.style.background = `#3295ff`
    }

    function commonLevae() {
        gola.current.style.scale = `1`
        gola.current.style.background = `#fff`
    }
    // common Hover function end


    return (
        <div className='hero overflow-hidden cursor-none' onMouseOver={mouseOver} onMouseLeave={mouseLeave} onMouseMove={mouseMove}>
            <div className="h-[100vh] w-[100vw] star"></div>

            <div
                className="bg-white h-[5vw] w-[5vw] rounded-[50%] absolute hidden mix-blend-difference golaDiv z-[1]" ref={gola}>
            </div>

            <div className="flex">
                <div className="absolute top-[13vw] left-[9vw] flex flex-col gap-[1vh]">
                    <div className="leading-[3.3vw] font-bold font-Ubuntu tracking-[0.1vw] headLine">
                        <h1 className='text-white text-[2.7vw]'>Hello I'm</h1>
                        <h1 className='text-[#3295ff] text-[3vw]'>Naim Hasan</h1>
                    </div>
                    <h4 className='text-[#FFF] text-[1.14vw] flex gap-[0.8vh]'>
                        A Passionate
                        <p className='text-[#3295ff] font-semibold SubheadLine'>{forntend.current}</p>
                    </h4>
                    <p className='text-[#FFF] text-[1vw] w-[32vw] deatails'>Creating dynamic and engaging user experiences using the latest web. I specialize in crafting engaging user experiences with a focus on animation, responsive design, and modern web technologies.
                    </p>

                    <div className="flex items-center gap-[2vw] mt-[1vw] z-[2] w-[18vw]" onMouseEnter={commonHover} onMouseLeave={commonLevae}>
                        <a href="./Frontend developer.pdf"
                            download={'filel.pdf'}
                            className={`text-center text-[1.1vw] px-[1.8vw] py-[0.9vw] text-white border-blue-500 border-[0.1vw] rounded-[2vw]`}>Download CV</a>

                        <a href="https://github.com/naim3450">
                            <FaGithub className='text-[1.5vw] text-blue-500' />
                        </a>

                        <a href="https://www.linkedin.com/in/naim-hasan-166b3130a/">
                            <FaLinkedin className='text-[1.5vw] text-blue-500' />
                        </a>
                    </div>
                </div>

                <div className='h-[25vw] w-[25vw] absolute top-[10vw] right-[11vw] borderr rounded-[15vw] overflow-hidden z-[2]'>
                    <img src={heroImg} alt="" className='h-[100%] w-[100%] absolute rounded-[15vw] bennarImg' />
                </div>
            </div>
        </div>
    )
}

export default Hero