import React from 'react'
import {View, Text, Image, StyleSheet,  Dimensions} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LogoImg from '../assets/images/logo-image.png'
import CustomTextInput  from '../components/TextInput';
import Button from '../components/Button';

const Section = ({children, style}) => {
  return (
    <View style={style}>
      {children}
    </View>
  );
};

const InputandLabel = () => {
  return (
    <View> 
    <Text style={styles.LabelStyle}>Registration ID</Text>
  <CustomTextInput placeholder={'Enter registeration ID'} ispassword = {false}/>
  </View>
  );
};
const PasswordandLabels = () => {
  return (
    <View> 
    <View style={styles.flex_row}><Text style={styles.LabelStyle}>Password</Text><Text style={styles.blueLabel}>Forgot Password?</Text></View>
    <CustomTextInput placeholder={'Password'} ispassword = {true}/>
  </View>
  );
};


const Login = ({navigation}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
      <Section style={styles.logo}><Image style={styles.LogoImg}
        source={LogoImg}/></Section>
      <Section style={styles.login}>
       <InputandLabel/>
        <PasswordandLabels/>
        <View style={styles.logButton}>
        <Button screenName= {"PatientInfo"} btn_text={"Login"} />
        </View>
      </Section>
      <Section style={styles.register}><Text style={styles.reg_text}>New user?  <Text style={styles.underline} onPress={() => navigation.navigate('Register')}> REGISTER</Text></Text></Section>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
       container : {
       backgroundColor: "#E5E5E5", alignSelf: 'center', justifyContent: "center", alignItems:'center', height: Dimensions.get('window').height - 19, width: '100%'
       },
       logo : {
         flex: 1, width: '100%',justifyContent: "center", alignItems:'center',
       },
       login : {
          flex: 1, width: '88.3%', justifyContent: 'space-between'
       },
       register : {
         flex: 1, width: '100%', justifyContent: "flex-end", alignItems:'center',
        
       },
       reg_text : {
        backgroundColor: "#3B4A6B", fontFamily: "Biryani-Bold", textAlign: 'center', fontStyle: 'normal', fontWeight: "bold", fontSize: 14, lineHeight: 25, color: 'white', height: 38, width: '100%'
       },
       underline: {textDecorationLine: 'underline'},
       LogoImg : {width: 250, height: 40.36, },
       LabelStyle : {height : 25, fontFamily: "Biryani-Bold", fontStyle: "normal", fontWeight: "bold",
      fontSize: 14, lineHeight: 25,color: "#181E2B",},
      blueLabel : {height : 25, fontFamily: "Biryani-Bold", fontStyle: "normal", fontWeight: "bold",
      fontSize: 14, lineHeight: 25,color: "#22B2DA",},
      flex_row : {
        flexDirection: "row", width: "100%",justifyContent: 'space-between', alignItems: "center"
      },
      logButton : {
        flexDirection: "row", width: "100%",justifyContent: 'flex-end', alignItems: "center"
      },
});

export default Login
