import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        ext_container : {backgroundColor: "#E5E5E5"},
        container : { alignSelf: 'center', width: '88.3%'
    },
    anasth_colt_header : {
        flexDirection: "row",justifyContent: "space-between",
        alignItems: "center",
    },
    anasth_colt_text : {
        fontFamily: 'Biryani-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 25,
    color: "#181E2B"
    },
    checkandtext : {flexDirection: "row",justifyContent: "flex-start"},
    equipment_text : {
    fontFamily: "Biryani-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 26,
    color: "#181E2B",flex: 1, flexWrap: 'wrap',
    }, not_check : {
        width: 15,
        height: 15,
        borderWidth: 1.5,
        borderStyle:  'solid',
        borderColor: '#3B4A6B',
    }
});