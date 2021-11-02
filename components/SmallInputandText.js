import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
const SmallInputandText = (props) => {
    const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.timelabelanddiv}>
                    <Text style={[styles.equipment_text, {marginRight: 10}]}>{props.text}</Text>
                    <TextInput style={styles.smallInput} onChangeText={onChangeText} keyboardType='numeric'
        value={text} placeholder={props.placeholder} />
                    </View>
  )
}

const styles = StyleSheet.create({
    timelabelanddiv : {
        flexDirection: "row",justifyContent: "space-between",
        alignItems: "center"
    },equipment_text : {
        fontFamily: "Biryani-Regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 26,
        color: "#181E2B",
        },
        
smallInput : {
    width: 90,
height: 50,
padding: 10,
paddingLeft: 20,
borderWidth: 1.5,
borderStyle:  'solid',
borderColor: '#696969',
borderRadius: 20,
justifyContent: 'center',
alignItems: "center"
}
  });
  
export default SmallInputandText
