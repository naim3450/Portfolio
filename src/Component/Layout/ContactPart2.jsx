import React from 'react'
import logo from '../../assets/heroImg.png'
import gsap from 'gsap'

const ContactPart2 = () => {

    function mouseMove(e) {

        gsap.to('svg path', {
            attr: { d: `M 50 50 Q 590 ${100} 1090 50` },
            duration: 0.5,
        })
    }
    function mouseLeave() {
        gsap.to('svg path', {
            attr: { d: `M 50 50 Q 590 50 1090 50` },
            duration: 0.8,
            ease: "elastic.out(1,0.1)"
        })
    }

    return (
        <div className='bg-[#1C1D20] h-[100vh] w-[100%] z-10 absolute part'>
            <div className="flex items-start pt-[10vw] px-[7vw] gap-[2vw]">
                <img src={logo} alt="" className='h-[5vw] w-[5vw] rounded-[50%] border bg-red-500' />
                <h1 className='text-[6vw] font-Ubuntu font-medium leading-[5vw] text-white tracking-[0.15vw]'>Let’s work <br />together</h1>
            </div>

            <div className="string pl-[3vw] mt-[1vw]">
                <div onMouseMove={mouseMove} onMouseLeave={mouseLeave} className=' w-[100%]'>
                    <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
                        <path id="path" d="M 50 50 Q 590 50 1090 50" stroke="white" fill="transparent" />
                    </svg>
                </div>
            </div>

            <div className=" pt-[2.5vw] pl-[5vw] flex gap-[1.5vw]">
                <a href="mailto:naim.saim74@gmail.com" className='px-[2.2vw] py-[1.3vw] border-[2px] border-gray-500 rounded-[30px] text-[1vw] text-white font-medium hover:bg-blue-500 hover:border-blue-500 duration-100 ease-in'>naim.saim74@gmail.com</a>


                <a href="tel:01953570992" className='px-[2.2vw] py-[1.3vw] border-[2px] border-gray-500 rounded-[30px] text-[1vw] text-white font-medium hover:bg-blue-500 hover:border-blue-500 duration-100 ease-in'>01953570992</a>
            </div>

            <div className="h-[8vw] w-[8vw] rounded-[50%] bg-blue-600 hover:bg-blue-700 duration-100 ease-in flex items-center justify-center text-[1vw] text-white font-semibold absolute top-[40%] left-[50%]"><a href="mailto:naim.saim74@gmail.com">Get in touch</a></div>

            <div className="mt-[10vw] text-white flex gap-[1vw] justify-end pr-[2vw]">
                <a href="https://github.com/naim3450">Github</a>
                <a href="https://www.linkedin.com/in/naim-hasan-166b3130a/">Linkedin</a>
            </div>
        </div>
    )
}

export default ContactPart2