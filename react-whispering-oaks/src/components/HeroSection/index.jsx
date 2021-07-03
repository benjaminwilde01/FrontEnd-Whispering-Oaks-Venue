import React, { useState } from 'react'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Whispering Oaks Vineyard
                </HeroH1>
                <HeroP>
                Surrounded by beautiful scenerey and a California-inspired vineyard, is a stunning Winery Event Venue that sits on 53 unspoiled acres – this is The Whispering Oaks Vineyard.  Conveniently located between Redding and Palo Cedro, The Whispering Oaks Vineyard blends natural charm and timeless romance.  Our private estate with captivating scenery is the perfect backdrop for weddings, corporate gatherings, and holiday parties alike.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={ onHover } onMouseLeave={ onHover }>Contact Us { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

