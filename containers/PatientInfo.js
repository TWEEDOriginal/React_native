import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './PatientInfopages/page1'
import Page2 from './PatientInfopages/page2'
import Page3 from './PatientInfopages/page3'
import patient_info_focus from '../assets/images/patient-info-focus.png'
import patient_info_not_focus from '../assets/images/patient-info-not-focus.png'
import focus_bp_chart_tab_icon from '../assets/images/focus-bp-chart-tab-icon.png'
import bp_chart_tab_icon from '../assets/images/bp-chart-tab-icon.png'
import focus_patients_tab_icon from '../assets/images/focus-patients-tab-icon.png'
import patients_tab_icon from '../assets/images/patients-tab-icon.png'
import focus_user_tab_icon from '../assets/images/focus-user-tab-icon.png'
import user_tab_icon from '../assets/images/user-tab-icon.png'


const PatientInfoStack = createNativeStackNavigator();

function PatientInfoScreen() {
    return (
        <PatientInfoStack.Navigator screenOptions={{headerShown: false, }} >
            <PatientInfoStack.Screen name="Page1" component={Page1}/>
            <PatientInfoStack.Screen name="Page2" component={Page2}/>
            <PatientInfoStack.Screen name="Page3" component={Page3}/>
        </PatientInfoStack.Navigator>
      
    );
  }
  
  function bp_chartScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>bp_chart!</Text>
      </View>
    );
  }
  function PatientsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Patients!</Text>
      </View>
    );
  }
  function DoctordetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Doctordetails!</Text>
      </View>
    );
  }
  
const Tab = createBottomTabNavigator();

const PatientInfo = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false,tabBarShowLabel: false, tabBarHideOnKeyboard: true,
            tabBarStyle : {
                height: 60,
                width: "100%"
           } }} >
          <Tab.Screen name="PatientInfoScreen" component={PatientInfoScreen} 
          options = {{
              tabBarIcon: ({focused}) => {
                const image = focused
                ? patient_info_focus
                : patient_info_not_focus
                return (
                    <View style={focused ? styles.focus_circle : styles.no_focus_circle}>
                    <Image source={image}  style={styles.patient_inf_img} />
                    </View>
                    
                )
                
              }
          }}/>
          <Tab.Screen name="bp_chart" component={bp_chartScreen} options = {{
              tabBarIcon: ({focused}) => {
                const image = focused
                ? focus_bp_chart_tab_icon
                : bp_chart_tab_icon
                return (
                    <View style={focused ? styles.focus_circle : styles.no_focus_circle}>
                    <Image source={image}  style={styles.patient_inf_img} />
                    </View>
                    
                )
                
              }
          }}/>
          <Tab.Screen name="Patients" component={PatientsScreen}options = {{
              tabBarIcon: ({focused}) => {
                const image = focused
                ? focus_patients_tab_icon
                : patients_tab_icon
                return (
                    <View style={focused ? styles.focus_circle : styles.no_focus_circle}>
                    <Image source={image}  style={styles.patient_inf_img} />
                    </View>
                    
                )
                
              }
          }} />
          <Tab.Screen name="Doctordetails" component={DoctordetailsScreen} options = {{
              tabBarIcon: ({focused}) => {
                const image = focused
                ? focus_user_tab_icon
                : user_tab_icon
                return (
                    <View style={focused ? styles.focus_circle : styles.no_focus_circle}>
                    <Image source={image}  style={styles.patient_inf_img} />
                    </View>
                    
                )
                
              }
          }} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    focus_circle: {backgroundColor: "rgb(59,74,107)", justifyContent: 'center', alignItems: 'center',width: 35,
    height: 35, borderRadius: 17.5 },
    no_focus_circle: {backgroundColor: "FFFFFF" , justifyContent: 'center', alignItems: 'center',width: 35,
    height: 35, borderRadius: 35/2 },
    patient_inf_img : {width: 20,
        height: 16}
});

export default PatientInfo
