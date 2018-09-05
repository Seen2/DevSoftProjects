import {combineReducers} from 'redux';

import timelineReducer from './TimelineReducer';

export default combineReducers({
	timeline:timelineReducer,
})

