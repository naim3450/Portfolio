import React, { useRef } from 'react'
import gsap from 'gsap'

const SlideProject = ({ webImg, webType, webName, href }) => {

    let card = useRef()

    function mouseHover() {
        card.current.style.display = `block`
        card.current.style.scale = `1`
        gsap.from(card.current, {
            scale: 1,
        })
    }
    function mouseLeave() {
        card.current.style.display = `none`
        card.current.style.scale = `0`
        gsap.from(card.current, {
            scale: 0,
        })
    }
    function mouseMove(e) {
        gsap.from(card.current, {
            x: e.screenX - 200,
        })
    }


    return (
        <div className='relative group' onMouseOver={mouseHover} onMouseLeave={mouseLeave} onMouseMove={mouseMove}>
            <div className="py-[2vw] relative overflow-hidden border-y border-gray-500">
                <div className="flex items-center justify-between px-[2vw]">
                    <h2 className='text-white text-[2.3vw] ProjectName'>{webName}</h2>
                    <h3 className='text-white text-[1vw] lowercase'>{webType}</h3>
                </div>
            </div>

            <a href={href}>
                <div className="w-[20vw] h-[15vw] border-[0.4vw] scale-0 absolute top-[50%] translate-y-[-50%] hidden" ref={card}>
                    <img src={webImg} alt="" className='w-[100%] h-[100%]  absolute' />
                </div>
            </a>
        </div>
    )
}

export default SlideProject