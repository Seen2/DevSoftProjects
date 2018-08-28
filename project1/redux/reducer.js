const {createStore}=require('redux')
const {combineReducers}=require('redux')

const post='POST'
const timeline='TIMELINE'

//action creators
const createPost=()=>({
	type:post,
	payload:{
		likes:0,
		comments:{},
	}
});

const createTimelne=()=>({
	type:timeline,
	payload:{

	},
});


//reducer for updating post
const postReducer=(state={},action)=>{
	if(action.type==post){
		return {...state,action}
	}
	return state
}
const timelineReducer=(state=[],action)=>{
	if (action.type==timeline){
		return [...state,action]
	}
	return state
}

//combine reducers
const reducers=combineReducers({
	timeline:timelineReducer,
	post:postReducer,
})

//createStore
const store=createStore(reducers)

console.log(store.getState())


	//reducer for updating likes
	//reducer for updating comments
	//reducer for updating texts

//reducer for updating timeline




