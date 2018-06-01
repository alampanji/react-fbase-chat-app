import {
    LOGIN
} from './action';

const initialState = {
    is_authentication:false,
    dashboard_info:{
        users: 1000,
        posts: 199,
        photos: 20
    },
    profile:{
        is_authentication:true,
        token: 'efd7191-cd62eaf-bg71he31ea',
        name: 'Putraning Panji Alam'
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            const newState = action.payload    
        default:
            return state;
    }
}