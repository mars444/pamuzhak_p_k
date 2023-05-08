import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Chip } from 'primereact/chip';
import './About.scss'

import mePhoto from '../../assets/images/me.jpg'
import {useMediaQuery} from "react-responsive";
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

export const About = () => {

    const skills = [
        {label: 'HTML5 / CSS3 / SASS', icon: 'pi pi-apple'},
        {label: 'Javascript / TypeScript', icon: 'pi pi-apple'},
        {label: 'React', icon: 'pi pi-apple'},
        {label: 'Redux / Redux Thunk', icon: 'pi pi-apple'},
        {label: 'React Final Form', icon: 'pi pi-apple'},
        {label: 'Primereact', icon: 'pi pi-apple'},
        {label: 'Primeflex / Tailwind CSS', icon: 'pi pi-apple'},
        {label: 'Styled-components', icon: 'pi pi-apple'},
        {label: 'Webpack / ESLint / Prettier', icon: 'pi pi-apple'},
        {label: 'Git / Code review', icon: 'pi pi-apple'},
        {label: 'Figma', icon: 'pi pi-apple'},
        {label: 'Trello / Яндекс трекер', icon: 'pi pi-apple'},
        {label: 'Figma', icon: 'pi pi-apple'},
        {label: 'API Ymaps', icon: 'pi pi-apple'},
    ];

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={"flex flex-column flex-wrap"} style={{maxWidth: 1000, paddingTop: 100}} id="about" >
            <div className="flex gap-1 align-items-center">
                <h3 className="numbered-heading-title">01.</h3>
                <h3 className="numbered-heading text-4xl">Обо мне</h3>
            </div>


            <div className="flex flex-column align-items-start flex-wrap">
                <div  className="flex gap-2 lg:gap-7 align-items-start flex-wrap lg:flex-nowrap">
                    <div className={"text-xl"}>
                        <p>
                            Я всегда был увлечен технологиями и компьютерами, но когда я впервые начал изучать фронтенд-разработку, я понял, что это именно то, чем я хочу заниматься.
                        </p>

                        <p>Люблю создавать красивые и функциональные веб-приложения, которые помогают людям решать их задачи.</p>

                        <p>Я постоянно совершенствую свои навыки, изучая новые фреймворки и библиотеки. Я часто принимаю участие в онлайн-курсах и конференциях, чтобы быть в курсе последних тенденций и новых технологий.
                        </p>
                        <p>Для меня фронтенд-разработка - это не просто работа, это моя страсть
                        </p>
                    </div>
                        <div className="box m-auto  relative">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="img-content">
                                <img
                                    className="img"
                                    src={mePhoto}
                                    style={{maxWidth: isMobile ? 300 : 400}}
                                    alt="Headshot"
                                />
                            </div>
                    </div>
                </div>
                <div>
                    <p className={"text-xl"}>Мой стэк технологий:</p>
                    <ul className="flex gap-3 flex-wrap">
                        {skills && skills.map((skill, i) => {
                            return (
                                <Chip label={skill.label}  className="chip py-1 px-2 " />
                            )
                        })}
                    </ul>
                </div>

                </div>
        </div>
    );
};

export default About;
