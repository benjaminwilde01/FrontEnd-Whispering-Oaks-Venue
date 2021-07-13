import React from 'react'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1 } from './HeroElements'


const HeroSection = () => {
    
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Whispering Oaks Vineyard
                </HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

