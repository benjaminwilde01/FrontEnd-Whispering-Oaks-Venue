import React from 'react'
import Image from '../../images/interior-venue.jpeg'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements'

const InfoSection = ({ id, topLine, headline, description }) => {
    return (
        <>
            <InfoContainer  id={ id }  >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    { topLine }
                                </TopLine>
                                <Heading >
                                    { headline }
                                </Heading>
                                <Subtitle >
                                    { description }
                                </Subtitle>
                            </TextWrapper>
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

export default InfoSection
