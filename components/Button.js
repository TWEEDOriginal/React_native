import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";

const Button = ({btn_text, screenName}) => {
  const navigation = useNavigation();
  
  const onPress = () => 
  {  navigation.navigate(screenName) }

  return (
    
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{btn_text}</Text>
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B4A6B",
    padding: 10,
    width: 120,
    height: 50,
    borderRadius: 20,
  },
  buttonText : {fontFamily: "Biryani-Regular", fontStyle: "normal", fontWeight: "normal",
  fontSize: 16, lineHeight: 28,color: "#FFFFFF",}
  
});

export default Button;