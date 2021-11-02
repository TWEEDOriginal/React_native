import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const SmallTextInput = ({placeholder, keyboard, width}) => {
    const [text, onChangeText] = React.useState(null);
  return (
                    <TextInput style={[styles.smallInput, {width: width}]} onChangeText={onChangeText} keyboardType={keyboard}
        value={text} placeholder={placeholder} />
  )
}

const styles = StyleSheet.create({
smallInput : {
height: 50,
padding: 10,
paddingLeft: 20,
borderWidth: 1.5,
borderStyle:  'solid',
borderColor: '#696969',
color: '#181E2B',
borderRadius: 20,
justifyContent: 'center',
alignItems: "center"
}
  });
  
export default SmallTextInput
