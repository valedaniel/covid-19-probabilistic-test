import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    containerText: {
        marginVertical: 15,
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
    input: {
        color: '#fff',
        fontSize: 15,
    },
    item: {
        marginVertical: 5,
        height: 45
    },
    icon: {
        margin: 10,
        fontSize: DEVICE_WIDTH * 0.065,
        color: '#fff'
    },
    button: {
        marginTop: 10,
        borderRadius: 20
    }
});