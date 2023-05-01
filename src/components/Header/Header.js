import React, {useEffect, useMemo} from 'react';
import {Menubar} from "primereact/menubar";
import './Header.scss'
import {Button} from "primereact/button";
import {menuItems, navLinks} from "../../localeBD/DB";
import {Link} from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import {useMediaQuery} from "react-responsive";
import {ThemePicker} from "../ThemeProvider";
export const Header = React.memo(() => {

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return (
        <header className='header flex justify-content-between gap-5 align-items-center'>
            <h1 className="logo">PK</h1>
            <ol className="flex flex-grow-1 navList justify-content-end gap-5 align-items-center relative ">
                {navLinks?.map(({label, url}, index) => {
                    return (
                        <li  style={{transitionDelay: `${index * 200}`}} key={label}>
                            <a href={url}>{label}</a>
                        </li>

                    )
                })}
            </ol>
            <div
                className="fadedown-enter-done">
                <a className="menu-button"
                   href="https://t.me/Mars_444"
                   target="_blank"
                   rel="noopener noreferrer">
                    Связаться со мной
                </a>
            </div>
            {/*<ThemePicker/>*/}


                {/*<HamburgerMenu items={items}/>*/}


        </header>
    )
}
)
