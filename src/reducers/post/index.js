import {
    LOAD_COMMENT_POST,
    SET_EMPTY_COMMENT,
    GET_POST_BY_ID
    
} from './action';

const initialState = {
    data:{},
    comments:[],
    current:{}
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOAD_COMMENT_POST:
            const newState = Object.assign({}, state);
            newState.data = action.post;
            newState.comments = action.comments;
            newState.current = action.current;
            return newState;
        case SET_EMPTY_COMMENT:
            const newValue = Object.assign({}, state);
            newValue.data = {};
            newValue.comments = [];
            newValue.current = {};
            return newValue;  
        case GET_POST_BY_ID:
            const newData = Object.assign({}, state);
            newData.data = {};
            newData.comments = [];
            newData.current = action.payload
            return newData;
        default:
            return state;
    }
}