import React from 'react';
import {Row, Col} from 'antd';
import './index.scss';

const InfoCard = ({users, posts, photos})=>{
    return(
        <div className="info-card-container">
            <Row gutter={{ md: 32}}>
                <Col md={8} xs={24}>
                    <div className="list">
                        <Row className="content__card">
                            <Col xs={12}>
                                <h2>{users}</h2>
                            </Col>
                            <Col xs={12}>
                                <h1>Users</h1>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={8} xs={24}>
                    <div className="list">
                        <Row className="content__card">
                            <Col xs={12}>
                                <h2>{posts}</h2>
                            </Col>
                            <Col xs={12}>
                                <h1>Posts</h1>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={8} xs={24}>
                    <div className="list">
                        <Row className="content__card">
                            <Col xs={12}>
                                <h2>{photos}</h2>
                            </Col>
                            <Col xs={12}>
                                <h1>Photos</h1>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default InfoCard;