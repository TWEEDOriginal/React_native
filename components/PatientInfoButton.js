import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity,} from "react-native";

const Button = ({btn_text, screenName, width}) => {
  const navigation = useNavigation();
  
  const onPress = () => 
  {  navigation.navigate(screenName) }

  return (
    
      <TouchableOpacity
        style={[styles.button, {width:width}]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{btn_text}</Text>
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  button: {
      alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B4A6B",
    padding: 10,
    height: 50,
    borderRadius: 20,
    marginBottom: 40,
    marginTop: 10,
  },
  buttonText : {fontFamily: "Biryani-Regular", fontStyle: "normal", fontWeight: "normal",
  fontSize: 16, lineHeight: 28,color: "#FFFFFF",}
  
});

export default Button;