//action types
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
const postReducer=(state,action)=>{
	switch(action.type==post){

	}
	//reducer for updating likes
	//reducer for updating comments
	//reducer for updating texts

//reducer for updating timeline



//combine reducers

//createStore
