import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

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

const styles = StyleSheet.create({
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
export default CustomTextInput