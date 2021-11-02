import React, { useState } from 'react'
import {View} from 'react-native'
import {Picker} from '@react-native-picker/picker';
const Pickee = () => {
    const [selectedValue, setSelectedValue] = useState("Select One");
    return (
      <View style={{ borderWidth: 1.5,
        borderStyle:  'solid',
        borderColor: '#768097',
        borderRadius: 20,height: 40, width: 141, justifyContent: "center",
        alignItems: "center",   }}>
      <Picker
        selectedValue={selectedValue}
        style={{ width: 141,
            height: 40,}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        ItemStyle={{fontFamily: "Biryani-Regular",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 15,
          lineHeight: 26,
          color: "#768097",
          backgroundColor: "brown"
          }}
      >
        <Picker.Item label="Select One" value="Select One" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
    )
}

export default Pickee
