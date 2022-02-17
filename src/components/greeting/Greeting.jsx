import React from 'react';
import * as cn  from 'classnames';
import s from './style.module.css'
import img from "./bird.jpg"

const Greeting = () => {
    return (
    <>
        <div className={s.greeting}>
            <div className={cn(s.text, s.greeting__text)}>
                <div className={s.text__title}>Hello World, </div>
                <div className={s.text__discrib}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam tempora, dolorum ipsam nemo nulla dolorem beatae
                    voluptates dolore, odit ipsum asperiores aliquam?
                    Consectetur minima, quasi molestiae perferendis aut cumque
                    qui!
                </div>
                <a href="#">Contact me</a>
            </div>
            <div className={s.greeting__image}><img src={img} alt="bird" /></div>
        </div>
    </>
    );
};

export default Greeting;
