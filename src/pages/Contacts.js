import React, {useEffect} from 'react';
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {animateBackgound} from "../utils/animateBackgound";
import {ContactsMap} from "../components/contacts/ContactsMap";
import PerfectScrollBar from "../components/PerfectScrollBar/PerfectScrollBar";
import {ContactsInfo} from "../components/contacts/ContactsInfo";

export const Contacts = () => {

    return (
        <PerfectScrollBar className='page-content h-full w-full justify-content-center flex flex-column flex-grow-1  p-5  gap-5'>
            <ContactsInfo/>
            <ContactsMap/>
        </PerfectScrollBar>



    );
};
