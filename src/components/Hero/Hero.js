import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyled';
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from './heroStyled';

export const Hero = () => {
    return (
        <HeroSection>
            <HeroVideo src="./assets/keyboard.mp4" autoPlay muted ></HeroVideo>
            <Container>
                <MainHeading>Your data is secure with us</MainHeading>
                <HeroText>
                    We provide the best security systems for clients all over the world
                </HeroText>
                <ButtonWrapper>
                    <Link to={"/signup"}>
                        <Button>Get started</Button>
                    </Link>
                    <HeroButton>Find Hero</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}
