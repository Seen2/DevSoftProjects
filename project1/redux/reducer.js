const {createStore}=require('redux')
const {combineReducers}=require('redux')

const post='POST'
const timeline='TIMELINE'

//action creators
const createPost=(text)=>({
	type:post,
	payload:{
		post:text,
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

//reducer for updating timeline

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

store.dispatch(createPost('this is post'))

console.log(store.getState())
