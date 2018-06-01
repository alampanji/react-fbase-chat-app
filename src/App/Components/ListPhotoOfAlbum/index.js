import React from 'react';
import {Row, Col} from 'antd';
import {connect} from 'react-redux';

const ListOfPhotoAlbum = ({photoList})=>{
    return(
        <div className="list-photo-container">
            <div>
                {
                    photoList.map((photo, index)=>(
                        <Row key={index}>
                            <Col xs={24}>
                                <h3>{photo.title}</h3>
                            </Col>
                        </Row>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        photoList: state.albums.photos
    }
}

export default connect(mapStateToProps, null) (ListOfPhotoAlbum);