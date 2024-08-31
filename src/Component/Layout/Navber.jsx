import React from 'react'
import List from '../List'
import { Link } from 'react-router-dom'

const Navber = () => {
    return (
        <div className='flex padding pt-[1vw] pb-[1vw] fixed top-0 left-0 w-[100%] z-20 text-white justify-between items-center overflow-hidden nav'>
            <h1 className='font-bold leading-[1vw] text-[1vw]'>NA<br />IM.</h1>

            <ul className='flex gap-[2vw]'>
                <Link to={`/`}>
                    <List text={`Home`} className={`text-[0.9vw] before:h-[100%] list`} />
                </Link>
                <a href="./Frontend developer.pdf"
                    download={'filel.pdf'}
                    className={`text-[0.9vw] before:h-[100%] list`}>Resume</a>
                <Link to={`/contact`}>
                    <List text={`Contact`} className={`text-[0.9vw] before:h-[100%] list`} />
                </Link>
            </ul>
        </div>
    )
}

export default Navber