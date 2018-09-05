import {
	CREATE_POST,
	ADD_POST,
	ADD_COMMENT,
	ADD_LIKE,
	DELETE_POST
} from '../actions/ActionTypes';

//const {combineReducers,createStore}=require('redux')

//const ADD_POST='addPost';

export default (state=[],action)=>{
	switch(action.type){
		case ADD_POST:
			return [...state,action.payload]
		case ADD_COMMENT:


			{...state,state.user.comments:action.payload}
		default :
			return state
	}
}
	/*
store=createStore(reducers);
 console.log(store.getState())
 */
