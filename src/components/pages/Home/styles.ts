import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    containerText: {
        marginBottom: 15,
        width: DEVICE_WIDTH * 0.6,
        alignSelf: 'center'
    },
    containerInput: {
        width: DEVICE_WIDTH * 0.85,
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#fff'
    },
    button: {
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 10
    }
});