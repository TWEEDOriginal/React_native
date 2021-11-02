import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export const HeaderComp = ({page, title}) => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <TouchableOpacity style={styles.headerItem} onPress={() => {
            navigation.navigate(page);
        }}>
        <Text style={page === route.name ? styles.thick_header_text : styles.textStyle}>{title}</Text>
        {page === route.name ?  <View style={styles.header_line}></View> : null }
    </TouchableOpacity>
    )
}

const patientInfoHeader = () => {
    return (
        <View style={styles.headerStyle}>
                    <HeaderComp page="Page1" title="Page 1"/>
                    <HeaderComp page="Page2" title="Page 2"/>
                    <HeaderComp page="Page3" title="Page 3"/>
                </View>
    )
}
const styles = StyleSheet.create(
    {
    headerStyle : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '66.7%',
        height: 38, 
        marginTop: 23,
        marginBottom: 29,
    },
    headerItem : {
       justifyContent: "space-between",
    },
    textStyle : {
        fontFamily: "Catamaran-Medium",
        fontStyle: "normal",   
        fontWeight: "500",
        fontSize: 22,
        lineHeight: 36,
        color: "#B1B7C4"
    },
    thick_header_text : {
        fontFamily: "Catamaran-Extrabold",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 22,
        lineHeight: 36,
        color: "#3B4A6B",
    },
    header_line : {
        width: 40,
        borderWidth: 2,
        borderStyle:  'solid',
    borderColor: '#F23557',
    }
});

export default patientInfoHeader
