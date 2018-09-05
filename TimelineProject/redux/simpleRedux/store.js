import {createStore} from 'redux';
import {createPost} from './actions';
import {reducers} from './reducers';
import firebase from 'firebase'

//createStore
export const store=createStore(reducers)

const createUserDetails=(user)=>{
	firebase.database().ref(`/users/${user.uid}/details`).on('value',snapshot=>{
		console.log(snapshot.val())
	
	}
	)
}

console.log(store.getState())
getUser();
console.log(store.getState())
