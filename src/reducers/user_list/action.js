import Constant from '../../config/constant';
export const DETAIL_USER = 'DETAIL_USER';
export const DETAIL_POST_USER = 'DETAIL_POST_USER';
export const DETAIL_ALBUM_USER = 'DETAIL_ALBUM_USER';

export const getDetailUser = (id)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_USER + '/' + id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:DETAIL_USER,
            payload:data
        });
    })   
}

export const getPostUser = (id)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_POST + '?userId=' + id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:DETAIL_POST_USER,
            payload:data
        });
    })   
}

export const getAlbumUser = (id)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_ALBUM + '?userId=' + id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:DETAIL_ALBUM_USER,
            payload:data
        });
    })   
}