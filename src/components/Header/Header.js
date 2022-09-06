import React, {useEffect, useMemo} from 'react';
import {Menubar} from "primereact/menubar";
import './Header.scss'
import {Button} from "primereact/button";
import {menuItems} from "../../localeBD/menuItems";
import {Link} from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import {useMediaQuery} from "react-responsive";
export const Header = React.memo(({items}) => {

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return (
        <header className='flex gap-2 justify-content-between header align-items-center w-full p-3 h-5rem'>
            <div className='flex gap-2'>
                <h3 className='logo'>
                    Logo
                </h3>
                {!isMobile && <div style={{width:'60px', height:'60px', borderRadius: '50%'}}></div>}


            </div>

            <h1 className='text-center'>AlsDent</h1>
            <div className='flex gap-2'>
                {!isMobile &&  <a style={{width:'60px', height:'60px', borderRadius: '50%'}} href="tel:+79031199353" className="header__menu__button">
                    <i  style={{'fontSize': '25px'}} className="pi pi-phone"></i>
                    </a>}
                <HamburgerMenu items={items}/>
            </div>


        </header>
    )
}
)
