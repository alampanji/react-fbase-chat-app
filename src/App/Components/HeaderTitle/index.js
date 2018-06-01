import React from 'react';
import './index.scss';

const HeaderTitle = ({title, subtitle})=>{
    return(
        <div className="header-title-container">
            <h2>{title}</h2>
            <h6>{subtitle}</h6>
        </div>
    )
}

export default HeaderTitle;