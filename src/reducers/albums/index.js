import {
    GET_PHOTO_BY_ALBUM
} from './action';

const initialState = {
    data:{},
    photos:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_PHOTO_BY_ALBUM:
            const newState = Object.assign({}, state);
            newState.data = action.album;  
            newState.photos = action.photos; 
            return newState;  
        default:
            return state;
    }
}