import React from 'react';
import s from './style.module.css';

const MySkills = () => {
    return (
        <div className={s.skills}>
            <div className={s.skills__title}>My Skills</div>
            <div className={s.skills__wrapper}>
                <div className={s.skills__cards}>
                    <div className={s.skills__card}>HTML</div>
                    <div className={s.skills__card}>CSS</div>
                    <div className={s.skills__card}>REACT</div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
