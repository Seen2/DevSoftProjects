
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
	post:{
		height:150,borderRadius:5,margin:4,	}
}
