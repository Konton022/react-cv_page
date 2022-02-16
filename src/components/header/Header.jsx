import React from 'react';
import s from './style.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logoBar}>
                <div className={s.logo}>LOGO</div>

                <div className={s.contact}>
                    <ul>
                        <li className={s.contact__item}>Github</li>
                        <li className={s.contact__item}>Instagram</li>
                        <li className={s.contact__item}>Telegram</li>
                    </ul>
                </div>
            </div>
            <div className={s.navbar}>
                <ul>
                    <li className={s.navbar__item}>Home</li>
                    <li className={s.navbar__item}>Projects</li>
                    <li className={s.navbar__item}>Certificate</li>
                    <li className={s.navbar__item}>Contacts</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
