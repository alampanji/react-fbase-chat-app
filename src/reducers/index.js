import { combineReducers } from 'redux';
import posts from './post';
import user from './user';
import user_list from './user_list';
import albums from './albums';
import comments from './comment';

export default combineReducers({
    user,
    posts,
    comments,
    user_list,
    albums
});