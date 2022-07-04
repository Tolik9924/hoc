import React from "react";

import style from './textComp.module.css';

const TextComp = ( {text, options, device, showMedia}) => {

    return (
        <div className={style.container}>Hi, 
            {text}
            {options}
            {device}
            {showMedia }
            </div>
    );
}

export default TextComp;
