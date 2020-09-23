import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    containerInput: {
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        marginVertical: 10,
        marginTop: 10
    },
    input: {
        color: '#fff',
        fontSize: 14,
    },
    item: {
        marginTop: 5,
        height: DEVICE_HEIGHT * 0.07,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#D94444',
        borderRadius: 25,
        height: DEVICE_HEIGHT * 0.07
    },
    text: {
        color: '#fff',
        fontSize: 14,
    },
    textNextPage: {
        color: '#fff',
        fontSize: 14,
    },
    buttonNextPage: {
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    scrollView: {
        marginBottom: 20
    }
});