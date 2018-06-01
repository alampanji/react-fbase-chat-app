import Constant from '../../config/constant';
export const GET_COMMENT_BY_ID = 'GET_COMMENT_BY_ID';

export const getCommentById = (id)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT + '/' + id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:GET_COMMENT_BY_ID,
            payload:data
        });
    })   
}