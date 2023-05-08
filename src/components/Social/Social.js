import React from 'react';
import styled from 'styled-components';
import {Side} from "../Side/Side";

export const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
    
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

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

export const   socialMedia = [
    {
        icon: 'pi pi-telegram',
        url: 'https://t.me/Mars_444',
    },
    {
        icon: 'pi pi-github',
        url: 'https://github.com/mars444',
    },
    {
        icon: 'pi pi-linkedin',
        url:
            'https://www.linkedin.com/in/%D0%BF%D0%B5%D1%82%D1%80-%D0%BF%D0%B0%D0%BC%D1%83%D0%B6%D0%B0%D0%BA-09799a107/',
    },
    {
        icon: 'pi pi-phone',
        url: 'tel:+79251415930',
    },
]

export const Social = ({ isHome }) => (
    <Side isHome={isHome} orientation="left">
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
    </Side>
);
