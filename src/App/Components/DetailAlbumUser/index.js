import React from 'react';
import {Row, Col} from 'antd';
import ListAlbumUser from '../ListAlbumUser';
import './index.scss';

const DetailAlbumUser = ({username,name,email,phone,website,address})=>{
    return(
        <div className="detail-album-container">
            <Row className="list__albums__of__user">
                    <h2>USER ALBUM LIST</h2>
                    <ListAlbumUser />
            </Row>
        </div>
    )
}

export default DetailAlbumUser;
