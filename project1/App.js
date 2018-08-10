import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import Card from './Reusable/Card';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Card>
					<View style={styles.post}>
						<Image
							style={{width:50,height:50,borderRadius:50,}}
							source={{uri: 'https://facebook.github.io/react-native/img/showcase/facebook.png'}}
						/>

						<Text style={{fontSize:12}}>User Name </Text>
											</View>
				</Card>

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
	post:{
		
		flexDirection:'row',
		justifyContent:'space-between',
	
	},
}
