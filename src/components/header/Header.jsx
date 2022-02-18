import React from 'react';
import * as cn  from 'classnames';
import s from './style.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logoBar}>
                <div className={s.logo}>LOGO</div>

                <div className={s.navbar}>
                    <ul className={s.nav}>
                        <li className={s.nav__item}>Github</li>
                        <li className={s.nav__item}>Instagram</li>
                        <li className={s.nav__item}>Telegram</li>
                    </ul>
                </div>
            </div>
            <div className={s.navbar}>
                <ul className={cn(s.nav, s.flex_center)}>
                    <li className={s.nav__item}>Home</li>
                    <li className={s.nav__item}>Projects</li>
                    <li className={s.nav__item}>Certificate</li>
                    <li className={s.nav__item}>Contacts</li>
                </ul> 
            </div>
        </div>
    );
};

export default Header;
