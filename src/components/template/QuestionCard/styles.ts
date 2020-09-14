import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    text: {
        color: '#fff',
        textAlign: 'center',
        width: '100%',
    },
    container: {
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        marginTop: 20
    },
    containerText: {
        backgroundColor: '#DADADA',
        padding: 10,
        borderRadius: 10
    },
    textQuestion: {
        textAlign: 'center',
        color: '#202428'
    },
    row: {
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        backgroundColor: '#6C757D',
        width: '40%',
        borderRadius: 10,
        height: 35
    }
});