import React from 'react';
import {createStackNavigator} from 'react-navigation';



import IntroductionScreen from './screens/introduction'
import PersonalInformationScreen from './screens/personalInformation'

export default class App extends React.Component{
 render(){
 	return(
	<MyStackNavigator />
	)
	}
}


const MyStackNavigator=createStackNavigator({
 introduction:IntroductionScreen,
 personalInformation:PersonalInformationScreen,
 });

