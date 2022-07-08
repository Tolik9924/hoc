import React from "react";

import style from './textComp.module.css';

const TextComp = ({ text, 
    options,  
    showMedia, 
    isMobile,
    isTablet,
    isDesktop,
    isPrinting
}) => {

    const device = isMobile || isTablet || isDesktop || isPrinting; 

    return (
        <div className={style.container}>
            <div>
                Hi,{text}
            </div>
           <div>
                {options}
           </div>
            <div>
                {device}
            </div>
            <div>
                {showMedia}
            </div>
        </div>
    );
}

export default TextComp;
