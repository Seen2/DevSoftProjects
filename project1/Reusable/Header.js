import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.post} >
				{this.props.children}
			</View>

		);
	}
}

const styles = {
	post:{
		height:80,
		paddingTop:20,
		backgroundColor: '#ed1a0b',

	}
}
