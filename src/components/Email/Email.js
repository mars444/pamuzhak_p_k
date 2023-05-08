import React from 'react';
import styled from 'styled-components';
import {Side} from "../Side/Side";
import {email} from '../../localeBD/DB'
import {socialMedia} from "../Social/Social";


export const StyledSocialList = styled.ul`
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  
  li {

    a {
      padding: 10px;
      transition: all 0.3s;

      &:hover,
      &:focus {
        text-shadow: 20px 0 70px  var(--primary);
        color: var(--primary);
        transform: translateY(-10px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: 18px;
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transition: all 0.3s;

    &:hover,
    &:focus {
      text-shadow: 20px 0 70px  var(--primary);
      color: var(--primary);
      transform: translateY(-10px);
    }
  }
`;

export const Email = ({ isHome }) => (
    <Side isHome={isHome} orientation="right">
        <>
            <StyledSocialList>
                {socialMedia &&
                    socialMedia.map(({ url, icon }, i) => (
                        <li key={i}>
                            <a href={url} aria-label={icon} target="_blank" rel="noreferrer">
                                <i  className={icon}></i>
                            </a>
                        </li>
                    ))}
            </StyledSocialList>
            <StyledLinkWrapper>
                <a href={`mailto:${email}`}>{email}</a>
            </StyledLinkWrapper>
        </>
    </Side>
);
