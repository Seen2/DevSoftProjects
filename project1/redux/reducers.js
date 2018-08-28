import {combineReducers} from 'redux';

import {post,timeline} from './actions';

//reducer for updating post
const postReducer=(state={},action)=>{
	if(action.type==post){
		return {...state,action}
	}
	return state
}


//reducer for updating timeline
const timelineReducer=(state=[],action)=>{
	if (action.type==timeline){
		return [...state,action]
	}
	return state
}

//combine reducers
export const reducers=combineReducers({
	timeline:timelineReducer,
	post:postReducer,
});

