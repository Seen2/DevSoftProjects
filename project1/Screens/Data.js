users=[
	{name:'User1 name',post:"Because you don't build any native code when using Create React Native App to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.",likes:1,
	},
	{name:'User2 name',post:"Because you don't build any native code when using Create React Native App to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.",likes:1,
	},
	{name:'User3 name',post:"Because you don't build any native code when using Create React Native App to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.",likes:1,
	},
	{name:'User4 name',post:"Because you don't build any native code when using Create React Native App to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.",likes:1,
	}
]

console.log(users)
addKeys=(val,key)=>({key,...val})
let Users=users.map(u=>addKeys(u,users.indexOf(u)))
console.log(Users)
export  default Users 
