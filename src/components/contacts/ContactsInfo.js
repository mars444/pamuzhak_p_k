import React from 'react';
import './ContactsInfo.scss'
import {Card} from "primereact/card";
import {useMediaQuery} from "react-responsive";
import {Divider} from "primereact/divider";
export const ContactsInfo = React.memo(() => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (

        <Card className='border-round-2xl  flex-shrink-0 overflow-hidden  contracts__info flex flex-column'>

            {isMobile ? (
                <div style={{height:'80px', padding:0, background: '#B6EDC8'}} className="flex align-items-center justify-content-between">
                    <h3 className='ml-3'>Связаться с нами</h3>
                    <div>
                        <a style={{height:'40px', 'fontSize': '14px'}}  href="tel:+79031199353" className=" flex align-items-center justify-content-between header__menu__button">
                            <i  style={{'fontSize': '20px'}} className="pi pi-phone mr-1"></i>
                            +7 (903) 119-93-53
                        </a>
                        <a style={{height:'40px', 'fontSize': '14px'}}  href="tel:+79031199353" className=" flex align-items-center justify-content-between header__menu__button">
                            <i  style={{'fontSize': '20px'}} className="pi pi-phone mr-1"></i>
                            +7 (495) 840-52-72
                        </a>
                    </div>

                </div>
            ) : (
                <div style={{height:'50px', padding:0, background: '#B6EDC8'}} className=" flex align-items-center justify-content-between">
                    <a style={{height:'50px'}}  href="tel:+79031199353" className=" flex align-items-center justify-content-between header__menu__button">
                        <i  style={{'fontSize': '25px'}} className="pi pi-phone mr-3"></i>
                        +7 (903) 119-93-53
                    </a>
                    <h3>Связаться с нами</h3>
                    <a style={{height:'50px'}}  href="mailto:alsdent@mail.ru&body=Здравствуйте, " className=" flex align-items-center justify-content-between header__menu__button">
                        <i  style={{'fontSize': '25px'}} className="pi pi-at mr-3"></i>
                        alsdent@mail.ru
                    </a>
                </div>
            )}


            <div className='flex gap-2 flex-wrap align-items-center m-3'>
                <div className={`${isMobile ? 'w-full' : ''} text-center`} style={{fontSize:'20px'}}>Соцсети:</div>
                <ul className={`flex gap-2 justify-content-center align-items-center ${isMobile ? 'm-auto' : ''} text-center`}>
                    <li className={`flex gap-2 justify-content-center align-items-center ${isMobile ? 'm-auto' : ''} text-center`} >

                        <a style={{borderRadius: '50%', padding: '5px'}}  href="https://t.me/Mars_444">
                            <img
                                src={require('../../static/icons/telegram-logo.svg').default}
                                style={{ height: 40, width: 40  }}
                                alt="telegram logo"
                            />
                        </a>
                        <a style={{borderRadius: '50%', padding: '5px'}}  href="https://t.me/Mars_444">
                            <img
                                src={require('../../static/icons/telegram-logo.svg').default}
                                style={{ height: 40, width: 40  }}
                                alt="telegram logo"
                            />
                        </a>


                    </li>
                </ul>
            </div>
            <Divider />

            <div className='flex justify-content-between align-items-center flex-wrap'>
                <div className='flex gap-2 flex-wrap align-items-center m-3'>
                    <div className={`${isMobile ? 'w-full' : ''} text-center`} style={{fontSize:'20px'}}>График работы:</div>
                    <ul className={
                        `text-center flex justify-content-center ${isMobile ? 'm-auto' : ''} text-center gap-2 `
                    }>
                        <li>
                            Пн-Пт: 10:00 - 22:00
                        </li>
                        <li>
                            Сб-Вс: 10:00 - 20:00
                        </li>
                    </ul>
                </div>
                <div className='flex gap-2 flex-wrap align-items-center m-3'>
                    <div className={`${isMobile ? 'w-full' : ''} text-center`} style={{fontSize:'20px'}}>Адрес:</div>
                    <a style={{height:'50px', borderRadius: '20px'}}  href="yandexmaps://maps.yandex.ru/?pt=37.299700,55.493250&z=12&l=map"
                       className={
                           `header__menu__button text-center flex justify-content-center ${isMobile ? 'm-auto' : ''} text-center `
                       }>
                        <i  style={{'fontSize': '25px'}} className="pi pi-map mr-2"></i>
                        г. Москва, г. Троицк, ул. Нагорная, д.8
                    </a>
                </div>

            </div>



        </Card>
    );
})
