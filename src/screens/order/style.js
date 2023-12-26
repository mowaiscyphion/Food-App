import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    imageContent: {
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    heading: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    }, text: {
        fontSize: 12,
        color: '#000',
        width: '80%'
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    font: {
        fontSize: 23,
        color: '#000'
    }
})