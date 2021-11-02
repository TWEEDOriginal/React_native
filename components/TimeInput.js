import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'
import {View, Text,  TouchableOpacity, StyleSheet} from 'react-native'
const TimeInput = () => {
    const [date, setDate] = useState(new Date())
    const [inputTime, setInput] =useState(null)
    const [open, setOpen] = useState(false)
  return (
    <View>
                <TouchableOpacity style = {[styles.dateDiv, styles.timeDiv]}  onPress={() => setOpen(true)}>
        <Text style={[styles.dateText, {color: inputTime ? '#181E2B' : "#768097"}]}>{inputTime ? inputTime : 'Time'}</Text>
        </TouchableOpacity>
        <DatePicker
     modal
     open={open}
     date={date}
     mode='time'
     onConfirm={(date) => {
       setOpen(false)
       setDate(date)
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
       setInput(`${hours}:${minutes} ${ampm}`)
     }}
     onCancel={() => {
       setOpen(false)
     }}
   />
                    </View>
  )
}

const styles = StyleSheet.create({
    dateDiv : {
        borderWidth: 1.5,
        borderStyle:  'solid',borderColor: '#696969',
        borderRadius: 20, flexDirection: "row",justifyContent: "center",
        alignItems: "center",
    },
    timeDiv : {
      width: 90,
      height: 50,
    },
    dateText : {
        fontFamily: "Biryani-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 24,
    color: "#768097",
    marginRight: 5,
    },
    
  });
  
export default TimeInput
