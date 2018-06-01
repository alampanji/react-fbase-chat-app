import React from 'react';
import './index.scss';
import { Button } from 'antd';

const MainButton = ({label, action})=>{
    return(
        <Button onClick={action} className="main-button">
            {label}
        </Button>
    )
}

export default MainButton;