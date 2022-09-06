import React, {useMemo} from 'react';
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {Card} from "primereact/card";
import './ContactsMap.scss'
import {useMediaQuery} from "react-responsive";

export const ContactsMap = React.memo(({}) => {
    const mapData = useMemo(() => ({center: [55.493250, 37.299700], zoom: 15}),[])
    const coordinates = useMemo(()=> [55.493250, 37.299700],[])
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
    return (
        <Card className='contacts__map overflow-hidden border-round-2xl flex-grow-1  text-center flex-shrink-0' >
                <a style={{height:'50px'}}  href="yandexmaps://maps.yandex.ru/?pt=37.299700,55.493250&z=12&l=map" className="header__menu__button">
                    <i  style={{'fontSize': '25px'}} className="pi pi-map mr-2"></i>
                        Проложить маршрут
                </a>
            <div style={{height:`${isMobile ? '250px' : '250px'}`, width:`${isMobile ? '100%' : '100%'}`}}>
                <YMaps zoom >
                    <Map  defaultState={mapData} width={'100%'} height={'100%'}>
                        <ZoomControl options={{ float: 'right' }} />
                        <Placemark geometry={coordinates}/>
                    </Map>
                </YMaps>
            </div>
        </Card>

    );
})
