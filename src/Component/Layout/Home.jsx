import React from 'react'
import Navber from './Navber'
import Loader from '../Loader'
import Project from './Project'
import ContactPart from './ContactPart'
import Hero from './Hero'

export const Home = () => {
    return (
        <div>
            <Navber />
            <div>
                <main>
                    <Loader />
                    <Hero />
                    <Project />
                    <ContactPart />
                </main>
            </div>
        </div>
    )
}
