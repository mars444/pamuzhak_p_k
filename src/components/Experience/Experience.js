import React from 'react';
import {experience} from "../../localeBD/DB";
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Experience.scss';
import {Container} from "../Container";
import './Experience.scss'
import {useMediaQuery} from "react-responsive";

export const Experience = React.memo(() => {
    return (
        <div id={"experience"} style={{paddingTop: 100, maxWidth: 1000}} className={"flex flex-column"}>
            <div className="flex gap-1 align-items-center">
                <h3 className="numbered-heading-title">03.</h3>
                <h3 className="numbered-heading text-4xl">Опыт работы</h3>
            </div>

         <TimelineDemo/>
        </div>
    );
})




const TimelineDemo = () => {


    const customizedMarker = (item) => {
        return (
            <span className="custom-marker" >
            </span>
        );
    };


    const customizedContent = (item) => {
        return (
            <div subTitle={<a className={"text-3xl underline-link"} href={item.url}>{item.company}</a>}  className={"card"} >
                <a className={"text-3xl mb-3 underline-link"} href={item.url}>{item.company}</a>
                <div className={"text-2xl pb-2"}>{item.position}</div>
                <h3 className="py-2">{item.interval}</h3>

                <ul className="py-2">
                    {item?.list_1?.map((i)=> {
                        return (
                            <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-circle-fill`}></i><span>{i}</span></li>
                        )
                    })}
                </ul>
                <ul className="py-2">
                    {item?.list_2?.map((i)=> {
                        return (
                            <li className={"text-left flex align-items-center py-2"}> <i className={`mr-2 color pi pi-angle-double-up`}></i><span>{i}</span></li>
                        )
                    })}
                </ul>
                <ul className="py-2">
                    {item?.list_3?.map((i)=> {
                        return (
                            <li className="text-left">{i}</li>
                        )
                    })}
                </ul>
            </div>
        );
    };

    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' })
    return (
            <div className="timeline-demo">
                    <Timeline value={experience} align={isMobile ? "left" :  "alternate"} className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>
    );
}
