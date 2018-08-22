import React from 'react';
import { Text, FlatList,Image,View,TouchableOpacity } from 'react-native';
import expo from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

import Users from './Data'


export default class Timeline extends React.Component {
	render() {

		return (

			<View style={{flex:1,}}>
				<Header style={styles.posts}>
					<Text style={{fontSize:25,alignSelf:'center'}}>TIMELINE </Text>
				</Header>
				<FlatList
					data={Users}
					renderItem={({item}) => <Post user={item}/>}
				/>
				<TouchableOpacity
					style={{width:40,borderRadius:40,height:40}}
					onPress={()=>{}}
				>
					<Text style={{fontSize:25,alignSelf:'center'}}>AddPost </Text>
				</TouchableOpacity>


				
			</View>

		);
	}
}




export class Post extends React.Component {
	render() {
		return (
			<Card>
			
				<View style={styles.post}>
					<View style={styles.head}>
						<Image
							style={{width:40,height:40,borderRadius:40,}}
							source={{uri: 'https://facebook.github.io/react-native/img/showcase/facebook.png'}}
						/>

						<Text style={{fontSize:16,fontWeight:'bold',}}>{this.props.user.name} </Text>
					</View>
					<Text style={{fontSize:16}}>{this.props.user.post} </Text>
					<View style={{flexDirection:'row',margin:4}}>
						<TouchableOpacity
							style={{width:20,height:20,borderRadius:20}}
							onPress={()=>{}}
						>
							<Image
								style={{height:10,flex:1}}
								source={{uri:'https://cdn4.iconfinder.com/data/icons/basic-dashboard/512/Basic_Dashboard_UI_heart_love_like-512.png'}}
							/>

					</TouchableOpacity>
					<View>
						<Text>{this.props.user.likes} </Text>
					</View>

					<TouchableOpacity
						style={{width:20,height:20,borderRadius:20,margin:4,}}
						onPress={()=>{}}
					>
						<Image
							style={{height:10,flex:1}}
							source={{uri:'https://www.drupal.org/files/issues/comment_6.png'}}
							/>
						</TouchableOpacity>

					</View>

				</View>

				</Card>

		);
	}
}

export class Card extends React.Component {
	render() {
		return (
			<View style={{
				height:170,borderRadius:5,margin:4,}
} >
				{this.props.children}
			</View>

		);
	}
}

export class Header extends React.Component {
	render() {
		return (
			<View style={{height:80,paddingTop:20,backgroundColor: '#ed1a0b',
			}
} >
				{this.props.children}
			</View>

		);
	}
}

const styles = {
	head:{
		flexDirection:'row',
		justifyContent:'space-between',
		margin:4,
	},
	post:{
		flex:1,
		backgroundColor:'#f8f8f8',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	},
	posts:{
		backgroundColor:'#f8f8f8',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	},


}

