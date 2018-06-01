import {
    GET_COMMENT_BY_ID
    
} from './action';

const initialState = {
    data:{},
}

export default (state = initialState, action) => {
    switch(action.type){ 
        case GET_COMMENT_BY_ID:
            const newData = Object.assign({}, state);
            newData.data = action.payload
            return newData;
        default:
            return state;
    }
}