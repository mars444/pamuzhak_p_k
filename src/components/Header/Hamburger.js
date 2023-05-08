import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PerfectScrollbar from 'react-perfect-scrollbar';
import PerfectScrollBar from "../PerfectScrollBar/PerfectScrollBar";
const COLORS = {
    primaryDark: "#115b4c",
    primaryLight: "#B6EDC8",
};


const NavBackground = styled.div`
  overflow: hidden;
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 60px;
  width: 60px;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 1s;
`;

const Icon = styled.span`
  cursor: pointer;
  z-index: 99999;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#64ffda")};
  width: 1.5rem;
  margin-right: 0.5rem;
  height: 2px;
  display: inline-block;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: var(--primary);
    width: 2rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const ItemLink = styled.a`
  cursor: pointer;
  padding: 10px;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  border-radius: 20px;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 1s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function HamburgerMenu({items}) {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    };

    useEffect(()=> {
        if (click) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    },[click])
    return (
        <>
            <div className='header__hamburger__button'  htmlFor="navi-toggle" onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
            </div>
            <NavBackground clicked={click}>&nbsp;</NavBackground>

            <Navigation className={'flex-grow-1 overflow-auto flex flex-column'} clicked={click}>
                    <div className={'flex flex-column m-auto m-5 align-items-center justify-content-center flex-grow-1'} style={{  whiteSpace: 'nowrap'}}>
                        {items.map((item, index)=> {
                            return (
                                <ItemLink key={item.label + index} onClick={handleClick} href={item.url}>
                                    <div className='justify-content-center flex align-items-center'>
                                        <div>{item.label.toUpperCase()}</div>
                                    </div>
                                </ItemLink>
                            )
                        })}
                    </div>
            </Navigation>
        </>
    );
}

export default HamburgerMenu;