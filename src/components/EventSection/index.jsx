import React from 'react'
import Image from '../../images/image1.jpeg'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Img, EventBtn, EventBtnLink } from './EventElements'

const EventSection = ({ headline, description, id }) => {
    return (
        <>
            <InfoContainer id={ id } >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading >
                                    { headline }
                                </Heading>
                                <Subtitle >
                                    { description }
                                </Subtitle>
                            </TextWrapper>
                            <EventBtn>
                                <EventBtnLink to="/contact">Contact Us
                                </EventBtnLink>
                            </EventBtn>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={ Image }/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default EventSection

