import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from './navbarStyled';
import { data } from '../../data/navbarData';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        setShow(!show);
    }

    const scrollToContinue = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '/') {
            scrollToContinue(id);
        }
        navigate(to);
        setShow(false);
    }

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to={"/"}>
                        <NavIcon src="./assets/logo.png" alt="logo" />
                        XxHaRuToxX
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {
                            show ? <FaTimes /> : <CgMenuRight />
                        }
                    </MobileIcon>
                    <NavMenu show={show} >
                        {
                            data.map((el, index) => (
                                <NavItem key={index}>
                                    <NavLinks onClick={() => closeMobileMenu(el.to, el.id)} >{el.text}</NavLinks>
                                </NavItem>
                            ))
                        }
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}
