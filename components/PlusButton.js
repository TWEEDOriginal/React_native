import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity,} from "react-native";
import plusSign from '../assets/images/plus_Sign.png'

const Button = () => {
  return (
    
      <TouchableOpacity
        style={styles.button}
      >
        <Image source={plusSign}  style={{width:24, height: 24, resizeMode: 'contain'}} />
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  button: {
      alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 39,
    borderRadius: 10,
    borderWidth: 1.5,
    borderStyle:  'solid',
    borderColor: '#696969',
  },
  
});

export default Button;