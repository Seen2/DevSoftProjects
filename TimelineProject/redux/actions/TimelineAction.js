import {CREATE_POST,ADD_POST} from './ActionTypes';

export const createPost=(text)=>({
	type:ADD_POST,
	payload:{
		post:text,
		like:0,
		comments:[],
	}
})

export const addComment=(post,comment)=>{
	//EXpects comment={user:'comment'} where user=userWhoIsCommenting
	//EXpects Post={:{}}
	return {
		type:ADD_COMMENT,
		payload:{pos,comment}
	}

}
