import {createStore} from 'redux';
import {createPost} from './actions';
import {reducers} from './reducers';
import firebase from 'firebase'

const getUser=async()=>{
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCBkOdqhP5CGtvChfs82aw7pV43DgWYL64",
		authDomain: "deevehealth-hybridmapp.firebaseapp.com",
		databaseURL: "https://deevehealth-hybridmapp.firebaseio.com",
		projectId: "deevehealth-hybridmapp",
		storageBucket: "deevehealth-hybridmapp.appspot.com",
		messagingSenderId: "826896799518"
	};
	try{

		await firebase.initializeApp(config);
	}catch(err){
		console.log(err)
	}

}

//createStore
export const store=createStore(reducers)
console.log(store.getState())

store.dispatch(createPost({image:'uri',user:'user Name1',text:'this is post from user1'}))

console.log(store.getState())
