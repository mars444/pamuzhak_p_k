import {useEffect, useState} from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import './Hero.scss'
import resume from '../assets/pdf/Pamuzhak_PK_Middle_Frontend.pdf'

export const Hero = () => {

    const one = <h1 className={"pb-1 text-m"}>Привет, меня зовут</h1>;
    const two = <AnimatedText text={'ПАМУЖАК ПЕТР'}/>
    const three = <h3 className="pt-0 mt-0">Я занимаюсь WEB разработкой.</h3>;
    const four = (
        <>
            <p className={"text-3xl"}>
                Реализовываю пользовательские интерфейсы для веб-приложений, а
                также осуществляю их оптимизацию.
            </p>
        </>
    );
    const five = (
        <div className="py-5">
            <a  className="menu-button text-2xl" href={resume} target="_blank" rel="noreferrer">
                Резюме
            </a>
            <a>

            </a>
        </div>

    );

    const items = [one, two, three, four, five];

    return (
            <section className={"hero"}>
                <TransitionGroup component={null}>
                    {items.map((item, i) => (
                                <div>{item}</div>
                        ))}
                </TransitionGroup>
            </section>

    );
};
const loaderDelay = 500;
const navDelay = 500;


const AnimatedText = ({text}) => {

    return <h3 className="loader">
                {text.split('').map((item) => {
                    return <span>{item}</span>
                })}
            </h3>
}
