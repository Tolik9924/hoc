import React from "react";

import style from './textComp.module.css';

const TextComp = (props) => {
    console.log("TextComp");
    console.log(props);
    return(
        <div className={style.container}>Hi, {props.text} {props.options} {props.device}</div>
    );
}

export default TextComp;
