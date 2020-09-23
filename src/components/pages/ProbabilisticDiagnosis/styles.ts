import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        marginBottom: 15
    },
    containerCheckbox: {
        marginTop: 7,
        marginBottom: 7
    },
    button: {
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        width: '100%',
        color: '#fff',
    },
});