
import React, { useEffect, useRef } from 'react';
import './Contacts.scss'



export const Contacts = () => {

    return (
        <div className={"contact"} id="contact">
            <h2 className="numbered-heading overline contact-title ">Контакты</h2>

            <h2 className="title ">Свяжитесь со мной</h2>

            <p>Если у вас возникли вопросы, пожалуйста, пишите мне в Telegram!</p>

            <a className="menu-button" href="https://t.me/Mars_444" target="_blank" rel="noreferrer">
                Написать
            </a>
        </div>
    );
};

