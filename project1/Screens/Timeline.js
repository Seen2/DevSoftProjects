import React from 'react';
import { Text, FlatList,Image,View } from 'react-native';
import expo from 'expo';

import Post from './Post';
import Users from './Data';


export default class Timeline extends React.Component {
	render() {

		return (
			<View style={{flex:1,}}>
			<View style={styls.post}>
				<Text style={{fontSize:25,alignSelf:'center'}}>TIMELINE </Text>
			</View>
				<FlatList
					data={Users}
					renderItem={({item}) => <Post user={item}/>}
				/>
			</View>

		);
	}
}
styls={
post:{
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
//{Users.map(user=><Post key={user.key} user={user}/>)}
