import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const TextArea = ({placeholder, keyboard, width}) => {
    const [text, onChangeText] = React.useState(null);
  return (
                    <TextInput style={[styles.smallInput, {width: width}]} onChangeText={onChangeText} keyboardType={keyboard}
        value={text} placeholder={placeholder} multiline={true}
        numberOfLines={4}/>
  )
}

const styles = StyleSheet.create({
smallInput : {
height: 138,
padding: 10,
paddingLeft: 20,
borderWidth: 1.5,
borderStyle:  'solid',
borderColor: '#696969',
color: '#181E2B',
borderRadius: 20,
textAlignVertical: 'top'
}
  });
  
export default TextArea
