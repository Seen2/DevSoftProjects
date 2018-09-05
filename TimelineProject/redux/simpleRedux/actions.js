//action types
export const post='POST'
export const timeline='TIMELINE'

//action creators
export const createPost=(post)=>({
	type:post,
	payload:{
		image:post.image,
		user:post.user,
		post:post.text,
		likes:0,
		comments:{},
	}
});

export const createTimelne=()=>({
	type:timeline,
	payload:{

	},
});//not used yet
