import React from 'react';
import * as cn from 'classnames';
import s from './style.module.css';
import img from './photo.jpg';

const Greeting = () => {
    return (
        <>
            <div className={s.greeting}>
                <div className={cn(s.text, s.greeting__text)}>
                    <div className={s.text__title}>
                        Hello World, I'm Konstantin.{' '}
                        <span>Junior React Front-End Developer</span>{' '}
                    </div>
                    <div className={s.text__discrib}>
                        <h2 className={s.text__subtitle}>
                            Short information about me:
                        </h2>
                        <ul className={s.text__list}>
                            <li>
                                {' '}
                                <span>name:</span> Konstantin Savelyev
                            </li>
                            <li>
                                {' '}
                                <span>age:</span> 38
                            </li>
                            <li>
                                <span>edication:</span> ural university of
                                communication and information in 2006 year
                            </li>
                            <li>
                                <span>current work:</span> Orange Business
                                Services, position: engineer of comminucation
                            </li>
                            <li>
                                <span>languages:</span> native Russian and
                                English B2
                            </li>
                            <li>
                                <span>hobby:</span> code, bike, snowboard, ski,
                                books
                            </li>
                        </ul>
                    </div>
                    <a href='!#' className={s.text__btn}>
                        contact me
                    </a>
                </div>
                <div className={s.greeting__image}>
                    <img src={img} alt='personal_photo' />
                </div>
            </div>
        </>
    );
};

export default Greeting;
