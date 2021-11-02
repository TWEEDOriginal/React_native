import React, {useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PatientInfoHeader from '../../components/patientInfoHeader'
import Pickee from '../../components/Picker';
import PatientInfoButton from '../../components/PatientInfoButton'
import SmallTextInput from '../../components/SmallTextInput';
import TextArea from '../../components/textArea';
import styles from './page3styles';


const CheckandText = ({text, margin, align}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={[styles.checkandtext, {marginTop: margin, alignItems: align}]}>
                       <CheckBox  disabled={false} value={isSelected}
          onValueChange={(newValue) => setSelection(newValue)} style={[styles.not_check, {marginRight: 20}]}>
                       </CheckBox>
                        <Text style={styles.equipment_text}>{text}</Text>
                    </View>
    )
}

const TextAndCHECK = ({title}) => {
    return (
        <View style={[styles.anasth_colt_header, {width: 221, marginTop: 20}]}>
            <Text style={styles.anasth_colt_text}>{title}</Text>
            < CheckandText text= {'IV Medications'} margin= {0} align={"center"}/>
        </View>
    )
}

const Anasth_record = ({title, width}) => {
    return (
        <View style={[styles.anasth_colt_header, {width: width, marginTop: 20}]}>
            <Text style={styles.anasth_colt_text}>{title}</Text>
            <Pickee/>
        </View>
    )
}

const IndiInputandText = ({text, margin, width, type}) => {
    return (
        <View  style={[styles.anasth_colt_header, {marginTop: margin}]}>
        <Text style={type === 'BOLD' ? styles.anasth_colt_text : styles.equipment_text}>{text}</Text>
        <SmallTextInput placeholder= {'Enter Details'} keyboard={'default'} width = {width}/>
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
        <Anasth_record title={"Regional Type"} width={261}/>
        <Anasth_record title={"Position"} width={261}/>
        <Anasth_record title={"Techniques"} width={261}/>
        <TextAndCHECK title={"Agents"}/>
        <IndiInputandText text={"Extubation"} margin={20} type = {'BOLD'} width = {268}/>
        <Text style={[styles.anasth_colt_text, {marginTop: 20}]}>Recovery Room</Text>
        <IndiInputandText text={"BP"} margin={20} width = {295}/>
        <IndiInputandText text={"Pulse"} margin={20} width = {295}/>
        <IndiInputandText text={"Resp"} margin={20} width = {295}/>
        <IndiInputandText text={"ASA Class"} margin={20} type = {'BOLD'} width = {268}/>
        <Anasth_record title={"DX: circled"} width={221}/>
        <Text style={[styles.anasth_colt_text, {marginTop: 30, marginBottom:10,}]}>Comments</Text>
        <TextArea placeholder= {'Enter Details'} keyboard={'default'} width = {"100%"}/>
        <CheckandText margin={20} text={'Patients was assessed prior to admin of anesthesia'} align={"center"}/>
        <PatientInfoButton btn_text={"Done"} width = {86} screenName={"bp_chart"}/>
        </ScrollView>
        </KeyboardAwareScrollView>
    )
}


export default PatientinfoContainer
