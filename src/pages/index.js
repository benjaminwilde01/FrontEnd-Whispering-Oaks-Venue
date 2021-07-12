import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjTwo } from '../components/EventSection/Data'

import CarouselContainer from '../components/CarouselContainer'
import Footer from '../components/footer'
import EventSection from '../components/EventSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle } />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection { ...homeObjOne }/>
            <EventSection { ...homeObjTwo }/>
            <CarouselContainer />
            <Footer />
        </>
    )
}

export default Home
