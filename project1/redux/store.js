import {createStore} from 'redux';
import {createPost} from './actions';
import {reducers} from './reducers';
import firebase from 'firebase'

//createStore
export const store=createStore(reducers)

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
		const {currentUser}=firebase.auth();
		createUserDetails(currentUser);
	}catch(err){
		console.log(err)
	}

}

const createUserDetails=(user)=>{
	firebase.database().ref(`/users/${user.uid}/details`).on('value',snapshot=>{
		console.log(snapshot.val())
	
		store.dispatch(createPost({image:'uri',user:'user Name1',text:'this is post from user1'}))
	}
	)
}

console.log(store.getState())
getUser();
console.log(store.getState())
