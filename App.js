import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Login from './containers/Login';
import Register from './containers/Register';
import PatientInfo from './containers/PatientInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const App = () => {
  const loggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Stack.Screen name="PatientInfo" component={PatientInfo} />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App
