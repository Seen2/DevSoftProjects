//action types
export const post='POST'
export const timeline='TIMELINE'

//action creators
export const createPost=(text)=>({
	type:post,
	payload:{
		post:text,
		likes:0,
		comments:{},
	}
});

export const createTimelne=()=>({
	type:timeline,
	payload:{

	},
});//not used yet
