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
                    <div className={"text-xl -ml"}>
                        <h4>
                            Люблю создавать красивые и функциональные веб-приложения, которые помогают решать бизнес-задачи.
                        </h4>


                        <h4>Мои ключевые навыки:</h4>
                        <div className={"flex flex-column -ml-4"}>
                            <ul>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-circle-fill`}></i>
                                    <span>
                                    Отличные знания HTML, CSS и JavaScript ES2023+ (Async/await, Promise, EventLoop, Browser API);
                                </span>
                                </li>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-circle-fill`}></i>
                                    <span>
                                    Отличные знания по React (Hooks, классовые компоненты,Fiber, HOC, Props Drilling, Render Props);
                                </span>
                                </li>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-circle-fill`}></i>
                                    <span>
                                    Хорошие знания по TypeScript (Utility Types, Literal Types, Generics, Type Guards);
                                </span>
                                </li>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-circle-fill`}></i>
                                    <span>
                                    Умение работать со State менеджерами (React-Redux, Redux Toolkit, а также с библиотеками Immutable js, Immer js, redux-thunk).
                                </span>
                                </li>


                            </ul>
                            <ul>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                    <span>
                                        Умение разворачивать проект с нуля, используя Webpack или Vite;
                                    </span>
                                </li>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                    <span>
                                        Умение работать c REST API, HTTP, Swagger;
                                    </span>
                                </li>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                    <span>
                                       Умение работать в Figma (Компоненты, Вариативность, Prototype);
                                    </span>
                                </li>            <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                <span>
                                        Умение работать с Linux, Docker;
                                    </span>
                            </li>            <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                <span>
                                        Опыт работы с UI библиотеками Primereact и Material UI, а также Storybook;
                                    </span>
                            </li>            <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                <span>
                                       Опыт работы с библиотеками стилей Primeflex, Tailwind, Bootstrap;
                                    </span>
                            </li>
                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                    <span>
                                        Опыт работы библиотекой для работы с формами React Final Form;
                                    </span>
                                </li>

                                <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i>
                                    <span>
                                         Опыт работы c task менеджерами Trello, Jira, Яндекс Трекер.
                                    </span>
                                </li>
                            </ul>
                        </div>


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
                <h5 className="text-xl my-4">Я постоянно совершенствую свои навыки. Часто посещаю конференции, онлайн-курсы, чтобы быть в курсе последних тенденций и новых технологий.</h5>
                <div>
                    <div className="flex gap-5 flex-wrap flex-column mt-3">
                        <div className="flex flex-column gap-1">
                            <h4>📚 Frameworks, Platforms and Libraries</h4>
                            <div className={"flex flex-wrap gap-4"}>
                                <img style={{height: 35}} src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/redux-%2320232a.svg?style=for-the-badge&logo=redux&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/vite-%238DD6F9.svg?style=for-the-badge&logo=vite&logoColor=black" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt=""/>
                            </div>
                        </div>


                        <div className="flex flex-column gap-1">
                            <h4>💾 Databases</h4>
                            <div className={"flex flex-wrap gap-5"}>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/oracle-%23316192.svg?style=for-the-badge&logo=oracle&logoColor=black" alt=""/>
                            </div>
                        </div>


                        <div className="flex flex-column gap-1">
                            <h4>🎨 Design</h4>
                            <div className={"flex flex-wrap gap-5"}>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white" alt=""/>
                            </div>
                        </div>


                        <div className="flex flex-column gap-1">
                            <h4>🥅 Other</h4>
                            <div className={"flex flex-wrap gap-5"}>
                                <img style={{height: 35}} src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/trello-%230A0FFF.svg?style=for-the-badge&logo=trello&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/docker-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white" alt=""/>
                                <img style={{height: 35}}  src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt=""/>
                            </div>
                        </div>


                        {/*{skills && skills.map((skill, i) => {*/}
                        {/*    return (*/}
                        {/*        <Chip label={skill.label}  className="chip py-1 px-2 " />*/}
                        {/*    )*/}
                        {/*})}*/}
                    </div>
                </div>

                </div>
        </div>
    );
};

export default About;
