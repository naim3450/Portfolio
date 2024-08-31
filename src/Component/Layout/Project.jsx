import React, { useEffect, useRef, useState } from 'react'
import SlideProject from '../SlideProject'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import tackStore from '../../assets/tackStore.png'
import weather from '../../assets/weather.png'
import trav from '../../assets/trav.jpg'
import sundown from '../../assets/sundown.jpg'


const Project = () => {

    let text = `PROJECTS__LIST`
    text = text.split('').map((el, index) => {
        return (
            <span className='inline-block roc' key={index}>{el}</span>
        )
    })
    let projectRef = useRef(text)

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(function () {
        gsap.from('.project span', {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                start: "top 50%"
            }
        })
        gsap.to('.page2', {
            background: `#000`,
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                start: "top 40%",
                end: "bottom 0",
                scrub: true
            }
        })
    })


    let Deatails = [
        {
            id: 1,
            name: `LAZAREV`,
            type: `Product Design Agency`,
            image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgKBe-A6wbawubAVr3nLA9BB0MuX75smkSQ&s`,
            path: `https://naim3450.github.io/LAZAREV/`
        },
        {
            id: 2,
            name: `Sundown-Studio`,
            type: `Weather application`,
            image: sundown,
            path: `https://naim3450.github.io/Sundown/`
        },
        {
            id: 3,
            name: `Weather`,
            type: `Weather application`,
            image: weather,
            path: `https://naim3450.github.io/Weather_API/`
        },
        {
            id: 4,
            name: `Tack Store`,
            type: `e-commerce`,
            image: tackStore,
            path: `https://tack-store.vercel.app/`
        },
        {
            id: 5,
            name: `Emprise`,
            type: `travel site`,
            image: trav,
            path: `https://project-emprise.vercel.app/`
        },

    ]

    return (
        <div className='w-[100%] min-h-[100vh] pb-[5vw] bg-[#222222] page2'>
            <h1 className='text-center pt-[10vw] font-bold font-Ubuntu text-white text-[2vw] tracking-[0.05vw] uppercase project'>{projectRef.current}</h1>

            <div className='mt-[5vw]'>
                {
                    Deatails.map((el, idx) => {
                        return (
                            <SlideProject key={idx} webName={el.name} webType={el.type} webImg={el.image} href={el.path} />
                        )
                    })
                }
            </div>

        </div >
    )
}

export default Project