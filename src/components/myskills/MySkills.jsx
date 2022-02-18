import React from 'react';
import s from './style.module.css';

const MySkills = () => {
    return (
        <div className={s.skills}>
            <div className={s.skills__title}>My Skills</div>
            <div className={s.skills_wrapper}>
                <div className={s.skills__cards}>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>REACT</div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
