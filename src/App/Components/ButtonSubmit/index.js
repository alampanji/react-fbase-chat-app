import React from 'react';
import './index.scss';
import { Button } from 'antd';

const SubmitButton = ({label})=>{
    return(
        <Button htmlType="submit" className="submit-button">
            {label}
        </Button>
    )
}

export default SubmitButton;