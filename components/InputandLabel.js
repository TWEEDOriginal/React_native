import React from 'react'
import {SafeAreaView, View, Text, StyleSheet,TextInput } from 'react-native'

const CustomTextInput = (props) => {
    const [text, onChangeText] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          secureTextEntry={props.ispassword}
          placeholder={props.placeholder}
        />
      </SafeAreaView>
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

  const styles = StyleSheet.create({
    LabelStyle : {height : 25, fontFamily: "Biryani-Bold", fontStyle: "normal", fontWeight: "bold",
   fontSize: 14, lineHeight: 25,color: "#181E2B",},
   input: {
    height: 55,
    width: "100%",
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#696969',
    borderRadius: 20,
    backgroundColor: "#E5E5E5",
    fontFamily: "Biryani-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 26,
    color: 'black',
  },
});

export default InputandLabel
