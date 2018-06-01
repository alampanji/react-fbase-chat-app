import React from 'react';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import './index.scss';
import {getPhotoByAlbum} from '../../../reducers/albums/action'
import ListPhotoOfAlbum from '../ListPhotoOfAlbum';
const Panel = Collapse.Panel;


const ListAlbumUser = ({albums, getPhoto})=>{
    return(
        <div className="list-album-user-container">
            <Collapse accordion>
                {
                    
                    albums.map((data, index)=>(
                        <Panel 
                        header={
                            <div onClick={()=>getPhoto(data)}>
                                <h3>{data.title}</h3>
                            </div>
                        }
                        showArrow={false}
                        key={index}>
                            <ListPhotoOfAlbum />
                        </Panel>
                    ))
                }

            </Collapse>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        albums : state.user_list.albums
    }
}


const mapDispatchToProps = dispatch=>{
    return{
        getPhoto : (album)=>{
            dispatch((getPhotoByAlbum(album)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbumUser);