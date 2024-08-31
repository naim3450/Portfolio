import React, { useEffect, useRef } from 'react'

const Loader = () => {
    let loader = useRef(null)
    useEffect(() => {
        document.body.style.overflow = `hidden`
        setTimeout(() => {
            loader.current.style.transform = `translateY(-100%)`
            document.body.style.overflow = `visible`
        }, 1500);

    })


    return (
        <div ref={loader} className='h-[100vh] w-[100%] fixed z-50 bg-[#1C1D20] duration-[0.6s] text-white text-[3vw] flex items-center justify-center loderText font-Ubuntu'>
            <h1 className='h-[5vw] absolute loade'>Hello</h1>
            <h1 className='h-[5vw] absolute loade'>नमस्ते</h1>
            <h1 className='h-[5vw] absolute loade'>안녕하세요</h1>
            <h1 className='h-[5vw] absolute loade'>Hola</h1>
            <h1 className='h-[5vw] absolute loade'>こんにちは</h1>
            <h1 className='h-[5vw] absolute loade'>Привет</h1>
        </div>
    )
}

export default Loader