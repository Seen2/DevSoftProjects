import React from 'react';
import {StyleSheet, Button, Image, View,KeyboardAvoidingView,TouchableOpacity,TextInput,Text } from 'react-native';
import { ImagePicker } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class IntroductionScreen extends React.Component {
  static navigationOptions=({navigation})=>({
    headerTitle:"Introduction",
    headerTintColor:'#2dbabc',
  })
  
  state = {
      name:'',
      image: null,
      description:'',
      imgUpload:'false',
      validIntro:true,
	};
  validIntro=()=>{
  if(this.state.name.length<=4 || this.state.description.length<=10){
  this.setState({validIntro:true})
  
  }
  else{
  this.setState({validIntro:false})
  }
  }
  nameChange= name =>this.setState({name},this.validIntro)
  descriptionChange= description =>this.setState({description},this.validIntro)


  render() {
     let { image } = this.state;

	 return (
			<KeyboardAvoidingView   behaviour="padding" enable >
			<View style={{flexDirection:'row',}}>
			<TouchableOpacity style={styles.img} onPress={this.pickImage}>
			{!image?<Ionicons
				
				name={`ios-person-add${false ? "" : "-outline"}`}
				size={50}
				color="#2dbabc"
			/>
			: <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
			</TouchableOpacity>
			<View  style={{flex:1}}>
			<Text style={styles.texts}>Your name </Text>
			<TextInput
					style={styles.input}
					onChangeText={this.nameChange}
					value={this.state.name}
					placeholder='Name'
				/>
			</View>
			</View>
			<View>	
				<Text style={styles.texts}>{'\nWrite a short description'}</Text>

				<TextInput
					style={{height:60, borderColor: '#2dbabc', borderWidth: 1}}
					onChangeText={this.descriptionChange}
					value={this.state.description}
					placeholder='May be you can write about your goal and motivation'
					multiline={true}
				/>
			</View>


			  <Button 
				title='proceed' 
				onPress={()=>this.props.navigation.navigate('personalInformation',{user:this.state})}
				color='#2dbabc'
				disabled={this.state.validIntro}
			/>
       			</KeyboardAvoidingView>
		);

		}

   pickImage = async () => {
   let result = await ImagePicker.launchImageLibraryAsync({
   allowsEditing: true,	
   aspect: [4, 3],
   });	
   if (!result.cancelled) {

	this.setState({ image: result.uri });
	this.setState({imgUpload:true})
	}
	
	};

}

const styles=StyleSheet.create({
img: {
	height:80,
	width:80
   
	},
  texts:{
    //textAlign: 'center',
    color:'#000f0f',
    fontSize:18,
    },
     
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
    form:{
    justifyContent:'flex-start',
    },
})
