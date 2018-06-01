import Constant from '../../config/constant';
export const LOAD_COMMENT_POST = 'LOAD_COMMENT_POST';
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const SET_EMPTY_COMMENT = 'SET_EMPTY_COMMENT';

export const getCommentPost = (post)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT + '?postId=' + post.id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:LOAD_COMMENT_POST,
            post:post,
            comments:data
        });
    })   
}

export const getPostById = (id)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_POST + '/' + id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:GET_POST_BY_ID,
            payload:data
        });
    })   
}



export const setEmptyComment = ()=>{
    return{
        type: SET_EMPTY_COMMENT
    }
}