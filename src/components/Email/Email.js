import React from 'react';
import styled from 'styled-components';
import {Side} from "../Side/Side";
import {email} from '../../localeBD/DB'

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
        <StyledLinkWrapper>
            <a href={`mailto:${email}`}>{email}</a>
        </StyledLinkWrapper>
    </Side>
);
