import React from 'react';
import {StyleSheet, Button,
View,KeyboardAvoidingView,
TouchableOpacity,TextInput,
Text,ScrollView,YellowBox }
from 'react-native';
import { ImagePicker,Constants } from 'expo';
import RadioForm from 'react-native-simple-radio-button';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import firebase from 'firebase';
import _ from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
      _console.warn(message);
        }
	};
var sex_options = [
  {label: 'Male', value: 'Male' },
  {label: 'Female', value: 'Female' }
];

var ethincity_options = [
  {label: 'Hispanic or Latino', value: 'Hispanic or Latino' },
  {label: 'Non-Hispanic or Non-Latino', value: 'Non-Hispanic or Non-Latino' }
];


export default class PersonalInformationScreen extends React.Component{
 static navigationOptions=({navigation})=>({
    headerTitle:"personal Information",
    headerTintColor:'#2dbabc',
  })
  state={
	State:'',
	Age:null,
	Height:null,
	Weight:null,
	Sex:null,
	Ethincity:null,
	Race:null,
	validDetails:true,
  }

 submit=async (user)=>{
 details=this.state
 data={...user,details}
 // Initialize Firebase 
  let config = {
      apiKey: "AIzaSyBjOS6oBipUnSW2vl-o1WfLyIWFipWD1nY",
      authDomain: "project0-bdcd2.firebaseapp.com",
      databaseURL: "https://project0-bdcd2.firebaseio.com",
      projectId: "project0-bdcd2",
      storageBucket: "project0-bdcd2.appspot.com",
      messagingSenderId: "739469829190"
	};
  try{
  await firebase.initializeApp(config);
  await firebase.database().ref(`/users/${user.name}/data`).push(data)
  alert("Data saved succesfully!")
  }catch(err){
  alert(`please check your conection err:${err.message}`)
  }

  }

  onSelect=(value)=>{
    this.setState({Ethincity : value})
 }
 validDetails=()=>{
 if(this.state.Height && this.state.Weight && this.state.State && this.state.Age)
 {
 this.setState({validDetails:false})
 }
 else{
 this.setState({validDetails:true})
 }
 }
 render(){
	return(
      <KeyboardAvoidingView behaviour="padding" style={styles.form}  enable >
	<ScrollView style={styles.container} >
		<View>
			
		<Text style={styles.texts}>Sex</Text>
		
		<RadioForm
			  labelHorizontal={true}
			  formHorizontal={true}
			  buttonColor={'#2dbabc'}
			  radio_props={sex_options}
			  initial={0}
			  buttonSize={5}
			  onPress={(value) => {this.setState({Sex:value})}}
		      />
			
		<Text style={styles.texts}>Ethincity</Text>
		
		<RadioForm
			  labelHorizontal={true}
			  formHorizontal={true}
			  buttonColor={'#2dbabc'}
			  radio_props={ethincity_options}
			  initial={0}
			  buttonSize={5}
			  animation={true}
			  onPress={(value) => {this.setState({Ethincity:value})}}
		  />

		<Text style={styles.texts}>{'Race'}</Text>
		
		<RadioGroup
			  onSelect = {(value) => this.onSelect(value)}
		  >
			 <RadioButton value={"American Indian"} >
				            <Text>American Indian</Text>
			  </RadioButton>
			  <RadioButton value={"Asian"} >
				            <Text>Asian</Text>
			  </RadioButton>
		  
			  <RadioButton value={'Native Hawaiian or Other Pacific Islander'} >
				            <Text>Native Hawaiian or Other Pacific Islander</Text>
			  </RadioButton>
		  
			  <RadioButton value={'Black or African American'} >
				            <Text>Black or African American</Text>
			  </RadioButton>
		  
			  <RadioButton value={"White"} >
				            <Text>White</Text>
			  </RadioButton>
		 </RadioGroup>
		</View>
		 <View>      
		<Text style={styles.texts}>State </Text>
		<TextInput 
			
			style={styles.input}
			onChangeText={(value)=>this.setState({State:value},this.validDetails)}
			value={this.state.State}
			placeholder='State'
			blurOnSubmit={true}
		/>

		<Text style={styles.texts}>Age </Text>
		
		<TextInput 
			
			style={styles.input}
			onChangeText={(value)=>this.setState({Age:value},this.validDetails)}
			value={this.state.Age}
			placeholder='Age'
			keyboardType='numeric'
			blurOnSubmit={true}
		/>
	       <Text style={styles.texts}>Height</Text>
		
		<TextInput 
			
			style={styles.input}
			onChangeText={(value)=>this.setState({Height:value},this.validDetails)}
			value={this.state.Height}
			placeholder='Height in inches'
			keyboardType='numeric'
			blurOnSubmit={true}
		/>

			<Text style={styles.texts}>Weight </Text>
		<TextInput 
			
			style={styles.input}
			onChangeText={(value)=>this.setState({Weight:value},this.validDetails)}
			value={this.state.Weight}
			placeholder='Weight in pounds'
			keyboardType='numeric'
			blurOnSubmit={true}
		/>
		
		<Button title='Proceed' onPress={()=>this.submit(this.props.navigation.getParam('user'))} color='#2dbabc' disabled={this.state.validDetails}/>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
	)
	}
}

const styles=StyleSheet.create({
  texts:{
    //textAlign: 'center',
    color:'#000f0f',
    fontSize:18,
    },
    container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
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
   form: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
