import React from 'react';
import {Row, Col} from 'antd';
import DummyImg from '../../../assets/images/image_profile_dummy.png';
import ListPostUser from '../ListPostUser';
import './index.scss';

const DetailUser = ({username,name,email,phone,website,address})=>{
    return(
        <div className="detail-user-container">
            <Row className="top__section">
                <Col md={10}>
                    <div className="image__section">
                        <img src={DummyImg} alt="img-dummy" />
                    </div>
                </Col>
                <Col md={14}>
                    <div className="profile__section">
                        <Row gutter={16}>
                            <Col md={8}>
                                <h3 className="description">Username</h3>
                            </Col>
                            <Col md={16}>
                                <h3 className="content">{username}</h3>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col md={8}>
                                <h3 className="description">Name</h3>
                            </Col>
                            <Col md={16}>
                                <h3 className="content">{name}</h3>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col md={8}>
                                <h3 className="description">Email</h3>
                            </Col>
                            <Col md={16}>
                                <h3 className="content">{email}</h3>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col md={8}>
                                <h3 className="description">Phone</h3>
                            </Col>
                            <Col md={16}>
                                <h3 className="content">{phone}</h3>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col md={8}>
                                <h3 className="description">Website</h3>
                            </Col>
                            <Col md={16}>
                                <h3 className="content">{website}</h3>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="bottom__section">
                <Col xs={16}>
                    <div className="maps_side">
                        
                    </div>
                </Col>

                <Col xs={8}>
                    <div className="detail__maps_side">
                        
                    </div>
                </Col>
            </Row>
            <Row className="list__post__of__user">
                    <h2>USER POST LIST</h2>
                    <ListPostUser />
            </Row>
        </div>
    )
}

export default DetailUser;
