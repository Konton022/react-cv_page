import React from 'react';

const Header = () => {
    return (
        <div className='wrapper'>
            <div className='header'>
                <div className='header__logo'>LOGO</div>
                <div className='header__navbar'>
                    <ul>
                        <li className='header__nav-item'>Home</li>
                        <li className='header__nav-item'>Projects</li>
                        <li className='header__nav-item'>Certificate</li>
                        <li className='header__nav-item'>Contacts</li>
                    </ul>
                </div>
                <div className='header__links'>
                    <ul>
                        <li className='header__link-item'>Github</li>
                        <li className='header__link-item'>Instagram</li>
                        <li className='header__link-item'>Telegram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
