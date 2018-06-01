import React from 'react';
import './index.scss';
import { Button } from 'antd';

const IgnoreButton = ({label, action})=>{
    return(
        <Button onClick={action} className="ignore-button">
            {label}
        </Button>
    )
}

export default IgnoreButton;