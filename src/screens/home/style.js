
import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    textStyle: {
        fontSize: 22,
        color: '#000000',
        textAlign: 'right'
    },
    tinyLogo: {
        width: 70,
        height: 70,
    },
    input: {
        paddingStart: 40,
        backgroundColor: '#D6FFD9',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
    },
    rowClass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    images: {
        height: '100%',
        width: '100%',
        objectFit: 'contain'
    },
    imageSec: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10
    },
    srchIcon: {
        position: 'absolute',
        zIndex: 100,
        top: 19,
        left: 20
    }
});
