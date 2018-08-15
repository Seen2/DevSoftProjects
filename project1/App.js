import React from 'react';
import { Text, ScrollView,Image,View } from 'react-native';
import expo from 'expo';

import Timeline from './Screens/Timeline';


export default class App extends React.Component {
	render() {
		return (
				<Timeline/ >
		);
	}
}

const styles = {
	container: {
		paddingTop:25,
		flex: 1,
		backgroundColor: '#0000',
	},
}
