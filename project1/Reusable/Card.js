
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Card extends React.Component {
	render() {
		return (
			<View style={styles.post} >
				{this.props.children}
			</View>

		);
	}
}

const styles = {
	container: {
		paddingTop:30,
		flex: 1,
		backgroundColor: '#fff',
	},
	post:{height:150,borderColor:'red',borderWidth:1,borderRadius:5,margin:4}
}
