import React, { useState } from 'react'
import {View, Text, Image,ScrollView, TouchableOpacity, TextInput} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PatientInfoHeader from '../../components/patientInfoHeader'
import PatientInfoButton from '../../components/PatientInfoButton'
import InputandLabel from '../../components/InputandLabel'
import TimeInput from '../../components/TimeInput'
import SmallInputandText from '../../components/SmallInputandText';
import calendar from '../../assets/images/calender_icon.png'
import DatePicker from 'react-native-date-picker'
import styles from './page1styles';

const HospAddress = () => {
    return (
        <View style={styles.anasth_colt_address}>
                       <View style={styles.not_check}>
                       </View >
                       <Text style={styles.address_text}>3100 W. Higgins Rd., Suite 150 
                       Hoffman Estates, IL 60169</Text>
                    </View>
    )
}
const CheckandText = ({text, margin}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={[styles.checkandtext, {marginTop: margin}]}>
                       <CheckBox  disabled={false} value={isSelected}
          onValueChange={(newValue) => setSelection(newValue)} style={[styles.not_check, {marginRight: 20}]}>
                       </CheckBox>
                        <Text style={styles.equipment_text}>{text}</Text>
                    </View>
    )
}
const DateDiv = () => {
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
    const dd = String(date.getDate());
    const mm = String(date.getMonth() + 1);
    const yy= Number(date.getYear())- 100;
    return (
        <>
        <TouchableOpacity style = {styles.dateDiv} onPress={() => setOpen(true)} >
        <Text style={[styles.dateText, {color: dd ? '#181E2B' : "#768097"}]}>{dd}/{mm}/{yy}</Text>
        <Image source={calendar}  style={{width:20, height: 20, resizeMode: 'contain'}} />
     </TouchableOpacity>
     <DatePicker
     modal
     open={open}
     date={date}
     mode='date'
     onConfirm={(date) => {
       setOpen(false)
       setDate(date)
     }}
     onCancel={() => {
       setOpen(false)
     }}
   />
   </>
    )
}

const Anasthesia_collective = () => {
    return (
        <View style={styles.anasthesia_collective}>
        <View style={styles.anasth_colt_header}>
            <Text style={styles.anasth_colt_text}>The Anesthesia Collective</Text>
            <Text style={styles.anasth_colt_text}>Date of Service</Text>
        </View>
         <View style= {{flexDirection: "row",justifyContent: "space-between",
            alignItems: "flex-start",}}>
         <HospAddress/>
           <DateDiv/> 
         </View>
        <HospAddress/>
                </View>
    )
}


 const TimeLabelandDIV = ({label}) => {
    const [date, setDate] = useState(new Date())
    const [inputTime, setInput] =useState(null)
    const [open, setOpen] = useState(false)
    
    return (
        <View style={styles.timelabelanddiv}>
        <Text style={styles.timelabel}>{label}</Text>
           <TimeInput/>
    </View>
    )
}

const AnthsandSurgeryTime = () => {
    return (
        <>
        <View style={[styles.anasth_colt_header, {marginBottom: 10}]}>
                        <TimeLabelandDIV label={"Ansth Start:"}/>
                        <TimeLabelandDIV label={"Ansth End:"}/>
                    </View>
                    <View style={[styles.anasth_colt_header, {marginBottom: 20}]}>
                        <TimeLabelandDIV label={"Surg Start:"}/>
                        <TimeLabelandDIV label={"Surg End:"}/>
                    </View>
                    </>
    )
}

const MultchecksandTitle = ({texts,count, title, margin}) => {
    const listItems = texts.map((item, index) =>  <CheckandText key={index + count} text={item} margin={0}/>);
  return (
    <View style={[styles.multchecksandTitle, {marginTop: margin, marginBottom: 10}]}>
    <Text style={styles.timelabel}>{title}</Text>
    <View style={styles.multchecks}>
      {listItems}
    </View>
</View>
  )
}




const MultInputandText = ({texts, margin}) => {
  return (
    <View style={[styles.multchecksandTitle, {marginTop: margin, marginBottom: 15}]}>
                     <SmallInputandText text={texts[0]} placeholder={'cc'}/>
                     <SmallInputandText text={texts[1]} placeholder={'/min'}/>
                  </View>
  )
}



const PatientinfoContainer = ({ navigation }) => {
  const texts = ["R", "L", "Arm", "Manual", "Auto", "Leg"]
  const texts2 = ["Ao", "ETCQ2", "Temp", "Pulse Ox", "Mask", "Airway", "Oral", "Nasal 6L NE"]
  const texts3 = ["Oral", "Nasal", "Cuff", "Direct", "Fiberoptic", "Blind"]
  const texts4 = ["Ointment", "Tace"]
    return (
        <KeyboardAwareScrollView
      style={styles.ext_container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.ext_container}
    >
        <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
                  <PatientInfoHeader/>    
                  <Anasthesia_collective/>
                  <AnthsandSurgeryTime/>
                  <InputandLabel label= {"Machine"} placeholder={"Enter Machine Name"}/>
                  < CheckandText text= {'Equipment checked'} margin= {16}/>
                  <InputandLabel label= {"Patient Name"} placeholder={"Leslie Alexander"}/>
                  <Text style={[styles.timelabel, {marginTop: 16, marginBottom: 6}]}>Date of Birth</Text>
                  <DateDiv/> 
                  <MultchecksandTitle texts = {texts} count ={0} title={"BP"} margin = {23}/>
                  <MultchecksandTitle texts = {texts2} count ={texts.length} title={""} margin = {30}/>
                  <MultchecksandTitle texts = {texts3} count ={texts.length + texts2.length} title={"ET tube"} margin = {0}/>
                  <Text style={[styles.timelabel, {marginTop: 6, marginBottom: 6}]}>Breath sounds: B/L – Spont</Text>
                  <MultInputandText texts={["IV", "Rate"]} margin = {6}/>
                  <MultchecksandTitle texts = {texts4} count ={texts.length +  texts2.length + texts3.length} title={"Eye"} margin = {0}/>
                  <MultInputandText texts={["Position", "Prone"]} margin = {0}/>
                  <PatientInfoButton btn_text={"Save & Proceed"} width = {186} screenName={"Page2"}/>
        </ScrollView>
        </KeyboardAwareScrollView>
    )
}
 
export default PatientinfoContainer
