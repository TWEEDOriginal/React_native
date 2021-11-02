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

const InputandLabel = ({label, placeholder}) => {
  return (
    <View> 
    <Text style={styles.LabelStyle}>{label}</Text>
  <CustomTextInput placeholder={placeholder} ispassword = {false}/>
  </View>
  );
};
const PasswordandLabels = ({label}) => {
  return (
    <View> 
    <Text style={styles.LabelStyle}>{label}</Text>
    <CustomTextInput placeholder={'Password'} ispassword = {true}/>
  </View>
  );
};


const Register = ({navigation}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Section style={styles.logo}><Image style={styles.LogoImg}
        source={LogoImg}/></Section>
      <Section style={styles.Register}>
       <InputandLabel label={'Name'} placeholder={'Enter full name'}/>
       <InputandLabel label={'Registration ID'} placeholder={'Enter registeration ID'}/>
       <PasswordandLabels label={'Password'}/>
        <PasswordandLabels label={'Confirm Password'}/>
        <View style={styles.logButton}>
        <Button screenName= {"PatientInfo"} btn_text={"Register"} />
        </View>
      </Section>
      <Section style={styles.register}><Text style={styles.reg_text}>Already have an account? <Text style={styles.underline} onPress={() => navigation.navigate('Login')}>LOGIN</Text></Text></Section>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
       container : {alignSelf: 'center', justifyContent: "center", alignItems:'center', height: Dimensions.get('window').height -19, width: '100%'
       },
       logo : {flex: 1, width: '100%',justifyContent: "center", alignItems:'center',
       },
       Register : {flex: 3, width: '88.3%', justifyContent: 'space-between'
       },
       register : { flex: 1, width: '100%', justifyContent: "flex-end", alignItems:'center',
        
       },
       reg_text : {
        backgroundColor: "#3B4A6B", fontFamily: "Biryani-Bold", textAlign: 'center', fontStyle: 'normal', fontWeight: "bold", fontSize: 14, lineHeight: 25, color: 'white', height: 38, width: '100%'
       },
       underline: {textDecorationLine: 'underline'},
       LogoImg : {width: 250, height: 40.36, },
       LabelStyle : {height : 25, fontFamily: "Biryani-Bold", fontStyle: "normal", fontWeight: "bold",
      fontSize: 14, lineHeight: 25,color: "#181E2B",},
      logButton : {
        flexDirection: "row", width: "100%",justifyContent: 'flex-end', alignItems: "center"
      },
});

export default Register
