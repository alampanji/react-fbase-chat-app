import Constant from '../../config/constant';
export const GET_PHOTO_BY_ALBUM = 'GET_PHOTO_BY_ALBUM';

export const getPhotoByAlbum = (album)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_PHOTO + '?albumId=' +album.id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:GET_PHOTO_BY_ALBUM,
            album:album,
            photos:data
        });
    })   
}