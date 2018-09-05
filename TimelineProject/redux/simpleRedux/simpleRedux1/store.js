import {createStore} from 'redux';
import {createPost} from './actions';
import {reducers} from './reducers';

//createStore
export const store=createStore(reducers)
console.log(store.getState())

store.dispatch(createPost('this is post'))

console.log(store.getState())
