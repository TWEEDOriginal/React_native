import React from 'react'
import {View, Text,ScrollView} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PatientInfoHeader from '../../components/patientInfoHeader'
import styles from './Page2styles';
import Pickee from '../../components/Picker';
import TimeInput from '../../components/TimeInput'
import SmallTextInput from '../../components/SmallTextInput';
import PlusButton from '../../components/PlusButton'
import PatientInfoButton from '../../components/PatientInfoButton'

const Page2content = () => {
    const texts = [{title: "Propofol", dosage: "mg"}, {title: "Midazolam", dosage: "mg"},
     {title: "Fentanyl", dosage: "mg"}, {title: "Ondansetron", dosage: "mg"}, 
    {title: "Metoclopramide", dosage: "mg"}, {title: "Oxygen", dosage: "litres"}]
    const texts2 = [{title: "Given", dosage: "ml"}, {title: "Minimal (0-5ml)", dosage: "ml"}, 
    {title: "Urine Output", dosage: "ml"}]
    const texts3 = [{title: "EKG", dosage: "ml"},{title:  "Temperature", dosage: "F"},
    {title:  "FiO2", dosage: "ml"}, {title: "SeO2", dosage: "ml"}, 
    {title: "ETCO2", dosage: "ml"}, {title: "BI3", dosage: "ml"}]
    return (
        <View>
            <Text style={[styles.timelabel, { marginTop: 16, marginBottom: 6}]}>{"AGENTS & ADJUNCTS"}</Text>
              <MultinputsandTitle texts = {texts} count ={0}/>
              <Text style={[styles.timelabel, { marginTop: 16, marginBottom: 6}]}>FLUIDS</Text>
              <MultinputsandTitle texts = {texts2} count ={texts.length}/>
              <Text style={[styles.timelabel, { marginTop: 16, marginBottom: 6}]}>MONITORS</Text>
              <MultinputsandTitle texts = {texts3} count ={texts.length + texts2.length}/>
        </View>
    )
}

const IndiInputsandText = ({text, margin,dosage}) => {
    return (
        <View  style={[styles.anasth_colt_header, {marginBottom: margin}]}>
        <Text style={styles.anasth_colt_text}>{text}</Text>
        <View style={[styles.mult_input, styles.anasth_colt_header]}>
          <SmallTextInput placeholder= {dosage} keyboard={'numeric'} width = {90}/>
          <TimeInput/>
          <PlusButton/>
        </View>
    </View>
    )
}

const MultinputsandTitle = ({texts,count}) => {
    const listItems = texts.map((item, index) =>  <IndiInputsandText key={index + count} 
    text={item.title} dosage= {item.dosage} margin={12}/>); 
  return (
    <View >
       {listItems}
    </View>
  )
}

const Anasth_record = () => {
    return (
        <View style={styles.anasth_colt_header}>
            <Text style={styles.anasth_colt_text}>The Anesthesia Record</Text>
            <Pickee/>
        </View>
    )
}


const PatientinfoContainer = ({ navigation }) => {
    
    return (
        <KeyboardAwareScrollView
        style={styles.ext_container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.ext_container}
      >
          <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
        <PatientInfoHeader/>    
              <Anasth_record/>
              <Page2content/>
              <PatientInfoButton btn_text={"Save & Proceed"} width = {186} screenName={"Page3"}/>
            </ScrollView>
        </KeyboardAwareScrollView>
    )
}


export default PatientinfoContainer
