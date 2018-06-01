import {
    DETAIL_USER,
    DETAIL_POST_USER,
    DETAIL_ALBUM_USER
} from './action';

const initialState = {
    detail:{},
    posts:[],
    albums:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case DETAIL_USER:
            const newState = Object.assign({}, state);
            newState.detail = action.payload;  
            newState.posts = state.posts;  
            newState.albums = state.albums;  
            return newState;  
        case DETAIL_POST_USER:   
            const newData = Object.assign({}, state);
            newData.detail = state.detail;  
            newData.albums = state.albums;  
            newData.posts = action.payload;  
            return newData; 
        case DETAIL_ALBUM_USER:
            const data = Object.assign({}, state);
            data.detail = state.detail;
            data.posts = state.posts;
            data.albums = action.payload;
            return data; 
        default:
            return state;
    }
}