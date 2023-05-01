import React from 'react';
import {experience} from "../../localeBD/DB";
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Experience.scss';
import {Container} from "../Container";
import './Experience.scss'

export const Experience = React.memo(() => {
    return (
        <div id={"experience"} style={{paddingTop: 100, maxWidth: 1000}} className={"flex flex-column"}>
            <h3 className="numbered-heading text-4xl">Опыт работы 2 года 8 месяцев</h3>
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
            <Card subTitle={<a className={"text-3xl underline-link"} href={item.url}>{item.company}</a>}  className={"card"} >
                <div className={"text-3xl pb-2"}>{item.position}</div>
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
            </Card>
        );
    };

    return (
            <div className="timeline-demo">
                    <Timeline value={experience} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>
    );
}
